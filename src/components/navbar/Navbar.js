import React, { Component } from 'react';
import { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter, FaShoppingCart } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Navbar(props){
    const [showLinks, setShowLinks] = useState(false);
  return (
  <nav>
    <div className="nav-center">
      <div className="heading">
      <Link to="/"><img src={logo} alt="logo" style={{ height: 53, width: 36 }}/></Link>
        <h2>Rhea's Art.</h2>
      </div>
       <div className="nav-header">
         <button className="nav-toggle" onClick={() =>
               setShowLinks(!showLinks)}>
             <FaBars />
         </button>
       </div>
         <div className={`${showLinks?"links-container show-container":"links-container"}`}>
           <ul className="links">
              {links.map((link) => {
                const { id, url, text } = link
                return (
                  <li key={id}>
                    <Link to={text}>{text}.</Link>
                  </li>
                );
              })}
           </ul>
           <Link to="/basket">
           <div class="cart_icon">
             <i><FaShoppingCart /></i>
             <span>({props.countCartItems})</span>
           </div>
           </Link>
         <ul className="socials">
         {social.map((social) => {
           const { id, url, icon } = social
           return (
             <li key={id}>
               <Link to="/{text}">{icon}</Link>
             </li>
           );
         })}
         </ul>
       </div>
    </div>
  </nav>
);
}

export default Navbar
