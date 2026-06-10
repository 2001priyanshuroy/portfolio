"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "../Section";
import Card from "../Card";
import { achievementsData } from "@/data/content";
import { animationVariants } from "@/utils/animations";

export const AchievementsSection: React.FC = () => {
  return (
    <Section
      id="achievements"
      title="By The Numbers"
      subtitle="Impact and milestones achieved"
      className="bg-gradient-to-b from-transparent via-primary/5 to-transparent"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={animationVariants.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={index}
              variants={animationVariants.itemVariants}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover>
                <motion.div
                  className="text-4xl md:text-5xl font-bold mb-3 text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {achievement.value}
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {achievement.label}
                </h3>
                <p className="text-sm text-gray-400">
                  {achievement.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default AchievementsSection;
