"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "../Section";
import Card from "../Card";
import Badge from "../Badge";
import { experienceData } from "@/data/content";
import { animationVariants } from "@/utils/animations";

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = React.useState<number | null>(
    experienceData[0].id,
  );

  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Building enterprise systems that scale"
      className="bg-gradient-to-b from-transparent via-dark-secondary/20 to-transparent"
    >
      <div className="max-w-4xl mx-auto">
        {/* Timeline */}
        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={animationVariants.itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                hover
                className="cursor-pointer"
                onClick={() =>
                  setExpandedId(expandedId === exp.id ? null : exp.id)
                }
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-semibold mb-1">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Expanded Content */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: expandedId === exp.id ? 1 : 0,
                    height: expandedId === exp.id ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-dark-tertiary pt-6 mt-6">
                    <p className="text-gray-400 mb-6">{exp.description}</p>

                    {/* Achievements Grid */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-primary mb-4 uppercase">
                        Key Achievements
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {exp.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="bg-dark-tertiary/50 rounded-lg p-4 border border-dark-tertiary/50"
                          >
                            <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text mb-2">
                              {achievement.metric}
                            </div>
                            <div className="text-sm font-semibold text-white mb-1">
                              {achievement.title}
                            </div>
                            <p className="text-xs text-gray-500">
                              {achievement.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-secondary mb-3 uppercase">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;
