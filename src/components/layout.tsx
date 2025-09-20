
function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <h1>Salma Gira</h1>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        &copy; {new Date().getFullYear()} Salma Gira. All rights reserved.
      </footer>
    </div>
  );
}

export default Layout;