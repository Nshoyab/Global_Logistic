import React from "react";
import './about.css';
import Slide from "./slide";
function About(){
    return(
    <>
<Slide imslide="https://fthmb.tqn.com/TOhZR8hvkyuKtVJUsXe85fcA9sw=/2120x1415/filters:fill(auto,1)/GettyImages-674707863-58065ae13df78cbc280519c8.jpg" slidetitle="About us" />



<div className="container">
    <div className="row justify-content-evenly mt-5">
        <div className="col-md-6">
            <img className="imgs" src="https://allseasglobal.net/wp-content/uploads/elementor/thumbs/container-cargo-port-ship-yard-storage-handling-of-logistic-transportation-industry-row-of-stacking-pvu1cglj2zygjrzw8av44obaoujw422yjotvnqzwn4.jpg" ></img>
        </div>
        <div className="col-md-5">
            <h4><i class="fa-solid fa-train" id="train-i"></i> Welcome to Allseas Global Logistics</h4>
            <h1>Allseas Global Logistics</h1><br></br>
            <h6>Allseas Global was established in 2010 in INDIA as a complete service-provider towards local companies being involved in shipping, logistics & transport. The founding of our company was a result of the desire to service the INDIAN market and provide a better and faster service towards our customers</h6>
            <p>Our company, Allseas Global Logistics, is an international freight forwarding organization that offers a full
scope of domestic and international freight services. Whether you are looking for expedited domestic
trucking services or you want freight shipped across the ocean, we are the professionals to contact. </p>
          <h6>No matter what type of commercial goods you are trying to transport, we get the job done in a safe and timely manner.</h6>
          <p>Traditionally Allseas Global Logistics has always offered the full range of logistic services since past years.
Both import and export services in combination with customs clearances, trucking, barging and
transshipments for all types of cargo’s are offered.</p>
             <button className="btn-navslider">more about us</button>
        </div>
    </div>
</div>
 
<div className="container">
        <div className="row" id="abm">
            <div className="col-md-6">
              <h4><i class="fa-solid fa-train" id="train-i"></i> Vision & Mission</h4>
              <h4>VISION</h4>
              <p>We believe in the power of a more connected world. In a more connected world, our customers will be nimbler and more responsive to the growing demands of delivering great experiences. Together, we will grow and build stronger, more efficient, and sustainable supply chains that are as good for business as they are for the environment.</p>

              <h4>MISSION</h4>
        
              <p>To remain the most trusted freight forwarder & logistics leader in the industry globally Three distinct characteristics of Allseas Global Logistics apart from others in the industry - Trust, Experience and Execution</p>
            </div>

            <div className="col-md-6">
                <img className="abourimg" src="https://allseasglobal.net/wp-content/uploads/2022/10/globe-3-1024x581.png"></img>
            </div>
        </div>
    </div>
    </>
    );
}
export default About;