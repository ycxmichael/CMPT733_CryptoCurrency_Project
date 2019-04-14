import React, { Component } from 'react';
import {Tabs, Tab, TabContent} from 'react-bootstrap'
import Line from './Line';
import Temp from './temp';
import NewsFeed from './NewsPage';
import Piegraph from './PieGraph';

class ControlledTabs extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        key: 'news',
      };
    }
  
    render() {
      return (
        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={key => this.setState({ key })}
        >

          <Tab eventKey="news" title="News feeds" >
            <p></p>
            <NewsFeed
                coinSign = {this.props.coinSign}
            />
          </Tab>
          <Tab eventKey="home" title="Volume24H/Exchange">
            <p></p>
            <Piegraph
                coinSign = {this.props.coinSign}
            />
          </Tab>
          <Tab eventKey="Hours" title="Hours Chart">
            <Line
                coinSign = {this.props.coinSign}
            />
            
          </Tab>
          
        </Tabs>
      );
    }
  }
export default ControlledTabs;