import React, { Component } from 'react';

const Title = ({filterItems}) => {
    return(
      <div class="ctg_buttons">
        <button onClick={() => filterItems('all')}>all</button>
        <button onClick={() => filterItems('category-1')}>category 1</button>
        <button onClick={() => filterItems('category-2')}>category 2</button>
        <button onClick={() => filterItems('category-3')}>category 3</button>
        <button onClick={() => filterItems('category-4')}>category 4</button>
      </div>
    )
}

export default Title
