"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../Section";
import Card from "../Card";
import Button from "../Button";
import { personalData } from "@/data/content";
import { animationVariants } from "@/utils/animations";
import { Mail, Phone, Github, Linkedin, MapPin, CheckCircle, XCircle } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="contact"
      title="Get in Touch"
      subtitle="Let's discuss opportunities and collaborate"
      className="bg-dark-secondary/30"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={animationVariants.containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

            <div className="space-y-6">
              <motion.a
                href={`mailto:${personalData.email}`}
                variants={animationVariants.itemVariants}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <p className="text-gray-400 hover:text-primary transition-colors">
                    {personalData.email}
                  </p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${personalData.phone}`}
                variants={animationVariants.itemVariants}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <Phone className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone</h4>
                  <p className="text-gray-400 hover:text-secondary transition-colors">
                    {personalData.phone}
                  </p>
                </div>
              </motion.a>

              <motion.a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                variants={animationVariants.itemVariants}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <Github className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">GitHub</h4>
                  <p className="text-gray-400 hover:text-accent transition-colors">
                    github.com/priyanshuroy
                  </p>
                </div>
              </motion.a>

              <motion.a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variants={animationVariants.itemVariants}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Linkedin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">LinkedIn</h4>
                  <p className="text-gray-400 hover:text-primary transition-colors">
                    linkedin.com/in/roypriyanshu
                  </p>
                </div>
              </motion.a>

              <motion.div
                variants={animationVariants.itemVariants}
                className="pt-6 border-t border-dark-tertiary"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-secondary" size={20} />
                  <span className="text-gray-400">India</span>
                </div>
                <p className="text-sm text-gray-500">
                  Available for remote opportunities and consultations worldwide.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={animationVariants.containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card hover={false}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={animationVariants.itemVariants}>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-tertiary/50 border border-dark-tertiary rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div variants={animationVariants.itemVariants}>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-tertiary/50 border border-dark-tertiary rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                <motion.div variants={animationVariants.itemVariants}>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-tertiary/50 border border-dark-tertiary rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div variants={animationVariants.itemVariants}>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-dark-tertiary/50 border border-dark-tertiary rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </motion.div>

                <motion.div variants={animationVariants.itemVariants} className="space-y-3">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full"
                  >
                    Send Message
                  </Button>

                  <AnimatePresence mode="wait">
                    {status === "success" && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-green-400 text-sm"
                      >
                        <CheckCircle size={16} />
                        Message sent! I'll get back to you soon.
                      </motion.div>
                    )}
                    {status === "error" && (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-red-400 text-sm"
                      >
                        <XCircle size={16} />
                        Failed to send. Please try again or email directly.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
