import { Nav, Navbar, Container } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="shadow-lg"
      style={{ backgroundColor: "#344364" }}
    >
      <Container>
        <Navbar.Brand href="#home">Salma Gira</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
