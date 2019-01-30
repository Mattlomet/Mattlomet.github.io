import React, { Component } from 'react';
import Me from '../../assets/me.jpg'


class Footer extends Component {
  render() {
    return (
        <footer class="footer">
        
<div class="content has-text-centered">


    <span>
  <strong>Created</strong> by Matt Lomet        
    </span>
    <span class=" is-32x32">

<img src={Me} className="is-rounded"/>
</span>
  </div>
      </footer>
    );
  }
}

export default Footer;