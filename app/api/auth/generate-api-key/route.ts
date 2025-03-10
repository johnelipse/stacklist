import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "@/prisma/db";
import { generateApiKey } from "@/lib/apikey-generation";
import { authOptions } from "@/config/auth";

export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const existingKey = await db.apiKey.findUnique({
    where: { userId: session.user.id },
  });

  if (existingKey) {
    return NextResponse.json(
      { message: "API Key already exists" },
      { status: 400 }
    );
  }

  const apiKey = generateApiKey();
  const newApiKey = await db.apiKey.create({
    data: {
      userId: session.user.id,
      key: apiKey,
    },
  });

  return NextResponse.json({ apiKey: newApiKey.key }, { status: 201 });
}
