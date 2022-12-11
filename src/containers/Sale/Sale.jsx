import React from 'react';

import {data} from '../../constants';
import {PlantProduct} from '../../components';
import './Sale.css';

const Sale = () => (
  <div className='app__sale'>
    <h3>Plants on Sale</h3>
    <div className="sale-items">
      {data.products.map((products, index)=> (
        <PlantProduct key={products.title + index} image={products.imgUrl} title={products.title} price={products.price}/>
      ))}
    </div>
    <button className='primary-btn'>Shop All</button>
  </div>
);

export default Sale;
