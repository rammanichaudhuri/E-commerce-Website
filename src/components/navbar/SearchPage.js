import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useStateValue } from './cart/StateProvider';
import { auth } from '../firebase';
import {products_page_elements} from './products/data_products.js';
import Product from './cart/Product';

function SearchPage(props){

  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if(user)
      auth.signOut();
  }

  const filterList = (e) => {
    setKeyword(e.target.value);
    let itemss = initialItems;
    itemss = itemss.filter((item) => {
        return item.title.toLowerCase().includes(keyword.toLowerCase());
      });
      setItemss(itemss);
  }
  // const filteredProducts = this.props.filter(product => {
  //     return product.title.toLowerCase().includes(input.toLowerCase())
  //    })
  let items = props.location.state.items.items;
  console.log(items);
  let [keyword, setKeyword] = useState('');
  let [initialItems, setInitialItems] = useState(products_page_elements);
  let [itemss, setItemss] = useState(items);
  console.log(itemss);

  useEffect(() => {
    setItemss(items);
  }, [])

  return (
    <div>
    <div className="nav">
    <ul className="nav-main">
       <Link to="/">
         <li><a href="#">home</a></li>
       </Link >
       <input
       className="searchbar"
        key="random1"
        value={keyword}
        placeholder={"search product"}
        onChange={filterList}
       />
       <Link to="/products">
         <li><a href="#">Categories</a></li>
       </Link>
       <Link to="/login">
         <li><a href="#">{!user? 'Sign in' : 'Sign out'}</a></li>
       </Link>
       <Link to="/cart">
         <li><a href="#">Cart ({basket.length})</a></li>
       </Link>
       </ul>
    </div>
    <div className="products__container">
    <div className="home__row">
       {
         itemss.map(item => {
           return (
             <Product
                 id={item.id}
                 price={item.price}
                 title={item.title}
                 img={item.img}
                 info={item.info} />
           )
         })
       }
    </div>
    </div>
    </div>
  )
}

export default SearchPage
