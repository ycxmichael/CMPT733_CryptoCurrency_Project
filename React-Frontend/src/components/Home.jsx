import React, { Component } from 'react';
import '../css/homebanner.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Badge } from 'react-bootstrap';

class Home extends Component {
    state = {  }
    render() { 
        return (
            <div className="home-banner">
              <div className="home-banner-me">
                <div className="home-banner-photo">
                  <img src="./img/homepage.png" alt='haha'/>
                  {/* <img src="./img/una.jpg" alt='haha'/> */}
                </div>
                <div className="home-banner-desc">
                  <h1><Badge variant='secondary'>CryptoMania~</Badge></h1>
                  <p>A real-time prediction!</p>
                  <Link to="/predict" className="badge badge-success" id="link">Predict Now~</Link>
                  
                  <div className="home-banner-link">
                    <div className="link">
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/zhwtf">Github</a>
                    </div>
                    <div className="link">
                      <a  rel="noopener noreferrer" href="/MarketInfo">Coin Market</a>
                    </div>
                    {/* <div className="link">
                      <a target="_blank" rel="noopener noreferrer" href="https://axuebin.tuchong.com"></a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          );
    }
}
 
export default Home;