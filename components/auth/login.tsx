"use client";

import { useState } from "react";
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
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export function LoginForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  async function submit(data: FormProps) {
    try {
      setIsLoading(true);
      console.log("Attempting to sign in with credentials:", data);
      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      console.log("SignIn response:", loginData);
      if (loginData?.error) {
        setIsLoading(false);
        toast.error("Sign-in error: Check your credentials");
      } else {
        reset();
        setIsLoading(false);
        toast.success("Login Successful");
        router.push("/dashboard");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Network Error:", error);
      toast.error("Its seems something is wrong with your Network");
    }
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email and password to access your account
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(submit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
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
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Button
                variant="link"
                className="h-auto p-0 text-sm"
                type="button"
              >
                Forgot password?
              </Button>
            </div>
            <Input
              id="password"
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
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
