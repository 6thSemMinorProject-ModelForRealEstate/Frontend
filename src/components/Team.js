
import React from "react";
import "./css/Team.css";
import pic from "../images/tejas.jpg";
import pic2 from "../images/badri.jpg";
import pic3 from "../images/shubh.jpg";
import pic4 from "../images/nayan.jpg";

export const Team = () => {

  return (

    <section class="section-white">

      <div class="container">

        <div class="row">

          <div class="col-md-12 text-center">

            <h2 class="section-title">The Team Behind Pricewise</h2>
          </div>

          <div class="col-sm-6 col-md-3">


            <div class="team-item">

              <img id="tejasimg" src={pic} alt="tejas" class="team-img" />
              <h3>Team leader</h3>
              <div class="team-info"><p>Tejas Jain</p></div>
              <p>  To get in touch with me , click on the button below :- </p>

              <ul class="team-icon">
                <li><a href="https://www.linkedin.com/in/tejas-jain-114288202/" class="linkedin">
                  <i class="fa fa-linkedin"></i>
                </a></li>
              </ul>


            </div>
          </div>
          <div class="col-sm-6 col-md-3">

            <div class="team-item">

              <img id="badriimg" src={pic2} alt="badri" class="team-img" />
              <h3>Team member</h3>
              <div class="team-info"><p>Badri vishal Singhal</p></div>
              <p>To get in touch with me , click on the button below.</p>

              <ul class="team-icon">

                <li><a href="/#" class="linkedin">
                  <i class="fa fa-linkedin"></i>
                </a></li>
              </ul>


            </div>
          </div>
          <div class="col-sm-6 col-md-3">

            <div class="team-item">

              <img id="shubhimg" src={pic3} alt="shubh" class="team-img" />
              <h3>Team member </h3>
              <div class="team-info"><p>Shubh gupta</p></div>
              <p>To get in touch with me , click on the button below</p>

              <ul class="team-icon">

                <li><a href="https://www.linkedin.com/in/shubh-gupta06/" class="linkedin">
                  <i class="fa fa-linkedin"></i>
                </a></li>
              </ul>


            </div>
          </div>

          <div class="col-sm-6 col-md-3">

            <div class="team-item">

            <img id="nayanimg" src={pic4} alt="nayan" class="team-img" />
              <h3>Team member</h3>
              <div class="team-info"><p>Nayan gupta</p></div>
              <p>To get in touch with me , click on the button below</p>

              <ul class="team-icon">

                <li><a href="https://www.linkedin.com/in/nayan-gupta-86b782191" class="linkedin">
                  <i class="fa fa-linkedin"></i>
                </a></li>
              </ul>


            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

