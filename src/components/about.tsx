import { Container } from "react-bootstrap";

function About() {
  return (
    <Container className="mt-5">
      <h1>About Me</h1>
      <p>
        About Me Hi, I’m Salma.
        <br />
        I’m a passionate Fullstack Engineer with a strong focus on Frontend
        Development. My journey in the tech world has been shaped by my love for
        clean code, user-friendly designs, and creating dynamic, interactive
        experiences. I thrive on learning new technologies and pushing the
        boundaries of what can be achieved with the latest web development
        tools.
        <br />
        In addition to my technical skills, I have a keen interest in visual
        design and styling, which allows me to blend both creativity and code
        into everything I create. Whether it's refining a user interface or
        optimizing the backend logic, I love the challenge of making everything
        work seamlessly.
        <br />
        I believe in continuous learning and staying curious, which has led me
        to explore frameworks like Tailwind CSS, React, and more, as I continue
        growing in my career. When I’m not coding, you can find me exploring
        art, anime, and diving deep into creative worlds to keep my inspiration
        flowing.
        <br />
        <br />
        <div>
          Specialties:
          <ul>Frontend: React, Tailwind CSS, HTML5/CSS3, JavaScript (ES6+)</ul>
          <ul>Backend: Node.js, Express, API Development</ul>
          <ul>Databases: MongoDB, SQL</ul>
          <ul>Tools: Git, JIRA, Postman</ul>
        </div>
        <br />
        <div>
          Fun Facts:
          <ul>
            I’m always drawn to warm color palettes in both art and design.
          </ul>
          <ul>
            I love combining creative aesthetics with functionality, making sure
            every project I work on feels unique and personal.
          </ul>
          <ul>
            I’m constantly challenging myself with new frameworks and design
            principles, because staying still isn’t an option in this
            ever-evolving field.
          </ul>
        </div>
      </p>
    </Container>
  );
}

export default About;
