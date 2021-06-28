import React, { useState } from "react";  
import "../../../assets/Css/CommonCss/UserSection/VideoSection.css"; 
//import AddCircleIcon from "@material-ui/icons/AddCircle";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav"; 
import Profile from "../UserProfile/ProfilePage";
import ProfileAbout from "../UserProfileAbout/ProfileAbout";
import Channel from "../UserProfileChannel/ChannelSec";
import Play from "../UserProfilePlay/PlaySec";
import Discussion from "../UserProfileDiscussion/DiscusSec";
import UserVideo from "../UserVideo/UserVideo";
import IconButton from "@material-ui/core/IconButton";

import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {
  Container,
  Row,
  Col,
  Button,
  Image, 
  Modal,
  Card,
} from "react-bootstrap";
//import UploadVideo from "../UserUploadVideo/UploadVideo"; 

function VideoSection() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const imgSrc = "https://picsum.photos/1466/500";
 
  return (
    <div className="video-section-body">
      <div style={{position:'absolute'}}>
      {/* <input accept="image/*" className={classes.input} id="icon-button-file" type="file" /> */}
      {/* <label htmlFor="icon-button-file"> */}
        <IconButton style={{color:'white'}} aria-label="upload picture" component="span" onClick={handleShow}>
          <PhotoCamera />
        </IconButton>
      {/* </label> */}
      </div>
      <Image className="banner-image pt-2" src={imgSrc} fluid />
      <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Upload Image</Modal.Title>
                </Modal.Header>

                <Card className="modal-card">
                  <Card.Header style={{ float: "left" }}>
                    <Button variant="outline-primary">Upload Files</Button>{" "}
                    <Button variant="outline-primary">Media Library</Button>
                  </Card.Header>
                  <Card.Body className="text-center">
                    <Card.Title className="drop-file-title">Drop files to upload</Card.Title>
                    <Card.Text className="text-muted modal-text-or">or</Card.Text>
                    <Button variant="outline-primary">Select Files</Button>
                    <br /> <br />
                    <Card.Text className="text-muted">
                      Maximun upload file size : 512 MB.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    <Button
                      variant="outline-secondary"
                      style={{ float: "right" }}
                    >
                      Add to gallery
                    </Button>
                  </Card.Footer>
                </Card>
              </Modal>
      <Container fluid={true}>
        <Row>
          <Col xs={4} className="profile-bar-align">
            <Button
              variant="primary"
              className="mt-4"
              size="lg" 
            >
              Customise Channel
            </Button>
          </Col>
          <Col xs={4} className="profile-pic-column">
            <div>
              <Image
                className="profile-image"
                src="https://picsum.photos/200/200"
                roundedCircle
              />
            </div>
            <h1>Zenberry Digitals</h1>
            <h2>100 Subscribers</h2>
          </Col>
          <Col xs={4} className="profile-bar-align">
            <Button variant="primary" className="mt-4" size="lg">
              Manage Video
            </Button>
          </Col>
        </Row>
          
        <Row>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="tab-container">
              <Col sm={12}>
                <Nav className="tabs-container">
                  <Nav.Item>
                    <Nav.Link eventKey="profile">
                      <Button variant="primary" className="tab-btn">
                        Home
                      </Button>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="videos">
                      <Button variant="primary" className="tab-btn">
                        Videos
                      </Button>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="play">
                      <Button variant="primary" className="tab-btn">
                        Playlist
                      </Button>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="channel">
                      <Button variant="primary" className="tab-btn">
                        Channels
                      </Button>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="discussion">
                      <Button variant="primary" className="tab-btn">
                        Discussion
                      </Button>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="about">
                      <Button variant="primary" className="tab-btn">
                        About
                      </Button>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <form id="demo-2" className="mt-2">
	                        <input type="search" placeholder="Search" />
                    </form>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={12}>
                <Tab.Content className="tab-content">
                  <Tab.Pane eventKey="profile">
                    <Profile />
                  </Tab.Pane>
                  <Tab.Pane eventKey="videos">
                    <UserVideo />
                  </Tab.Pane>
                  <Tab.Pane eventKey="play">
                    <Play />
                  </Tab.Pane>
                  <Tab.Pane eventKey="first"></Tab.Pane>
                  <Tab.Pane eventKey="channel">
                    <Channel />
                  </Tab.Pane>
                  <Tab.Pane eventKey="discussion">
                    <Discussion />
                  </Tab.Pane>
                  <Tab.Pane eventKey="about">
                    <ProfileAbout />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Row>
        <Row className="buttons-container"></Row>
        <Row className="upload-section"></Row>
      </Container>
    </div>
  );
}

export default VideoSection;
