import React, { Component } from 'react';
import '../css/Info.css'
import { stockChart } from 'highcharts';
import axios from 'axios';
import MyStockChart from './stock';
import MyStickChart from './stick';
import Temp from './temp';
import Multilines from './multilines';
import Mul from './mul';
import Spin from './Spin';
import ControlledCarousel from './Carousel';
import Realtime from './Realtime_hao';
import Line from './Line_hao';
import News from './News';
import Radar from './Radar';
import Pie from './Pie';
import CoinTable from './Cointable';
import { Badge } from 'react-bootstrap';


class Info extends Component {
    state = {  }

    constructor(props) {
        super(props);
        //console.log(props.temp);
    }

    render() { 
        return ( 
            <div className='relativeinfo'>
                <div className='relativeinfo2'>
                    
                    <h2><Badge variant='dark'>Real Time Coin Price</Badge></h2>
                    <CoinTable/>
                    {/* <Radar/>
                    
                    <Pie/>
                    {/* <div className='relativeinfo2'>
                        <CoinTable/>
                    </div> */}
                
                    
                </div>
                
                
            </div>
         );
    }
}
 
export default Info;