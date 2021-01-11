import React, { Component } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import "video-react/dist/video-react.css";
import meeting from '../../asset/images/meeting.jpg'
import { Player, BigPlayButton } from "video-react";
class Video extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <div className="modalCard text-center">
                <h2 className="modalTitle">How I DO</h2>
                <p className="desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                  nemo doloribus impedit distinctio, excepturi fugit optio
                  suscipit facilis ab voluptas ipsa hic, recusandae beatae
                  minima saepe atque sed! Architecto consectetur distinctio eius
                  iusto, suscipit, non sint, necessitatibus voluptate ut
                  excepturi repellat illum dolorem quod quasi aliquam laborum
                  quos quas enim.
                </p>
                <span variant="primary" onClick={this.handleShow}>
                  <i class="playBtn fas fa-play"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>

        <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>
            <Player
              poster={meeting}
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            > 
            <BigPlayButton position="center"/>
            </Player>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary mr-auto" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Video;
