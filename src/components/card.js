import React from "react";
import './card.css';
function Card(props){
    return(
        <>
       <div class="card">
      <div className="cardbody">
    <img className="card-text" src={props.imgsrc}></img>
    <h6 className="text-card">{props.title}</h6>
   </div>
</div>


        </>
    );
}
export default Card;