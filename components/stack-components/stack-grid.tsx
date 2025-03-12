import type { Stack } from "@prisma/client";
import StackCard from "./stack-card";

interface StackGridProps {
  stacks: Stack[];
}

export default function StackGrid({ stacks }: StackGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {stacks.map((stack) => (
        <StackCard key={stack.id} stack={stack} />
      ))}
    </div>
  );
}
