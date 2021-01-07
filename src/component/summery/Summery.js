import React, { Component } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

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
                                   <Col className="my-5 py-5">
                                        <h1>100</h1>
                                        <h4>Total Projects</h4>
                                        <hr className="bg-white w-25 mx-auto" />
                                   </Col>
                                
                                <Col className="my-5 py-5">
                                        <h1>100</h1>
                                        <h4>Total Projects</h4>
                                        <hr className="bg-white w-25 mx-auto" />
                                </Col>
                               </Row>
                           </Col>
                           <Col lg={4} md={6}>
                               <Card style={{ width:'18rem' }} className="text-dark mt-5 pl-1" >
                                    <Card.Body>
                                        <Card.Title><h1>How i Work</h1></Card.Title>
                                           <Card.Text>
                                            <ul>
                                                <p className="icon-chec"><i className="fas fa-check-circle icon-check"></i> Lorem, ipsum dolor.</p>
                                                <p className="icon-chec"><i className="fas fa-check-circle icon-check"></i> Lorem, ipsum. </p>
                                                <p className="icon-chec"><i className="fas fa-check-circle icon-check"></i> Lorem, ipsum. </p>
                                                <p className="icon-chec"><i className="fas fa-check-circle icon-check"></i> Lorem, ipsum. </p>
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
        )
    }
}

export default Summery
