"use client";

import React from "react";
import { motion } from "framer-motion";
import { animationVariants } from "@/utils/animations";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = "",
  title,
  subtitle,
}) => {
  return (
    <motion.section
      id={id}
      className={`relative w-full py-24 px-4 md:px-8 lg:px-16 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {(title || subtitle) && (
        <motion.div
          className="mb-16 text-center"
          variants={animationVariants.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {title && (
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
              variants={animationVariants.itemVariants}
            >
              {title}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p
              className="text-lg text-gray-400 max-w-2xl mx-auto"
              variants={animationVariants.itemVariants}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      )}

      {children}
    </motion.section>
  );
};

export default Section;
