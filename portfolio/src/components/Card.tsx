"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = true,
  onClick,
}) => {
  return (
    <motion.div
      className={`relative rounded-2xl border border-dark-tertiary bg-dark-secondary/50 backdrop-blur-md p-6 ${
        hover
          ? "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 cursor-default"
          : ""
      } transition-all duration-300 ${className}`}
      whileHover={hover ? { scale: 1.02 } : undefined}
      whileTap={hover && onClick ? { scale: 0.98 } : undefined}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Card;
