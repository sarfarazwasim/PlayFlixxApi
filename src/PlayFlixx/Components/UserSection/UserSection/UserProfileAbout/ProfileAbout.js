import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
// import coverimage from '../Assets/coverimage.jpg';
// import profileimage from '../Assets/profileimage.jpg';

const About = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container className="profile-container">
      <br />
      <div>
        <br /> <br />
        <Row>
          <Col sm={8}>
            <div style={{ textAlign: "start" }}>
              <h3>ABOUT ME :-</h3>
              <br />
              <Form>
                <Form.Control
                  styel={{ width: "300px", backgroundColor: "lightgrey" }}
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "200px" }}
                />
              </Form>
            </div>
          </Col>

          <Col sm={4}>
            <div style={{ textAlign: "start" }}>
              <h3>STATUS :-</h3>
              <br />
              <>
                <Button variant="primary" className="edit-button" onClick={handleShow}>
                  Edit
                </Button>

                <Modal
                  show={show}
                  onHide={handleClose}
                  animation={false}
                  className="update-modal"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Edit Status</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Contact No:"
                        />
                        <Form.Text className="text-muted">
                          We'll never share your Contact number with anyone
                          else.
                        </Form.Text>
                      </Form.Group>
                      <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="Address Line 1" />
                      </Form.Group>

                      <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Address Line 2" />
                      </Form.Group>

                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                          <Form.Label>City</Form.Label>
                          <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Label>State</Form.Label>
                          <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>Maharashtra</option>
                            <option>Karnataka</option>
                            <option>Madya Pradesh</option> 
                          </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                          <Form.Label>Zip</Form.Label>
                          <Form.Control />
                        </Form.Group>
                      </Form.Row>

                      <fieldset>
                        <Form.Group as={Row}>
                          <Form.Label as="legend" column sm={2}>
                            Gender
                          </Form.Label>
                          <Col sm={10}>
                            <Form.Check
                              type="radio"
                              label="Male"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                            <Form.Check
                              type="radio"
                              label="Female"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios2"
                            />
                            <Form.Check
                              type="radio"
                              label="Other"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios3"
                            />
                          </Col>
                        </Form.Group>
                      </fieldset>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={handleClose}
                      >
                        Update
                      </Button>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
              <br />
              <h5 style={{ borderBottom: "1px solid grey" }}>
                JOINED ON 10 JUNE 2021
              </h5>
              <h5 style={{ borderBottom: "1px solid grey" }}>12 CHANNELS</h5>
              <h5 style={{ borderBottom: "1px solid grey" }}>55 VIDEOS</h5>
              <h5 style={{ borderBottom: "1px solid grey" }}>MALE</h5>
              <h5 style={{ borderBottom: "1px solid grey" }}>MUMBAI,INDIA</h5>
              <h5 style={{ borderBottom: "1px solid grey" }}>
                Contact No: +91 9999999999
              </h5>
              <h5 style={{ borderBottom: "1px solid grey" }}>
                Email Id: abc@mail.com
              </h5>
            </div>
          </Col>
        </Row>
      </div>
      <br />
      <br />
      <br />
      <div>
        <Button variant="primary" size="lg" style={{ borderRadius: "20px" }}>
          Submit
        </Button>
      </div>
    </Container>
  );
};

export default About;
