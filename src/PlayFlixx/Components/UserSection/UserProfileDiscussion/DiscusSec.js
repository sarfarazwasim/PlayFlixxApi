import React from 'react';
import {Container,Row,Col,Image,Button} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField'; 


// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//         width: '25ch',
//       },
//     },
//   }));

import axios from "axios";
import history from "../../Routes/history";
class Discussion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDiscussion: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://194.195.113.128:8085/comments", this.state)
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
    const { userDiscussion } = this.state;


    

    return(
     
        <Container className="py-5"> 
            <div>
                <h2 className="text-left">100 COMMENTS <i class="far fa-comments"></i></h2>
            </div>

            <br/> <br/>
            <Row>
                <Col sm={2}>
                <Image src="https://picsum.photos/id/1/200/300" 
                height="80px"
                width="80px"
                roundedCircle />
 
                </Col>
                <Col sm={10}>
                <form  noValidate autoComplete="off" style={{float:'left'}}>
      <TextField id="standard-basic" label="Add Public comment...." style={{width:'800px'}}
    value={userDiscussion}
    name="userDiscussion"
    onChange={this.changeHandler} />
    </form>
                </Col>
                
            </Row>
            <br/>

            <div className="text-right">
            <Button variant="primary" className="btn-width">CANCEL</Button>{' '}
            <Button variant="primary" className="btn-width" type="submit" onClick={this.handleSubmit}>COMMENT</Button>

            </div>
            <br/> <br/>
            <Row>
                <Col>
                <div className="text-left">
                <h5>COMMENTS <i class="fas fa-long-arrow-alt-down"></i></h5>
                </div>
                </Col>
                <Col>
                <h5>CHANNELS <i class="fas fa-long-arrow-alt-down"></i></h5>

                </Col>
                <Col>
                <h5>DATE <i class="fas fa-long-arrow-alt-down"></i></h5>

                </Col>
                <Col>
                <h5>LIKES <i class="fas fa-long-arrow-alt-down"></i></h5>

                </Col>
                
            </Row>
        </Container>

    );
}
}

export default Discussion;