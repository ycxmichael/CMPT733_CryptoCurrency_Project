import React, { Component } from 'react';
import '../css/predict.css'
import { stockChart } from 'highcharts';
import axios from 'axios';
import MyStockChart from './stock';
import MyStickChart from './stick';
import Temp from './temp';
import Multilines from './multilines';
import Mul from './mul';
import Spin from './Spin';
import ControlledCarousel from './Carousel';
import Realtime from './Realtime';
import Line from './Line_hao';
import News from './News';
import Realtime2 from './realtime2';
import { Badge } from 'react-bootstrap';



class Predict extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='relative1'>
                <div className='relative2'>
                    <h2><Badge variant='secondary'>Real time bitcoin price </Badge></h2>
                    {/* <MyStockChart/> */}
                    {/* <Realtime/> */}
                    <Realtime/>
                    <Realtime2/>
                </div>
                {/* <div className='relative3'>
                    <p>Real time Stock price</p>
                    <Temp/>
                </div> */}
                {/* <div className='relative4'>
                    <p>Showcase</p>
                    <Line/>
                </div> */}
                {/* <div className='relative5'>
                    <p>pppp</p>
                    <ControlledCarousel/>
                </div> */}
                {/* <div className='relative6'>
                    <p>with News</p>
                    <News/>
                </div> */}
            </div>
         );
    }
}
 
export default Predict;