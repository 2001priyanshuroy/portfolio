"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  isLoading?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  isLoading = false,
  className = "",
  type = "button",
  disabled,
  onClick,
}) => {
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-300 relative overflow-hidden group";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/50",
    secondary:
      "bg-gradient-to-r from-secondary to-accent text-white hover:shadow-lg hover:shadow-secondary/50",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-dark transition-colors",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      type={type}
      disabled={isLoading || disabled}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {isLoading && (
          <motion.div
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        )}
        {children}
      </span>
    </motion.button>
  );
};

export default Button;
