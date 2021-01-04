import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import brandLogo from '../asset/images/wordart.png' 
class TopNav extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" fixed="top" variant="dark" expand="lg" className="text-uppercase">
          <Navbar.Brand href="#home"> <img src={brandLogo} alt=""/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ">
              <Nav.Link href="#home">Services</Nav.Link>
              <Nav.Link href="#home">Courses</Nav.Link>
              <Nav.Link href="#home">Contact</Nav.Link>
              <Nav.Link href="#home">Portfolio</Nav.Link>
              <Nav.Link href="#home">About</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default TopNav;