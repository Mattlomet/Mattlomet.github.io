import React from "react";

const Cara = props => (
    
  <div className="container">
    <article class="media">
  <figure class="media-left">
    <p class="image is-8x8">
      <img src={props.image}/>
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>{props.title}</strong>
        <br></br>
        {props.description}
        <br></br>
        {props.link}
      </p>
    </div>
    </div>
</article>
  </div>
);

export default Cara;