import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';

export const NavBar = () => {
  const history = useHistory();
  const location = useLocation();

  const [activeButton, setActive] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };

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
            {activeButton ? (
              <Button onClick={handleLogout}>Logout</Button>
            ) : null}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
