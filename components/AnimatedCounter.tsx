import { motion, useAnimation } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
}

const AnimatedCounter: FC<AnimatedCounterProps> = ({ value }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, scale: 1 });
          // Animate from 0 to target
          let start = 0;
          const duration = 2000; // 2 seconds
          const increment = value / (duration / 16); // 60fps

          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, controls]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={controls}
      className="text-4xl font-bold"
    >
      {count}
    </motion.span>
  );
};

export default AnimatedCounter;
