import { getAllProducts } from "@/actions/products";
import Home from "@/components/home2";
import React from "react";

export default async function page() {
  const products = await getAllProducts();
  return (
    <div>
      <Home products={products} />
    </div>
  );
}
