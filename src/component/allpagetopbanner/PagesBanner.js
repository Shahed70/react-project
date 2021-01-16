import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

export class PagesBanner extends Component {
  render() {
    return (
      <>
        <Container fluid className="allPageTopBanner px-0">
          <div className="allPageBannerOverlay">
            <Container className="allPageBannerContent  text-center text-light">
              <Row>
                <Col>
                  <h1 className="display-4">{this.props.pageTitle} </h1>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </>
    );
  }
}

export default PagesBanner;
