import React from 'react';
import {Container,Row,Col,Image,Button} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const Discussion = () =>{

    const classes = useStyles();

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
                <form className={classes.root} noValidate autoComplete="off" style={{float:'left'}}>
      <TextField id="standard-basic" label="Add Public comment...." style={{width:'800px'}} />
    </form>
                </Col>
                
            </Row>
            <br/>

            <div className="text-right">
            <Button variant="primary">CANCEL</Button>{' '}
            <Button variant="primary">COMMENT</Button>

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
};

export default Discussion;