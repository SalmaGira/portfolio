import { FaGithub } from 'react-icons/fa';

import styles from '../styles/global.module.css';

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  repoUrl?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, tech, repoUrl }) => (
  <div className={styles.projectCard}>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className={styles.techStack}>
      {tech.map(t => (
        <span key={t} className={styles.techTag}>{t}</span>
      ))}
    </div>
    {repoUrl && (
      <a href={repoUrl} target="_blank" rel="noopener noreferrer" className={styles.ghLink}>
        <FaGithub /> GitHub
      </a>
    )}
  </div>
);

export default ProjectCard;