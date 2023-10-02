import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./LOGO.png";
import "./header.css"
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Head() {
  return (
    <div className='contain' style={{position:'relative',zIndex:"1",}}>
      <Navbar bg="light" expand="lg" style={{padding:0,}}>
        <Container fluid>
          <Navbar.Brand as={Link} to={`/`}><img id='logo' src={logo} alt='logo'></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to={`/usuarios/`}>Usuarios</Nav.Link>
              <Nav.Link as={Link} to={`/pacientes/`}>Pacientes</Nav.Link>
              <Nav.Link as={Link} to={`/llamadas/`}>Alertas</Nav.Link>
              <Nav.Link as={Link} to={`/areas/`}>Areas</Nav.Link>    
              <Nav.Link as={Link} to={`/codigo-azul/`}>Codigo-Azul</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

