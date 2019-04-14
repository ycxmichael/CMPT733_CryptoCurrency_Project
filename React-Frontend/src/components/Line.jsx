import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import axios from 'axios';

var time = (new Date()).getTime();

class Line extends Component {


    

    constructor (props) {
      super(props);
      console.log("in Line page " + this.props.coinSign);

      this.state = {
        options : {
          series:[{
              type: 'line',
              id: '000001',
              //todo
              name: this.props.coinSign,
              data: [[time*1000 - 1000*3600,null], [time*1000+1000,null]]
          }
          ]
        },
        data : [],

     }

        //todo
        axios.get('https://min-api.cryptocompare.com/data/histohour?fsym='+this.props.coinSign+'&tsym=USD&limit=2000')
            .then(res => {
                var data = res.data.Data;
                var dataLen = data.length;

              console.log("Line axios got the data~~~~~~~~~");
              console.log(this.props.coinName)
              this.options.series[0].data = data.map(x => [x.time * 1000, x.close])

              this.setState({options:this.options});
              // this.render()
            })


            // console.log(this.data2)


    }

    componentDidMount(){

        // this.options = {
        //             rangeSelector: {
        //                 selected: 2
        //             },
        //             title: {
        //                 text: '平安银行历史股价'
        //             },
        //             plotOptions: {
        //                 series: {
        //                     showInLegend: true
        //                 }
        //             },
        //             tooltip: {
        //                 split: false,
        //                 shared: true
        //             },
        //             series: [{
        //                 type: 'line',
        //                 id: '000001',
        //                 name: '平安银行',
        //                 data: [2,5,5,10]
        //             }]
        //         }

        // this.setState({options:this.options});
        // console.log('after did----');

    }

    componentWillUnmount() {
        console.log("Line component unmounted");
    }

    render() {

      this.options = {
          chart:{
            events:{
              load: function(){
                console.log('there is is si si')
                this.series[0].render()
              }
            }

          },
          rangeSelector: {
              selected: 2
          },
          title: {
            //todo
              text: this.props.coinSigns
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
              id: '000001',
              //todo
              name: this.props.coinSign,
              data: [[0,1], [1,2]]
          }]
        }
        console.log(this.state.options)
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
