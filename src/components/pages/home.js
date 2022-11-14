import React from "react";
import Card from "../card";


function Home() {
    return(
        <>

<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://7space.sgp1.digitaloceanspaces.com/7L38/1600896276.b32a770bb6725fe474d2dc2fa978db54.jpg" class="d-block w-100" height={'530px'} className="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1 className="home-slde">Ocean Cargo</h1>
        <h5 className="home-slde1">Allseas Global Logistic delivers integreted and multimodel logistic services,connecting every corner of the world  wia sea and land.</h5>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <img src="https://cdn.planespotters.net/32956/n41cx-air-transport-international-douglas-dc-8-62cf_PlanespottersNet_352385_21d7fac312_o.jpg" class="d-block w-100" height={'530px'} className="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>AIR transport</h1>
        <h5>Allseas Global Logistic delivers integreted and multimodel logistic services,connecting every corner of the world  wia sea and land.</h5>
      </div>
    </div>
    <div class="carousel-item">
    <img src="https://freedesignfile.com/upload/2017/11/Cargo-transport-logistics-warehouse-Stock-Photo-09.jpg" class="d-block w-100" height={'530px'} className="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>ware Hose Cargo</h1>
        <h5>Allseas Global Logistic delivers integreted and multimodel logistic services,connecting every corner of the world  wia sea and land.</h5>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>














<div className="container">
    <div className="row justify-content-evenly mt-5">
        <div className="col-md-6">
            <img className="imgs" src="https://allseasglobal.net/wp-content/uploads/elementor/thumbs/container-cargo-port-ship-yard-storage-handling-of-logistic-transportation-industry-row-of-stacking-pvu1cglj2zygjrzw8av44obaoujw422yjotvnqzwn4.jpg" ></img>
        </div>
        <div className="col-md-5">
            <h4><i class="fa-solid fa-train" id="train-i"> </i> What We Offer</h4>
            <h1>Allseas Global Logistics</h1>
            <p>is more than a logistics & expedited service provider- we are an extension of your own company Integration, Innovation and the 360-degree intelligence with hands on experience.</p>
            <p>When you need a reliable and reputable import broker and freight forwarder to ensure safe and prompt cargo delivery, the dedicated specialists at Allseas Global Logistics are ready to wield their extensive knowledge and experience on your behalf; Our dedicated team starts by getting to know your company to better understand your shipping and logistics needs.</p>
            <p>From there, we suggest solutions that reduce the burden on your labor and resources, freeing you up to tackle other tasks essential for your business to thrive. When you partner Allseas Global Logistics , you never have to worry about when or if your cargo will arrive, or what condition it will be in. We’re the customs broker that will get the job done right the first time, every time.</p>
           <span> <ul>
                
           <i class="fa-regular fa-circle-check" id="sin"> </i> Land Freight<br></br>
           <i class="fa-regular fa-circle-check"id="sin"> </i> Air Freight<br></br>
           <i class="fa-regular fa-circle-check"id="sin"> </i> Ocean Freight<br></br>
                  
            </ul></span>
             <button className="btn-navslider">more about us</button>
        </div>
    </div>
</div>
<section  id="banner-img">
  <div className="container" id="banner-img">
    <div className="row">
     <div className="col-md-12">
     <h1 className="banner">
      Our experienced, knowledgeable experts offer optimal solutions to help you meet your business challenges.</h1><br></br>
      <h2 className="banner1">Chemical Goods | Food and Beverage | Fashion and Retails| Energy, Oil and Gas | Automotive Pharmaceuticals |
       Medical equipment’s | Perishable goods | Live stock | Personal baggage/relocation</h2>
     </div>
    </div>
</div></section>



<div className="container">
  <div className="row">
    <div className="col-md-6">
      <h5 className="pro-1">why us</h5>
     <h3 className="pro-2">We Provide The Best Logistic Services For Your Needs</h3>
     <p className="pro-3">In a more connected world, our customers will be nimbler and more responsive to the growing demands of delivering great experiences. Our approach allows us to build truly tailored solutions that connect our customers to their omni-channel consumer. Together, we work to build stronger, more efficient, and sustainable supply chains that are as good for business as they are for the environment.
     </p>
     <p className="pro-4">Carefully chosen and extensively trained team</p>
     <hr></hr>
     <p className="pro-4">Ensure safe, efficient, and reliable transportation</p>
     <hr></hr>
     <p className="pro-4">Professional, friendly, knowledgeable and responsible</p>
     <hr></hr>
     <p className="pro-4">Ensure each experience is a positive one</p>
       

     <div className="row mt-5 pt-5">
    <div className="col-md-5 justify-content-evently">
    <Card img src="https://allseasglobal.net/wp-content/uploads/2022/10/bernd-dittrich-P_-S57fiFwE-unsplash-1024x683.jpg" title="Land Freight"/>
    </div>
    <div className="col-md-5">
    <Card imgsrc="https://allseasglobal.net/wp-content/uploads/2022/10/aldrin-rachman-pradana-FadWO6V8bjw-unsplash-1024x683.jpg" title="Land Freight"/>
    </div>
    <div className="col-md-5">
    <Card imgsrc="https://allseasglobal.net/wp-content/uploads/2022/10/vidar-nordli-mathisen-2hVc3FdmBso-unsplash-1-1-1024x647.jpg" title="Land Freight"/>
    </div>
    <div className="col-md-5">
    <Card imgsrc="https://allseasglobal.net/wp-content/uploads/2022/10/vidar-nordli-mathisen-2hVc3FdmBso-unsplash-1-1-1024x647.jpg" title="Land Freight"/>
    </div>
    <div className="col-md-5 justify-content-evently">
    <Card imgsrc="https://allseasglobal.net/wp-content/uploads/2022/10/bernd-dittrich-P_-S57fiFwE-unsplash-1024x683.jpg" title="Land Freight"/>
    </div>
    <div className="col-md-5">
    <Card imgsrc="https://allseasglobal.net/wp-content/uploads/2022/10/aldrin-rachman-pradana-FadWO6V8bjw-unsplash-1024x683.jpg" title="Land Freight"/>
    </div>
</div>
    </div>
    
    
     
    <div className="col-md-6" id="form-border">

      <h1> lets connect</h1>
      <p>For better sales and support.  </p>
   <table><br></br>
    <tr>
      <td>Name</td>
      <td>Contact</td>
    </tr>
    <tr>
      <td> <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/></td>
      <td> <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/></td>
    </tr>
   </table>
    <div className="mb-4"><br></br>
  <label for="exampleFormControlInput1" className="form-label">Email</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/>
</div>
<div  className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
</div><br></br>
<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button" id="nnd">Button</button>
</div>

    </div>
  </div>
</div>



        </>
    );
    
}
export default Home;