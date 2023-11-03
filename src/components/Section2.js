import React from 'react'
import airpag from "./images/airlogo.png"
import solog from "./images/selogo.png"
import firt from "./images/fit.png"
import applecard from "./images/applecard.png"
function Section2() {
  return (
    <div><section>
    <div class="mx-3">
      <div class="row">
        <div class="col-md-6 mb-3">
          <div class=" had  text-center text-light">
            <h1 class="pt-5">AirPods Pro </h1>
            <h3>Rebuilt from the sound up.</h3>

            <a href="#" class="pe-2 pt-1">Learn More &#10095; </a>
            <a href="#"> Shop &#10095;</a>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class=" haf  text-center text-light">
            <img src={airpag} class="bg-dark mt-5" alt=""/>
            <h3 class="pt-2">A healthy leap ahead</h3>

            <a href="#" class="pe-2 pt-1">Learn More &#10095; </a>
            <a href="#"> Shop &#10095;</a>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class=" hag  text-center text-dark">
            <img src={solog} class="mt-5" alt=""/>
            <h5>A great deal to love.</h5>

            <a href="#" class="pe-2 pt-2">Learn More &#10095; </a>
            <a href="#"> Buy &#10095;</a>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class=" hai  text-center text-dark ">
            <img src={firt} class="mt-5" style={{width: "140px"}} alt=""/>
            <h5 class="pt-2">A healthy leap ahead</h5>
            <p class="">Now all you need is iphone</p>


            <a href="#" class="pe-2 pt-1">Learn More &#10095; </a>
            <a href="#"> Notify me &#10095;</a>
            <span class="bot">available later this fall for all iphone users. <sup>1</sup></span>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class=" ham text-center text-dark">
            <h6 class="pt-3 text-danger">offer ends 9.26</h6>
            <h1>Get supercharged <br/> for college.</h1>
            <p>Last chance to get a gift card. <sup>2</sup> </p>

            <a href="#" class=" pt-1">shop now &#10095; </a>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class=" han  text-center text-dark">
            <img src={applecard}class="mt-5 pb-2" style={{width: "100px"}} alt=""/>
            <h5 class="pb-1">Get up to 3% Daily Cash back <br/> with every purchase.</h5>



            <a href="#" class="pe-2 pt-2">Learn More &#10095; </a>
            <a href="#"> Apply now &#10095;</a>

          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Section2