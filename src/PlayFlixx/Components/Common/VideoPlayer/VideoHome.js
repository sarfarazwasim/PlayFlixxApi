import React, { Component } from 'react';
import Video from "./Videopage";
import Side from "./Infinite";
import Vertical from "./VertSlider"
import Playlist from "./Playlist";
import {Row,Col} from "react-bootstrap";

class App extends Component  {
  constructor(props) {
    super(props);
    this.width = window.innerWidth;
    this.state = {
      isDesktop: false 
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 768 });
  }
  
  render(){
    window.addEventListener('resize', function () { 
      
      //window.location.reload(); 
  });
  const isDesktop = this.state.isDesktop;
  if(isDesktop )
  {
    
  return (
    <div style={{marginLeft:"1%",fontFamily:"Helvetica",maxWidth:"97%"}}>
      <br></br>
      
        <Row>
          <Col sm={1} ><Vertical/></Col>
          <Col sm={2} ><Playlist/></Col>
          <Col sm={6}><Video /></Col>
          <Col sm={3} ><Side/></Col>
        </Row>
    </div>
  );
  }
  else
  {
    return (
    <div   style={{marginLeft:"1%",fontFamily:"Helvetica"}}>
      <br></br>
        <Video />
        <div style={{marginTop:"5%",zoom:"140%",marginLeft:"5%"}}><Vertical/></div>
        <div style={{zoom:"111%"}}><Playlist/></div>
        <div style={{marginTop:"5%"}}><Side/></div>
    </div>
    );
  }}
};
export default App;
