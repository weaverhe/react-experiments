import React, { Component } from 'react';
import Slider from'./Slider';
import './App.css';

class App extends Component {
  constructor() {
    super();

    const initR = this.randomNumber(0,255);
    const initG = this.randomNumber(0,255);
    const initB = this.randomNumber(0,255);
    const initHex = this.rgbToHex(initR, initG, initB);
    const initTextColor = this.updateTextColor(initR, initG, initB);

    this.state = {
      r: initR,
      g: initG,
      b: initB,
      hex: initHex,
      textColor : initTextColor
    }

    this.updateR = this.updateR.bind(this);
    this.updateG = this.updateG.bind(this);
    this.updateB = this.updateB.bind(this);
    this.updateTextColor = this.updateTextColor.bind(this);
    this.rgbToHex = this.rgbToHex.bind(this);
  
  }

  // Basic Utility Functions

  randomNumber(min,max) {
    return(Math.floor(Math.random()*max) + min);
  }

  componentToHex(c) {
    var hexString = parseInt(c).toString(16);
    var formathex = hexString.length === 1 ? '0' + hexString : hexString;
    return formathex;
  }

  rgbToHex(r,g,b) {
    return '#' + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

  // App specific

  updateR(e) {
    let newR = document.querySelector('#slider--r').value;
    let newHex = this.rgbToHex(newR, this.state.g, this.state.b);
    let newText = this.updateTextColor(newR, this.state.g, this.state.b);

    this.setState({hex: newHex, r: newR, textColor: newText});
  }

  updateG(e) {
    let newG = document.querySelector('#slider--g').value;
    let newHex = this.rgbToHex(this.state.r, newG, this.state.b);
    let newText = this.updateTextColor(this.state.r, newG, this.state.b);

    this.setState({hex: newHex, g: newG, textColor: newText});
  }

  updateB(e) {
    let newB = document.querySelector('#slider--b').value;
    let newHex = this.rgbToHex(this.state.r, this.state.g, newB);
    let newText = this.updateTextColor(this.state.r, this.state.g, newB);

    this.setState({hex: newHex, b: newB, textColor: newText});
  }

  updateTextColor(r,g,b) {
    if(parseInt(r) >= 175 && parseInt(g) >= 175 && parseInt(b) >= 175) {
      return 'rgb(0,0,0)';
    } else {
      return 'rgb(255,255,255)';
    }
  }

  render() {
    let style = {
      "backgroundColor" : `rgb(${this.state.r}, ${this.state.g}, ${this.state.b})`,
      "color" : `${this.state.textColor}`
    }

    return (
      <div className="fullScreen" style={style}>
        <div className="main-controller">
          <Slider
            r={this.state.r}
            g={this.state.g}
            b={this.state.b}
            updateR={this.updateR}
            updateG={this.updateG}
            updateB={this.updateB}
          /> 
          <p>Hex Value - {this.state.hex}</p>
        </div>
      </div>  
    );
  }
}

export default App;
