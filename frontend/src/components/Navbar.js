import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import logo from './logo.jpg';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#home" className="d-flex align-items-center text-white">
          <img src={logo} alt="Abstract Logo" style={{ marginRight: '10px', height: '30px'}} />
          Abstract | Help Center
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Button variant="secondary" style={{border: '1px solid white'}}>Submit a Request</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
