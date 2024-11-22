"use client";

import { motion } from "framer-motion";
import { OctagonX } from "lucide-react";

const NotFound = () => {
  return (
    <section className="container grid place-content-center min-h-screen">
      <motion.span
        initial={{ opacity: 0, y: 20 }} // Starting state
        animate={{ opacity: 1, y: 0 }} // Ending state
        transition={{ duration: 0.5 }} // Animation duration
        className="flex gap-4 items-center"
      >
        <OctagonX size={96} />
        <h1 className="font-bold text-7xl">Page Not Found</h1>
      </motion.span>
    </section>
  );
};

export { NotFound };
