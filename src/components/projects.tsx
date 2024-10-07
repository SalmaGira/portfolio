import { Container, Row } from "react-bootstrap";
import ProjectDetails from "./projectDetails";

const Projects = () => {
  return (
    <Container className="my-5" id="projects">
      <h1>Projects</h1>
      <p>
        This is where I will be showcasing some of my personal projects. Stay
        tuned!
      </p>

      <p>
        You can check out my{" "}
        <a href="https://github.com/SalmaGira" target="_blank">
          GitHub
        </a>
      </p>

      <Row>
        <ProjectDetails />
      </Row>
    </Container>
  );
};

export default Projects;
