import React from 'react';

import { motion } from 'framer-motion';

import styles from '../styles/global.module.css';
import ProjectCard from './ProjectCard';

// Example projects (replace with your own!)
const projects = [
  {
    title: "Realtime Chat App",
    description: "A modern, secure chat platform with live messaging.",
    tech: ["React", "TypeScript", "Socket.io"],
    repoUrl: "https://github.com/SalmaGira/realtime-chat-app",
  },
  {
    title: "Led LIPS Website Rebuild",
    description: "Structured and implemented a full rebuild of the website architecture including codebase design, deployment, security practices, and clean code patterns. Added onboarding and mapping system documentation for developers.",
    tech: ["React", "Next.js", "TypeScript", "Architecture"],
  },
  {
    title: "Scalable Front-end for UK Healthcare Platform",
    description: "Developed scalable front-end features using React and Next.js, improved page performance and SEO, and established unit tests with a TDD approach to increase reliability.",
    tech: ["React", "Next.js", "Performance", "TDD"],
  },
  {
    title: "Secure Authentication & Media Handling",
    description: "Designed role-based access control and integrated Microsoft Single Sign-On. Engineered secure file transfer protocols for video interviews to protect sensitive media during upload and storage.",
    tech: ["Security", "SSO", "RBAC", "Media"],
  },
  {
    title: "AI Backend Integration & System Optimization",
    description: "Architected integration between AI backend and UI using message queues, configured Firebase for real-time features, and implemented performance optimizations that improved workflow speed by ~120% through DB and network improvements.",
    tech: ["AI Integration", "Firebase", "Performance"],
  },
];

const Projects: React.FC = () => (
  <motion.section
    className={styles.projects}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    <h2 className={styles.sectionTitle}>Projects</h2>
    <div className={styles.projectGrid}>
      {projects.map(p => (
        <ProjectCard key={p.title} {...p} />
      ))}
    </div>
  </motion.section>
);

export default Projects;