import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import axios from 'axios';

class Pie extends Component {
   

    constructor(props) {
        super(props)
        this.state = {
            options : {},
            coinList : ["Bitcoin", "Litecoin", "Ethereum"],
        }



    }

    render() { 

        this.options = {
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45
                }
            },
            title: {
                text: 'Contents of Highsoft\'s weekly fruit delivery'
            },
            subtitle: {
                text: '3D donut in Highcharts'
            },
            plotOptions: {
                pie: {
                    innerSize: 100,
                    depth: 45
                }
            },
            series: [{
                name: 'Delivered amount',
                data: [
                    ['Bananas', 8],
                    ['Kiwi', 3],
                    ['Mixed nuts', 1],
                    ['Oranges', 6],
                    ['Apples', 8],
                    ['Pears', 4],
                    ['Clementines', 4],
                    ['Reddish (bag)', 1],
                    ['Grapes (bunch)', 1]
                ]
            }]
        }

        return ( 
            <div>
                <HighchartsReact
                highcharts={Highcharts}
                // constructorType={'stockChart'}
                options={this.options}
                />
            </div>

         );
    }
}
 
export default Pie;