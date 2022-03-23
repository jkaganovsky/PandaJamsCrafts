import React from "react";
import { Nav } from 'react-bootstrap';
import About from './AboutMe';

function navBar() {
  return (
    <Nav className="justify-content-center nav">
      <Nav.Item>
        <Nav.Link eventKey="About">About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Usborne">Usborne Books & More</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Contact">Contact Me</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default navBar;