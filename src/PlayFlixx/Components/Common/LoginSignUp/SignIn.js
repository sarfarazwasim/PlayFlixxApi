
import React from "react";
import {Card, Form } from "react-bootstrap";
import '../../../assets/Css/CommonCss/LoginSignUp/Login.css';
import { FcGoogle } from "react-icons/fc";
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import axios from "axios";
import history from "../../Routes/history";
class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userMail: "",
      userPassword: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://194.195.113.128:8085/login", this.state)
      .then((response) => {
        history.push("/");
        //this.token=response;
        console.log(response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userMail, userPassword } = this.state;

    return (
      
        <div fluid id="grad1" style={{paddingTop:"5%",justifyContent:"center"}}>
  <div className="Form" style={{display:"flex", justifyContent:"center"}}>
  {/* <Row className="justify-content-center">
      <Col  style={{margin:'5%'}}> */}
      
          <Card className="text-left" style={{maxWidth:"380px",maxHeight:"420px",
          color:"black",width:"90%",height:"90%",backgroundColor:"white"}} >
              <Card.Title className="text-center">Log In</Card.Title>
          <Form style={{margin:'30px'}} onSubmit={this.handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  placeholder="Enter email" 
    type="text"
    value={userMail}
    name="userMail"
    onChange={this.changeHandler}/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  placeholder="Password" 
    type="password"
    value={userPassword}
    name="userPassword"
    onChange={this.changeHandler}/>

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember Me" />
  </Form.Group>
  <div className="row text-center">
    <div className="col">
    <Button className="block" variant="contained" type="submit"
    style={{backgroundColor:'#3A3A3A',color:'white'}} fullwidth>
        Log In
      </Button>
  </div>
  </div>
  
  <Form.Text className="text-muted" style={{float:'right'}}>
       <a href="#h">Forgot Password ?</a>
    </Form.Text>
</Form>
         <div className="row text-center" xs="auto">
          <div className="col" style={{zoom:"200%",marginTop:"-2%"}}>
           <FcGoogle/>
          </div>
          <div className="col">
           <FacebookIcon
           style={{color:'#4267B2',fontSize: 40}}
           />
          </div>
          <div className="col">
           <TwitterIcon
           style={{color:'#1DA1F2',fontSize: 40}}
           />
          </div>
          </div>
          <br></br>
          </Card>

          
      {/* </Col>

  </Row> */}
  </div>
  <br></br>
  <br></br>
</div>
      //</Container>
      
    );
  }
}

export default login;
