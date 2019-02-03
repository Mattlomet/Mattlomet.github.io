
import React, { Component } from 'react';
import Header from './Components/Header/header'
import Portfolio from './Components/Portfolio/portfolio'
import Objective from './Components/Objective/objective'
import Footer from './Components/Footer/footer'



class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Objective/>
      <Portfolio/>
      <Footer/>
      </div>
    );
  }
}

export default App;