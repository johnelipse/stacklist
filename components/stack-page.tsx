"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, ChevronDown, LayoutGrid, List, Sparkles } from "lucide-react";

export default function StackPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Header Controls */}
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
          onClick={() => {}}
        >
          <ChevronDown className="h-4 w-4 mr-1" />
          Collapse All
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

      {/* Welcome Content */}
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h1 className="text-2xl font-semibold mb-2">Welcome to Stacklist</h1>
        <p className="text-gray-600 mb-8">
          Start saving, organizing, and sharing your
          <br />
          favorite things in just three simple steps!
        </p>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-white rounded-xl border p-6 text-left">
            <h2 className="font-semibold mb-2">
              Step 1: Create Your First Card
            </h2>
            <p className="text-gray-600 mb-4 text-sm">
              Start organizing your favorite links with personalized notes,
              making them easy to find and share.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Create Card
            </Button>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl border p-6 text-left">
            <h2 className="font-semibold mb-2">Step 2: Get the Apps</h2>
            <p className="text-gray-600 mb-4 text-sm">
              Access and manage all your favorites seamlessly, whether you{"'"}
              re at home or on the move.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Download Apps
            </Button>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl border p-6 text-left">
            <h2 className="font-semibold mb-2">Step 3: Discover the Network</h2>
            <p className="text-gray-600 mb-4 text-sm">
              Discover curated collections from the Stacklist community, find
              new favorites, and start saving them directly to your account!
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Sparkles className="h-4 w-4 mr-2" />
              Discover
            </Button>
          </div>
        </div>
      </div>

      {/* Background Placeholders */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* <div className="absolute z-0 top-20 left-4 w-72 h-32 bg-gray-50 rounded-lg"></div>
        <div className="absolute z-0 top-60 left-4 w-72 h-32 bg-gray-50 rounded-lg"></div>
        <div className="absolute z-0 top-20 right-4 w-72 h-32 bg-gray-50 rounded-lg"></div>
        <div className="absolute z-0 top-60 right-4 w-72 h-32 bg-gray-50 rounded-lg"></div> */}
      </div>
    </div>
  );
}
