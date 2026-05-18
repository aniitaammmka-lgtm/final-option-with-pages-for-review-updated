import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface AnimateInProps extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport" | "transition"> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "fade" | "left" | "right";
  className?: string;
}

const variants = {
  up: {
    initial: { opacity: 0, y: 36 },
    animate: { opacity: 1, y: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  left: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
  },
  right: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
  },
};

export default function AnimateIn({
  children,
  delay = 0,
  direction = "up",
  className,
  ...rest
}: AnimateInProps) {
  const v = variants[direction];
  return (
    <motion.div
      className={className}
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
