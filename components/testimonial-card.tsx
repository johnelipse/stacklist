"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  delay: number;
}

export function TestimonialCard({
  name,
  role,
  content,
  avatar,
  delay,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
          <Image
            src={avatar || "/placeholder.svg"}
            alt={name}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>

      <p className="text-gray-700">{content}</p>
    </motion.div>
  );
}
