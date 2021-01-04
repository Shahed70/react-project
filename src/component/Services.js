import React, { Component } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import '../asset/css/style.css'
import pirat from '../asset/images/Piratpartiet.svg'
class Services extends Component {
    render() {
        return (
            <>
              <Container className="my-5 text-center">
                  <Row className="my-3">
                      <Col>
                        <h1 className="display-4 text-uppercase text-primary">My Services</h1>
                      </Col>
                  </Row>
                 <Row className="my-5">
                     <Col lg={4} md={6}>
                         <Card className="hoverStyle">
                            <Card.Body>
                                <img style={{ width:'100', height:'100' }} src={pirat} alt=""/>
                                <h2>Web Development</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus molestiae at adipisci recusandae officia porro nisi cupiditate repellendus hic in.</p>
                            </Card.Body>
                         </Card>
                         </Col>
                     <Col lg={4} md={6}>
                     <Card className="hoverStyle">
                            <Card.Body>
                                <img style={{ width:'100', height:'100' }} src={pirat} alt=""/>
                                <h2>Web Development</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus molestiae at adipisci recusandae officia porro nisi cupiditate repellendus hic in.</p>
                            </Card.Body>
                         </Card>
                     </Col>
                     <Col lg={4} md={6}>
                     <Card className="hoverStyle">
                            <Card.Body>
                                <img style={{ width:'100', height:'100' }} src={pirat} alt=""/>
                                <h2>Web Development</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus molestiae at adipisci recusandae officia porro nisi cupiditate repellendus hic in.</p>
                            </Card.Body>
                         </Card>
                     </Col>
                </Row>    
              </Container>  
            </>
        )
    }
}

export default Services
