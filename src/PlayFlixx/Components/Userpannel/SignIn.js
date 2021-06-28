import React, {useState} from 'react';
import {Card, Form } from "react-bootstrap";
import './Login.css';
import { FcGoogle } from "react-icons/fc";
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import axios from "axios";
import history from "../Routes/history";

import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';

const Login = () => {
    const [userMail,setEmail] = useState('');
    const [userPassword, setPwd] = useState('');

    //const [cookies, setCookie] = useCookies(['user']);
    const [cookies, setCookie] = useCookies('');

 
    const handle = (value) => {
       setCookie('Email', userMail, { path: '/', expires: new Date(new Date().getTime()+ 10 * 1000) });
       setCookie('Password', userPassword, { path: '/', expires: new Date(new Date().getTime()+ 10 * 1000)});

        axios
      .post("http://194.195.113.128:8085/login",
        JSON.parse(JSON.stringify({ userMail : userMail,userPassword:userPassword})))
      .then((response) => {
        //setResponseData([...responseData, ...response.data]);
        //isNextFunc(true);
        //console.log(response.data)
        
        // const receive=response.data;
        // setData(receive);
        console.log(response)
        setCookie("JwtToken",response.data.token);
        console.log("Token : ",cookies)
        fetchData();
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
    
            

    };
    const fetchData = () => {
      axios
        .get("http://194.195.113.128:8085/id")
        .then((response) => {
          //setResponseData([...responseData, ...response.data]);
          //isNextFunc(true);
          //console.log(response.data)
          
          
          console.log("hii",response.data);
          setCookie("UserId",response.data);
          console.log(Cookies.get('UserId'));
          
        })
        .catch((error) => {
          console.log(error);
        });
    };




    return (
      <div className="Cookie">
        <div fluid id="grad1" style={{paddingTop:"5%",justifyContent:"center"}}>
  <div className="Form" style={{display:"flex", justifyContent:"center"}}>
  {/* <Row className="justify-content-center">
      <Col  style={{margin:'5%'}}> */}
      
          <Card className="text-left" style={{maxWidth:"380px",maxHeight:"420px",
          color:"black",width:"90%",height:"90%",backgroundColor:"white"}} >
              <Card.Title className="text-center">Log In</Card.Title>
          <Form style={{margin:'30px'}} onSubmit={handle}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control
                  type="email"
                  placeholder="Email"
                  name="userMail"
                  value={userMail}
                  onChange={(e) => setEmail(e.target.value)}
                />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control
                  type="password"
                  placeholder="Password"
                  name="userPassword"
                  value={userPassword}
                  onChange={(e) => setPwd(e.target.value)}
                />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember Me" />
  </Form.Group>
  <div className="row text-center">
    <div className="col">
    <Button className="block" variant="contained" type="submit"
    style={{backgroundColor:'#3A3A3A',color:'white'}} fullwidth onClick={handle}>
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
</div></div>
      
    );
  };

export default Login;
