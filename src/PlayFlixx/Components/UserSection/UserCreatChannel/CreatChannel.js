import React,{useState} from "react";
import "../../../assets/Css/CommonCss/UserSection/CreatPlaylist.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import history from "../../Routes/history";
import axios from "axios";
import Cookies from 'js-cookie';

function CreatChannel() {

  let [ChannelName, setName] = useState('');
  let [ChannelDescription, setDesc] = useState('');
  let [ProfilePic, setImg] = useState();
  let [CoverPic, setPoster] = useState();

  const handle = () => {
      console.log(JSON.parse(
    JSON.stringify({ ChannelName : ChannelName,ProfilePic:ProfilePic,
      ChannelDescription : ChannelDescription, CoverPic:CoverPic})),Cookies.get('JwtToken'))
    //history.push("/UserAccounts")
    let tok="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5dHkiLCJleHAiOjE2MjQ3NTEwNjksImlhdCI6MTYyNDcxNTA2OX0.4CNkivJuxoNCpa4qyjra4CCqzuYaxSZOrdatO_uQk1A"
     axios
   .post("http://194.195.113.128:8085/createchannel/2/3",
   {
    headers: {
        'authorization': tok,
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
    }}
,
   JSON.parse(
    JSON.stringify({ ChannelName : ChannelName,ProfilePic:ProfilePic,
     ChannelDescription : ChannelDescription, CoverPic:CoverPic})))
   .then((response) => {
     console.log(response);
     history.push("/")
   })
   .catch((error) => {
     console.log(error);
   });
 
         

 };


  return (
    <div className="playlist-page-container pt-5">
      <h1 className="playlist-header">CREATE CHANNEL</h1>
      <Button
        variant="primary"
        className="back-btn"
        onClick={() => history.push("/UserAccounts")}
      >
        <ArrowBackIcon />
      </Button>

      <Form className="p-5">
        <Form.Group as={Row} controlId="">
          <Form.Label column sm="3">
            CHANNEL NAME
          </Form.Label>
          <Col sm="7">
            <Form.Control
              className="input-box p-2"
              plaintext
              placeholder="ENTER CHANNEL NAME"
              value={ChannelName}
              name="ChannelName"
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="">
          <Form.Label column sm="3">
            CHANNEL DISCRIPTION
          </Form.Label>
          <Col sm="7">
            <Form.Control
              as="textarea"
              plaintext
              placeholder="ENTER CHANNEL DISCRIPTION"
              className="input-box p-2"
              value={ChannelDescription}
              name="ChannelDescription"
              onChange={(e) => setDesc(e.target.value)}
            />
          </Col>
        </Form.Group> 
        <Form.Group as={Row} controlId="">
          <Form.Label column sm="3">
            UPLOAD CHANNEL POSTER HERE
          </Form.Label>
          <Col sm="3">
            <div class="upload-btn-wrapper">
              <Button className="upload-button">Upload</Button>
              <input type="file" name="myfile" 
              value={ProfilePic}
              name="ProfilePic"
              onChange={(e) => setImg(e.target.value)}/>
            </div>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="">
          <Form.Label column sm="3">
            UPLOAD CHANNEL POSTER HERE
          </Form.Label>
          <Col sm="3">
            <div class="upload-btn-wrapper">
              <Button className="upload-button">Upload</Button>
              <input type="file" name="myfiles" 
              value={CoverPic}
              name="CoverPic"
              onChange={(e) => setPoster(e.target.value)}/>
            </div>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="">
          <Col sm="3">
            <Form.Check
              type="checkbox"
              className="my-1 mr-sm-2"
              id="customControlInline"
            />
          </Col>
          <Col sm="7">
            BY CLICKING SUBMIT YOU AGREE ALL{" "}
            <a href="/CreatPlaylist">POLICY'S</a>,{" "}
            <a href="/CreatPlaylist">TERMS & CONDITION</a> AND OUR{" "}
            <a href="/CreatPlaylist">COMMUNITY GUIDLINES</a>
          </Col>
        </Form.Group>
        <div className="submit-btn-container">
          <Button className="submit-btn" variant="primary"  onClick={handle}>
            SUBMIT
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreatChannel;
