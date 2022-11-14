import React from "react";
import Slide from "./slide";
import './contact.css';

function Contact(){
    return(
   
   
   
   
   <>
<Slide imslide="https://th.bing.com/th/id/OIP.la7lTjtVC5hbMT9jCMoOuQHaE8?pid=ImgDet&rs=1" slidetitle="Contact us" />
       

<div className="container">
<div className="row ">
<div className="col-md-6">
<h3> 
Leave A Message</h3>
<p>For better sales and support.  </p>
<table>
<tr>
<td>Name</td>
<td>Contact</td>
</tr>
<tr>
<td> <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/></td>
<td> <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/></td>
</tr>
</table>
<div className="mb-4">
<label for="exampleFormControlInput1" className="form-label">Email</label>
<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/>
</div>
<div  className="mb-3">
<label for="exampleFormControlTextarea1" className="form-label">Message</label>
<textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
</div>
<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button" id="nnd">Send Now</button>
  <div className="row">
  <div className="col-md-6">
         <h2>Social Media</h2>
    </div>

    <div className="col-md-6">
         <h2><i class="fa-brands fa-square-twitter" id="in"></i></h2>
    </div>
    </div>
</div>

</div>
<div className="col-md-6">
<h5><i class="fa-solid fa-train" id="train-i"></i> Contact Us</h5>
<h3>Allseas Global Logistics</h3>
<p className="c-para">However the philosophy remained the same as from day I where we still strongly believe in our distinctive capabilities, providing an all-round service to our clients, based on being an effective and efficient team, working on a personal basis with our esteemed customers.</p>
<div className="row">
    <div className="col-md-6">
        <h2><i class="fa-solid fa-phone"></i></h2>
        <h5>Contact</h5>
        <p className="c-para">+91 8108186810</p>
    </div>
    <div className="col-md-6">
        <h2><i class="fa-solid fa-envelope"></i></h2>
    <h5>Email</h5>
        <p className="c-para">

info@allseasglobal.net</p>
    </div>
</div>

<div className="row">
    <div className="col-md-6">
        <h2><i class="fa-solid fa-location-dot"></i></h2>
         <h5>Location</h5>
        <p className="c-para">110 Mahant Chambers, Rd number 34, Wagle Estate, Jai Bhavani Nagar, MIDC Industrial Area, Thane West - 400604.</p>
    </div>
    <div className="col-md-6">
        <h2><i class="fa-solid fa-clock"></i></h2>
         <h5>Opening Hours</h5>
        <p className="c-para">09:00 AM - 06:00 PM</p>
    </div>

   
    
    </div>
    
</div>
</div>
</div>




<div className="container">
    <div className="row mt-5">
        <div className="col-md-12">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8695217286772!2d72.94761611455252!3d19.200900453024996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b92a530ff2af%3A0xe43504283d64264f!2sMahant%20Chambers!5e0!3m2!1sen!2sin!4v1668265645621!5m2!1sen!2sin" width={"1148px"} height={"450"}></iframe>
        </div>
    </div>
</div>
 </>
    );
}

export default Contact;