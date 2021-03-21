import React, { Component } from 'react';

export default class Categories extends Component{
  render(){
    return(
      <section>
      <section className="contact_main">
      <div className="contact_text">
        <p>Thank you for taking the time to look at my humble works! Now it’s my turn to answer your questions or queries. </p>
        <p>For all other enquiries, please email admin@teecaake.com.</p>
      </div>
      <div className="contact_infos">
        <div className="names">
           <div className="first">
            <p>First Name</p>
           <input type="text" value="" id="first_name" />
           </div>
           <div className="last">
            <p>Last Name</p>
           <input type="text" value="" id="last_name" />
           </div>
        </div>
            <p>Email</p>
           <input type="email" value="" id="email_ct" />
            <p>Comment or Message</p>
           <input type="text" value="" id="message" />
      </div>
      <div>
        <button>SUBMIT</button>
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
