import React, { Component } from 'react';
import { useState } from 'react';
import { FaBeer } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import {Link} from 'react-router-dom';

function Slider(){
  const sliderArr = [
    {
      id: 1,
      img: "website/artbg-1.jpg",
    },
    {
      id: 2,
      img: "website/artbg-4.jpg",
    },
    {
      id: 3,
      img: "website/artbg-10.jpg",
    },
  ];

  const checkNumber = (number) => {
    if(number>=sliderArr.length)
    return 0;
    else if(number<0)
    return sliderArr.length - 1;
    else {
      return number;
    }
  }

  const [index, setIndex] = useState(0);
  const {id, img} = sliderArr[index];
  const goLeft = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }
  const goRight = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  }
  return(
    <div>
    <div className="slider">
          <article className="slide" key={id}>
              <img className="slide_img" src={img} />
            </article>
    </div>
    <Link to="/categories">
    <button className="shop">SHOP NOW</button>
    </Link>
    <button id="goleft" onClick={goLeft}><FaChevronLeft /></button>
    <button id="goright" onClick={goRight}><FaChevronRight /></button>
    </div>
  )
}

export default Slider
