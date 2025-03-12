import type { Stack } from "@prisma/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar, User2, ExternalLink, MoreHorizontal } from "lucide-react";

interface StackCardProps {
  stack: Stack;
}

export default function StackCard({ stack }: StackCardProps) {
  return (
    <Card className="h-full transition-all duration-200 hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">{stack.title}</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
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
        <CardDescription className="text-sm text-gray-500 flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {new Date(stack.createdAt).toLocaleDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-3">
          {stack.notes || "No description provided"}
        </p>
        {/* <div className="flex flex-wrap gap-1 mb-3">
          {stack.isPublic ? (
            <Badge
              variant="outline"
              className="bg-green-50 text-green-700 border-green-200"
            >
              Public
            </Badge>
          ) : (
            <Badge
              variant="outline"
              className="bg-blue-50 text-blue-700 border-blue-200"
            >
              Private
            </Badge>
          )}
          <Badge
            variant="outline"
            className="bg-purple-50 text-purple-700 border-purple-200"
          >
            {stack.items?.length || 0} items
          </Badge>
        </div> */}
        {/* <div className="grid grid-cols-2 gap-2">
          {[1, 2, 3, 4]
            .slice(0, Math.min(4, stack.items?.length || 0))
            .map((_, index) => (
              <div
                key={index}
                className="aspect-video bg-gray-100 rounded flex items-center justify-center"
              >
                <Link2 className="h-4 w-4 text-gray-400" />
              </div>
            ))}
        </div> */}
      </CardContent>
      <CardFooter className="pt-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage
              src={`/placeholder.svg?height=24&width=24`}
              alt="User"
            />
            <AvatarFallback>
              <User2 className="h-3 w-3" />
            </AvatarFallback>
          </Avatar>
          <span className="text-xs text-gray-500">{stack.userId}</span>
        </div>
        <Button variant="ghost" size="sm" className="h-8 px-2">
          <ExternalLink className="h-3 w-3 mr-1" />
          <span className="text-xs">Open</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
