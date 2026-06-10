"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "../Section";
import Card from "../Card";
import Badge from "../Badge";
import { skillsData } from "@/data/content";
import { animationVariants } from "@/utils/animations";

export const SkillsSection: React.FC = () => {
  const skillCategories = Object.entries(skillsData);

  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      subtitle="Technologies and practices I specialize in"
      className="bg-gradient-to-b from-transparent via-dark-secondary/20 to-transparent"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={animationVariants.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map(([category, skills], index) => (
            <motion.div
              key={category}
              variants={animationVariants.itemVariants}
            >
              <Card hover className="h-full">
                <h3 className="text-lg font-bold mb-4 capitalize text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(skills as string[]).map((skill, idx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: index * 0.1 + idx * 0.05,
                      }}
                      viewport={{ once: true }}
                    >
                      <Badge
                        variant={
                          index % 3 === 0
                            ? "primary"
                            : index % 3 === 1
                              ? "secondary"
                              : "accent"
                        }
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default SkillsSection;
