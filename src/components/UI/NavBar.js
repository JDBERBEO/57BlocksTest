import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://res.cloudinary.com/dj7wucuvf/image/upload/v1635810301/57BlocksTest/pokebola_dnrrb1.png"
              alt="pokeball-icon"
            />
            Pokedex
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/favorites">Favorites</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
