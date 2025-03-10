import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { url, title, price, imageUrl } = data;
  try {
    const createdProduct = await db.card.create({
      data: { url: url, title: title, price: price, imageUrl: imageUrl },
    });
    return NextResponse.json(
      {
        data: createdProduct,
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
    const products = await db.card.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(
      {
        data: products,
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
