import React from "react";
import "../../../assets/Css/CommonCss/UserSection/CreatPlaylist.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import history from "../../Routes/history";
import axios from "axios";
import Cookies from 'js-cookie';


function UploadVideo() {

  let [userVideotitle, setTitle] = useState('');
  let [userVideodescription, setDes] = useState('');
  let [userVideoposter, setVPoster] = useState();
  let [userVideotags, setTag] = useState('');
  let [userVidecategory, setCat] = useState('');
  let [userVideo, setVideo] = useState();

  const handle = () => {
    history.push("/UserAccounts")
     axios
   .post("http://194.195.113.128:8085/ceatechannel/"+Cookies.get('UserId'),
     JSON.parse(JSON.stringify({
      //   userChannelname : userChannelname,userChannelimage:userChannelimage,
      // userChanneldescription : userChanneldescription,userChannelposter:userChannelposter
    })))
   .then((response) => {
     console.log(response);
     history.push("/UserAccounts")
   })
   .catch((error) => {
     console.log(error);
   });
 
         

 };


  return (
    <div className="playlist-page-container pt-5">
      <h1 className="playlist-header">Upload Video</h1>
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
            VIDEO TITLE
          </Form.Label>
          <Col sm="7">
            <Form.Control
              className="input-box p-2"
              plaintext
              placeholder="ENTER VIDEO TITLE"
              value={userVideotitle}
              name="userVideotitle"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="">
          <Form.Label column sm="3">
            VIDEO DISCRIPTION
          </Form.Label>
          <Col sm="7">
            <Form.Control
              as="textarea"
              plaintext
              placeholder="ENTER VIDEO DISCRIPTION"
              className="input-box p-2"
              value={userVideodescription}
              name="userVideodescription"
              onChange={(e) => setDes(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="">
          <Form.Label column sm="3">
            TAGS
          </Form.Label>
          <Col sm="7">
            <Form.Control
              className="input-box p-2"
              plaintext
              placeholder="ENTER TAGS"
              value={userVideotags}
              name="userVideotags"
              onChange={(e) => setTag(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="">
          <Form.Label column sm="3">
            CATEGORY
          </Form.Label>
          <Col sm="7">
            <Form.Control as="select" className="input-box p-2" 
              value={userVidecategory}
              name="userVidecategory"
              onChange={(e) => setCat(e.target.value)}>
              <option>SELECT ONE</option>
              <option>SPORTS</option>
              <option>ENTERTAINMENT</option>
              <option>COURSES</option>
              <option>CREAT NEW+</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="">
          <Form.Label column sm="3">
            CREAT NEW CATEGORY
          </Form.Label>
          <Col sm="7">
            <Form.Control
              className="input-box p-2"
              plaintext
              placeholder="CATRGORY NAME"
              value={userVidecategory}
              name="userVidecategory"
              onChange={(e) => setCat(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="">
          <Form.Label column sm="3">
            SEARCH AND ADD NEW VIDEO
          </Form.Label>
          <Col sm="3">
            <div class="upload-btn-wrapper">
              <Button className="upload-button">Upload</Button>
              <input type="file" name="myfile" 
              value={userVideo}
              name="userVideo"
              onChange={(e) => setVideo(e.target.value)}/>
            </div>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="">
          <Form.Label column sm="3">
            UPLOAD POSTER:
          </Form.Label>
          <Col sm="3">
            <div class="upload-btn-wrapper">
              <Button className="upload-button">Upload</Button>
              <input type="file" name="myfile" 
              value={userVideoposter}
              name="userVideoposter"
              onChange={(e) => setVPoster(e.target.value)}/>
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
            <a href="/CreatPlaylist">POLICY'S</a>,
            <a href="/CreatPlaylist">TERMS & CONDITION</a> AND OUR{" "}
            <a href="/CreatPlaylist">COMMUNITY GUIDLINES</a>
          </Col>
        </Form.Group>
        <div className="submit-btn-container">
          <Button className="submit-btn" variant="primary" type="submit" onClick={handle}>
            SUBMIT
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default UploadVideo;
