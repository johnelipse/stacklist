import { SignupForm } from "@/components/auth/register";
import React from "react";

export default function page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <SignupForm />
    </div>
  );
}
