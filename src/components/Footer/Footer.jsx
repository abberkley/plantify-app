import React from 'react';

import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer'>
    <div className="brand">
      <h1 className="logo">Plantify</h1>
      <ul className="brand-links">
        <li><a href="/"><img src={images.instagram} alt="" /></a></li>
        <li><a href="/"><img src={images.facebook} alt="" /></a></li>
        <li><a href="/"><img src={images.tiktok} alt="" /></a></li>
      </ul>
    </div>
    <div className="footer-links text-on-dark">
      <div className="category-links">
        <h5>Shop Categories</h5>
        <ul>
          <li><a href="">plants</a></li>
          <li><a href="">tools</a></li>
          <li><a href="">classes</a></li>
        </ul>
      </div>
      <div className="about-links">
        <h5>About Plantify</h5>
        <ul>
          <li><a href="">our story</a></li>
          <li><a href="">locations</a></li>
          <li><a href="">careers</a></li>
        </ul>
      </div>
      <div className="help-links">
        <h5>Need Help?</h5>
        <ul>
          <li><a href="">faqs</a></li>
          <li><a href="">shipping/returns</a></li>
          <li><a href="">contact us</a></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
