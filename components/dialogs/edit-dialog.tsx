/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Edit } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormSelectInput from "../form-inputs/form-selectinput";
import { Stack } from "@prisma/client";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { updateProduct } from "@/actions/products";
export type SelectProps = {
  stackId: string;
};
export function EditDialog({ stacks, id }: { stacks: Stack[]; id: string }) {
  const { handleSubmit } = useForm<SelectProps>();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [selectedStack, setSelectedStack] = useState<any>("");
  const mainStacks = stacks.map((stack) => ({
    value: stack.id,
    label: stack.title,
  }));

  async function handleSave(data: SelectProps) {
    data.stackId = selectedStack.value;
    try {
      setLoading(true);
      await updateProduct(data, id);
      toast.success("Asigned to a category successfully.");
      setLoading(false);
      setOpen(false);
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("something went wrong.");
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          rel="noopener noreferrer"
          className="flex items-center hover:bg-none gap-1 text-xs text-primary hover:underline"
        >
          <Edit className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Stack</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-3 pt-3">
              <FormSelectInput
                label="Main Categories"
                options={mainStacks}
                option={selectedStack}
                setOption={setSelectedStack}
                // toolTipText="Add New Main Category"
                // href="/dashboard/inventory/main-categories/new"
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          {loading ? (
            <Button type="button" disabled>
              Saving...
            </Button>
          ) : (
            <Button type="submit" onClick={handleSubmit(handleSave)}>
              Save changes
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
