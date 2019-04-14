import React, { Component } from 'react';
import {Tabs, Tab, TabContent} from 'react-bootstrap';
import axios from 'axios';
import {Card, CardDeck, CardGroup} from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge'

class NewsFeed extends Component {

    constructor(props){
        super(props)
        console.log("The coin sign on newspage is " + this.props.coinSign);
        this.state = {
            news : [
                {
                    title : "",
                    body : "",
                    url : "",
                    time : 0,
                    categories : "",
                    img : '',
                    source : '',

                },
                {
                    title : "",
                    body : "",
                    url : "",
                    time : 0,
                    categories : "",
                    img : '',
                    source : '',

                },
                {
                    title : "",
                    body : "",
                    url : "",
                    time : 0,
                    categories : "",
                    img : '',
                    source : '',

                },
            ]
          


        }

        this.getFeed = this.getFeed.bind(this);
    }

    getFeed = () => {
        axios.get('https://min-api.cryptocompare.com/data/v2/news/?lang=EN&categories='+this.props.coinSign)
        .then(res => {
            console.log("News page got the data");
            console.log(res.data['Data'].length);
            //get a copy of the state data
            var data = res.data['Data'];
            var temp = this.state.news;

            for (var i = 0; i < 3; i++) {
                var title = data[i]['title'];
                var body = data[i]['body'];
                var categories = data[i]['categories'];
                var url = data[i]['url'];
                var time = data[i]['published_on']*1000;
                var t = new Date(time);
                var img = data[i]["imageurl"];
                var source = data[i]['source'];
                temp[i]['title'] = title;
                temp[i]['body'] = body;
                temp[i]['categories'] = categories;
                temp[i]['url'] = url;
                temp[i]['time'] = t.toUTCString();
                temp[i]['img'] = img;
                temp[i]['source'] = source;
            }
            
            //update the state data
            this.setState({news:temp});
           
        })
        .catch(error => {
            console.log(error);
        });
    }

    componentDidMount() {
        console.log('news page did mounted-----');
        this.loopId = setInterval(this.getFeed, 1000);
    }

    componentWillUnmount() {
        console.log('news page will unmount----');
        clearInterval(this.loopId);
    }


    render() { 
        return ( 
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={this.state.news[0]['img']} />
                    <Card.Body>
                    <Card.Title>{this.state.news[0]['title']}</Card.Title>
                    <Card.Text>
                        <a href={this.state.news[0]['url']}>Read Full Article</a>
                        <p></p>
                        <h4>
                        <Badge pill variant="secondary">
                            Categories: 
                        </Badge>
                        </h4>
                        {this.state.news[0]['categories']}

                       
                        <p></p>
                        <h4>
                            <Badge pill variant="success">
                                Source: {this.state.news[0]['source']}
                            </Badge>
                        </h4>
                       
                       
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated: {this.state.news[0]['time']}</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={this.state.news[1]['img']}/>
                    <Card.Body>
                    <Card.Title>{this.state.news[1]['title']}</Card.Title>
                    <Card.Text>
                        <a href={this.state.news[1]['url']}>Read Full Article</a>
                        <p></p>
                        <h4>
                        <Badge pill variant="secondary">
                            Categories: 
                        </Badge>
                        </h4>
                       
                        {this.state.news[1]['categories']}
                        <p></p>

                        <h4>
                            <Badge pill variant="success">
                                Source: {this.state.news[1]['source']}
                            </Badge>
                        </h4>
                       
                        
                       
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated: {this.state.news[1]['time']}</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={this.state.news[2]['img']} />
                    <Card.Body>
                    <Card.Title>{this.state.news[2]['title']}</Card.Title>
                    <Card.Text>
                        <a href={this.state.news[2]['url']}>Read Full Article</a>
                        <p></p>
                        <h4>
                            <Badge pill variant="secondary">
                                Categories: 
                            </Badge>
                        </h4>
                        
                        {this.state.news[2]['categories']}
                        <p></p>
                        <h4>
                            <Badge pill variant="success">
                                Source: {this.state.news[2]['source']}
                            </Badge>

                        </h4>
                        
                       
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated: {this.state.news[2]['time']}</small>
                    </Card.Footer>
                </Card>
                </CardDeck>
         );
    }
}
 
export default NewsFeed;