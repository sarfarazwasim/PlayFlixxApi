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

class EditStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userMail: "",
      userPassword: "",
      userAddress:"",
      userAddress2:"",
      userCity:"",
      userPhonenumber:"",
      userPincode:"",
      userState:"",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
    axios
      .put("http://194.195.113.128:8085/aboutme/"+Cookies.get('UserId'), this.state)
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
    const { userMail, userPassword,userAddress,userAddress2,userCity,
    userPhonenumber,userPincode,userState } = this.state;

  return (
    <div className="playlist-page-container pt-5">
      <h1 className="playlist-header">Edit Status</h1>
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
            Email address
          </Form.Label>
          <Col sm="7">
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="input-box p-2"
              value={userMail}
              name="userMail"
              onChange={this.changeHandler}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="">
          <Form.Label column sm="3">
            Contact Number
          </Form.Label>
          <Col sm="7">
            <Form.Control
              type="text"
              placeholder="Enter Contact No:"
              className="input-box p-2"
              value={userPhonenumber}
              name="userPhonenumber"
              onChange={this.changeHandler}
              
            />
            <Form.Text className="text-muted">
              We'll never share your Contact number with anyone else.
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="">
          <Form.Label column sm="3">
            Address
          </Form.Label>
          <Col sm="7">
            <Form.Control
              placeholder="Address Line 1"
              className="input-box p-2"
              value={userAddress}
              name="userAddress"
              onChange={this.changeHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="">
          <Form.Label column sm="3">
            Address 2
          </Form.Label>
          <Col sm="7">
            <Form.Control
              placeholder="Address Line 2"
              className="input-box p-2"
              value={userAddress2}
              name="userAddress2"
              onChange={this.changeHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="">
          <Form.Label column sm="3">
            City
          </Form.Label>
          <Col sm="7">
            <Form.Control className="input-box p-2" 
            value={userCity}
    name="userCity"
    onChange={this.changeHandler}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="">
          <Form.Label column sm="3">
            State
          </Form.Label>
          <Col sm="7">
            <Form.Control
              as="select"
              defaultValue="Choose..."
              className="input-box p-2"
              value={userState}
              name="userState"
              onChange={this.changeHandler}
            >
              <option>Choose...</option>
              <option>Maharashtra</option>
              <option>Karnataka</option>
              <option>Madya Pradesh</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="">
          <Form.Label column sm="3">
            Zip/Pincode
          </Form.Label>
          <Col sm="7">
            <Form.Control className="input-box p-2" 
            value={userPincode}
    name="userPincode"
    onChange={this.changeHandler}/>
          </Col>
        </Form.Group>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={3}>
              Gender
            </Form.Label>
            <Col sm={9}>
              <Form.Check
                type="radio"
                label="Male"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="Female"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="Other"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
            </Col>
          </Form.Group>
        </fieldset>
        <Form.Group as={Row} controlId="">
          <Form.Label column sm="3">
           Password 
          </Form.Label>
          <Col sm="7">
            <Form.Control 
              type="password"
              className="input-box p-2"
              value={userPassword}
              name="userPassword"
              onChange={this.changeHandler}
            />
          </Col>
        </Form.Group>
        <div className="submit-btn-container">
          <Button className="submit-btn" variant="primary" type="submit" 
          onClick={this.handleSubmit}>
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
}
}

export default EditStatus;
