"use client";

import { motion } from "framer-motion";

function Title({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, type: "spring" }}
      className="my-5 flex justify-center items-center"
    >
      <h1 className="text-3xl font-bold border-b-2">{title}</h1>
    </motion.div>
  );
}

export default Title;
