import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Categories from './components/products/Categories';
import Product from './components/products/Product';
import Details from './components/products/Details';
import Basket from './components/cart/Basket';
import Main from './components/cart/Main';
import { menu } from './components/products/data.js';


function App() {
  const objects = menu;
  console.log(objects);
  const [cartItems, setCartItems] = useState([]);
  const addtocart = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist)
    {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x))
    }
    else{
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  }

  const removefromcart = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist.qty === 1)
    {
      setCartItems(cartItems.filter((x) => x.id!==product.id))
    }
    else{
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty - 1} : x))
    }
  }
  return (
    <div className="App">
    <Navbar countCartItems={cartItems.length} />
    <Switch>
      <Route path="/cart">
        <Main objects={objects} addtocart={addtocart} />
      </Route>
      <Route path="/basket">
        <Basket cartItems={cartItems} addtocart={addtocart} removefromcart={removefromcart} />
      </Route>
      <Route path="/categories">
        <Categories objects={objects} addtocart={addtocart} />
      </Route>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/details" component={Details} />
      <Route path="/" component={Home} />
    </Switch>
    </div>
  );
}

export default App;
