import type { Stack } from "@prisma/client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar, ExternalLink, MoreHorizontal, Star } from "lucide-react";

interface StackRowProps {
  stack: Stack;
}

export default function StackRow({ stack }: StackRowProps) {
  return (
    <div className="flex items-center border rounded-lg p-4 mb-3 hover:bg-gray-50 transition-colors">
      <div className="flex-grow">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">{stack.title}</h3>
          {/* {stack.isPublic ? (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Public
            </Badge>
          ) : (
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              Private
            </Badge>
          )} */}
        </div>
        <p className="text-sm text-gray-500 mt-1">
          {stack.notes || "No description provided"}
        </p>
        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {new Date(stack.createdAt).toLocaleDateString()}
          </span>
          {/* <span className="flex items-center gap-1">
            <Link2 className="h-3 w-3" />
            {stack.items?.length || 0} items
          </span>
          <span className="flex items-center gap-1">
            <User2 className="h-3 w-3" />
            {stack.userId}
          </span> */}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm">
          <Star className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <ExternalLink className="h-4 w-4" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Share</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
