"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { heroContent, personalData } from "@/data/content";
import Button from "../Button";
import { animationVariants } from "@/utils/animations";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export const HeroSection: React.FC = () => {
  const words = [
    "Backend Engineer",
    "System Architect",
    "Performance Optimizer",
  ];
  const [currentWord, setCurrentWord] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl text-center"
        variants={animationVariants.containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div variants={animationVariants.itemVariants} className="mb-6">
          <span className="text-primary font-semibold">
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main Heading with Typing Animation */}
        <motion.div variants={animationVariants.itemVariants} className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            I'm{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Priyanshu Roy
            </span>
          </h1>
          <div className="h-12 flex items-center justify-center">
            <motion.span
              key={currentWord}
              className="text-2xl md:text-3xl text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {words[currentWord]}
            </motion.span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={animationVariants.itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {heroContent.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={animationVariants.itemVariants}
          className="flex flex-col md:flex-row gap-4 justify-center mb-16"
        >
          <Link href="#projects">
            <Button variant="primary" size="lg">
              View My Work
            </Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline" size="lg">
              Get in Touch
            </Button>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={animationVariants.itemVariants}
          className="flex justify-center gap-4"
        >
          <motion.a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full border border-dark-tertiary flex items-center justify-center hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full border border-dark-tertiary flex items-center justify-center hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href={`mailto:${personalData.email}`}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full border border-dark-tertiary flex items-center justify-center hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Mail size={24} />
          </motion.a>
          <motion.a
            href={personalData.resume}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full border border-dark-tertiary flex items-center justify-center hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
          >
            <FileText size={24} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-gray-500 text-sm">Scroll to explore</div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
