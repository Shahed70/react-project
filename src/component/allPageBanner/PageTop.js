import React, { Component } from "react";
import { Col, Container, Row } from 'react-bootstrap'
import TopNav from "../TopNav";
export class PageTop extends Component {
  render() {
    return (
      <>
      <TopNav />
        <Container fluid className="allPageTopBanner px-0">
          <div className="allPageBannerOverlay">
            <Container className="allPageBannerContent  text-center text-light">
              <Row>
                <Col>
                  <h1 className="display-4">{this.props.pageTitle}</h1>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </>
    );
  }
}

export default PageTop;
