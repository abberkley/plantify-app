import React from 'react';

import './Header.css';
import images from '../../constants/images';

const Header = () => (
  <div className='app__header'>
    <div className="header-copy">
      <h2>Here to help you 'plantify' your home.</h2>
      <p>Plantify offers a variety of plants during all four seasons. Whether you're a beginner or a seasoned expert, Plantify can help you find the right plants for you.</p>
      <div className="header-buttons">
        <button className='primary-btn'>Shop Now</button>
        <button className="secondary-btn">Learn Now</button>
      </div>
    </div>
    <img src={images.hero} alt="Row of plants" />
  </div>
);

export default Header;
