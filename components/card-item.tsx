import { formatDistanceToNow } from "date-fns";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardItemProps {
  url: string;
  title: string;
  price: string;
  imageUrl?: string | null;
  createdAt: Date;
  userId?: string | null;
}

export function CardItem({
  url,
  title,
  price,
  imageUrl,
  createdAt,
}: CardItemProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-video relative overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted">
            <p className="text-sm text-muted-foreground">No image available</p>
          </div>
        )}
      </div>
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-1 text-[1.1rem]">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="text-xl font-bold text-primary">{price}</div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t p-4">
        <div className="text-xs text-muted-foreground">
          Added {formatDistanceToNow(new Date(createdAt))} ago
        </div>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs text-primary hover:underline"
        >
          Visit <ExternalLink className="h-3 w-3" />
        </Link>
      </CardFooter>
    </Card>
  );
}
