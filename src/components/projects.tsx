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
    title: "Gatsby Tutorial",
    description: "Step-by-step Gatsby site for learning JAMstack.",
    tech: ["Gatsby", "GraphQL"],
    repoUrl: "https://github.com/SalmaGira/gatsby-tutorial",
  },
  {
    title: "Logo Ipsum",
    description: "SVG logo generator for design inspiration.",
    tech: ["React", "CSS"],
    repoUrl: "https://github.com/SalmaGira/logoipsum",
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