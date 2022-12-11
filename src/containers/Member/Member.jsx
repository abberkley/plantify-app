import React from 'react';

import './Member.css';
import { images } from '../../constants';

const Member = () => (
  <div className='app__member'>
    <div className="member--content text-on-dark">
      <h3>Join the Plantify Family!</h3>
      <p>Join our reward program and start earning points on every purchase! As a member, you'll receive exclusive discounts, early access to sales, and special offers.</p>
      <p> Plus, you'll earn points on every purchase that can be redeemed for free plants, gardening accessories, and more. Sign up today and start enjoying the benefits of being a member of our plant-loving community!</p>
      <button className='tertiary-btn'>Sign Up Now</button>
    </div>
  </div>
);

export default Member;
