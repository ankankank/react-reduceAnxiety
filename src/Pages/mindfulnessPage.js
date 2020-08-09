/*import React,{Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

export default function mindfulnessPage(){
    return(
        <>
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage:0,
      images: [
        "./mi/one.png",
        "./mi/two.png",
        "./mi/three.png",
        "./mi/four.png",
        "./mi/four.png",
        "./mi/four.png",
        "./mi/four.png",
        "./mi/four.png",
        "./mi/four.png",
        "./mi/c-one.png",
        "./mi/c-two.png",
        "./mi/c-three.png",
        "./mi/c-four.png",
        "./mi/c-five.png",
        "./mi/c-six.png"
      ],
    };

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

        <div className="slideshow-container">
        <img
          src={this.state.images[this.state.currentImage]}
          alt="breathing images"
        />
      </div>

        <Link to="/todo" className="main-link"  style={{margin:`0.75rem`}}>
                 Lets move ahead!
        </Link>
        </>
    )
}
*/
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
      images: [
          one,two,three,four,four,four,four,four,four,cone,ctwo,cthree,cfour,cfive

      ]
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
      <div className="slide-container">
        <div className="img-container">
        <img 
          src={this.state.images[this.state.currentImage]}
          alt="breathing images"
        /> </div>

        {/*<Link to="/todo" className="main-link"  style={{margin:`0.75rem`}}>
                 Lets move ahead!
        </Link> */}
      </div>
      </mWrapper>
    );
  }
}

const mWrapper=styled.div`
.slide-container{
    background: orange;
}
.img-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 300px;
    background:var(--primaryColor);
}

.img-container img{
    max-width: 100%;
    max-height:100%;
}
  `;

export default Mindfulness;

