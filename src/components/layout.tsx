import React from 'react';

import styles from '../styles/global.module.css';
import ThemeToggle from './ThemeToggle';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={styles.layout}>
    <header className={styles.header}>
      <div className={styles.logo}>Salma Gira</div>
      <ThemeToggle />
    </header>
    <main>{children}</main>
    <footer className={styles.footer}>
      &copy; {new Date().getFullYear()} Salma Gira. All rights reserved.
    </footer>
  </div>
);

export default Layout;