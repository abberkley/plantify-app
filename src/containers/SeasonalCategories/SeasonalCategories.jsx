import React from 'react';

import { data } from '../../constants';
import { PlantCategory } from '../../components';
import './SeasonalCategories.css';

const SeasonalCategories = () => (
  <div className='app__seasonal-categories'>
    <h3>Explore what's in Season: </h3>
    <div className="categories-content">
      <div className="categories-items">
        {data.categories.map((categories, index)=> (
          <PlantCategory key={categories.title + index} image={categories.imgUrl} title={categories.title}/>
        ))}
      </div>
      <a href="/" className='categories-link'>Explore More</a>
    </div>
  </div>
);

export default SeasonalCategories;
