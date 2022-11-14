import React from "react";

import './slide.css';

function Slide(props){
    return(
        <>
<div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={props.imslide} id="slido"/>
      <div class="carousel-caption d-none d-md-block">
        <h1 className="home-slde3">{props.slidetitle}</h1>
      </div>
    </div>
    </div>
        </>
        
     );}
export default Slide;