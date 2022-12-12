import React from 'react';

import './TileGrid.css';
import {images} from '../../constants';

const TileGrid = () => (
  <div className='app__tile-grid'>
    <img src={images.plantparent} alt="Grid of plant saplings" className="parent-plant" />
    <div className="plant-parent--content text-on-dark">
      <h3>New Plant Parent?</h3>
      <p>If you're feeling unsure about taking care of your own plant or don't know where to start, Plantify here's to help! We offer classes year round to ensure that both you and your plant thrive!</p>
      <button className='secondary-btn'>See Times</button>
    </div>
    <div className="plant-tools--content text-on-dark">
      <h3>Here for all your planting needs</h3>
      <p>Whether it be the basics or special grade nutrient dirt, Plantify's got you! Let's treat you and your plants today.</p>
      <button className='secondary-btn'>Shop Tools</button>
    </div>
    <img src={images.tools} alt="Hand shovel with dirt" className="plant-tools" />
  </div>
);

export default TileGrid;
