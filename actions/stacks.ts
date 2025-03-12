"use server";

import { SelectProps } from "@/components/dialogs/edit-dialog";
import { Stack } from "@prisma/client";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const api = `${baseUrl}/api/stacks`;

export async function getAllStacks() {
  try {
    const res = await fetch(api, { cache: "no-store" });
    const stacks = await res.json();
    return stacks.data as Stack[];
  } catch (error) {
    console.log(error);
    return [];
  }
}
