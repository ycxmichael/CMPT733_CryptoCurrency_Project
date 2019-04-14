import React, { Component } from 'react';
import { Line, Doughnut  } from 'react-chartjs-2';
import axios from 'axios';

class Piegraph extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data : {
                labels: [
                    'Red',
                    'Green',
                    'Yellow',
                    'Black',
                    'Blue'

                ],
                datasets: [{
                    data: [300, 50, 100, 10, 50],
                    backgroundColor: [
                    '#FF6384',
                    '#01a852',
                    '#FFCE56',
                    '#2b2c2d',
                    '#599bff'
                    ],
                    hoverBackgroundColor: [
                    '#FF6384',
                    '#01a852',
                    '#FFCE56',
                    '#2b2c2d',
                    '#599bff'
                    ]
                }]

            }
        }
    }

    getVol = () => {
        axios.get('https://min-api.cryptocompare.com/data/top/exchanges?fsym='+this.props.coinSign+'&tsym=USD')
        .then(res => {
            console.log("Pie page got the data");
            console.log(res.data['Data']);
            //update the state data
            var data = res.data['Data'];
            var temp = this.state['data'];
            var tempDataset = this.state.data['datasets'][0]['data'];
            var tempLabel = this.state.data['labels'];
            //console.log(temp);
            for (var i = 0; i < 5; i++) {
               var exchange = data[i]['exchange'];
               var vol = data[i]['volume24h'].toFixed(2);
               temp['labels'][i] = exchange;
               temp['datasets'][0]['data'][i] = vol;
            }
            
            this.setState({data:temp});
           
        })
        .catch(error => {
            console.log(error);
        });
    }


    componentDidMount() {
        console.log('Pie page did mounted-----');
        this.loopId = setInterval(this.getVol, 1000);
    }

    componentWillUnmount() {
        console.log('Pie page will unmount----');
        clearInterval(this.loopId);
    }


    render() { 
        return ( 
            <article className="canvas-container">
                <Doughnut
                data = {this.state.data}

            />
            </article>
            
         );
    }
}
 
export default Piegraph;