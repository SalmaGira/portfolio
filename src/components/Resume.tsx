import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from 'react-icons/fa';

import {
  activities,
  education,
  experience,
  languages,
  personal,
  skills,
} from '../data/resume';
import styles from '../styles/global.module.css';

const Resume: React.FC = () => (
  <motion.section
    className={styles.resume}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    <h2 className={styles.sectionTitle}>Resume</h2>
    <div className={styles.resumeContactCard}>
      <div>
        <span className={styles.resumeName}>{personal.name}</span>
        <span className={styles.resumeTitle}>{personal.title}</span>
        <span className={styles.resumeLocation}>{personal.location}</span>
        {personal.summary && <p className={styles.resumeSummary}>{personal.summary}</p>}
      </div>
      <div className={styles.resumeContactLinks}>
        <a href={`mailto:${personal.email}`}><FaEnvelope /> {personal.email}</a>
        <a href={personal.linkedin} target="_blank"><FaLinkedin /> LinkedIn</a>
        <a href={personal.github} target="_blank"><FaGithub /> GitHub</a>
        <span><FaPhone /> {personal.phone}</span>
        {personal.portfolio && (
          <a href={personal.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a>
        )}
      </div>
    </div>

    <div className={styles.resumeGroup}>
      <h3>Experience</h3>
      <ul className={styles.experienceTimeline}>
        {experience.map((exp, i) => (
          <li key={i} className={styles.resumeCard}>
            <div className={styles.resumeCardHeader}>
              <span className={styles.resumeRole}>{exp.role}</span>
              <span className={styles.resumeCompany}>@ {exp.company}</span>
              <span className={styles.resumePeriod}>{exp.period}</span>
            </div>
            <div className={styles.resumeDesc}>
              <ul>
                {exp.description.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
              <div className={styles.resumeProduct}>
                <b>{exp.product}</b> — <span>{exp.productDesc}</span>
              </div>
            </div>
            <div className={styles.techStack}>
              {exp.skills.map(s => <span key={s} className={styles.techTag}>{s}</span>)}
            </div>
          </li>
        ))}
      </ul>

      <h3>Education</h3>
      <ul>
        {education.map((edu, i) => (
          <li key={i} className={styles.resumeCard}>
            <div className={styles.resumeCardHeader}>
              <span className={styles.resumeRole}>{edu.degree}</span>
              <span className={styles.resumeCompany}>@ {edu.school}</span>
              <span className={styles.resumePeriod}>{edu.period}</span>
            </div>
          </li>
        ))}
      </ul>

      <h3>Tools & Skills</h3>
      <div className={styles.techStack}>
        {skills.map(s => <span key={s} className={styles.techTag}>{s}</span>)}
      </div>

      <h3>Languages</h3>
      <ul className={styles.languageList}>
        {languages.map(l => (
          <li key={l.name}><b>{l.name}:</b> {l.proficiency}</li>
        ))}
      </ul>

      <h3>Activities</h3>
      <ul className={styles.languageList}>
        {activities.map((activity, i) => (
          <li key={i}>{activity}</li>
        ))}
      </ul>

      <a
        href="/SalmaGira-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.resumeDownload}
      >
        Download PDF
      </a>
    </div>
  </motion.section>
);

export default Resume;