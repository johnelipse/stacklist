"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay: number;
}

export function FeatureCard({
  title,
  description,
  icon,
  delay,
}: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -5 }}
    >
      <div className="w-12 h-12 bg-[#f0f0ff] rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
