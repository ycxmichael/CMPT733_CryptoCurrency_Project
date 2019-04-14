import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'



class ControlledCarousel extends React.Component {

    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          interval={1100}
          fade={true}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/una.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Una</h3>
              <p>pika pika</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/pika8.jpeg"
              alt="Second slide"
            />
  
            <Carousel.Caption>
              <h3>Frank</h3>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/pika5.jpeg"
              alt="Third slide"
            />
  
            <Carousel.Caption>
              <h3>Hoppe</h3>
              <p>
                pika chuuuuu~
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/pika9.jpeg"
              alt="Third slide"
            />
  
            <Carousel.Caption>
              <h3>michael</h3>
              <p>
                pika chuuuuu~
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/pika7.jpg"
              alt="Third slide"
            />
  
            <Carousel.Caption>
              <h3>ChengXi</h3>
              <p>
                pika chuuuuu~
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }
  
export default ControlledCarousel;