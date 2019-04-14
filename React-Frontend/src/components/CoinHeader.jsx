import React, { Component } from 'react';
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from 'react-bootstrap/Badge'


class CoinHeader extends Component {
    
    constructor(props) {
        super(props);
        this.state = {


        }
    }
    
    render() { 
        return ( 
            <Card >
                <Card.Header as='h3'>{this.props.coinName} Coin Stats</Card.Header>
                <Card.Body as='h5'>
                    <Card.Title>Realtime Data</Card.Title>
                    <Card.Text>
                        <div>
                        <h1>
                            <Badge pill variant="primary">
                                Coin Price: {this.props.coinPrice}
                            </Badge>
                        </h1>
                        <br></br>
                        <h3>
                        <Badge pill variant="secondary">
                            Open 24H: {this.props.coinOpen}
                        </Badge>
                        {' '}
                        <Badge pill variant="success">
                            High 24H: {this.props.coinHigh}
                        </Badge>
                        {' '}
                        <Badge pill variant="danger">
                            Low 24H: {this.props.coinLow}
                        </Badge>
                        <br></br>
                        <Badge pill variant="warning">
                            Volumn 24H: {this.props.coinVol}
                        </Badge>
                        {' '}
                        <Badge pill variant="info">
                            Last Trade Market: {this.props.coinMarket}
                        </Badge>
                        {' '}
                        <p></p>
                        <Badge pill variant="dark">
                            Market Cap: {this.props.coinMcap} USD
                        </Badge>

                        </h3>
                       
                        
                        </div>
                                       
                    </Card.Text>
                    {/* <Button variant="primary">Go Go Go</Button> */}
                </Card.Body>
            </Card>
         );
    }
}
 
export default CoinHeader;