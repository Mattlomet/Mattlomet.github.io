import React, { Component } from 'react';
import BeachPic from "../../assets/beach.jpg"

const zIndexZero = {
  'z-index': 1,
  'position': 'absolute',
  'top': '15vw',
  'right': '10vw'
}
const whiteText = {
  'color': 'white'
}


class Header extends Component {
  render() {
    return (
      <div className="hero is-small">
        <img src={BeachPic} alt="beach"/>
        <div class="hero-body" style={zIndexZero} >
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

export default Header;