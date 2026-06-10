"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "../Section";
import Card from "../Card";
import Badge from "../Badge";
import Button from "../Button";
import { projectsData } from "@/data/content";
import { animationVariants } from "@/utils/animations";
import { Github, ExternalLink } from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const categories = [
    "all",
    ...Array.from(new Set(projectsData.map((p) => p.category))),
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Engineering solutions that demonstrate system design expertise"
      className="bg-dark-secondary/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-primary to-secondary text-white"
                  : "border border-dark-tertiary text-gray-400 hover:border-primary"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8"
          variants={animationVariants.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={animationVariants.itemVariants}
            >
              <Card hover className="overflow-hidden h-full flex flex-col">
                {/* Project Header */}
                <div className="mb-6 pb-6 border-b border-dark-tertiary">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <Badge
                      variant={
                        project.category === "Enterprise"
                          ? "primary"
                          : "secondary"
                      }
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-gray-400">{project.description}</p>
                </div>

                {/* Problem & Solution */}
                <div className="mb-6 space-y-4">
                  <div>
                    <h4 className="text-xs font-semibold text-primary uppercase mb-2">
                      Problem
                    </h4>
                    <p className="text-sm text-gray-400">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-secondary uppercase mb-2">
                      Solution
                    </h4>
                    <p className="text-sm text-gray-400">{project.solution}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-6 pb-6 border-b border-dark-tertiary">
                  <h4 className="text-xs font-semibold text-accent uppercase mb-3">
                    Impact
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div
                        key={key}
                        className="bg-dark-tertiary/50 rounded p-3"
                      >
                        <div className="text-lg font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-accent uppercase mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <Badge key={idx} variant="accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="secondary" size="md" className="w-full">
                      <Github size={18} />
                      View Code
                    </Button>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="primary" size="md" className="w-full">
                        <ExternalLink size={18} />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default ProjectsSection;
