import { getAllProducts } from "@/actions/products";
import { getAllStacks } from "@/actions/stacks";
import Home from "@/components/home2";
import React from "react";

export default async function page() {
  const products = await getAllProducts();
  const stacks = await getAllStacks();
  return (
    <div>
      <Home products={products} stacks={stacks} />
    </div>
  );
}
