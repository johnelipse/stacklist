"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { ImageUpload } from "@/components/ui/image-upload";
import { PlusCircle } from "lucide-react";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  notes: z.string().min(1, "Notes are required"),
  image: z.string().optional(),
});

type CardFormValues = z.infer<typeof formSchema>;

interface CardDialogProps {
  initialData?: (CardFormValues & { id: string }) | null;
  buttonLabel?: string;
  className?: string;
}

export function CardDialog({
  initialData,
  className,
  buttonLabel = "Add Card",
}: CardDialogProps) {
  const [open, setOpen] = useState(false);

  const form = useForm<CardFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: "",
      notes: "",
      image: "",
    },
  });

  //   const handleSubmit = async (data: CardFormValues) => {
  //     await onSubmit(data);
  //     setOpen(false);
  //     form.reset();
  //   };

  const title = initialData ? "Edit Card" : "Create Card";
  const description = initialData
    ? "Edit your card details"
    : "Add a new card to your collection";
  const action = initialData ? "Save changes" : "Create";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={className} variant="outline">
          <PlusCircle className="h-4 w-4 mr-2" />
          {buttonLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            // onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter card title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter card notes"
                      {...field}
                      className="resize-none min-h-[100px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <ImageUpload
                      value={field.value ? [field.value] : []}
                      onChange={(url) => field.onChange(url)}
                      onRemove={() => field.onChange("")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <DialogFooter>
              <Button type="submit">{action}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
