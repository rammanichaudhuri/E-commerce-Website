import React, { Component } from 'react';
import Slider from '../Slider.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Home(){
    return (
    <div>
      <Slider />
      <div className="categories">
        <h1 className="heading_ctg">shop by categories.</h1>
      <div className="ctg_grid">
        <div className="image-item">
          <img className="image__img" src={"./website/painting.jpg"} />
          <Link to="/categories"><div className="image__overlay">
            <h2>category 1</h2>
            <p>some text</p>
          </div>
          </Link>
        </div>
        <div className="image-item">
          <img className="image__img" src={"./website/1-fabric-pots.jpg"} />
          <Link to="/categories"><div className="image__overlay">
            <h2>category 2</h2>
            <p>some text</p>
          </div>
          </Link>
        </div>
        <div className="image-item">
          <img className="image__img" src={"./website/clothing.png"} />
          <Link to="/categories"><div className="image__overlay">
            <h2>category 3</h2>
            <p>some text</p>
          </div>
          </Link>
        </div>

        <div className="image-item">
          <img className="image__img" src={"./website/sketch2.jpg"} />
          <Link to="/categories"><div className="image__overlay">
            <h2>category 4</h2>
            <p>some text</p>
          </div>
          </Link>
        </div>

    </div>
    </div>



        <h1 className="heading_fv">shop favourites.</h1>
      <div className="favourites">
      <div className="fav">
          <img className="fav__img" src={"./website/artbg-9.png"} />
          <div className="fav__overlay">
            <h2>category 1</h2>
            <p>some text</p>
          </div>
        </div>
        <div className="fav">
          <img className="fav__img" src={"./website/earrings.jpg"} />
          <div className="fav__overlay">
            <h2>category 2</h2>
            <p>some text</p>
          </div>
        </div>
        <div className="fav">
          <img className="fav__img" src={"./website/clothingdress.jpg"} />
          <div className="fav__overlay">
            <h2>category 3</h2>
            <p>some text</p>
          </div>
        </div>
        <div className="fav">
          <img className="fav__img" src={"./website/paintedguitar.jpg"} />
          <div className="fav__overlay">
            <h2>category 4</h2>
            <p>some text</p>
          </div>
        </div>
    </div>


    <br />
    <hr />



    <div className="newsletter">
          <h1>subscribe to the newsletter!</h1>
          <div className="signup__block">
               <input type="email" value="email@example.com" id="email" />
               <button>subscribe!</button>
          </div>
      </div>

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



    </div>
    );
  }


export default Home
