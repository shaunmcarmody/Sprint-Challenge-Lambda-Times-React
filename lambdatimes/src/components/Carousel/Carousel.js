import React, { Component } from 'react';
import { carouselData } from '../../data'
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: [],
      currentImage: '',
      index: 0
    }
  }
  componentDidMount(){
    this.setState({
      carousel: carouselData,
      currentImage: carouselData[0],
      index: carouselData.length - 1
    })
  }

  leftClick = () => {
    let index = this.state.index - 1 <= 0 ? this.state.carousel.length - 1 : this.state.index - 1;
    this.setState(state => {
      return {
        currentImage: state.carousel[index],
        index: index
      }
    });
  }

  rightClick = () => {
    let index = this.state.index + 1 >= this.state.carousel.length ? 0 : this.state.index + 1;
    this.setState(state => {
      return {
        currentImage: state.carousel[index],
        index: index
      }
    });
  }

  selectedImage = () => {
    return <img src={this.state.currentImage} alt="lambdatimes carousel" style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        { this.selectedImage() }
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}