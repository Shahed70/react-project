import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import whiteLogo from '../asset/images/navlogo.f599bd96.svg' 
import blueLogo from '../asset/images/navlogoScroll.d6db46a9.svg' 
class TopNav extends Component {
      constructor(){
        super()
        this.state={
          navTitle:"navTitle",
          navBackground:"navBackgroundBlack",
          toggleNav:"dark",
          whiteLogo:[whiteLogo],
          navStyle:"navItemWhite"
        }
      }
      onScroll=()=>{
         if(window.scrollY>100){
           this.setState({
             navTitle:"navTitle-scroll",
              navBackground:"navBackgroundWhite",
              navStyle:"navItemBlack",
              toggleNav:"light",
              whiteLogo:[blueLogo] 
            })
         }else if(window.scrollY<100){
           this.setState({
             navTitle:"navTitle", 
             navBackground:"navBackgroundBlack",
             navStyle:"navItemWhite",
             toggleNav:"dark",
              whiteLogo:[whiteLogo]
            })
         }
      }
      componentDidMount(){
         window.addEventListener('scroll', this.onScroll)
      }
  render() {
    return (
      <>
        <Navbar fixed="top" variant={this.state.toggleNav} expand="lg" className={this.state.navBackground}>
          <Navbar.Brand className={this.state.navTitle} href="#home"> <img src={this.state.whiteLogo} alt=""/> TANZIB SHAHED</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className={this.state.navStyle} href="#home">Services</Nav.Link>
              <Nav.Link className={this.state.navStyle} href="#home">Courses</Nav.Link>
              <Nav.Link className={this.state.navStyle} href="#home">Contact</Nav.Link>
              <Nav.Link className={this.state.navStyle} href="#home">Portfolio</Nav.Link>
              <Nav.Link className={this.state.navStyle} href="#home">About</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default TopNav;