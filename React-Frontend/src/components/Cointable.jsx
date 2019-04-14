import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import {  Link } from "react-router-dom";
import Coin from './Coin';



class CoinTable extends Component {
    
    constructor(props) {
        super(props)


        this.state = {
            icon : {
                Bitcoin : './img/btc.png',
                Litecoin : './img/ltc.png',
                Ethereum : './img/eth.png',
                EOS : './img/eos.png',
                BitcoinCash : './img/BCH.png',
                XRP : './img/XRP.png',
                TRON : './img/trx.jpg',
                ZCash : './img/zec.png',
                
            },

            smallChart : {
                Bitcoin : './img/btc2.png',
                Litecoin : './img/ltc2.png',
                Ethereum : './img/eth2.png',
                EOS : './img/eos2.png',
                BitcoinCash : './img/bch2.png',
                XRP : './img/xrp2.png',
                TRON : './img/trx2.png',
                ZCash : './img/zec2.png',
            },

            coinList : ["Bitcoin", "Litecoin", "Ethereum", 'EOS', 'BitcoinCash', 'XRP', 'TRON', 'ZCash'],
            coinSymbol : ['BTC', 'LTC', 'ETH', 'EOS', 'BCH', 'XRP', 'TRX', 'ZEC'],
            tableCol : ['SYMBOL', 'PRICE', 'OPEN24HOUR', 'HIGH24HOUR', 'LOW24HOUR','VOLUME24HOUR', '7D CHART', 'LASTMARKET','CHANGE24HOUR','MKTCAP','TOTALVOLUME24H','CHANGEPCT24HOUR'],
            tableRow : {
                Bitcoin : {
                    SYMBOL : "BTC",
                    PRICE : 5052.16,
                    OPEN24HOUR: 5027.67,
                    HIGH24HOUR: 5249.69,
                    LOW24HOUR: 4926.08,
                    VOLUME24HOUR : 52855,
                    DAYCHART : '',
                    LASTMARKET:  "Bitlish",
                    CHANGE24HOUR: 28,
                    MKTCAP: 89130053540,
                    TOTALVOLUME24H: 453634,
                    CHANGEPCT24HOUR: 0.55,
                },
                Litecoin : {
                    SYMBOL : "LTC",
                    PRICE : 5052.16,
                    OPEN24HOUR: 5027.67,
                    HIGH24HOUR: 5249.69,
                    LOW24HOUR: 4926.08,
                    VOLUME24HOUR : 52855,
                    DAYCHART : '',
                    LASTMARKET:  "Bitlish",
                    CHANGE24HOUR: 28,
                    MKTCAP: 89130053540,
                    TOTALVOLUME24H: 453634,
                    CHANGEPCT24HOUR: 0.55,
                },
                Ethereum : {
                    SYMBOL : "ETH",
                    PRICE : 5052.16,
                    OPEN24HOUR: 5027.67,
                    HIGH24HOUR: 5249.69,
                    LOW24HOUR: 4926.08,
                    VOLUME24HOUR : 52855,
                    DAYCHART : '',
                    LASTMARKET:  "Bitlish",
                    CHANGE24HOUR: 28,
                    MKTCAP: 89130053540,
                    TOTALVOLUME24H: 453634,
                    CHANGEPCT24HOUR: 0.55,
                },
                EOS : {
                    SYMBOL : "EOS",
                    PRICE : 5052.16,
                    OPEN24HOUR: 5027.67,
                    HIGH24HOUR: 5249.69,
                    LOW24HOUR: 4926.08,
                    VOLUME24HOUR : 52855,
                    DAYCHART : '',
                    LASTMARKET:  "Bitlish",
                    CHANGE24HOUR: 28,
                    MKTCAP: 89130053540,
                    TOTALVOLUME24H: 453634,
                    CHANGEPCT24HOUR: 0.55,
                },
                BitcoinCash : {
                    SYMBOL : "BCH",
                    PRICE : 5052.16,
                    OPEN24HOUR: 5027.67,
                    HIGH24HOUR: 5249.69,
                    LOW24HOUR: 4926.08,
                    VOLUME24HOUR : 52855,
                    DAYCHART : '',
                    LASTMARKET:  "Bitlish",
                    CHANGE24HOUR: 28,
                    MKTCAP: 89130053540,
                    TOTALVOLUME24H: 453634,
                    CHANGEPCT24HOUR: 0.55,
                },
                XRP : {
                    SYMBOL : "XRP",
                    PRICE : 5052.16,
                    OPEN24HOUR: 5027.67,
                    HIGH24HOUR: 5249.69,
                    LOW24HOUR: 4926.08,
                    VOLUME24HOUR : 52855,
                    DAYCHART : '',
                    LASTMARKET:  "Bitlish",
                    CHANGE24HOUR: 28,
                    MKTCAP: 89130053540,
                    TOTALVOLUME24H: 453634,
                    CHANGEPCT24HOUR: 0.55,
                },
                TRON : {
                    SYMBOL : "TRX",
                    PRICE : 5052.16,
                    OPEN24HOUR: 5027.67,
                    HIGH24HOUR: 5249.69,
                    LOW24HOUR: 4926.08,
                    VOLUME24HOUR : 52855,
                    DAYCHART : '',
                    LASTMARKET:  "Bitlish",
                    CHANGE24HOUR: 28,
                    MKTCAP: 89130053540,
                    TOTALVOLUME24H: 453634,
                    CHANGEPCT24HOUR: 0.55,
                },
                ZCash : {
                    SYMBOL : "ZEC",
                    PRICE : 5052.16,
                    OPEN24HOUR: 5027.67,
                    HIGH24HOUR: 5249.69,
                    LOW24HOUR: 4926.08,
                    VOLUME24HOUR : 52855,
                    DAYCHART : '',
                    LASTMARKET:  "Bitlish",
                    CHANGE24HOUR: 28,
                    MKTCAP: 89130053540,
                    TOTALVOLUME24H: 453634,
                    CHANGEPCT24HOUR: 0.55,
                },
                
            },
            data : {},


        }

        //bind the functions to this
        this.tableData = this.tableData.bind(this);
        this.loops = this.loops.bind(this);

    }

    tableData = (name) => {
        //var sign = this.state.
        var index = this.state.coinList.indexOf(name);
        //console.log("Index is "+index);
        var sign = this.state.coinSymbol[index];
        // console.log("sign is " + sign);
        var price = this.state.tableRow[name].PRICE;
        var open24 = this.state.tableRow[name].OPEN24HOUR;
        var high24 = this.state.tableRow[name].HIGH24HOUR;
        var low24 = this.state.tableRow[name].LOW24HOUR;
        var vol24 = this.state.tableRow[name].VOLUME24HOUR;
        var market = this.state.tableRow[name].LASTMARKET;
        var mcap = this.state.tableRow[name].MKTCAP;

        return (
        <tr >
            <td><img src={this.state.icon[name]}></img><Link to={{pathname:'/coin', state:{name:name, sign:sign, price:price, open24:open24, high24:high24, low24:low24, vol24:vol24, market:market, mcap:mcap}}}>{name}</Link></td>
            <td>{this.state.tableRow[name].SYMBOL}</td>
            <td>{this.state.tableRow[name].PRICE}</td>
            <td>{this.state.tableRow[name].OPEN24HOUR}</td>
            <td>{this.state.tableRow[name].HIGH24HOUR}</td>
            <td>{this.state.tableRow[name].LOW24HOUR}</td>
            <td>{this.state.tableRow[name].VOLUME24HOUR}</td>
            <td><img src={this.state.smallChart[name]}></img></td>
            <td>{this.state.tableRow[name].LASTMARKET}</td>
            <td>{this.state.tableRow[name].CHANGE24HOUR}</td>
            <td>{this.state.tableRow[name].MKTCAP}</td>
            <td>{this.state.tableRow[name].TOTALVOLUME24H}</td>
            <td>{this.state.tableRow[name].CHANGEPCT24HOUR}</td>
            

        </tr>
        )

    }

    
    // used to update the data row state
    loops = () => {
        axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,LTC,ETH,EOS,BCH,XRP,TRX,ZEC&tsyms=USD')
        .then(res => {
            //console.log(res.data['RAW']['BTC']['USD']);
            const len = this.state.coinList.length;
            //console.log("The coinlist len is "+len);
            var lst = this.state.coinSymbol;
            var nameList = this.state.coinList;

            //clone the tableRow
            var tableRow = this.state.tableRow;

            //console.log(tableRow);
            for (var i = 0; i < len; i++) {
                var sign = lst[i];
                //console.log("the sign is " + sign);
                var name = nameList[i];
                //console.log("the name is " + name);
                tableRow[name]['PRICE'] = res.data['RAW'][sign]['USD']['PRICE'];
                tableRow[name]['OPEN24HOUR'] = res.data['RAW'][sign]['USD']['OPEN24HOUR'];
                tableRow[name]['HIGH24HOUR'] = res.data['RAW'][sign]['USD']['HIGH24HOUR'];
                tableRow[name]['LOW24HOUR'] = res.data['RAW'][sign]['USD']['LOW24HOUR'];
                tableRow[name]['VOLUME24HOUR'] = res.data['RAW'][sign]['USD']['VOLUME24HOUR'].toFixed(2);
                tableRow[name]['LASTMARKET'] = res.data['RAW'][sign]['USD']['LASTMARKET'];
                tableRow[name]['CHANGE24HOUR'] = res.data['RAW'][sign]['USD']['CHANGE24HOUR'].toFixed(2);
                tableRow[name]['MKTCAP'] = res.data['RAW'][sign]['USD']['MKTCAP'].toFixed(2);
                tableRow[name]['TOTALVOLUME24H'] = res.data['RAW'][sign]['USD']['TOTALVOLUME24H'].toFixed(2);
                tableRow[name]['CHANGEPCT24HOUR'] = res.data['RAW'][sign]['USD']['CHANGEPCT24HOUR'].toFixed(2);
                

            }

            //update the tableRow 
            this.setState({tableRow:tableRow});

        })
        .catch(error => {
            console.log(error);
        });

    }

    componentDidMount() {
        console.log('coin table did mounted-----');
        this.loopId = setInterval(this.loops, 800);
    }



    componentWillUnmount() {
        console.log('coin table will unmount----');
        clearInterval(this.loopId);
    }



    render() { 
        return ( 
            

                <Table responsive striped bordered hover size="lg" variant="dark">
                    <thead>
                        <tr>
                        <th>CryptoCurrency</th>
                        {this.state.tableCol.map(
                            name => (<th key={name.toString()}>{name}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.coinList.map(name => (this.tableData(name)))}
                                
                    </tbody>
                </Table>
            
         );
    }
}
 
export default CoinTable;