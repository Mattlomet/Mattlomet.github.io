import React, { Component } from 'react';
import BeachPic from "../../assets/beach.jpg"
import "./header.css"


class Header extends Component {
  render() {
    return (
      <div className="hero is-small">
        <img src={BeachPic} alt="beach"/>
        <div className="headerText">
            <h1 className="title">
              Matt Lomet
      </h1>
            <h2 className="subtitle" >
              Full Stack Web Developer
      </h2>
          <div className="navbar">
 
 <a href="#portfolio" className="navbarItem">
 <i className="fas fa-laptop-code is-large"></i>        
 </a>

 <a href="#objective" className="navbarItem">
 <i className="fas fa-male is-large"></i>
 </a>

 <a href="#contact" className="navbarItem">
 <i className="fas fa-phone is-large"></i>
 </a>
 </div>
        </div>
       
      </div>
    );
  }
}

export default Header;