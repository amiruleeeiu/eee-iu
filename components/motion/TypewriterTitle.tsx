"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";

interface TypewriterTitleProps {
  text: string;
}

const TypewriterTitle: FC<TypewriterTitleProps> = ({ text }) => {
  return (
    <div style={{ fontSize: "2rem", fontWeight: 700 }}>
      <AnimatePresence mode="wait">
        <div>
          {Array.from(text).map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -20 }}
              // animate={isFirstIndex ? { opacity: 1, x: 0 } : {}}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                delay: index * 0.05,
                duration: 0.5,
                ease: "easeOut",
              }}
              style={{ display: "inline-block" }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default TypewriterTitle;
