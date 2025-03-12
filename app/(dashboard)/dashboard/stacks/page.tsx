import { getAllStacks } from "@/actions/stacks";
import StackPage from "@/components/stack-page";
import React from "react";

export default async function page() {
  const stacks = await getAllStacks();
  return (
    <div>
      <StackPage stacks={stacks} />
    </div>
  );
}
