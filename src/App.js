import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BeachPic from "./assets/beach.jpeg"

const zIndexZero = {
  'z-index': 0,
  'position': 'absolute'
}
const whiteText = {
  'color': 'white'
}


class App extends Component {
  render() {
    return (
      <div className="App hero is-medium">
        <img src={BeachPic} alt="beach" style={zIndexZero} />
        <div class="hero-body" >
          <div class="container">
            <h1 class="title" style={whiteText}>
              Matt Lomet
      </h1>
            <h2 class="subtitle" style={whiteText}>
              Full Stack Web Developer
      </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
