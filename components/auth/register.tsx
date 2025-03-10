"use client";
import { createUser } from "@/actions/user";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormProps } from "@/types/type";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export function SignupForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();
  const [isLoading, setIsLoading] = useState(false);
  async function submit(data: FormProps) {
    try {
      setIsLoading(true);
      const user = await createUser(data);
      if (user && user.status === 200) {
        console.log("User Created successfully");
        reset();
        setIsLoading(false);
        toast.success("User Created successfully");
        console.log(user.data);
      } else {
        console.log(user.error);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your email and create a password to get started
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(submit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="signup-email">Email</Label>
            <Input
              id="signup-email"
              type="email"
              placeholder="m@example.com"
              {...register("email", { required: true })}
            />
            {errors["email"] && (
              <span className="text-xs text-red-600">
                This field is required
              </span>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-password">Password</Label>
            <Input
              id="signup-password"
              type="password"
              {...register("password", { required: true })}
            />
            {errors["password"] && (
              <span className="text-xs text-red-600">
                This field is required
              </span>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create account"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
