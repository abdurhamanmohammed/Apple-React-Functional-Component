import React from 'react'
import watch from "./images/watch logo.png"
function Section1() {
  return (
    <div>
        <section class="mb-3">
        <div class=" ha">
            <div class="container pt-5 ">
                <div class=" pt-5  mt-2 text-center text-light">
                <h1 class="pb-1">iphone 14 Pro</h1>
                <h3>Pro.Beyond.</h3>
                <a href="#" class="pe-2 pt-1">Learn More &#10095; </a>
                <a href="#">Buy &#10095;</a>
                </div>
            </div>
            </div>
            <div class=" hab">
            <div class="container pt-5 ">
                <div class="   text-center text-dark">
                <h1 class="pb-1">iphone 14 </h1>
                <h3>Big and bigger</h3>
                <p>iphone 14 plus available starting 10.7</p>
                <a href="#" class="pe-2 pt-1">Learn More &#10095; </a>
                <a href="#"> Shop &#10095;</a>
                </div>
            </div>
            </div>
            <div class=" hac">
            <div class="container pt-5 ms">
                <div class="   text-center text-dark">
                <img src={watch} class="pb-2" alt=""/>
                <h3>Adventure awaits.</h3>
                <a href="#" class="pe-2 pt-1">Learn More &#10095; </a>
                <a href="#"> Buy &#10095;</a>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Section1