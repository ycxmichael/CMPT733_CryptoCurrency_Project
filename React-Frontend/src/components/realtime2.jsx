import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import axios from 'axios';

Highcharts.theme = {
    colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
        '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
    chart: {
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
                [0, '#2a2a2b'],
                [1, '#3e3e40']
            ]
        },
        style: {
            fontFamily: '\'Unica One\', sans-serif'
        },
        plotBorderColor: '#606063'
    },
    title: {
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase',
            fontSize: '20px'
        }
    },
    subtitle: {
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase'
        }
    },
    xAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
            style: {
                color: '#A0A0A3'

            }
        }
    },
    yAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
            color: '#F0F0F0'
        }
    },
    plotOptions: {
        series: {
            dataLabels: {
                color: '#B0B0B3'
            },
            marker: {
                lineColor: '#333'
            }
        },
        boxplot: {
            fillColor: '#505053'
        },
        candlestick: {
            lineColor: 'white'
        },
        errorbar: {
            color: 'white'
        }
    },
    legend: {
        itemStyle: {
            color: '#E0E0E3'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        }
    },
    credits: {
        style: {
            color: '#666'
        }
    },
    labels: {
        style: {
            color: '#707073'
        }
    },

    drilldown: {
        activeAxisLabelStyle: {
            color: '#F0F0F3'
        },
        activeDataLabelStyle: {
            color: '#F0F0F3'
        }
    },

    navigation: {
        buttonOptions: {
            symbolStroke: '#DDDDDD',
            theme: {
                fill: '#505053'
            }
        }
    },

    // scroll charts
    rangeSelector: {
        buttonTheme: {
            fill: '#505053',
            stroke: '#000000',
            style: {
                color: '#CCC'
            },
            states: {
                hover: {
                    fill: '#707073',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                },
                select: {
                    fill: '#000003',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                }
            }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
            backgroundColor: '#333',
            color: 'silver'
        },
        labelStyle: {
            color: 'silver'
        }
    },

    navigator: {
        handles: {
            backgroundColor: '#666',
            borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
            color: '#7798BF',
            lineColor: '#A6C7ED'
        },
        xAxis: {
            gridLineColor: '#505053'
        }
    },

    scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
    },

    // special colors for some of the
    legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
    background2: '#505053',
    dataLabelsColor: '#B0B0B3',
    textColor: '#C0C0C0',
    contrastTextColor: '#F0F0F3',
    maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);

var eventSource = new EventSource("http://54.193.19.36/get_second");
// var eventSource;
var exc;
var pre_lst = [], time = (new Date()).getTime(), i;
var act_lst = [];
function set_lst(){
  for (i = -29; i <= 0; i += 1) {
      pre_lst.push([
          time - 1000*500 + i * 1000,
          0
      ]);
      act_lst.push([
          time - 1000*500 + i * 1000,
          0
      ])
}
}
// set_lst()


// function draw_actual(series){
//  axios.get('https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=23')
//           .then(res => {
//
//             for (let i = 0; i < res.data.Data.length; i += 1){
//               // act_lst[i] = ([res.data.Data[i].time * 1000, res.data.Data[i].close])
//               series.addPoint([res.data.Data[i].time * 1000, res.data.Data[i].close], true, true)
//             }
//               console.log('data is ready');
//               // this.setState()
//
//             });
//             // return act_lst
// }
//
// function draw_predit(series){
//   axios.get('http://54.193.19.36/get_store')
//            .then(res => {
//
//              for (let i = 0; i < res.data.length; i += 1){
//                pre_lst = res.data
//                series.addPoint(res.data[i], true, true)
//              }
//               // console.log('adfadsfasdfasfdasdf')
//               //  console.log(res.data);
//                // this.setState()
//
//              }).catch(error =>{
//                console.log(error)
//              });
// }

function updateChart(msg, that){

  let obj = JSON.parse(msg.data);
  // let newPoint = lst.pop()
  // console.log(obj);
  // // let t = (new Date()).getTime();

  let actPoint = obj.act[29];
  let prePoint = obj.pre[29];
  if (exc === 1){
      let series0 = that.series[0];
      let series1 = that.series[1];
      // for (le)
      // series1.addPoint(prePoint, false, true);
      // series0.addPoint(actPoint, true, true);
      // series1.drawPoints(prePoint)
      // series0.drawPoints(actPoint)
      // series0.addPoint(obj.act[28], true, true);
      // Realtime2.render()

      series1.setData(obj.pre, false);
      series0.setData(obj.act, true, true);




      // console.log(series1.data)
    }
  // that.render()
  act_lst = obj.act
  // act_lst.push(actPoint)

  pre_lst = obj.pre
  // pre_lst.push(prePoint)
  // pre_lst.push(newPoint)
  // pre_lst.shift()
}

class Realtime2 extends Component {
    state = {
        options : {},
        // series : [],
        // loop : function(){},
        // test : 100,

     }

    constructor(props) {
        super(props);


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
                marginRight: 80,
                events : {
                    load : function () {

                        // draw_actual(this.series[0])
                        // draw_predit(this.series[1])
                        eventSource.onmessage = e =>{
                          updateChart(e, this)
                        };
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
                text : 'Second-Level Prediction (simulated)'
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
        console.log(pre_lst);
        console.log('rendering')
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

export default Realtime2;
