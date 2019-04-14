import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import axios from 'axios';

var volume = [];
var ohlc = [];
var groupingUnits = [[
    'week',                         // unit name
    [1]                             // allowed multiples
], [
    'month',
    [1, 2, 3, 4, 6]
]];

const options = {
    chart : {
        events : {
            load : function () {
                axios.get('https://data.jianshukeji.com/stock/history/000001')
                    .then (res => {
                        console.log(res.data);
                        if (res.data.code !== 1) {
                            alert('读取股票数据失败！');
		                    return false;
                        }
                        console.log(res.data.msg);
                        //get the real data part from response
                        var data = res.data.data;
                        var dataLen = data.length;

                        //get the ohlc and volumn
                        var series1 = this.series[0];
                        var series2 = this.series[1];
                        console.log(series1);
                        console.log(series2);

                        for (var i = 0; i < dataLen; i++) {
                            ohlc.push([
                                data[i][0], // the date
                                data[i][1], // open
                                data[i][2], // high
                                data[i][3], // low
                                data[i][4] // close
                                
                            ]);

                            volume.push([
                                data[i][0], // the date
			                    data[i][5] // the volume
                            ])
                            //series1.addPoint(ohlc[i+1], true,true);
                        }

                        series1.addPoint(ohlc[10],false,false);
                        
                        // for (var j = 1; j < dataLen; j++){
                        //     series1.addPoint(ohlc[j], true, false);
                        // }
                        //series1.addPoint(ohlc[10],false,true);
                        series1.addPoint(ohlc[11], true, false);
                        //series1.addPoint(ohlc[12], true, false);
                        //series2.addPoint(volume, true, true);
                    })
                    .catch(function (error){
                        console.log(error);
                    })
            }
        }
    },
    rangeSelector : {
        selected: 1,
        inputDateFormat: '%Y-%m-%d'
    },
    title: {
        text: '平安银行历史股价'
    },
    xAxis: {
        dateTimeLabelFormats: {
            millisecond: '%H:%M:%S.%L',
            second: '%H:%M:%S',
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%m-%d',
            week: '%m-%d',
            month: '%y-%m',
            year: '%Y'
        }
    },
    tooltip: {
        split: false,
        shared: true,
    },
    yAxis: [{
        labels: {
            align: 'right',
            x: -3
        },
        title: {
            text: '股价'
        },
        height: '65%',
        resize: {
            enabled: true
        },
        lineWidth: 2
    }, {
        labels: {
            align: 'right',
            x: -3
        },
        title: {
            text: '成交量'
        },
        top: '65%',
        height: '35%',
        offset: 0,
        lineWidth: 2
    }],
    series: [{
        type: 'candlestick',
        name: '平安银行',
        color: 'green',
        lineColor: 'green',
        upColor: 'red',
        upLineColor: 'red',
        tooltip: {
        },
        // navigatorOptions: {
        //     color: Highcharts.getOptions().colors[0]
        // },
        // data: ohlc,
        data: (function (){
            var data = [];
            //data.push([1,2,3,4,5,6])
            return data;
        }()),
        dataGrouping: {
            units: groupingUnits
        },
        id: 'sz'
    },{
        type: 'column',
        data: volume,
        yAxis: 1,
        dataGrouping: {
            units: groupingUnits
        }
    }]

}


const MyStickChart = () => <HighchartsReact
  highcharts={Highcharts}
  constructorType={'stockChart'}
  options={options}
/>

export default MyStickChart