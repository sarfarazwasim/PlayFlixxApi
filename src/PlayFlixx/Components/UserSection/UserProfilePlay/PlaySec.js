import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import history from "../../Routes/history";

const Play = () => {
  return (
    <Container>
      <br /> <br />
      <Row>
        <Col sm>
          <div className="text-left">
            <Button
              className="btn-width"
              variant="primary" 
              size="lg"
              onClick={() => history.push("CreatPlaylist")}
            >
              <i class="fas fa-plus-circle"></i> CREATE
            </Button>
          </div>
        </Col>
      </Row>
      <br /> <br />
      <Row>
        <Col>
          <h5>
            CHANNELS <i class="fas fa-long-arrow-alt-down"></i>
          </h5>
        </Col>
        <Col>
          <h5>
            SUBSCRIBER <i class="fas fa-long-arrow-alt-down"></i>
          </h5>
        </Col>
        <Col>
          <h5>
            DATE <i class="fas fa-long-arrow-alt-down"></i>
          </h5>
        </Col>
        <Col>
          <h5>
            VIEW <i class="fas fa-long-arrow-alt-down"></i>
          </h5>
        </Col>
        <Col>
          <h5>
            LAST UPDATED <i class="fas fa-long-arrow-alt-down"></i>
          </h5>
        </Col>
        <Col>
          <h5>
            VIDEO COUNT <i class="fas fa-long-arrow-alt-down"></i>
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default Play;
