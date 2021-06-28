import React from "react";
import "../../../assets/Css/CommonCss/Videopage/Videopage.css";
import Video from "./Video"
import { Row,Col,Dropdown} from "react-bootstrap";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AiOutlineLike,AiOutlineDislike,AiOutlineShareAlt,AiOutlineStar } from "react-icons/ai";

function App() {
  let width = window.innerWidth;
  if(width > 768)
  {
  return (
    <div style={{fontFamily:"Helvetica"}}>
      <div><Video/></div>
      <br></br>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <span>#TAG</span>
        <span style={{}}>
          <button style={{backgroundColor:"red",borderRadius:"10px",
        border:"0px"}}>SUBSCRIBE</button>
        </span>
      </div>
      <div style={{fontWeight:"bold"}}>
        VIDEO TITLE
      </div>
      <br></br>
      <br></br>
      <div style={{}}>
        <Row>
          <Col  style={{paddingTop:"2.5%"}}>100 views</Col>
          <Col  ><button style={{backgroundColor:"transparent",zoom:"150%",
          borderColor:"transparent",border:"0px solid"}}>
            <AiOutlineLike/></button>800</Col>
          <Col  ><button style={{backgroundColor:"transparent",zoom:"150%",
          borderColor:"transparent",border:"0px solid"}}><AiOutlineDislike/></button>800</Col>
          <Col ><button style={{backgroundColor:"transparent",zoom:"150%",
          borderColor:"transparent",border:"0px solid"}}><AiOutlineShareAlt /></button></Col>
          <Col  ><button style={{backgroundColor:"transparent",zoom:"150%",
          borderColor:"transparent",border:"0px solid"}}><AiOutlineStar/></button></Col>
        </Row>
      </div>
      <div style={{ borderTop: "2px solid #fff " }}></div>
      <br></br>
      <div>
        DESCRIPTION
      </div>
      <div style={{ borderTop: "2px solid #fff " ,marginTop:"1%"}}></div>
      <div style={{marginTop:"1%"}}>
      Stunning Blog Website, It's Free! Mobile optimized. Advanced
      image editor. Market leaders. SEO wizard. Free multilingual
      fonts. 100s of templates. Social media compatible. Custom
      domain name. 1000s of free images. Customizable online store.
      </div>
      <br></br>
      <div style={{ borderTop: "2px solid #fff " }}></div>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <input type="textbox" placeholder="COMMENT" style={{padding:"2%",
      marginTop:"1%", width:"80%"}} />
      <span style={{paddingTop:"40px"}}>
          <button style={{backgroundColor:"red",borderRadius:"10px",
        border:"0px"}}>SUBMIT</button>
        </span>
      </div>
      <div style={{ borderTop: "2px solid #fff " ,marginTop:"2%"}}></div>
      <div style={{ textAlign:"right",marginTop:"2%",fontSize:"small"}}>
        COMMENT ON/OFF 
        <span style={{zoom:"15%",marginLeft:"2%",paddingTop:"5%",top:"19%",marginRight:"2%"}}>
          <input type="checkbox"/>
          </span>
      </div>
      <div style={{display:"flex"}}>
        <span style={{marginTop:"1%",marginLeft:"-0%"}}>1476 COMMENTS</span>
        <span>
        <Dropdown style={{backgroundColor:"transparent",marginLeft:"5%"}}>
          <Dropdown.Toggle variant="success" id="dropdown-basic"
            style={{backgroundColor:"transparent",border:"0px"}}>
            Sort By
          </Dropdown.Toggle>

         <Dropdown.Menu style={{backgroundColor:"#0c111b",color:"white"}}>
          <Dropdown.Item href="#/action-1" style={{color:"white"}}>Relevance</Dropdown.Item>
          <Dropdown.Item href="#/action-2" style={{color:"white"}}>Date</Dropdown.Item>
          <Dropdown.Item href="#/action-3" style={{color:"white"}}>Popular</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </span>
      </div>
    </div>
  );
  }
  if(width <= 768)
  {
  return (
    <div style={{fontFamily:"Helvetica"}}>
      <div ><Video/></div>
      <br></br>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <span>#TAG</span>
        <span style={{}}>
          <button style={{backgroundColor:"red",borderRadius:"30px",
        border:"0px",fontSize:"small"}}>SUBSCRIBE</button>
        </span>
      </div>
      <div style={{fontWeight:"bold"}}>
        VIDEO TITLE
      </div>
      <br></br>
      <br></br>
      <div style={{zoom:"80%"}}>
        <Row>
          <Col  style={{paddingTop:"2.5%"}}>100 views</Col>
          <Col  ><button style={{backgroundColor:"transparent",zoom:"150%",
          borderColor:"transparent",border:"0px solid"}}><AiOutlineLike/></button>
          <span style={{display:"flex",justifyContent:"space-around"}}>800</span></Col>
          <Col  ><button style={{backgroundColor:"transparent",zoom:"150%",
          borderColor:"transparent",border:"0px solid"}}><AiOutlineDislike/></button>
          <span style={{display:"flex",justifyContent:"space-around"}}>800</span></Col>
          <Col ><button style={{backgroundColor:"transparent",zoom:"150%",
          borderColor:"transparent",border:"0px solid"}}><AiOutlineShareAlt /></button>
          <span style={{display:"flex",justifyContent:"space-around"}}>Share</span></Col>
          <Col  ><button style={{backgroundColor:"transparent",zoom:"150%",
          borderColor:"transparent",border:"0px solid"}}><AiOutlineStar/></button>
          <span style={{display:"flex",justifyContent:"space-around"}}>Save</span></Col>
        </Row>
      </div>
      <div style={{ borderTop: "2px solid #fff ",marginTop:"2%" }}></div>
      <div>
      <Accordion style={{backgroundColor:"transparent",color:"#f9f9f9",marginLeft:"-4%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"#f9f9f9"}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontWeight:"bold",fontFamily:"inherit"}}>DESCRIPTION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontFamily:"inherit"}}>
          Stunning Blog Website, It's Free! Mobile optimized. Advanced
      image editor. Market leaders. SEO wizard. Free multilingual
      fonts. 100s of templates. Social media compatible. Custom
      domain name. 1000s of free images. Customizable online store.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div style={{ borderTop: "2px solid #fff " }}></div>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <input type="textbox" placeholder="COMMENT" style={{padding:"2%",
      marginTop:"2%", width:"70%"}} />
      <span style={{paddingTop:"40px"}}>
          <button style={{backgroundColor:"red",borderRadius:"30px",
        border:"0px",fontSize:"small"}}>SUBMIT</button>
        </span>
      </div>
      <div style={{ borderTop: "2px solid #fff " ,marginTop:"3%"}}></div>
      <div style={{ textAlign:"right",marginTop:"2%",fontSize:"small"}}>
        COMMENT ON/OFF 
        <span style={{zoom:"15%",marginLeft:"2%",paddingTop:"5%",top:"19%",marginRight:"2%"}}>
          <input type="checkbox"/>
          </span>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",fontSize:"small"}}>
        <span style={{marginTop:"2%",marginLeft:"-0%"}}>1476 COMMENTS</span>
        <span>
        <Dropdown style={{backgroundColor:"transparent"}}>
  <Dropdown.Toggle variant="success" id="dropdown-basic"
   style={{backgroundColor:"transparent",border:"0px",fontSize:"small"}}>
    Sort By
  </Dropdown.Toggle>

  <Dropdown.Menu style={{backgroundColor:"#0c111b",color:"white"}} >
    <Dropdown.Item href="#/action-1" style={{color:"white"}}>Relevance</Dropdown.Item>
    <Dropdown.Item href="#/action-2" style={{color:"white"}}>Date</Dropdown.Item>
    <Dropdown.Item href="#/action-3" style={{color:"white"}}>Popular</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        </span>
      </div>
      
      <div style={{ borderTop: "2px solid #fff " ,marginTop:"2%"}}></div>
    </div>
  );
  }
}
export default App;
