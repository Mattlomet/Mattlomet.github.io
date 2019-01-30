
import React, { Component } from 'react';
import Header from './Components/Header/header'
import Portfolio from './Components/Portfolio/portfolio'
import Objective from './Components/Objective/objective'
import Contact from './Components/Contact/contact'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      < Objective / >
      < Portfolio / >
      <Contact/>
      </div>
    );
  }
}

export default App;