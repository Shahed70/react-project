import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Chart from './Chart'
class Analysis extends Component {
    render() {
        return (
            <>
               <Container className="my-5 text-center">
                   <Row className="my-5 py-5">
                       <Col>
                           <h1 className="display-4 text-uppercase text-primary">Technology Used</h1>
                       </Col>
                   </Row>
                   <Row>
                       <Col lg={6} style={{ width:'100%', height:'300px'}} >
                            <Chart />
                       </Col>
                       <Col lg={6}>
                                <p className="des">To build native android apps i use Java as well as kotline       mainly. React JS is used for cross platform mobile application. I   use MySQL database for relational database system. To build NoSQL   application i use MongoDB.</p>
                                <p className="des">
                                Firebase database system is used where it is necessary to provide realtime data flow facilities. I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application.</p>
                                <p className="des">
                                According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section. Application security is a big deal for commercial application.I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk.</p>
                        </Col>
                   </Row>
               </Container> 
            </>
        )
    }
}

export default Analysis
