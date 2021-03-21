import React, { Component } from 'react';

export default class Categories extends Component{
  render(){
    return(
      <section>
      <section className="about_main">
      <div className="about_text">
        <p>Hi! I’m Tahira, or Tee for short, the founder of Teecaake.
           Teecaake as it stands today first started in between pages and pages of writing on my journal just after I finished high school in 2013.
            But I properly began to think of it as a serious venture in the summer of 2015. Soon after, Teecaake was born.</p>

        <p>My art exemplifies many strong figures both in the media and in history that inspire me.
           As a female of South Asian origin, having grown up in a cities as vibrant as Manchester and Sheffield,
            now living in London, diversity and representation is extremely important to me.
            I aim for my art to convey my views and who I am, but above all inspire others.</p>
      </div>
      <div className="about_img">
        <img id="image" src={"./aboutpic.jpg"} />
      </div>
      </section>
      <footer>

        <div class="location">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua</p></div>

        <div class="info">
        <a href="#">+1-543-123-4567</a>
        <a href="#">example@rhea.com</a></div>

       <div class="about_us">
          <a href="#">About Us</a>
          <a href="#">Jobs</a>
          <a href="#">Press</a>
          <a href="#">Blog</a></div>

        <div class="contact_us">
          <a href="#">Contact Us</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a></div>

   	  </footer>

      <div class="copyrights">
        <p>© 2015-2020 Rhea. All rights reserved.</p>
      </div>
    </section>

    )
  }
}
