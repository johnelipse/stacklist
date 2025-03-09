"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <motion.div
          initial={{ x: "100%", y: "-50%" }}
          animate={{ x: "25%", y: "-25%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute right-0 top-0 w-3/4 h-full bg-[#f0f0ff] rounded-bl-[100px]"
        />
        <motion.div
          initial={{ x: "100%", y: "50%" }}
          animate={{ x: "33%", y: "25%" }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="absolute right-0 bottom-0 w-full h-3/4 bg-[#f0f0ff] opacity-50 rounded-tl-[100px]"
        />
      </motion.div>
    </div>
  );
}
