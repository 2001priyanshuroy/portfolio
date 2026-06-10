"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "../Section";
import Card from "../Card";
import Badge from "../Badge";
import { animationVariants } from "@/utils/animations";
import { Github, ExternalLink, Star } from "lucide-react";

interface Repository {
  name: string;
  description: string;
  url: string;
  language: string;
  stars?: number;
  isPinned: boolean;
}

export const GitHubSection: React.FC = () => {
  const repositories: Repository[] = [
    {
      name: "Trade Finance Platform",
      description:
        "Scalable microservices platform for trade finance workflows",
      url: "https://github.com/priyanshuroy",
      language: "Java",
      stars: 124,
      isPinned: true,
    },
    {
      name: "Movie Rating Microservice",
      description:
        "Spring Boot microservice with Redis caching and external API integration",
      url: "https://github.com/priyanshuroy",
      language: "Java",
      stars: 56,
      isPinned: true,
    },
    {
      name: "PII Data Masking Platform",
      description: "FastAPI system for PII detection, masking, and encryption",
      url: "https://github.com/priyanshuroy",
      language: "Python",
      isPinned: true,
    },
  ];

  const languages = [
    { name: "Java", percentage: 45, color: "from-primary" },
    { name: "Python", percentage: 30, color: "from-secondary" },
    { name: "SQL", percentage: 15, color: "from-accent" },
    { name: "Other", percentage: 10, color: "from-gray-500" },
  ];

  return (
    <Section
      id="github"
      title="GitHub"
      subtitle="Open source contributions and pinned repositories"
      className="bg-gradient-to-b from-transparent via-dark-secondary/20 to-transparent"
    >
      <div className="max-w-5xl mx-auto">
        {/* Pinned Repositories */}
        <motion.div
          className="mb-12"
          variants={animationVariants.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold mb-6 text-white">
            Pinned Repositories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {repositories
              .filter((r) => r.isPinned)
              .map((repo, index) => (
                <motion.div
                  key={repo.name}
                  variants={animationVariants.itemVariants}
                >
                  <Card hover className="h-full flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <Github className="text-primary" size={24} />
                      {repo.stars && (
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star size={16} fill="currentColor" />
                          <span className="text-sm font-semibold">
                            {repo.stars}
                          </span>
                        </div>
                      )}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 flex-grow">
                      {repo.name}
                    </h4>
                    <p className="text-gray-400 text-sm mb-4 flex-grow">
                      {repo.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge variant="primary">{repo.language}</Badge>
                      <motion.a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="text-primary hover:text-secondary transition-colors"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          variants={animationVariants.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Language Stats */}
          <motion.div variants={animationVariants.itemVariants}>
            <Card>
              <h3 className="text-lg font-bold text-white mb-6">
                Language Distribution
              </h3>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-400">
                        {lang.name}
                      </span>
                      <span className="text-sm font-bold text-primary">
                        {lang.percentage}%
                      </span>
                    </div>
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${lang.color} to-transparent`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* GitHub Stats */}
          <motion.div variants={animationVariants.itemVariants}>
            <Card>
              <h3 className="text-lg font-bold text-white mb-6">
                Contribution Stats
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text mb-1">
                    200+
                  </div>
                  <p className="text-sm text-gray-500">Total Commits</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text mb-1">
                    3
                  </div>
                  <p className="text-sm text-gray-500">Major Projects</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-accent to-primary bg-clip-text mb-1">
                    85%+
                  </div>
                  <p className="text-sm text-gray-500">Test Coverage</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default GitHubSection;
