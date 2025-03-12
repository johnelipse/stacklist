import type { Stack } from "@prisma/client";
import StackRow from "./stack-raw";

interface StackListProps {
  stacks: Stack[];
}

export default function StackList({ stacks }: StackListProps) {
  return (
    <div className="space-y-2">
      {stacks.map((stack) => (
        <StackRow key={stack.id} stack={stack} />
      ))}
    </div>
  );
}
