"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "../Section";
import Card from "../Card";
import { aboutContent } from "@/data/content";
import { animationVariants } from "@/utils/animations";

export const AboutSection: React.FC = () => {
  return (
    <Section id="about" title="About Me" className="bg-dark-secondary/30">
      <div className="max-w-4xl mx-auto">
        {/* Main Text */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={animationVariants.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="lg:col-span-2">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-lg text-gray-400 mb-6 leading-relaxed"
                variants={animationVariants.itemVariants}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Stats Card */}
          <motion.div
            variants={animationVariants.itemVariants}
            className="lg:col-span-1"
          >
            <Card className="h-full">
              <h3 className="text-sm font-semibold text-primary mb-6 uppercase tracking-wide">
                Key Metrics
              </h3>
              <div className="space-y-6">
                {aboutContent.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Skills Preview */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={animationVariants.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card>
            <h4 className="text-sm font-semibold text-primary mb-4 uppercase">
              Expertise
            </h4>
            <p className="text-gray-400">
              Java, Spring Boot, Microservices, REST APIs, System Design,
              Database Optimization
            </p>
          </Card>
          <Card>
            <h4 className="text-sm font-semibold text-secondary mb-4 uppercase">
              Experience
            </h4>
            <p className="text-gray-400">
              Enterprise financial platforms, High-performance systems,
              Distributed architectures, CI/CD automation
            </p>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutSection;
