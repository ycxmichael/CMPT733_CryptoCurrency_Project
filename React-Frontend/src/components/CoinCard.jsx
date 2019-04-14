import React, { Component } from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from 'react-bootstrap/Badge'



class CoinCard extends Component {

    constructor(props){
        super(props)

        this.state = {
            cardName : this.props.coinName,
            cardSign : "",
            icon : {
                Bitcoin : './img/btc3.png',
                Litecoin : './img/ltc3.png',
                Ethereum : './img/eth3.png',
                EOS : './img/eos3.png',
                BitcoinCash : './img/BCH3.png',
                XRP : './img/xrp3.png',
                TRON : './img/trx3.jpg',
                ZCash : './img/zec3.png',
                
            },

            description : {
                Bitcoin : 'Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network.',
                Litecoin : 'Litecoin LTC - provides faster transaction confirmations (2.5 minutes on average) and uses a memory-hard, scrypt-based mining proof-of-work algorithm to target the regular computers and GPUs most people already have - which are its main differentials to Bitcoin.',
                Ethereum : 'Ethereum is a decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third party interference.',
                EOS : 'EOS.IO is software that introduces a blockchain architecture designed to enable vertical and horizontal scaling of decentralized applications (the “EOS.IO Software”). This is achieved through an operating system-like construct upon which applications can be built.',
                BitcoinCash : 'Bitcoin Cash (BCH) is a hard forked version of the original Bitcoin. It is similar to bitcoin with regards to its protocol; Proof of Work SHA-256 hashing, 21,000,000 supply, same block times and reward system.',
                XRP : 'Ripple positions itself as a complement to, rather than a competitor with, Bitcoin - the site has a page dedicated to Ripple for bitcoiners. Ripple is a distributed network which means transactions occur immediately across the network - and as it is peer to peer - the network is resilient to systemic risk',
                TRON : 'TRON is a cryptocurrency payment platform. It allows the users to perform cryptocurrencies transactions between them on a global scale within a decentralized ecosystem. TRON has finished its native token (TRX) migration to the mainnet',
                ZCash : 'ZCash is a privacy driven cryptocurrency. It uses the Equihash as an algorithm, which is an asymmetric memory-hard Proof of Work algorithm based on the generalized birthday problem.',
            }



        }

    }

    render() { 
        return ( 
            <Card bg="light" board='danger' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.icon[this.props.coinName]} />
                <Card.Body>
                    <Card.Title>{this.props.coinName}</Card.Title>
                    <Card.Text>
                        {this.state.description[this.props.coinName]}
                    </Card.Text>
                </Card.Body>
                {/* <ListGroup className="list-group-flush">
                    <ListGroupItem></ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                   
                </ListGroup> */}
                <Card.Body>
                    <Card.Link href="/"><h4><Badge variant="primary">Home</Badge></h4></Card.Link>
                    <Card.Link href="/MarketInfo"><h4><Badge variant="secondary">Market Info</Badge></h4></Card.Link>
                </Card.Body>
            </Card>
         );
    }
}
 
export default CoinCard;