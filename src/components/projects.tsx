
const projects = [
  {
    name: 'Gatsby Tutorial',
    description: 'A hands-on tutorial for GatsbyJS.',
    url: 'https://github.com/SalmaGira/gatsby-tutorial'
  },
  {
    name: 'Realtime Chat App',
    description: 'A real-time chat application built with React and Firebase.',
    url: 'https://github.com/SalmaGira/realtime-chat-app'
  },
  {
    name: 'Logo Ipsum',
    description: 'A logo generator and design playground.',
    url: 'https://github.com/SalmaGira/logoipsum'
  }
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div className="project-card" key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;