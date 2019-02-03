import React from "react";

const Cara = props => (
  <div class="columns is-centered" id="objective">
<div class="column  has-text-centered has-text-link">
<img className="imageResize" src={props.image} alt="meaningful text"/>
  
  </div>

<div class="column has-text-centered has-text-link">
<div className="title has-text-link">{props.title}</div>
<div className="content">
{props.description}
</div>
<div className="sub-title margin"><a href={props.link} target="_blank">{props.link}</a></div>

</div>

</div>

);

export default Cara;




