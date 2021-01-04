import React, { Component } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import '../asset/css/style.css'
import TopNav from './TopNav'
class TopBanner extends Component {
    render() {
        return (
            <>
                <Container fluid className="topBanner px-0">
                    <TopNav />
                <div className="overlay">
                    <Container className="topContent  text-center text-light">
                        <Row>
                            <Col>
                                <h1 className="display-4">SOFTWARE ENGINEER</h1>
                                <h4 className="lead">Mobile & Web Application</h4>
                                <Button>More Info</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                </Container> 
            </>
        )
    }
}

export default TopBanner
