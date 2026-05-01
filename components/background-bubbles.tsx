"use client";

import { motion } from "framer-motion";

const bubbles = [
  { id: 1, size: 60, left: "10%", duration: 15, delay: 0 },
  { id: 2, size: 100, left: "25%", duration: 25, delay: 2 },
  { id: 3, size: 30, left: "45%", duration: 12, delay: 5 },
  { id: 4, size: 90, left: "65%", duration: 20, delay: 1 },
  { id: 5, size: 120, left: "80%", duration: 28, delay: 4 },
  { id: 6, size: 50, left: "95%", duration: 14, delay: 7 },
];

export default function BackgroundBubbles() {
  const colors = {
    bubble: {
      bg: "bg-gray-500/10",
      border: "border-gray-500/20",
    },
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className={`absolute bottom-[-200px] rounded-full ${colors.bubble.bg} ${colors.bubble.border} border backdrop-blur-sm`}
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
          }}
          animate={{
            y: ["0vh", "-120vh"],
            x: [0, 30, -30, 0],
          }}
          transition={{
            y: {
              duration: bubble.duration,
              repeat: Infinity,
              ease: "linear",
              delay: bubble.delay,
            },
            x: {
              duration: bubble.duration / 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bubble.delay,
            },
          }}
        />
      ))}
    </div>
  );
}
