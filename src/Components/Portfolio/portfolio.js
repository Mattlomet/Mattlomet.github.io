
import React, { Component } from 'react';
import Cara from './subcomponent/cara'

const portArray = [
  {
    title: "string0",
    image: "string0",
    description: "string0",
    link: "string0"
  },{
    title: "string1",
    image: "string2",
    description: "string2",
    link: "string2"
  },{
    title: "string2",
    image: "string3",
    description: "string3",
    link: "string3"
  },
  {
    title: "string3",
    image: "string3",
    description: "string3",
    link: "string3"
  },
  {
    title: "string4",
    image: "string3",
    description: "string3",
    link: "string3"
  },
  {
    title: "string5",
    image: "string3",
    description: "string3",
    link: "string3"
  },
  {
    title: "string6",
    image: "string6",
    description: "string6",
    link: "string6"
  }
]

class Portfolio extends Component {
  constructor(){
    super();
    this.state = {
      currentValue : 3,
      title: portArray[3].title,
      image: portArray[3].image,
      description: portArray[3].description,
      link: portArray[3].link
    }
  }
  leftRotate = () =>{
    if (this.state.currentValue === 0) {
      this.setState({
        currentValue: 6,
        title: portArray[this.state.currentValue].title,
      image: portArray[this.state.currentValue].image,
      description: portArray[this.state.currentValue].description,
      link: portArray[this.state.currentValue].link
      })
    }else{
      this.setState({
        currentValue: (this.state.currentValue-1),
        title: portArray[this.state.currentValue].title,
      image: portArray[this.state.currentValue].image,
      description: portArray[this.state.currentValue].description,
      link: portArray[this.state.currentValue].link
      })
      
    }
  }
  rightRotate = () =>{
    if (this.state.currentValue === 6) {
      this.setState({
        currentValue: 0,
        title: portArray[this.state.currentValue].title,
      image: portArray[this.state.currentValue].image,
      description: portArray[this.state.currentValue].description,
      link: portArray[this.state.currentValue].link
      })
    }else{
      this.setState({
        currentValue: (this.state.currentValue+1),
        title: portArray[this.state.currentValue].title,
      image: portArray[this.state.currentValue].image,
      description: portArray[this.state.currentValue].description,
      link: portArray[this.state.currentValue].link
      })
      
    }
  }
  render() {
    return (
      <div className="hero is-medium">
      <div className="hero-body">
      <Cara title={this.state.title} image={this.state.image} description={this.state.description} link={this.state.link}/>
      </div>
     
      <nav class="level is-mobile">
      
  <div class="level-item has-text-centered" onClick={this.leftRotate}>
    <div>
    <i class="fas fa-chevron-left" ></i>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
    <i class="far fa-circle"></i>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
    <i class="far fa-circle"></i>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
    <i class="far fa-circle"></i>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
    <i class="far fa-circle"></i>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
    <i class="far fa-circle"></i>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
    <i class="far fa-circle"></i>
    </div>
  </div>
  <div class="level-item has-text-centered" onClick={this.rightRotate}>
    <div>
    <i class="fas fa-chevron-right" ></i>
    </div>
  </div>
</nav>
      </div>
    );
  }
}

export default Portfolio;