import React  from "react";
import history from "../../Routes/history";
import {
  Container,
  Row,
  Col,
  Button 
} from "react-bootstrap";   
const Profile = () => { 
 

  return (
    <Container className="py-4"> 
    <Row
        className="text-center"
        style={{backgroundColor: "grey", borderRadius: "150px" }}
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
          <Button variant="primary" size="lg"  onClick={() => history.push('Upload')}>
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
