import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import axios from 'axios';

var eventSource = new EventSource("http://localhost:5000/events");
// var eventSource;
var exc;
var pre_lst = [], time = (new Date()).getTime(), i;
var act_lst = [];
var act_lastPoint = [0, 0];
var ifAddLast = false;


function set_lst(lst){
  for (i = -23; i <= 0; i += 1) {
      lst[i+23] = ([
          time - 1000*3600*50 + i * 1000,
          null
      ]);
}
}


function get_newest(){
  axios.get('https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=1')
           .then(res => {
              let last = res.data.Data[1]
              if (last.time *1000 == act_lastPoint[0]){
                var ifAddLast = false;
                console.log('here is false')
              }else{
                var ifAddLast = true;
                act_lastPoint = [last.time * 1000, last.close];
              }
             });
}


function draw_actual(series){
 axios.get('https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=23')
          .then(res => {

            for (let i = 0; i < res.data.Data.length; i += 1){
              // act_lst[i] = [res.data.Data[i].time * 1000, res.data.Data[i].close]
              series.addPoint([res.data.Data[i].time * 1000, res.data.Data[i].close], true, true)
            }
            // series.setData(res.data.Data, true, true)
            act_lastPoint = [res.data.Data[i].time * 1000, res.data.Data[i].close]
            // series.render()
              // this.setState()

            });
            // return act_lst
}

function draw_predit(series){
  axios.get('http://localhost:5000/get_store')
           .then(res => {
             // console.log(pre_lst)
             for (let i = 0; i < res.data.length; i += 1){
               // pre_lst[i] = res.data[i];
               series.addPoint(res.data[i], true, true)
             }
             // series.setData(res.data.Data, true, true)
             // series.render()
             // Realtime.render()
             // pre_lst = res.data
             // console.log(pre_lst)

              // console.log('adfadsfasdfasfdasdf')
              //  console.log(res.data);
               // this.setState()

             }).catch(error =>{
               console.log(error)
             });
}

function updateChart(msg, that){

  let lst = JSON.parse(msg.data);
  let newPoint = lst.pop()
  // console.log(lst);
  // let t = (new Date()).getTime();
  get_newest()
  if (exc === 1){
    let series1 = that.series[1];
    let series0 = that.series[0];
    series1.addPoint(newPoint, true, false);
    if (ifAddLast){
      console.log('here I am adding the data')
      console.log(act_lastPoint)
      series0.addPoint(act_lastPoint, true, true);
    }
  }
  if (ifAddLast){
    act_lst.push(act_lastPoint)
    act_lst.shift()
  }
  pre_lst.push(newPoint)
  pre_lst.shift()
}

class Realtime extends Component {
    state = {
        options : {},
        // series : [],
        // loop : function(){},
        // test : 100,

     }

    constructor(props) {
        super(props);
        set_lst(act_lst)
        set_lst(pre_lst)



        console.log('Constructing')
    }

    componentWillMount(){
      exc = 1;
    // componentDidMount() {
    //
    }


    componentWillUnmount() {
      exc = 0
      // eventSource.readyState = 2
        // console.log("loop is " + this.loop);
        // console.log("state loop is " + this.state.loop);
        // console.log("this xx is " + this.xx);
        // console.log("state test is " + this.state.test);
        // clearInterval(this.state.loop);
    }

    render() {
      // (async () => {
      //   await wait_for_data()
      // })()
        this.options = {
            chart : {
                events : {
                    load : function () {
                        // console.log('here I am on the load function!')

                        draw_actual(this.series[0])
                        draw_predit(this.series[1])
                        // console.log(pre_lst)

                        // eventSource = new EventSource("http://localhost:5000/events");
                        eventSource.onmessage = e =>
                          updateChart(e, this);

                        //use axios to fetch data from CryptoCompare
                        // axios.get('https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=GBP&limit=2000')
                        //         .then(res => {
                        //             console.log(res.data.Data.length);
                        //             console.log("hahhaah");
                        //             //console.log("serisssss is" + this.series);
                        //             console.log("serisssss is" + this.series[0]);
                        //             //get the price series
                        //             var series = this.series[0];
                        //             //get the volumn series
                        //             //var volumns = this.series[1];
                        //
                        //
                        //             //var dataLen = res.data.Data.length;
                        //             var startTime = (new Date()).getTime();
                        //
                        //
                        //             this.loop = setInterval(function () {
                        //                 var t = (new Date()).getTime(); // current time
                        //                 this.xx = 10;
                        //                 var diff = (t-startTime)/1000;
                        //                 console.log(Math.floor(diff));
                        //                 //var ts = res.data.Data[Math.floor(diff)]['time']; //time in seconds
                        //                 //console.log(ts);
                        //                 var y = res.data.Data[Math.floor(diff)]['close'];
                        //                     //y = Math.round(Math.random() * 100);
                        //
                        //                 // var myDate = new Date(ts*1000);
                        //                 // var x = myDate.toDateString();
                        //                 // console.log(x);
                        //                 console.log("y is " + y);
                        //                 console.log("series is " + series);
                        //                 series.addPoint([t, y], true, true);
                        //                 console.log("this xx is " + this.xx);
                        //                 }, 1000);
                        //
                        //         })
                        //         .catch(function (error){
                        //             console.log(error);
                        //         })
                    }
                }
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
                name : 'Actual Price',
                data: act_lst,
                marker: {
                    enabled: true,
                    radius: 3
                },
                shadow: true,
                // marker: true
            },
            {
              name : 'Prediction',
              data: pre_lst,
              marker: {
                  enabled: true,
                  radius: 3
              },
              shadow: true,
              // marker:true
            }
          ]
        }

        // console.log(this.options.series[0].data);
        // console.log(pre_lst);
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
