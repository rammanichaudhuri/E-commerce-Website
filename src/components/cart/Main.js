import React from 'react';
import Product from '../products/Product';

function Main(props){
  const {objects, addtocart} = props;
  console.log(objects);
  return(
    <div>
      {objects.map((product) => (
        <Product key={product.id} product={product} addtocart={addtocart} />
      ))}
    </div>
  )
}

export default Main
