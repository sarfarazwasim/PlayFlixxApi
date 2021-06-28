import React  from "react";  
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; 
import Button from "react-bootstrap/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";  
import history from "../../Routes/history";
function UserVideo() {
  
  return (
    <div>
      <div>
        <Container className="py-5 upload-container" fluid={true}>
         <Row className="add-container">
            <Col xs={4} className="bar-align">
              <Button onClick={() => history.push('Upload')}  className="upload-btn-add" variant="primary" size="lg">
                Upload
              </Button> 
            </Col>
            <Col xs={4} className="bar-align">
              <Button variant="light" className="add-circle-btn">
                <AddCircleIcon />
              </Button>
            </Col>
            <Col xs={4} className="bar-align">
              <Button className="live-btn" variant="primary" size="lg">
                Live
              </Button>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col sm={2}>
              <h3>Video</h3>
            </Col>
            <Col sm={2}>
              <h3>Visibility</h3>
            </Col>
            <Col sm={2}>
              <h3>Date<i class="fas fa-long-arrow-alt-down"></i></h3>
            </Col>
            <Col sm={2}>
              <h3>Views</h3>
            </Col>
            <Col sm={2}>
              <h3>Comments</h3>
            </Col>
            <Col sm={2}>
              <h3>Age</h3>
            </Col>
          </Row>
          <Row className="upload-btn-container">
            <h1>No Content Available</h1>

            <Button className="upload-button" variant="primary" size="lg" onClick={() => history.push('Upload')}>
              Upload Video
            </Button>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default UserVideo;
