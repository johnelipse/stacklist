"use client";

import { useState } from "react";
import type { Stack } from "@prisma/client";
import StackDialog from "./dialogs/stack-dialog";
import HeaderControls from "./stack-components/header-controllers";
import WelcomeContent from "./stack-components/welcome-content";
import StackGrid from "./stack-components/stack-grid";
import StackList from "./stack-components/stack-list";

// Sample stacks for preview (remove this in production)
const sampleStacks: Stack[] = [
  {
    id: "3",
    title: "Project Ideas",
    notes: "Future project concepts and notes",
    image: "/what",
    // isPublic: false,
    userId: "user1",
    createdAt: new Date(),
    updatedAt: new Date(),
    // items: Array(2).fill(null),
  },
  {
    id: "3",
    title: "Project Ideas",
    notes: "Future project concepts and notes",
    image: "/what",
    // isPublic: false,
    userId: "user1",
    createdAt: new Date(),
    updatedAt: new Date(),
    // items: Array(2).fill(null),
  },
  {
    id: "3",
    title: "Project Ideas",
    notes: "Future project concepts and notes",
    image: "/what",
    // isPublic: false,
    userId: "user1",
    createdAt: new Date(),
    updatedAt: new Date(),
    // items: Array(2).fill(null),
  },
  {
    id: "3",
    title: "Project Ideas",
    notes: "Future project concepts and notes",
    image: "/what",
    // isPublic: false,
    userId: "user1",
    createdAt: new Date(),
    updatedAt: new Date(),
    // items: Array(2).fill(null),
  },
];

export default function StackPage({ stacks }: { stacks: Stack[] }) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Use provided stacks or sample stacks if none provided
  const displayStacks = stacks?.length ? stacks : sampleStacks;

  return (
    <div className="min-h-screen bg-white p-6">
      <HeaderControls
        viewMode={viewMode}
        setViewMode={setViewMode}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      {!stacks || stacks.length === 0 ? (
        <WelcomeContent />
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Your Stacks</h1>
            <StackDialog />
          </div>

          {viewMode === "grid" ? (
            <StackGrid stacks={displayStacks} />
          ) : (
            <StackList stacks={displayStacks} />
          )}
        </>
      )}
    </div>
  );
}
