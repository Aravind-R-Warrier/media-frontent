import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="bg-danger">
      <Container>
        <Navbar.Brand as={Link} to="/" className='fw-bolder text-light'>
          <img
            alt="Media Player Logo"
            src="https://static.vecteezy.com/system/resources/previews/000/568/526/original/vector-media-player-icon.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Media player
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
