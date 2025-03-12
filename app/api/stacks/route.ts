import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { title, notes } = data;
  try {
    const createdStack = await db.stack.create({
      data: {
        title: title,
        notes: notes,
      },
    });
    return NextResponse.json(
      {
        data: createdStack,
        message: "created",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "failed",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const stacks = await db.stack.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(
      {
        data: stacks,
        message: "fetched",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "failed",
      },
      { status: 500 }
    );
  }
}
