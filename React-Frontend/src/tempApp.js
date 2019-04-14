import React, { Component } from 'react';
import logo from './logo.svg';
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



class App extends Component {
  
  constructor (props) {
    super(props);

    this.state = {
      chartOptions: {
        xAxis: {
          categories: ['A', 'B', 'C', 'D'],
        },
        series: [
          { data: [1, 2, 3, 5] }
        ],
        plotOptions: {
          series: {
            point: {
              events: {
                mouseOver: this.setHoverData.bind(this)
              }
            }
          }
        }
      },
      hoverData: null
    };
    
  }

  setHoverData = (e) => { 
    // The chart is not updated because `chartOptions` has not changed.
    this.setState({ hoverData: e.target.category })
  }

  updateSeries = () => {
    // The chart is updated only with new options.
    this.setState({ 
      chartOptions: {
        series: [
          { data: [Math.random() * 5, 2, 1]}
        ]
      }
    });
  }


  getPrice = () => {
      axios.get('https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=GBP&limit=20')
            .then(res => {
              console.log(res.data.Data[0]['close']);
              console.log("hahhaah");
            })
            .catch(function (error){
              console.log(error);
          })

  }

  render() {
    const { chartOptions, hoverData} = this.state;

    return (
      <div className="App">
        {/* <NavBar  /> */}
        <HighchartsReact 
          highcharts = {Highcharts}
          options = {chartOptions}
        />

        {/* <MyStockChart/>   */}
        <p>Get the real bitcoin price in minute level</p>
        <button onClick={()=>this.getPrice()} className="btn btn-danger btn-sm m-2">Start</button>

        {/* <h4>stock graph</h4> */}
        {/* <MyStickChart/> */}
        <p>candle graph</p>
        <Temp/>

        <p>Multi Stock Compare--------</p>
        {/* <Multilines/> */}

        <p>wo shi fen ge xian</p>
        <Mul/>

        <h3>Hovering over {hoverData}</h3>
        <button onClick={()=>this.updateSeries}>Update Series</button>

      </div>
    );
  }
}

export default App;
