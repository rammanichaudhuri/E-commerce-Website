import React, { useState } from 'react';
import Categories from './Categories';
import Title from './Title';
import { menu } from './data';

function Capp(){
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category)
    setMenuItems(newItems);
  }
  return(
    <div class="main_ctg_app">
      <Title filterItems={filterItems}/>
      <Categories menuItems={menu}/>
    </div>
  )
}

export default Capp
