import { motion } from 'framer-motion';

import styles from '../styles/global.module.css';

const Home: React.FC = () => (
  <motion.section
    className={styles.home}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    <h1 className={styles.title}>Salma Gira</h1>
    <h2 className={styles.subtitle}>Full-Stack Engineer</h2>
    <p className={styles.desc}>
      Building elegant, scalable web apps and leading agile teams.<br />
      Explore my work, experience, and how to connect!
    </p>
  </motion.section>
);

export default Home;