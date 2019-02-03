import React, { Component } from 'react';
import "./header.css"


class Header extends Component {
  render() {
    return (
      <div>

    <section className="hero is-primary is-fullheight backgroundImage">
  <div className="hero-body">
    <div className="container has-text-centered">
      <h1 className="title">
        Matt Lomet
      </h1>
      <h2 className="subtitle">
        Web Developer
      </h2>
    </div>
  </div>

  <div className="hero-foot">
    <nav className="tabs is-boxed is-fullwidth">
      <div className="container">
        <ul>
          <li><a href="#objective" className="navbarItem">
 <i className="fas fa-male is-large"></i>
 </a></li>
          <li><a href="#portfolio" className="navbarItem">
 <i className="fas fa-laptop-code is-large"></i>        
 </a></li>
         
        </ul>
      </div>
    </nav>
  </div>
</section>
      </div>
    );
  }
}

export default Header;



 

  
 



