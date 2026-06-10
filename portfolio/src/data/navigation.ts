import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/priyanshuroy",
    icon: React.createElement(Github, { size: 20 }),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/roypriyanshu",
    icon: React.createElement(Linkedin, { size: 20 }),
  },
  {
    name: "Email",
    url: "mailto:roy1.priyanshu@gmail.com",
    icon: React.createElement(Mail, { size: 20 }),
  },
];
