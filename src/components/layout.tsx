import React from 'react';

import styles from '../styles/global.module.css';
import ThemeToggle from './ThemeToggle';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={styles.layout}>
    <header
      className="d-flex justify-content-end align-items-center p-10 pb-0"
      style={{
      // background: "linear-gradient(to bottom, #007cf0 0%, #ffffff 100%)"
      }}
    >
      <ThemeToggle />
    </header>
    <main>{children}</main>
    <footer className={styles.footer}>
      &copy; {new Date().getFullYear()} Salma Gira. All rights reserved.
    </footer>
    </div>
  );

export default Layout;