import React from 'react';

function Basket(props){
  const {cartItems, addtocart, removefromcart} = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  return(
    <div className="basket_div">
      <div className="basket_items_ctn">
      {cartItems.length === 0 && <div>Cart is empty</div>}
      {cartItems.map((item) => (
        <div className="basket_items" key={item.id}>
          <div>{item.title}</div>
          <img src={item.img} style={{width: 300, height: 300}}/>
          <div>
          <button className="plus" onClick={() => addtocart(item)}> + </button>
          <button className="minus" onClick={() => removefromcart(item)}> - </button>
          </div>
          <div>
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      </div>
      {cartItems.length!==0 && (
        <div className="checkout">
        <div>
              <div>Items Price</div>
              <div>${itemsPrice.toFixed(2)}</div>
        </div>
        <div>
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
        </div>
      )}
    </div>
  )
}

export default Basket
