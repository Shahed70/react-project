import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export class Footer extends Component {
  render() {
    return (
      <>
        <Container>
          <Row className="footerCard">
            <Col lg={3} md={6} sm={12}>
              <div className="d-flex flex-column">
                <div>
                  <h3 className="display-4">Follow Me</h3>
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                    Facebook
                  </a>
                </div>
                <div>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                    YouTube
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <h1 className="display-4">Address</h1>
              <p>
                #1000/45 Shahi Residential Aria, 3rd <br></br> Floor Front Side,
                Chittagong
              </p>
              <p>
                <i className="pr-1 fas fa-envelope"></i>shahedbd123@gmail.com
              </p>
              <p>
                <i className="pr-1 fas fa-phone"></i>01815000000
              </p>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <h1 className="display-4">Informatin</h1>
              <a className="text-decoration-none text-dark d-block" href="#">
                About Me
              </a>
              <a className="text-decoration-none text-dark d-block" href="#">
                Contact Me
              </a>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="">
                <h1 className="display-4">Legal</h1>
                <a className="text-decoration-none text-dark d-block" href="#">
                  Refund Policy
                </a>
                <a className="text-decoration-none text-dark d-block" href="#">
                  Terms & Condition{" "}
                </a>
                <a className="text-decoration-none text-dark d-block" href="#">
                  Privacy Policy
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid  className="p-0">
        <footer className="text-center bg-primary text-white">
            <p>All Right Reserved &copy; Shahed </p>
        </footer>
        </Container>
      </>
    );
  }
}

export default Footer;
