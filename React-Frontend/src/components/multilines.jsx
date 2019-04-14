import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import axios from 'axios';

class Multilines extends Component {

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

    }

    setOptions = () => {
        var options = {
            rangeSelector: {
				selected: 4
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
			series: this.state.seriesOptions
		
        }

        //set options state
        //this.setState({options:options});
    }

    getData = (index) => {
        var companyName = this.state.names[index];
        axios.get('https://data.jianshukeji.com/jsonp?filename=json/' + companyName.toLowerCase() + '-c.json&callback=?')
            .then (res => {
                //console.log(res.data);
                var option = {
                    name : companyName,
                    data : res.data
                }
                //update the state's series options
                //clone the original seriesOptions
                const seriesOptions = [...this.state.seriesOptions];
                seriesOptions[index] = option;

                this.setState({seriesOptions:seriesOptions})
            })
            .catch((err)=>{
                console.log(err);
            });
    }

    render() { 

        //fetch the data for all stocks
        var len = this.state.names.length;
        for (var i = 0; i < len; i++) {
            this.getData(i);
        }

        //set up the options
        this.setOptions();

        //render the component
        return (
            <div>
                <p>MULTI STOCKS COMPAREING ---</p>
                <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={this.state.options}
                />
            </div>
          );
    }
}
 
export default Multilines;