import React from "react";
import "../../../assets/Css/CommonCss/UserSection/CreatPlaylist.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import history from "../../Routes/history";
import SearchIcon from '@material-ui/icons/Search';
import axios from "axios";
class CreatPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userPlaylistdescription: "",
      userPlaylisttitle: "",
      userPlaylisttags: "",
      userPlaylistcategory: "",
      userPoster: "",
      userVideo: "",
      userPlaylistnewcategory: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.files);
  };

  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
    axios
      .post("http://194.195.113.128:8085/createPlaylist", this.state)
      .then((response) => {
        history.push("/sidebar");
        //this.token=response;
        console.log(response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const {
      userPlaylisttitle,
      userPlaylisttags,
      userPlaylistdescription,
      userPlaylistcategory,
      userPoster,
      userVideo,
      userPlaylistnewcategory,
    } = this.state;

    return (
      <div className="playlist-page-container pt-5">
        <h1 className="playlist-header">CREAT PLAYLIST</h1>
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
              PLAYLIST TITLE
            </Form.Label>
            <Col sm="7">
              <Form.Control
                className="input-box p-2"
                plaintext
                placeholder="ENTER PLAYLIST TITLE"
                value={userPlaylisttitle}
                name="userPlaylisttitle"
                onChange={this.changeHandler}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="">
            <Form.Label column sm="3">
              PLAYLIST DISCRIPTION
            </Form.Label>
            <Col sm="7">
              <Form.Control
                as="textarea"
                plaintext
                placeholder="ENTER PLAYLIST DISCRIPTION"
                className="input-box p-2"
                value={userPlaylistdescription}
                name="userPlaylistdescription"
                onChange={this.changeHandler}
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
                value={userPlaylisttags}
                name="userPlaylisttags"
                onChange={this.changeHandler}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="">
            <Form.Label column sm="3">
              CATEGORY
            </Form.Label>
            <Col sm="7">
              <Form.Control
                as="select"
                value={userPlaylistcategory}
                name="userPlaylistcategory"
                onChange={this.changeHandler}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
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
                value={userPlaylistnewcategory}
                name="userPlaylistnewcategory"
                onChange={this.changeHandler}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="">
            <Form.Label column sm="3">
              SEARCH AND ADD NEW VIDEO
            </Form.Label>
            <Col sm="7" >
              <div className="upload-btn-wrapper input-search"> 
                <input
                  type="text" 
                  className="creat-playlist-search-input"
                />
                <Button variant="light" className="creat-playlist-search-btn ml-2"><SearchIcon /></Button>
              </div>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="">
            <Form.Label column sm="3">
              UPLOAD YOUR VIDEO:
            </Form.Label>
            <Col sm="3">
              <div className="upload-btn-wrapper">
                <Button className="upload-button">Upload</Button>
                <input
                  type="file" 
                  value={userVideo}
                  name="userVideo"
                  onChange={this.changeHandler}
                />
              </div>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="">
            <Form.Label column sm="3">
              UPLOAD PLAYLIST POSTER:
            </Form.Label>
            <Col sm="3">
              <div className="upload-btn-wrapper">
                <Button className="upload-button">Upload</Button>
                <input
                  type="file" 
                  value={userPoster}
                  name="userPoster"
                  className="creat-playlist-input"
                  onChange={this.changeHandler}
                />
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
            <Button
              className="submit-btn"
              variant="primary"
              type="submit"
              onClick={this.handleSubmit}
            >
              SUBMIT
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default CreatPlaylist;
