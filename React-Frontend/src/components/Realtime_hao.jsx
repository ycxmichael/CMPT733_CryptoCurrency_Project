import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import axios from 'axios';

var tempId;

class Realtime extends Component {
   
    constructor(props) {
        super(props);
        
        this.state = { 
            options : {},
            series : [],
            loop : function(){},
            test : 100,
            sign : 50,
    
         }
         console.log("In constructor--- loop " + this.state.loop);
        console.log("IN constructor sign is" + this.state.sign);


    }

   
    componentDidMount() {
        console.log("realtime did mounted");
        console.log("In didMount ---- this xx is " + this.xx);
        //this.setState({loop:this.loop});
        //this.setState({options:this.options});
    }
    

    componentWillUnmount() {
        console.log("loop is " + this.loop);
        console.log("state loop is " + this.state.loop);
        console.log("this xx is " + this.xx);
        console.log("state test is " + this.state.test);
        clearInterval(tempId);

        //clearInterval(this.options);
        console.log("realtime unmounted");
    }

    render() {
        var temp = this.state;
        this.options = {
            fatherState : temp,
            chart : {
                events : {
                    load :  function() {
                        
                        //use axios to fetch data from CryptoCompare
                        axios.get('https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=GBP&limit=2000')
                                .then(res => {
                                    console.log("Data len is "+res.data.Data.length);
                                    console.log("hahhaah");
                                   
                                    console.log("dddd "+this.options.chart);
                                    var series = this.series[0];
                                    console.log("this.series is " + this.series[0]['name']);
                                    var startTime = (new Date()).getTime();
                                    console.log(this.fatherState);

                                    this.loops = () => {
                                        let sign = 10
                                        //console.log("this sign is " + this.state.sign);
                                        if (sign === 100) {
                                            console.log("in setIntervel this loop is" );
                                            console.log("successfully stopped the intervel~-------");
                                            clearInterval(this.loop);
                                        }
                                        var t = (new Date()).getTime(); // current time
                                        //this.xx = 10;
                                        var diff = (t-startTime)/1000;
                                        console.log(Math.floor(diff));
                                        //var ts = res.data.Data[Math.floor(diff)]['time']; //time in seconds
                                        //console.log(ts);
                                        var y = res.data.Data[Math.floor(diff)]['close'];
                                        console.log("y is " + y);
                                        //console.log("series is " + series);
                                        console.log("This series name is " + series.name);
                                        series.addPoint([t, y], true, true);
                                        //console.log("this xx is " + this.xx);
                                        
                                    }

                                    this.sign = 50;
                                    tempId = setInterval(this.loops, 1000);
                                   
                                 
                                })                     
                                .catch(function (error){
                                    console.log(error);
                                })
                    }
                },
                series : [{
                    name : "xxx",
                    data : []
                }]
                
            },
            rangeSelector: {
                buttons: [{
                    count: 1,
                    type: 'minute',
                    text: '1M'
                }, {
                    count: 5,
                    type: 'minute',
                    text: '5M'
                }, {
                    type: 'all',
                    text: 'All'
                }],
                inputEnabled: false,
                selected: 0
            },
            title : {
                text : 'Live crypto coin price'
            },
            tooltip: {
                split: false
            },
            exporting: {
                enabled: false
            },
            series : [{
                name : '随机数据',
                data : (function () {
                    // generate an array of random data
                    var data = [], time = (new Date()).getTime(), i;
                    for (i = -999; i <= 0; i += 1) {
                        data.push([
                            time + i * 1000,
                            // Math.round(Math.random() * 4000)
                            3140
                        ]);
                    }
                   
                    return data;
                }())
            }]
        } 

        return ( 
            <div>
                <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={this.options}
                />
            </div>
         );
    }
}
 
export default Realtime;