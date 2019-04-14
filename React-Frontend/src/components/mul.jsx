import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import axios from 'axios';

class Mul extends Component {

    state = { 
        seriesOptions : [],
	    seriesCounter : 0,
        names : ['MSFT', 'AAPL', 'GOOG'],
        options : {},
     }

    constructor(){
        super();

        

        this.setOptions = this.setOptions.bind(this);
        this.getData = this.getData.bind(this);
        this.combine = this.combine.bind(this);
        

    }

    setOptions = () => {
        var options = {
            rangeSelector: {
				selected: 10
			},
			yAxis: {
				labels: {
					formatter: function () {
						return (this.value > 0 ? ' + ' : '') + this.value + '%';
					}
				},
				plotLines: [{
					value: 0,
					width: 2,
					color: 'silver'
				}]
			},
			plotOptions: {
				series: {
					compare: 'percent'
				}
			},
			tooltip: {
				pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
				valueDecimals: 2
            },
            turboThreshold: 0,

			series: this.state.seriesOptions
		
        }

        //set options state
        this.setState({options:options});
        console.log("aaaaa"+this.state.options);
    }

    getData = (index) => {
        var companyName = this.state.names[index];
        axios.get('https://data.jianshukeji.com/jsonp?filename=json/' + companyName.toLowerCase() + '-c.json')
            .then (res => {
                console.log("----------------");
                //console.log(res);
                //console.log(res.data);
                var data =  res.data;
                data = data.substring(2, data.length-1);
                console.log(data);
                var option = {
                    name : companyName,
                    data : data
                }
                //console.log(res.data);
                //update the state's series options
                //clone the original seriesOptions
                const seriesOptions = [...this.state.seriesOptions];
                seriesOptions[index] = option;
                console.log("The serOption");
                console.log(seriesOptions);

                this.setState({seriesOptions:seriesOptions})
                console.log("this is the serr: --- "+this.state.seriesOptions.length);
                console.log("hhhhhhhhhhhhh");
                if (index === 2) {
                    this.setOptions();
                }
                
            })
            .catch((err)=>{
                console.log(err);
            });
    }

    combine = () => {
        //fetch the data for all stocks
        var len = this.state.names.length;
        console.log("the len is "+len);
        var i = 0;
        // (async () => {
        //     for (i = 0; i < len; i++) {
        //         console.log("Iteration " + i);
        //         this.getData(i);
        //     }
        // })()
        for (i = 0; i < len; i++) {
            console.log("Iteration " + i);
            this.getData(i);
        }
        
        //set up the options
        //this.setOptions();
        
    }

    render() { 
        
        // //fetch the data for all stocks
        // var len = this.state.names.length;
        // console.log("the len is"+len);
        // var i = 0;
        // for (i = 0; i < len; i++) {
        //     console.log("Iteration " + i);
        //     this.getData(i);
        // }
        
        // //set up the options
        // this.setOptions();

        //render the component
        return (
            <div>
                <p>MULTI STOCKS COMPAREING ---</p>
                
                <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={this.state.options}
                />

                <button 
                //pass argument to function
                onClick={this.combine} 
                className="btn btn-secondary btn-sm">
                Show graph
                </button>
            </div>
          );
    }
}
 
export default Mul;