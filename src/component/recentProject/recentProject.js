import React, { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import card from '../../asset/images/card.jpg'
class recentProject extends Component {
  render() {
    return (
      <>
        <Container className="my-5 text-center">
        <h1 className="projectTitle">Recent Projects</h1>
          <Row >
            <Col lg={4} md={4} sm={12}>
              <Card style={{ width: "18rem" }}>
                <Card.Img className="img-fluid" variant="top"  src={card} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={4} sm={12} className="">
            <Card style={{ width: "18rem" }}>
                <Card.Img className="img-fluid" variant="top" src={card} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={4} sm={12}>
            <Card style={{ width: "18rem" }}>
                <Card.Img className="img-fluid" variant="top" src={card} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default recentProject;
