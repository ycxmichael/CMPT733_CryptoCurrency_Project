import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from 'react-dom';
import './App.css';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import NavBar from './components/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import MyStockChart from './components/stock';
import MyStickChart from './components/stick';
import Temp from './components/temp';
import Multilines from './components/multilines';
import Mul from './components/mul';
import About from './components/About';
import Predict from './components/Predict';
import Contact from './components/Contact';
import Home from './components/Home';
import Info from './components/Info';
import Coin from './components/Coin';
import HeroVideoDemo from './components/video';
import { Badge } from 'react-bootstrap';



class App extends Component {
  
  constructor (props) {
    super(props);

  }

  render() {
    
    return (
      <Router>
        {/* <div><p></p></div> */}
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand"><h3>CryptoMania</h3></Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link"><h4><Badge pill variant="secondary">Home</Badge></h4></Link>
                </li>
                <li className="navbar-item">
                  <Link to="/predict" className="nav-link"><h4><Badge pill variant="secondary">Predict</Badge></h4></Link>
                </li>
                <li className="navbar-item">
                  <Link to="/MarketInfo" className="nav-link"><h4><Badge pill variant="secondary">Market</Badge></h4></Link>
                </li>
                <li className="navbar-item">
                  <Link to={{pathname:"/about", state:{foo:'baarrr'}}} className="nav-link"><h4><Badge pill variant="secondary">About</Badge></h4></Link>
                </li>
                {/* <li className="navbar-item">
                  <Link to="/contact" className="nav-link">Contact</Link>
                </li> */}
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={Home} />
          <Route path="/predict" component={Predict } />
          <Route path="/MarketInfo" 
            render={(props) => <Info {...props} temp={1} isAuthed={true} />}
          />
          {/* // component={Info} /> */}
          <Route path="/about" component={About} />
          {/* <Route path="/contact" component={Contact} /> */}
          <Route path="/coin" component={Coin} />
          <HeroVideoDemo/>
        </div>
      </Router>
    );
  }
}

export default App;
