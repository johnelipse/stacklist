"use server";

import { SelectProps } from "@/components/dialogs/edit-dialog";
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

export async function updateProduct(data: SelectProps, id: string) {
  const api = `${baseUrl}/api/products/${id}`;
  try {
    await fetch(api, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function DeleteProduct(id: string) {
  const api = `${baseUrl}/api/products/${id}`;
  try {
    await fetch(api, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
}
