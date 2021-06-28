import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "../../../../assets/Css/CommonCss/Sidebar/SidebarComponents/SidebarComponent.css";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import Flixlogo from "../../../../assets/Images/CommonImages/NavbarImages/Flixlogo.png";
import "../../../Routes/history"; 
import { Navbar, Form, Nav, FormControl } from "react-bootstrap";
function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);  

  return (
    <div className={sidebar ? "nav-container active" : "nav-container"}>
      <IconContext.Provider value={{ color: "#ffffff" }}>
        <div className="sidebar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Navbar className="navbar-header" expand="lg" variant="dark">
            <Navbar.Brand className="mx-4" href="/" style={{ color: "white" }}>
              <img
                src={Flixlogo}
                className="logo-img"
                width="150px"
                height="40px"
                alt=""
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              className="navbar-form"
              id="basic-navbar-nav"
              style={{ color: "white" }}
            >
              <Form inline style={{ marginLeft: " " }}>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2 search-form-input"
                  style={{ borderRadius: "20px" }}
                />
                {/* <Nav.Link href="#home" style={{color:'white'}}>TV</Nav.Link>
                <Nav.Link href="#link" style={{color:'white'}}>Movies</Nav.Link> */}

                <Nav.Link href="#link" style={{ color: "white" }}>
                  <i class="fas fa-bell"></i>
                </Nav.Link>
                <Nav.Link href="/Login" style={{ color: "white" }}>
                  <i class="fas fa-user"></i>
                </Nav.Link>
              </Form>

              <Nav className="mr-4"></Nav>
            </Navbar.Collapse>
          </Navbar>
        </div> 

        {/*<Container fluid>
          <Row>
            <Col>
              <Button
                variant="primary"
                size="lg"
                active
                style={{ width: "50%" }}
                onClick={() => showState("play")}
              >
                <img src={appicon} width="30px" height="30px" alt="" />
              </Button>
              <Button
                variant="primary"
                size="lg"
                active
                style={{ width: "50%" }}
                onClick={() => showState("flixx")}
              >
                <img src={flixicon} width="30px" height="30px" alt="" />
              </Button>
            </Col>
          </Row>
          <div>{show === "play" && <PlayHome />}</div>
          <div>{show === "flixx" && <FlixxHome />}</div>
        </Container>*/}

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="item-title">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Sidebar;
