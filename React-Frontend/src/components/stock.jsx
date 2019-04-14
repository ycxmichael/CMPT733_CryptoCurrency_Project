import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import axios from 'axios';



const options = {
    chart : {
		events : {
			load : function () {
				// // set up the updating of the chart each second
				// var series = this.series[0];
				// setInterval(function () {
				// 	var x = (new Date()).getTime(), // current time
				// 		y = Math.round(Math.random() * 100);
				// 	series.addPoint([x, y], true, true);
                // }, 1000);
                
                //use axios to fetch data from CryptoCompare
                axios.get('https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=GBP&limit=2000')
                        .then(res => {
                            console.log(res.data.Data.length);
                            console.log("hahhaah");
                            //get the price series
							var series = this.series[0];
							console.log("kkkk---"+series);
                            //get the volumn series
                            //var volumns = this.series[1];


                            //var dataLen = res.data.Data.length;
                            var startTime = (new Date()).getTime();
                            
                            this.loop = setInterval(function () {
                                var t = (new Date()).getTime(); // current time
                                
                                var diff = (t-startTime)/1000;
                                console.log(Math.floor(diff));
                                //var ts = res.data.Data[Math.floor(diff)]['time']; //time in seconds
                                //console.log(ts);
                                var y = res.data.Data[Math.floor(diff)]['close'];
                                    //y = Math.round(Math.random() * 100);
                                
                                // var myDate = new Date(ts*1000);
                                // var x = myDate.toDateString();
                                // console.log(x);
                                series.addPoint([t, y], true, true);
                                }, 1000);
                            
                        })                     
                        .catch(function (error){
                            console.log(error);
                        })
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
            // var temp = (new Date()).toDateString();
            // console.log(temp);
            // data.push([temp, 3140]);
			return data;
		}())
	}]
}


const MyStockChart = () => <HighchartsReact
  highcharts={Highcharts}
  constructorType={'stockChart'}
  options={options}
/>

export default MyStockChart