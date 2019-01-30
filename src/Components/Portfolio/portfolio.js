
import React, { Component } from 'react';
import Cara from './subcomponent/cara'


class Portfolio extends Component {
  render() {
    return (
      <div className="hero is-medium">
      <div className="hero-body">
      <Cara/>
      </div>

      </div>
    );
  }
}

export default Portfolio;