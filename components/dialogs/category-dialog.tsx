"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { PlusCircle } from "lucide-react";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
});

type CategoryFormValues = z.infer<typeof formSchema>;

interface CategoryDialogProps {
  initialData?: (CategoryFormValues & { id: string }) | null;
  onSubmit: (data: CategoryFormValues) => void;
  buttonLabel?: string;
}

export function CategoryDialog({
  initialData,
  onSubmit,
  buttonLabel = "Add Category",
}: CategoryDialogProps) {
  const [open, setOpen] = useState(false);

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: "",
    },
  });

  const handleSubmit = async (data: CategoryFormValues) => {
    await onSubmit(data);
    setOpen(false);
    form.reset();
  };

  const title = initialData ? "Edit Category" : "Create Category";
  const description = initialData
    ? "Edit your category details"
    : "Add a new category to organize your stacks";
  const action = initialData ? "Save changes" : "Create";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
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
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter category title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">{action}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
