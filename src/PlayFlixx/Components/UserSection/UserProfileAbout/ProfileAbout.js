import React, {useEffect,useState} from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import axios from "axios";
import history from "../../Routes/history";
import Cookies from 'js-cookie';

function About() {
  let [datas, setData] = useState('');
  let [userBio, setBio] = useState();
  let [myobj, setObj] = useState('');
  useEffect(() => {
    fetchData();
}, []);

const changeHandler = (e) => {
  setBio(e.target.value);
  setObj (JSON.parse(JSON.stringify({userBio: e.target.value})));
};
const fetchData = () => {
  axios
    .get("http://194.195.113.128:8085/aboutme/"+Cookies.get('UserId'))
    .then((response) => {
      //setResponseData([...responseData, ...response.data]);
      //isNextFunc(true);
      //console.log(response.data)
      
      const receive=response.data;
      setData(receive);
      console.log("dat",datas)
      
      console.log( "user", Cookies.get('UserId'));
    })
    .catch((error) => {
      console.log(error);
    });
};

const sendData = () => {
  
  console.log(myobj);
  axios
    .put("http://194.195.113.128:8085/aboutme/"+Cookies.get('UserId'),myobj)
    .then(() => {
      //setResponseData([...responseData, ...response.data]);
      //isNextFunc(true);
      //console.log(response.data)
      //console.log(userBio);
    })
    .catch((error) => {
      console.log(error);
    });
};
 

  return (
    <Container className="profile-container">
      <br />
      <div> 
        <Row>
          <Col sm={8}>
            <div style={{ textAlign: "start" }}>
            {}
              <h3>ABOUT ME :-</h3>
              <br />
              <Form>
              <Form.Control
                  styel={{ width: "300px", backgroundColor: "lightgrey" }}
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "300px" }}
                  value={userBio}
                  name="userBio"
                  onChange={changeHandler}
                />
              </Form>
            </div>
          </Col>

          <Col sm={4}>
            <div style={{ textAlign: "start" }}>
              <h3>STATUS :-</h3>
              <br /> 
                <Button 
                  variant="primary"
                  className="edit-button btn-width" 
                  onClick={() => history.push("EditStatus")}
                >
                  Edit
                </Button>
                
                <br /> 
              <h5 style={{ borderBottom: "1px solid grey" }}>
                JOINED ON <span> {datas[7]} </span>
              </h5>
              <h5 style={{ borderBottom: "1px solid grey" }}>12 CHANNELS</h5>
              <h5 style={{ borderBottom: "1px solid grey" }}>55 VIDEOS</h5>
              <h5 style={{ borderBottom: "1px solid grey" }}>MALE</h5>
              <h5 style={{ borderBottom: "1px solid grey" }}>
                <span> {datas[4]}, </span>
                <span> {datas[5]}, </span>
                <span> {datas[3]} </span></h5>
              <h5 style={{ borderBottom: "1px solid grey" }}>
                Contact No: <span> {datas[2]} </span>
              </h5>
              <h5 style={{ borderBottom: "1px solid grey" }}>
                Email Id: <span> {datas[1]} </span>
              </h5>
            </div>
          </Col>
        </Row>
      </div>
      <br />
      <br />
      <br />
      <div className="about-submit-btn">
        <Button className="edit-button btn-width"  variant="primary" size="lg" style={{ borderRadius: "20px" }}
        type="submit" onClick={sendData}>
          Submit
        </Button>
      </div>
    </Container>
  );
};

export default About;
