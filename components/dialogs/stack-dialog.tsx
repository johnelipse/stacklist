"use client";

import type React from "react";

import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export type StackProps = {
  title: string;
  notes: string;
};

export default function StackDialog() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<StackProps>();

  async function submit(data: StackProps) {
    try {
      setLoading(true);
      const res = await fetch("/api/stacks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.status === 201) {
        toast.success("Stack created successfully");
        setLoading(false);
        reset();
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <div className="">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add New Stack</Button>
        </DialogTrigger>
        <DialogContent className="bg-gray-900 text-white border-gray-800">
          <DialogHeader>
            <DialogTitle className="text-white">Create New Item</DialogTitle>
            <DialogDescription className="text-gray-400">
              Add the details for your new item here.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(submit)}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title" className="text-white">
                  Title
                </Label>
                <Input
                  id="title"
                  className="bg-gray-800 border-gray-700 text-white"
                  placeholder="Enter title"
                  {...register("title", { required: true })}
                />
                {errors["title"] && (
                  <span className="text-red-500 text-xs">Field required</span>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="notes" className="text-white">
                  Notes
                </Label>
                <Textarea
                  id="notes"
                  className="bg-gray-800 border-gray-700 text-white min-h-[120px]"
                  placeholder="Enter your notes here"
                  {...register("notes", { required: true })}
                />
                {errors["notes"] && (
                  <span className="text-red-500 text-xs">Field required</span>
                )}
              </div>
            </div>
            <DialogFooter>
              <Button
                disabled={loading}
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                className="bg-transparent border-gray-700 text-white hover:bg-gray-800"
              >
                Cancel
              </Button>
              <Button
                disabled={loading}
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {loading ? "Saving..." : "Save"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
