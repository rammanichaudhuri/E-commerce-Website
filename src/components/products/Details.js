import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Details extends Component{
  render(){
    return(
      <div>
      {
        // <ProductConsumer>
        //     {value => {
        //       const {id, title, img, price, info, inCart} = value.detailProduct;
        //       return <div key={id} className="details_card">
        //       <div class="main_cont_dt">
        //         <img className="deatils_img" src={img} alt={title} style={{width: 550, height: 550}}/>
        //         <div class="dt_info_cont">
        //           <h3 className="details_name">{title}</h3>
        //           <h3 className="details_price">{price}</h3>
        //           <p className="details_desc">{info}</p>
        //           <div class="buttons">
        //         <Link to="/categories"><button className="back">back to cart</button></Link>
        //         <button className="cart-btn" onClick={() => {
        //           console.log("added to cart");
        //         }}>add to cart</button>
        //         </div>
        //         </div>
        //       </div>
        //     </div>
        //     }}
        // </ProductConsumer>
      }
      </div>
    )
  }
}
