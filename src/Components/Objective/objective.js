import React, { Component } from 'react';
import './objective.css'
import Resume from '../../assets/resume.pdf'


class Objective extends Component {
  render() {
    return (
      <div className="hero is-small">
      <div className="hero-body has-text-centered mainContainer">

          <div class="columns is-centered" id="objective">
  <div class="column has-background-link has-text-white">
    <div className="title has-text-white">Github</div>
    <div className="sub-title margin"></div>
    <div className="content">
    <a href="http://github.com/mattlomet" target="_blank" className="has-text-white">
    <i class="fab fa-3x fa-github"></i>
    </a>
    </div>
    <div className="title has-text-white">Resume</div>
    <div className="sub-title margin"></div>
    <div className="content ">
    <a href={Resume} target="_blank" className="has-text-white">
    <i class="fas fa-3x fa-briefcase"></i>
    </a>
    </div>


  </div>
  <div class="column ">
  <div className="title has-text-link">Technologies</div>
  <div className="sub-title has-text-link marginBottom">
  JavaScript Developer with a knowledge of back end technologies, that can take  mock ups and create clean, scale able, team friendly code. Enjoy to work in  teams but also capable of working/learning alone.
  </div>
  <div className="content">
  <span class="tag is-link marginForTag">HTML</span>

  <span class="tag is-link marginForTag">CSS</span>
  <span class="tag  is-link marginForTag">Javascript</span>

  <span class="tag is-link marginForTag">React</span>

  <span class="tag is-link marginForTag">Node.js</span>

  <span class="tag is-link marginForTag">MySQL</span>

  <span class="tag is-link marginForTag">mongoDB</span>

  <span class="tag is-link marginForTag">React Native</span>

  <span class="tag is-link marginForTag">Ruby</span>

  </div>  
  </div>
  <div class="column has-background-link has-text-white">
  <div className="title has-text-white">About</div>
  <div className="sub-title margin"></div>
  <div className="content has-text-white">
  As of right now I am a student of all things coding. After 2 programming bootcamps I am fully sunk into a self teaching/project building phase. Contributing to projects with former classmates has been an awesome experience being able to complement eachother on complex projects that we're all learning together is really a fun, challenging task.
  
  <br></br>
   Currently I am using React to build Twitch Extensions with a team of former classmates. You can see them down below in my project showcase or hop over to my github and inspect them further.
  <br></br>
  The technology behind this website is very simple, but the way it was designed was to be scalable as i learn new skills and create/contribute on new projects. Written in React with Bulma CSS helping me do some of the heavy lifting with styling.
  </div>  
  </div>

</div>

      </div>
      </div>
    );
  }
}

export default Objective;