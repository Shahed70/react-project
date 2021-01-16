import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
class Summery extends Component {
  render() {
    return (
      <>
        <Container fluid className="summeryBanner px-0 ">
          <div className="summeryOverlay">
            <Container className="">
              <Row>
                <Col lg={8} md={6}>
                  <Row className="text-center text-light">
                    <Col className="my-5 pt-5">
                      <h1>
                        <CountUp start={0} end={100}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall> 
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h1>
                      <h4>Total Projects</h4>
                      <hr className="bg-white w-25 mx-auto" />
                    </Col>

                    <Col className="my-5 pt-5">
                      <h1>
                      <CountUp start={0} end={100}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall> 
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h1>
                      <h4>Total Projects</h4>
                      <hr className="bg-white w-25 mx-auto" />
                    </Col>
                  </Row>
                </Col>
                <Col lg={4} md={6} className="mb-2 d-non">
                  <Card
                    className="text-dark mt-5 pl-1"
                  >
                    <Card.Body>
                      <Card.Title>
                        <h1>How i Work</h1>
                      </Card.Title>
                      <Card.Text>
                        <ul>
                          <p>
                            <i className="fas fa-check-circle icon-check"></i>
                            Lorem, ipsum dolor.
                          </p>
                          <p >
                            <i className="fas fa-check-circle icon-check"></i>
                            Lorem, ipsum.
                          </p>
                          <p>
                            <i className="fas fa-check-circle icon-check"></i>
                            Lorem, ipsum.
                          </p>
                          <p>
                            <i className="fas fa-check-circle icon-check"></i>
                            Lorem, ipsum.
                          </p>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </>
    );
  }
}

export default Summery;
