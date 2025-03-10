"use server";
import { Card } from "@prisma/client";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const api = `${baseUrl}/api/products`;

export async function getAllProducts() {
  try {
    const res = await fetch(api, { cache: "no-store" });
    const products = await res.json();
    return products.data as Card[];
  } catch (error) {
    console.log(error);
    return [];
  }
}
