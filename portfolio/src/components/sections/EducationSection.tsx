"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "../Section";
import Card from "../Card";
import { certificationsData, educationData } from "@/data/content";
import { animationVariants } from "@/utils/animations";
import { Award, GraduationCap } from "lucide-react";

export const EducationSection: React.FC = () => {
  return (
    <Section
      id="education"
      title="Education & Certifications"
      subtitle="Academic foundation and professional credentials"
      className="bg-dark-secondary/30"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            variants={animationVariants.containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award size={28} className="text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certificationsData.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  variants={animationVariants.itemVariants}
                >
                  <Card hover>
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-bold text-white flex-1">
                        {cert.title}
                      </h4>
                      <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                        {cert.date}
                      </span>
                    </div>
                    <p className="text-sm text-primary font-semibold mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-400">{cert.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={animationVariants.containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <GraduationCap size={28} className="text-secondary" />
              Education
            </h3>
            <div className="space-y-4">
              {educationData.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={animationVariants.itemVariants}
                >
                  <Card hover>
                    <div className="mb-3">
                      <h4 className="text-lg font-bold text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-secondary font-semibold mb-1">
                        {edu.institution}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {edu.year}
                        </span>
                        <span className="text-sm font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                          CGPA: {edu.gpa}
                        </span>
                      </div>
                    </div>
                    <div className="border-t border-dark-tertiary pt-3">
                      <p className="text-sm text-gray-400">
                        {edu.highlights.join(" • ")}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default EducationSection;
