import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" expand="lg" className="mb-4" >
      <Container>
        <Navbar.Brand href="#" style={{color:'white'}}>Consulta de Dados</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" style={{color:'white'}} href="#">Link 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{color:'white'}} href="#">Link 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{color:'white'}} href="#">Link 3</a>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;