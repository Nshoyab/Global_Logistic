import React from "react";
import './nav.css';
import { Link } from "react-router-dom";
function Nav() {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div className="container"> 
     
    <img className="navbar-icon" src="https://allseasglobal.net/wp-content/uploads/2022/10/Capture.png"></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item" id="nav-bold">

          <Link className="nav-link active" to="/home" >HOME</Link>
        </li>
        <li className="nav-item" id="nav-bold">
        <Link className="nav-link active" to="/about">ABOUT US</Link>
        </li>
        <li className="nav-item" id="nav-bold">
          <Link className="nav-link active" to="/services">SERVICES</Link>
        </li>
        <li className="nav-item" id="nav-bold">
        <Link className="nav-link active" to="/achivement">ACHIVEMRNT</Link>
        </li>
        <li className="nav-item" id="nav-bold">
        <Link className="nav-link active" to="/career">CAREER</Link>
        </li>
        <li className="nav-item" id="nav-bold">
        <Link className="nav-link active" to="/contact">CONTACT US</Link>
        </li>
      </ul>
    </div>
    <div>
    <button className="btn-nav"><i className="fa-brands fa-square-whatsapp" id="icon-n"></i>WatsApp</button>
    </div>
  </div>
</nav>


        </>
    );
    
}
export default Nav;