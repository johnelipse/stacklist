import { LoginForm } from "@/components/auth/login";
import React from "react";

export default function page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <LoginForm />
    </div>
  );
}
