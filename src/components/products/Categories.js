import React, { Component } from 'react';
import Product from './Product';

export default function Categories(props){
  const {objects, addtocart} = props;
  //console.log(props);
    return(
      <div className="main_ctg_app">
      <h1>All Products.</h1>
      <div className="products_list">
      {objects.map((product) => (
         <Product key={product.id} product={product} addtocart={addtocart}></Product>
       ))}
      </div>
      </div>
    );
  }
