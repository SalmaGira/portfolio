import {
  useEffect,
  useState,
} from 'react';

import {
  FaMoon,
  FaSun,
} from 'react-icons/fa';

import styles from '../styles/global.module.css';

const ThemeToggle: React.FC = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      className={styles.themeToggle}
      onClick={() => setDark(d => !d)}
      aria-label="Toggle theme"
    >
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;