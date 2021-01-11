import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import meeting from "../../asset/images/meeting.jpg";
class Courses extends Component {
  render() {
    return (
      <>
        <Container className="text-center my-5">
          <h1 className="projectTitle">Our Courses </h1>
          <Row className="my-3">
            <Col className="" lg={6} md={12} sm={12}>
              <Row className="">
                <Col className="pt-2" lg={6} md={12} sm={12}>
                  <img className="img-fluid" src={meeting} alt="" />
                </Col>
                <Col className="" lg={6} md={12} sm={12}>
                  <div className="text-justify">
                    <h3>Web development</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quibusdam impedit doloribus sapiente perspiciatis, saepe.
                    </p>
                    <a className="text-start text-decoration-none" href="#">
                      Details
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className="" lg={6} md={12} sm={12}>
              <Row className="">
                <Col className="pt-2" lg={6} md={12} sm={12}>
                  <img className="img-fluid" src={meeting} alt="" />
                </Col>
                <Col className="" lg={6} md={12} sm={12}>
                  <div className="text-justify">
                    <h3>Web development</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quibusdam impedit doloribus sapiente perspiciatis, saepe.
                    </p>
                    <a className="text-start text-decoration-none" href="#">
                      Details
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="" lg={6} md={12} sm={12}>
              <Row className="">
                <Col className="pt-2" lg={6} md={12} sm={12}>
                  <img className="img-fluid" src={meeting} alt="" />
                </Col>
                <Col className="" lg={6} md={12} sm={12}>
                  <div className="text-justify">
                    <h3>Web development</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quibusdam impedit doloribus sapiente perspiciatis, saepe.
                    </p>
                    <a className="text-start text-decoration-none" href="#">
                      Details
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className="" lg={6} md={12} sm={12}>
              <Row className="">
                <Col className="pt-2" lg={6} md={12} sm={12}>
                  <img className="img-fluid" src={meeting} alt="" />
                </Col>
                <Col className="" lg={6} md={12} sm={12}>
                  <div className="text-justify">
                    <h3>Web development</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quibusdam impedit doloribus sapiente perspiciatis, saepe.
                    </p>
                    <a className="text-start text-decoration-none" href="#">
                      Details
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Courses;
