import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from 'react-dom';

class Spin extends Component {
    state = {  }
    render() { 
        return (
            
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    
                    <div className="carousel-item active">
                        <img src="./img/bit.jpg" className="d-block w-100" alt="..."></img>
                    </div>               
                    <div className="carousel-item">
                        <img src="./img/bit.jpg" className="d-block w-100" alt="lll"></img>
                    </div>
                    <div className="carousel-item">
                        <img src="./img/bitcoin.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    
                </div>

                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>

            </div>
          
         );
    }
}
 
export default Spin;