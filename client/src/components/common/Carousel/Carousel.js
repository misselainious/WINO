import React, { Component } from "react";
import HomeHeading from "../../Homepage/HomeHeading/HomeHeading";
import {  Segment } from "semantic-ui-react";
//import Home from "../../../pages/home";
// import { Carousel } from "react-responsive-carousel";


class imageScrolling extends Component {

  state = {
    imageArray: ["redPouring.jpg", "wineBarrels.jpg", "vineyard.jpg",
       "winecorks.jpg"],
    currentImageIndex: 0
  }
  componentDidMount() {
    const timer = setInterval(() => {
      if (this.state.currentImageIndex === this.state.imageArray.length - 1) {
        this.setState({ currentImageIndex: 0 })
      }
      else {
        this.setState({ currentImageIndex: this.state.currentImageIndex + 1 })
      }
    }, 3000)

  }

  render() {
    let image = this.state.imageArray[this.state.currentImageIndex]
   console.log(image," image")
    return (
      
      <Segment
      inverted
      textAlign='center'
      style={{ minHeight: 700, padding: '1em 0em', backgroundImage: `url("./images/${image}")` }}
      vertical
    >
    <HomeHeading />
    </Segment>
              
    );
  }
}

export default imageScrolling;
