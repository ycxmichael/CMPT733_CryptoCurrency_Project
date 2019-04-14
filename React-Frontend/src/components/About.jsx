import React, { Component } from 'react';
import {Card, CardDeck, CardGroup} from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge'
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/about.css'


class About extends Component {
    state = {  }

    constructor(props){
        super(props);
        
    }

    render() { 
        return ( 
            <div className='about'>
                <div className='tech'>
                    <h1><Badge variant='secondary'>Our Technologies</Badge></h1>
                    <CardDeck>
                    
                    <Card>
                        <Card.Img variant="top" src="./img/react.png" />
                        <Card.Body>
                        <Card.Title><h3>React</h3></Card.Title>
                        <Card.Text>
                            <h6>Built the frontend and connected to backend NodeJS to receive realtime data which used to draw analytical graphs</h6>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted"><a href="https://reactjs.org/">Official Site</a></small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./img/nodejs.jpeg" />
                        <Card.Body>
                        <Card.Title><h3>NodeJS</h3></Card.Title>
                        <Card.Text>
                            <h6>Used as backend to receive realtime data from rRabbitMQ and send data to frontend React</h6>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted"><a href="https://nodejs.org/en/">Official Site</a></small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./img/py6.jpeg" />
                        <Card.Body>
                        <Card.Title><h3><p></p>Python</h3></Card.Title>
                        <Card.Text>
                            <h6>Built the machine learning model and send crypto price prediction data to the RabbitMQ located on AWS</h6>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted"><a href="https://www.python.org/">Official Site</a></small>
                        </Card.Footer>
                    </Card>
                    
                    <Card>
                        <Card.Img variant="top" src="./img/Rabbit.jpeg" />
                        <Card.Body>
                        <Card.Title><h3>RabbitMQ</h3></Card.Title>
                        <Card.Text>
                        <h6>Served as a message queue to receive data from python program(our machine learning model) and send the realtime data to our NodeJS server</h6>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted"><a href="https://www.rabbitmq.com/">Official Site</a></small>
                        </Card.Footer>
                    </Card>
                    </CardDeck>

                </div>
               
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1><Badge variant='secondary'>Our Team</Badge></h1>
                
                <CardDeck>
                    
                    <Card>
                        <Card.Img variant="top" src="./img/man.jpeg" />
                        <Card.Body>
                        <Card.Title>ChengXi Li</Card.Title>
                        <Card.Text>
                            <h3><Badge variant='primary'>Big Data Engineer</Badge></h3>
                            <h5><Badge variant='secondary'>Email: chengxil@sfu.ca</Badge></h5>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted"><a href="https://github.com/lcx110108">Github</a></small>
                        
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./img/seed.jpeg" />
                        <Card.Body>
                        <Card.Title>Michael Yang</Card.Title>
                        <Card.Text>
                            <h3><Badge variant='success'>ML Scientist</Badge></h3>
                            <h5><Badge variant='secondary'>Email: cya91@sfu.ca</Badge></h5>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted"><a href="https://github.com/ycxmichael">Github</a></small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./img/pika13.jpeg" />
                        <Card.Body>
                        <Card.Title>Hoppe Wang</Card.Title>
                        <Card.Text>
                            <h3><Badge variant="danger">Big Data Scientist</Badge></h3>
                            <h5><Badge variant='secondary'>Email: hwa125@sfu.ca</Badge></h5>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted"><a href="https://github.com/wanghoppe">Github</a></small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./img/pika10.jpeg" />
                        <Card.Body>
                        <Card.Title>Hao Zheng</Card.Title>
                        <Card.Text>
                            <h3> <Badge variant="dark">Software Engineer</Badge></h3>
                            <h5><Badge variant='secondary'>Email: hza89@sfu.ca</Badge></h5>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted"><a href="https://github.com/zhwtf">Github</a></small>
                        </Card.Footer>
                    </Card>
                    </CardDeck>
            </div>
         );
    }
}
 
export default About;