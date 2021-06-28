import React, { Component } from 'react';
import Video from "./Videopage";
import Side from "./Infinite";
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
          <Col sm={8} ><Video /></Col>
          <Col sm={4} ><Side/></Col>
        </Row>
    </div>
  );
  }
  else
  {
    return (
    <div style={{marginLeft:"1%"}}>
      <br></br>
        <Video />
        <br></br>
        <Side/>
    </div>
    );
  }}
};
export default App;
