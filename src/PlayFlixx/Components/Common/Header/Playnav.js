import React from "react";
import { Navbar, Form, Nav, FormControl, Container } from "react-bootstrap";
// import flixlogo2 from '../flixlogo2.png';
import Flixlogo from "../../../assets/Images/CommonImages/NavbarImages/Flixlogo.png";

const Playnav = () => {
  return (
    <>
      <Container fluid>
        <Navbar bg="dark" expand="lg">
          <Nav.Link href="#home" style={{ color: "white" }}>
            <i class="fas fa-bars "></i>
          </Nav.Link>

          <Navbar.Brand href="#home" style={{ color: "white" }}>
            <img src={Flixlogo} width="150px" height="40px" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ color: "white" }}>
            <Form inline style={{ marginLeft: "840px" }}>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                style={{ borderRadius: "20px" }}
              />
            </Form>

            <Nav className="mr-auto">
              {/* <Nav.Link href="#home" style={{color:'white'}}>TV</Nav.Link>
      <Nav.Link href="#link" style={{color:'white'}}>Movies</Nav.Link> */}
              <Nav.Link href="#link" style={{ color: "white" }}>
                <i class="fas fa-bell "></i>
              </Nav.Link>
              <Nav.Link href="#link" style={{ color: "white" }}>
                <i class="fas fa-user "></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};
export default Playnav;
