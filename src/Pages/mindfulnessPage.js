import React,{Component} from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import one from './mi/one.png';
import two from './mi/two.png';
import three from './mi/three.png';
import four from './mi/four.png';
import cone from './mi/cone.png';
import ctwo from './mi/ctwo.png';
import cthree from './mi/cthree.png';
import cfour from './mi/cfour.png';
import cfive from './mi/cfive.png';
import csix from './mi/csix.png';
import {Link} from 'react-router-dom';

class Mindfulness extends React.Component {
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: [one,two,three,four,four,four,four,four,four,cone,ctwo,cthree,cfour,cfive]
    };
  }

  switchImage() {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    } else {
      this.setState({
        currentImage: 0
      });
    }
    return this.currentImage;
  }

  componentDidMount() {
    setInterval(this.switchImage, 1000);
  }

  render() {
    return (
      <mWrapper>
      <div className="container">
        <div className="col-10 mx-auto col-sm-8 col-md-6 col-lg-6 d-flex justify-content-center ">
        <img 
          src={this.state.images[this.state.currentImage]}
          alt="breathing images"
        /> 
        <h4 style={{margin:`3rem`}} className="text-l">  Breathe in for 4...   </h4>
        <h4 style={{margin:`3rem`}} className="text-l">  Hold it for 5...  </h4>
        <h4 style={{margin:`3rem`}} className="text-l">  Breathe out for 6...   </h4>
       </div>
        <div className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 d-flex justify-content-center  ">
        <Link to="/todo" className="main-link"  style={{margin:`2rem`}}>
                 Lets move ahead!
        </Link> </div>
      </div>
      </mWrapper>
    );
  }
}

export default Mindfulness;

