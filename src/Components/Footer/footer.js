import React, { Component } from 'react';
import Me from '../../assets/me.jpg';
import './footer.css';


class Footer extends Component {
  render() {
    return (
        <footer class="footer marginForFooter">
        <div class="columns is-centered" id="objective">
<div class="column has-text-centered has-text-link">
<div className="sub-title margin">Designed By</div>
<div className="content has-text-white">
<img src={Me} alt="profile pic" className="roundedImage"/>
</div>  
</div>

<div class="column has-text-link has-text-centered">
<div className="sub-title margin">Contact Me</div>
<div className="content">
<br/>
mattlomet@live.com
<br/>
(732)-947-1730
</div>  
</div>

<div class="column  has-text-link has-text-centered">
<div className="sub-title margin">Thanks to</div>
<div className="content has-text-link">
<br/>
<span class="tag is-medium is-link">Font Awesome</span>
<br/>
<br/>

  <span class="tag is-medium is-primary">Bulma</span>
<br/>
<br/>

  
  <span class="tag is-medium is-info">React</span>
</div>  
</div>

</div>
      </footer>
    );
  }
}

export default Footer;



