import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Form,
  FormControl,
  Modal,
  Card,
} from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

const Profile = () => {
  const classes = useStyles();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <h1>Profile_Page</h1>
      <div>
        <Row>
          <Col>
            <div style={{ position: "absolute" }}>
              {/* <input accept="image/*" className={classes.input} id="icon-button-file" type="file" /> */}
              {/* <label htmlFor="icon-button-file"> */}
              <IconButton
                style={{ color: "white" }}
                aria-label="upload picture"
                component="span"
                onClick={handleShow}
              >
                <PhotoCamera />
              </IconButton>
              {/* </label> */}
            </div>
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              alt="coverimage"
              width="100%"
              height="300px"
            />

            <>
              <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Upload Image</Modal.Title>
                </Modal.Header>

                <Card>
                  <Card.Header style={{ float: "left" }}>
                    <Button variant="outline-primary">Upload Files</Button>{" "}
                    <Button variant="outline-primary">Media Library</Button>
                  </Card.Header>
                  <Card.Body className="text-center">
                    <Card.Title>Drop files to upload</Card.Title>
                    <Card.Text className="text-muted">or</Card.Text>
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
            </>
          </Col>
        </Row>
      </div>
      <br />
      <div>
        <Row>
          <Col sm>
            <Button
              variant="primary"
              size="lg"
              style={{ borderRadius: "20px" }}
            >
              CUSTOMISE CHANNEL
            </Button>
          </Col>
          <Col sm>
            <div style={{ position: "absolute", top: "-150px", left: "70px" }}>
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  aria-label="upload picture"
                  component="span"
                  style={{
                    color: "white",
                    display: "block",
                    position: "relative",
                  }}
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </div>

            <Image
              src="https://picsum.photos/id/237/200/300"
              alt="profileimage"
              width="250px"
              height="250px"
              style={{
                position: "relative",
                top: "-150px",
                border: "2px solid blue",
              }}
              roundedCircle
            />

            <div style={{ top: "-150px" }}>
              <h2 style={{ fontFamily: "Trattatello, fantasy" }}>
                Zenberry Digitals
              </h2>
              <br />
              <h3 style={{ fontFamily: "Arial Narrow, sans-serif" }}>
                100 Subscriber
              </h3>
            </div>
          </Col>
          <Col sm>
            <Button
              variant="primary"
              size="lg"
              style={{ borderRadius: "20px" }}
            >
              MANAGE VIDEO
            </Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={10}>
            <Button variant="primary" size="lg">
              HOME
            </Button>{" "}
            <Button variant="primary" size="lg">
              VIDEOS
            </Button>{" "}
            <Button variant="primary" size="lg">
              PLAYLIST
            </Button>{" "}
            <Button variant="primary" size="lg">
              CHANNELS
            </Button>{" "}
            <Button variant="primary" size="lg">
              DISCUSSION
            </Button>{" "}
            <Button variant="primary" size="lg">
              ABOUT
            </Button>
          </Col>
          <Col sm={2}>
            <Form className="d-flex" style={{ width: "150px" }}>
              <FormControl
                style={{ backgroundColor: "black", borderRadius: "20px" }}
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
            </Form>
          </Col>
        </Row>
      </div>
      <br /> <br />
      <Row
        className="text-center"
        style={{ backgroundColor: "grey", borderRadius: "150px" }}
      >
        <Col>
          <br />
          <div>
            <i
              class="fas fa-cloud-upload-alt fa-4x"
              style={{ color: "white" }}
            ></i>
          </div>
          <br />
          <h1 style={{ color: "white" }}>UPLOAD VIDEO TO GET STARTED</h1>
          <br />
          <Button variant="primary" size="lg">
            UPLOAD VIDEO
          </Button>
          <br />
          <br />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
