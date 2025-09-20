import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

import styles from '../styles/global.module.css';

const Contact: React.FC = () => (
  <section className={styles.contact}>
    <h2 className={styles.sectionTitle}>Contact</h2>
    <div className={styles.socialLinks}>
      <a href="https://www.linkedin.com/in/salma-gira-6481aa166/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin /> LinkedIn
      </a>
      <a href="https://github.com/SalmaGira" target="_blank" rel="noopener noreferrer">
        <FaGithub /> GitHub
      </a>
      <a href="mailto:salmagira16@gmail.com">
        <FaEnvelope /> Email
      </a>
    </div>
  </section>
);

export default Contact;