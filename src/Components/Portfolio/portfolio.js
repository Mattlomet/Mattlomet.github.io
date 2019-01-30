
import React, { Component } from 'react';
import './portfolio.css'
import Cara from './subcomponent/cara'
import Charitree from '../../assets/charitree.png'
import Klips from '../../assets/klips.png'
import Vyber from '../../assets/vyber.jpg'



const portArray = [
  {
    title: "Vyber",
    image: Vyber,
    description: "Aptly named, VYBER was designed to get a vibe from one’s online persona. The app we’ve developed allows you to generate how you’re perceived online based on the content you post. This app is beneficial for employers, those meeting people through dating apps or anyone interested in knowing how someone is perceived online.",
    link: "https://github.com/erin0418/Vyber"
  },{
    title: "Vyber",
    image: Vyber,
    description: "Aptly named, VYBER was designed to get a vibe from one’s online persona. The app we’ve developed allows you to generate how you’re perceived online based on the content you post. This app is beneficial for employers, those meeting people through dating apps or anyone interested in knowing how someone is perceived online.",
    link: "https://github.com/erin0418/Vyber"
  },{
    title: "Vyber",
    image: Vyber,
    description: "Aptly named, VYBER was designed to get a vibe from one’s online persona. The app we’ve developed allows you to generate how you’re perceived online based on the content you post. This app is beneficial for employers, those meeting people through dating apps or anyone interested in knowing how someone is perceived online.",
    link: "https://github.com/erin0418/Vyber"
  },
  {
    title: "Charitree",
    image: Charitree,
    description: "Twitch Extension. Charitree takes donations through the form of Bits. Bits are a currency provided by Twitch. In order to participate you must have a Twitch account. Charitree donates its earnings to Charity Name and the Streamer of your Choice gets Bits too! With Charitree you can support your favorite streamer and donate to a good cause",
    link: "https://github.com/PatrickJGabriel/Charitree"
  },
  {
    title: "Twitch Klips",
    image: Klips,
    description: "Twitch Klips allows streams to promote their clips directly on their homepage. This extension also allows streams to promote featured videos.",
    link: "https://github.com/RayKilburg/KlipsV2-TwitchExtension"
  },
  {
    title: "Charitree (netlify)",
    image: Charitree,
    description: "Our blog website hosting information my teams Charitree extension. Contact info, charity info etc...",
    link: "https://charitree.netlify.com/"
  }
]

class Portfolio extends Component {
  constructor(){
    super();
    this.state = {
      currentValue : 3,
      title: portArray[2].title,
      image: portArray[2].image,
      description: portArray[2].description,
      link: portArray[2].link
    }
  }
  leftRotate = () =>{

    if (this.state.currentValue === 0) {
      this.setState({
        currentValue: 5,
        title: portArray[this.state.currentValue].title,
      image: portArray[this.state.currentValue].image,
      description: portArray[this.state.currentValue].description,
      link: portArray[this.state.currentValue].link
      })
      let divZero = document.getElementById(0)
      divZero.className = "level-item has-text-centered has-text-grey"
      let divFive = document.getElementById(5)
      divFive.className = "level-item has-text-centered has-text-link"
    }else{
      this.setState({
        currentValue: (this.state.currentValue-1)
        
      });
      this.setState({
        title: portArray[this.state.currentValue].title,
      image: portArray[this.state.currentValue].image,
      description: portArray[this.state.currentValue].description,
      link: portArray[this.state.currentValue].link
      })
      let divToChange = document.getElementById(this.state.currentValue-1)
      divToChange.className = "level-item has-text-centered has-text-link"
      let divToReset = document.getElementById(this.state.currentValue);
      divToReset.className = "level-item has-text-centered has-text-grey"
    }

  }
  rightRotate = () =>{
    
    if (this.state.currentValue === 5) {
      this.setState({
        currentValue: 0,
        title: portArray[this.state.currentValue].title,
      image: portArray[this.state.currentValue].image,
      description: portArray[this.state.currentValue].description,
      link: portArray[this.state.currentValue].link
      })
      let divZero = document.getElementById(0)
      divZero.className = "level-item has-text-centered has-text-link"
      let divFive = document.getElementById(5)
      divFive.className = "level-item has-text-centered has-text-grey"

    }else{
      this.setState({
        currentValue: (this.state.currentValue+1)
        
      });
      this.setState({
        title: portArray[this.state.currentValue].title,
        image: portArray[this.state.currentValue].image,
        description: portArray[this.state.currentValue].description,
        link: portArray[this.state.currentValue].link
      })
      let divToChange = document.getElementById(this.state.currentValue+1)
      divToChange.className = "level-item has-text-centered has-text-link"
      let divToReset = document.getElementById(this.state.currentValue);
      divToReset.className = "level-item has-text-centered has-text-grey"
      
    }

  }
  render() {
    return (
      <div className="hero is-large">
      <div className="hero-body">
      <Cara title={this.state.title} image={this.state.image} description={this.state.description} link={this.state.link}/>
      </div>
      <nav class="level is-mobile">
      
  <div class="level-item has-text-centered cursorForSelect" onClick={this.leftRotate}>
    <div>
    <i class="fas fa-chevron-left" ></i>
    </div>
  </div>
  <div class="level-item has-text-centered has-text-grey" id={0}>
    <div>
    <i class="far fa-circle"></i>
    </div>
  </div>
  <div class="level-item has-text-centered has-text-grey" id={1}>
    <div>
    <i class="far fa-circle"></i>
    </div>
  </div>
  <div class="level-item has-text-centered has-text-grey" id={2}>
    <div>
    <i class="far fa-circle"></i>
    </div>
  </div>
  <div class="level-item has-text-centered has-text-link" id={3}>
    <div>
    <i class="far fa-circle"></i>
    </div>
  </div>
  <div class="level-item has-text-centered has-text-grey" id={4}>
    <div>
    <i class="far fa-circle"></i>
    </div>
  </div>
  <div class="level-item has-text-centered has-text-grey" id={5}>
    <div>
    <i class="far fa-circle"></i>
    </div>
  </div>
  <div class="level-item has-text-centered cursorForSelect" onClick={this.rightRotate}>
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