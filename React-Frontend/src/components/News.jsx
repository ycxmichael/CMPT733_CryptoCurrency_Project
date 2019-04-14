import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import axios from 'axios';

class News extends Component {
    
    
    constructor(props) {
        super(props)

        this.state = { 
            options : {},
         }
    



        axios.get('https://data.jianshukeji.com/stock/history/000002')
            .then(res => {
                //console.log(res.data);
                this.data = res.data.data;
                console.log(this.data);
                // if(data.code !== 1) {
                //     alert('读取news数据失败！');
                //     return false;
                // }
               
                this.options = {
                    rangeSelector: {
                        selected: 2
                    },
                    title: {
                        text: 'USD to EUR exchange rate'
                    },
                    tooltip: {
                        style: {
                            width: '200px'
                        },
                        valueDecimals: 4,
                        shared: true
                    },
                    yAxis: {
                        title: {
                            text: 'Exchange rate'
                        }
                    },
                    tooltip: {
                        split: false
                    },
                    series: [{
                        name: 'USD to EUR',
                        data: this.data,
                        id: 'dataseries'
                        // the event marker flags
                    }, {
                        type: 'flags',
                        data: [{
                            x: Date.UTC(2015, 5, 8),
                            title: 'C',
                            text: 'Stocks fall on Greece, rate concerns; US dollar dips'
                        }, {
                            x: Date.UTC(2015, 5, 12),
                            title: 'D',
                            text: 'Zimbabwe ditches \'worthless\' currency for the US dollar '
                        }, {
                            x: Date.UTC(2015, 5, 19),
                            title: 'E',
                            text: 'US Dollar Declines Over the Week on Rate Timeline'
                        }, {
                            x: Date.UTC(2015, 5, 26),
                            title: 'F',
                            text: 'Greek Negotiations Take Sharp Turn for Worse, US Dollar set to Rally '
                        }, {
                            x: Date.UTC(2015, 5, 29),
                            title: 'G',
                            text: 'Euro records stunning reversal against dollar'
                        }, {
                            x: Date.UTC(2015, 5, 30),
                            title: 'H',
                            text: 'Surging US dollar curbs global IT spend'
                        }],
                        onSeries: 'dataseries',
                        shape: 'circlepin',
                        width: 10
                    }]
                }

                this.setState({options:this.options});
                
                

            })
            .catch(function (error){
                console.log(error);
            });


    }


    
    render() { 
        

        return ( 
            <div>
                <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={this.state.options}
                />
            </div>
         );
    }
}
 
export default News;