import React from "react";
import axios from "axios";

import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userMail: "",
      userPassword: "",
      userName:"",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://194.195.113.128:8085/register", this.state)
      .then((response) => {
        this.props.history.push("/HomePage");
        //this.token=response;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userMail, userPassword, userName} = this.state;

  return (
    <div fluid id="grad1" style={{marginTop:"-2%",justifyContent:"center"}}>
    <div className="Form" style={{display:"flex", justifyContent:"center"}}>
    {/* <Row className="justify-content-center">
        <Col  style={{margin:'5%'}}> */}
        
            <Card className="text-left" style={{maxWidth:"380px",maxHeight:"500px",
            color:"black",width:"90%",height:"90%"}} >
                <Card.Title className="text-center">Register</Card.Title>
            <Form style={{margin:'30px'}} onSubmit={this.handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" 
    value={userName}
    name="userName"
    onChange={this.changeHandler}/>
  </Form.Group>


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

<Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember Me" />
  </Form.Group>

  <div className="row text-center">
    <div className="col">
    <Button className="block" variant="contained" type="submit"
    style={{backgroundColor:'#3A3A3A',color:'white'}} fullwidth>
        Create Account
      </Button>
  </div>
  </div>

    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
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
      </Form.Text> */}
  </Form>
           
            </Card>
  
            
        {/* </Col>
  
    </Row> */}
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </div>
//     <Container fluid id="grad1" style={{marginTop:"-2%"}}>
//   <div className="Form">
//   <Row className="justify-content-center">
//       <Col xs={4} style={{margin:'20px'}}>
//           <Card className="text-left" style={{width:"100%",height:"100%",color:"black"}} >
//               <Card.Title className="text-center">Register</Card.Title>
//           <Form style={{margin:'30px'}} onSubmit={this.handleSubmit}>

//     <Form.Group className="mb-3" controlId="formBasicName">
//     <Form.Label>Name</Form.Label>
//     <Form.Control type="text" placeholder="Enter Name" 
//     value={userName}
//     name="userName"
//     onChange={this.changeHandler}/>
//   </Form.Group>


//   <Form.Group className="mb-3" controlId="formBasicEmail">
//     <Form.Label>Email address</Form.Label>
//     <Form.Control  placeholder="Enter email" 
//     type="text"
//     value={userMail}
//     name="userMail"
//     onChange={this.changeHandler}/>
    
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control  placeholder="Password" 
//     type="password"
//     value={userPassword}
//     name="userPassword"
//     onChange={this.changeHandler}/>

// <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label>Confirm Password</Form.Label>
//     <Form.Control type="password" placeholder="Password" />
//   </Form.Group>

//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicCheckbox">
//     <Form.Check type="checkbox" label="Remember Me" />
//   </Form.Group>

  // <div className="row text-center">
  //   <div className="col">
  //   <Button className="block" variant="contained" type="submit"
  //   style={{backgroundColor:'#3A3A3A',color:'white'}} fullwidth>
  //       Create Account
  //     </Button>
  // </div>
  // </div>
// </Form>
//           </Card>
//       </Col>
//   </Row>
//   </div>
// </Container>
  );
}
}

export default Register;
