import React, { Component } from 'react';
import '../css/coin.css'
import Card from 'react-bootstrap/Card';
import CoinCard from './CoinCard';
import CoinHeader from './CoinHeader';
import ControlledTabs from './MyTabs';
import axios from 'axios';

class Coin extends Component {

    constructor(props) {
        super(props);
        // if (props.location.state === 'undefined') {
        //     var name = '';
        //     var sign = '';
        //     var price = 0;
        //     var open24 = 0;
        //     var high24 = 0;
        //     var low24 = 0;
        //     var vol24 = 0;
        //     var market24 = '';
        //     var mcap = 0;
        // } else {
        //     const {name,sign,price,open24,high24,low24,vol24,market24,mcap} = props.location.state;
        // }
        const {name,sign,price,open24,high24,low24,vol24,market24,mcap} = props.location.state;
        // console.log(name);
        // console.log(sign);
        //console.log("this price is " + price)
        
        this.state = { 
            coinName : name,
            coinSign : sign,
            coinPrice : price,
            coinOpen : open24,
            coinHigh : high24,
            coinLow : low24,
            coinVol : vol24,
            coinMarket : market24,
            coinMcap : mcap,


         }

         this.getData = this.getData.bind(this);

         //get the coin data 
         //this.getData(this.state.coinSign);
         console.log(this.state.coinName);
         
         
         
    }

    getData = () => {

        axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms='+this.state.coinSign+'&tsyms=USD')
        .then(res => {
            // console.log("Coin page got the data");
            // console.log(res.data['RAW'][this.state.coinSign]['USD']);
            //update the state data
            var data = res.data['RAW'][this.state.coinSign]['USD'];

            var price = data['PRICE'];
            var open = data['OPEN24HOUR'];
            var high = data['HIGH24HOUR'];
            var low = data['LOW24HOUR'];
            var vol = data['VOLUME24HOUR'].toFixed(2);
            var market = data['LASTMARKET'];
            //var cap = data['MKTCAP'];

            this.setState({coinPrice:price, coinOpen:open, coinHigh:high, coinLow:low, coinVol:vol, coinMarket:market});

        })
        .catch(error => {
            console.log(error);
        });
    }

    
    componentDidMount() {
        console.log('coin page did mounted-----');
        this.loopId = setInterval(this.getData, 1000);
    }

    componentWillUnmount() {
        console.log('coin page will unmount----');
        clearInterval(this.loopId);
    }


    render() { 
        return ( 
            <div className="relativeCoin">
                <div className="relativeCoin2">
                    <CoinCard
                        coinName = {this.state.coinName}
                        coinSign = {this.state.coinSign}

                    />
                    {/* <p>{this.state.coinPrice}</p> */}
                </div>

                <div className="relativeCoin3">
                    <CoinHeader
                        coinName = {this.state.coinName}
                        coinPrice = {this.state.coinPrice}
                        coinOpen = {this.state.coinOpen}
                        coinHigh = {this.state.coinHigh}
                        coinLow = {this.state.coinLow}
                        coinVol = {this.state.coinVol}
                        coinMarket = {this.state.coinMarket}
                        coinMcap = {this.state.coinMcap}
                    />

                </div>

                <div className="relativeCoin4">
                    <ControlledTabs
                        coinSign = {this.state.coinSign}
                    />
                    
                </div>

                <p></p>
            </div>
         );
    }
}
 
export default Coin;