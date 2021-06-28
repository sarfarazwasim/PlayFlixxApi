import React, { useState } from "react";
import "../../../assets/Css/CommonCss/Sidebar/SidebarComponents/SidebarComponent.css";
import "../../../assets/Css/CommonCss/Sidebar/Sidebar.css";
import appicon from "../../../assets/Images/CommonImages/HomeImages/appicon.png";
import flixicon from "../../../assets/Images/CommonImages/HomeImages/flixicon.png";
import PlayHome from "../../Play/PlayComponents/PlayHome/PlayHome";
import FlixxHome from "../../Flixx/FlixxComponents/FlixxHome/FlixxHome";
import { Container, Row, Col, Button } from "react-bootstrap";

function HomePage() {
  const [show, showState] = useState("play");
  return (
    <div>
      <div className="nav-container">
        <Container fluid>
          <Row>
            <Col>
              <Button
                variant="primary"
                size="lg"
                active
                style={{ width: "50%" }}
                onClick={() => showState("play")}
                className="play-flix-btn"
              >
                <img src={appicon} width="30px" height="30px" alt="" />
              </Button>
              <Button
                variant="primary"
                size="lg"
                active
                style={{ width: "50%" }}
                onClick={() => showState("flixx")}
                className="play-flix-btn"
              >
                <img src={flixicon} width="30px" height="30px" alt="" />
              </Button>
            </Col>
          </Row>
          <div className="play-container">
            {show === "play" && <PlayHome />}
            </div>
            <div className="flixx-container">
            {show === "flixx" && <FlixxHome />}
            </div>
        </Container>
      </div>
    </div>
  );
}

export default HomePage;
