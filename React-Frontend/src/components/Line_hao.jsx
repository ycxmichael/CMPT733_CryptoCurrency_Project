import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import axios from 'axios';


class Line extends Component {

    state = { 
        options : {},
        data : []

     }

    constructor (props) {
        super(props);

        axios.get('https://data.jianshukeji.com/stock/history/000001')
            .then(res => {
                var data = res.data;
                if(data.code !== 1) {
                    alert('读取股票数据失败！');
                    return false;
                }
                //console.log(data);
                this.data2 = data.data;
                console.log("Line---axios got the data");
                //console.log("data2 is "+this.data2);

                this.options = {
                    rangeSelector: {
                        selected: 2
                    },
                    title: {
                        text: '平安银行历史股价'
                    },
                    plotOptions: {
                        series: {
                            showInLegend: true
                        }
                    },
                    tooltip: {
                        split: false,
                        shared: true
                    },
                    series: [{
                        type: 'line',
                        id: 'dataseries',
                        name: '平安银行',
                        data: this.data2
                    },{
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
                        width: 16
                    }]
                    
                }

                this.setState({options:this.options});
                
                

            })
            .catch(function (error){
                console.log(error);
            });

        
        
    }

    componentDidMount(){
      

    }

    componentWillUnmount() {
        console.log("Line component unmounted");
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
 
export default Line;