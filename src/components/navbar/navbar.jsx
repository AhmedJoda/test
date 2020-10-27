import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";

export default function MyNavbar({ bg, sticky }) {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#deets">about us</Nav.Link>
            <Nav.Link href="#memes">contact us</Nav.Link>
            <Nav.Link href="#d">عربي</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
