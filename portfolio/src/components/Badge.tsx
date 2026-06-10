"use client";

import React from "react";
import { motion } from "framer-motion";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
}) => {
  const variantStyles = {
    primary: "bg-primary/20 text-primary border-primary/30",
    secondary: "bg-secondary/20 text-secondary border-secondary/30",
    accent: "bg-accent/20 text-accent border-accent/30",
  };

  return (
    <motion.span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${variantStyles[variant]}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      {children}
    </motion.span>
  );
};

export default Badge;
