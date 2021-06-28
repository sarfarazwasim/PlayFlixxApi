import React from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';

const Channel = () => {

return(

    <Container className=""> 

        <br/><br/>
        
        <Row>
           <Col>
            <div className="text-left">
            <Button variant="primary" size="lg">
            <i class="fas fa-plus-circle"></i> CREATE
            </Button>

            </div>
           </Col>
           <Col>
           <div className="text-right">
            <Button variant="primary" size="lg">
            CHANNEL SUBSCRIBED
            </Button>

            </div>
           </Col>
        </Row>
        <br/> <br/>
        <Row>
            <Col>
            <h5>CHANNELS <i class="fas fa-long-arrow-alt-down"></i></h5>
            </Col>
            <Col>
            <h5>SUBSCRIBER <i class="fas fa-long-arrow-alt-down"></i></h5>
            </Col>
            <Col>
            <h5>DATE <i class="fas fa-long-arrow-alt-down"></i></h5>
            </Col>
            <Col>
            <h5>VIEW <i class="fas fa-long-arrow-alt-down"></i></h5>
            </Col>
            <Col>
            <h5>LAST UPDATED <i class="fas fa-long-arrow-alt-down"></i></h5>
            </Col>
            <Col>
            <h5>VIDEO COUNT <i class="fas fa-long-arrow-alt-down"></i></h5>
            </Col>
        </Row>
    </Container>


);

};
export default Channel;