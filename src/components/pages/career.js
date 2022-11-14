import React from "react";
import Slide from "./slide";
import './career.css';


function Career(){
    return(
        <>


<Slide imslide="https://thumbs.dreamstime.com/b/hand-engineer-playing-blocks-wood-tower-game-blueprint-o-hand-engineer-playing-blocks-wood-tower-game-blueprint-108132795.jpg" class="d-block w-100" height={'440px'} slidetitle="career" />
     
     <div className="container">
        <div className="row mt-5"id="n">
            <div className="col-md-12">
             <h2>Working at Allseas</h2>
             <p>At Allseas we are a passionate group of people dedicated to making lasting relationships and improving people’s lives. We’re looking for talented individuals to join our team and change the way people work.</p>
             <br></br>
             <h3>6 Reasons To Join</h3>
            </div>
        </div>
     </div>


     <div className="container-fluid">
        <div className="row mt-5 pt-5 justify-content-center" >
            <div className="col-md-3"id="n">
                <h3></h3>
                <h3><i class="fa-solid fa-heart-pulse" id="cer-ic"></i> </h3>
             <h4 className="career-bock justify-content-center">Balanced Life</h4>
             <p className="caree-para">You’re a human – and so are we! We strive to make sure our employees achieve a healthy and happy work-life balance.</p>
             <br></br>
            </div>

            <div className="col-md-3"id="n">
                <h3> <i className="fa-solid fa-globe" id="cer-ic"></i> </h3>
             <h4 className="career-bock justify-content-center">Right Networking</h4>
             <p>When you join us, you join a powerful global network of talented professionals. We provide opportunities to build lifelong relations with colleagues and clients, worldwide.</p>
             <br></br>
            </div>

            <div className="col-md-3"id="n">
                <h3><i class="fa-sharp fa-solid fa-universal-access"id="cer-ic"></i></h3>
             <h4 className="career-bock justify-content-center">Diversified Culture</h4>
             <p>We believe assortment in life offers an ideal environment for comprehensive growth. With us, people from diverse backgrounds and geographies come together in pursuit of a common vision.</p>
             <br></br>
            </div>


        </div>
     </div>

     <div className="container-fluid">
        <div className="row mt-5 pt-5 justify-content-center" >
            <div className="col-md-3"id="n">
                <h3><i class="fa-solid fa-arrow-up-right-dots" id="cer-ic"></i></h3>
             <h4 className="career-bock justify-content-center">Freedom To Grow.</h4>
             <p>Freedom is a virtue you were born with. We make sure it stays with you forever. Over the course of your career, your goals may shift. We will be there with you all through, to help you make the right choice.</p>
             <br></br>
            </div>

            <div className="col-md-3"id="n">
            <h3><i class="fa-solid fa-chart-line-up"></i><i class="fa-brands fa-creative-commons-nd" id="cer-ic"></i></h3>
             <h4>Career Growth</h4>
             <p>We’re always growing and so should you. The personal development of our team members is a priority for us. We empower and enable you to grow professionally.</p>
             <br></br>
            </div>

            <div className="col-md-3"id="n">
                <h3><i class="fa-brands fa-creative-commons-nd" id="cer-ic"></i></h3>
             <h4 className="career-bock justify-content-center">Challanging Work</h4>
             <p>We believe challenges are the best enablers to success, and hence provide you with them at the right junctures.</p>
             <br></br>
            </div>


        </div>
     </div>


     <div className="container">
        <div className="row mt-5 pt-5 justify-content-center" >
            <div className="col-md-11"id="n">
                <h1>how to apply</h1>
                <p>Drop your Resume/ portfolio at hr@allseasglobal.net</p>
            <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Name</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name"/>

            <label for="exampleFormControlInput1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email"/>

            <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Phone Number"/>
            <p>Drop your Resume and Portfolio here*</p>
            <div class="mb-3">
  <label for="formFile" className="form-label">Default file input example</label>
  <input className="form-control" type="file" id="formFile"/>
<br></br>
  <div class="d-grid gap-2">
  <button class="btn btn-primary" type="button" id="nnd">Button</button>
</div>
</div>
         </div>
         </div>
         </div>  
          </div>

    


     
        </>
    );
}

export default Career;