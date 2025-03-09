import Footer2 from "@/components/footer2";
import HeaderComp from "@/components/header";
import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <HeaderComp />
      <div className="pt-20">{children}</div>
      <Footer2 />
    </div>
  );
}
