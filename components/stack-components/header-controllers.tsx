"use client";

import type { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, ChevronDown, LayoutGrid, List } from "lucide-react";

interface HeaderControlsProps {
  viewMode: "grid" | "list";
  setViewMode: Dispatch<SetStateAction<"grid" | "list">>;
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
}

export default function HeaderControls({
  viewMode,
  setViewMode,
  isCollapsed,
  setIsCollapsed,
}: HeaderControlsProps) {
  return (
    <div className="flex flex-wrap gap-3 z-30 mb-8">
      <Select defaultValue="recent">
        <SelectTrigger className="w-[140px] bg-white border text-sm">
          <div className="flex items-center">
            Sort by:
            <SelectValue placeholder="Recent" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="recent">Recent</SelectItem>
          <SelectItem value="name">Name</SelectItem>
          <SelectItem value="date">Date</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="all">
        <SelectTrigger className="w-[140px] bg-white border text-sm">
          <div className="flex items-center">
            Filter by:
            <SelectValue placeholder="All Stacks" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Stacks</SelectItem>
          <SelectItem value="personal">Personal</SelectItem>
          <SelectItem value="shared">Shared</SelectItem>
        </SelectContent>
      </Select>

      <Button
        variant="outline"
        className="text-sm font-normal"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <ChevronDown className="h-4 w-4 mr-1" />
        {isCollapsed ? "Expand All" : "Collapse All"}
      </Button>

      <div className="relative flex-grow max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="search"
          placeholder="Search Stacks"
          className="w-full pl-10 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex gap-1 ml-auto">
        <Button
          variant={viewMode === "grid" ? "secondary" : "ghost"}
          size="icon"
          onClick={() => setViewMode("grid")}
          className="h-10 w-10"
        >
          <LayoutGrid className="h-4 w-4" />
        </Button>
        <Button
          variant={viewMode === "list" ? "secondary" : "ghost"}
          size="icon"
          onClick={() => setViewMode("list")}
          className="h-10 w-10"
        >
          <List className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
