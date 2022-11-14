import React from "react";
import './footer.css';
function Footer(){
   return(
   
 <>
 
 <section id="footer-mg">
 <div className="container-fluid">
    <div className="row" id="map-bag">
        <div className="col-md-3" id="footer-mg">
        <img className="navbar-icon"  src="https://allseasglobal.net/wp-content/uploads/2022/10/Capture.png"/>
        <h6>Allseas Global Logistics is more than a logistics and expedited service provider</h6><br></br>
        <h6><i class="fa-solid fa-envelope" id="email"></i> info@allseasglobal.net</h6>
        </div>
        <div className="col-md-3"id="footer-mg">
            
            <ul>
            <h5 className="footer-head">Quick Links</h5>
            <hr></hr>
                <li className="footer-head1">Home</li>
                <li className="footer-head1">About Us</li>
                <li className="footer-head1">Services</li>
                <li className="footer-head1">Achievements</li>
                <li className="footer-head1">Contact</li>
            </ul>
        </div>
        <div className="col-md-3"id="footer-mg">
            <ul>
            <h5 className="footer-head">Useful Links</h5>
            <hr></hr>
            <li className="footer-head1">Useful Links</li>
            <li className="footer-head1">Air Freight</li>
            <li className="footer-head1">Land Freight</li>
            <li className="footer-head1">Ocean Freight</li>
            <li className="footer-head1">Warehousing</li>
            <li className="footer-head1">Courier Services</li>
            </ul>
        </div>
        <div className="col-md-3"id="footer-mg">
       
            <h5 className="footer-head">Work Hours</h5><br></br>
            
            <p><i class="fa-sharp fa-solid fa-watch"> </i> 9 AM - 6 PM , Monday - Saturday</p>
           <h6>
           
             110 Mahant Chambers, Rd number 34, Wagle Estate, Jai Bhavani Nagar, MIDC Industrial Area, Thane West – 400604.</h6><br></br>
             <button id="btn-footer"><i class="fa-solid fa-phone"> </i> +91 84523 92783</button>
        </div>
        <h6>© 2019 Allseas Global Logistics Pvt Ltd. All rights reserved</h6>
    </div>
 </div>
 </section>
 </>
    
   );
}
export default Footer;