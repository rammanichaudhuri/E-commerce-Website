import React, { Component, useState } from 'react';

function Product(props){
    const {addtocart, product} = props;
    return(
        <div key={product.id} className="card">
          <img className="product_img" src={product.img} alt={product.title} style={{width: 300, height: 300}}/>
          <div className="details">
            <h3 className="product_name">{product.title}</h3>
            <h3 className="product_price">{product.price}</h3>
          </div>
          <p className="product_desc">{product.desc}</p>
          <button className="cart-btn" onClick={() => addtocart(product)}>add to cart</button>
        </div>
    )
  }

export default Product
