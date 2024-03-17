// ShoppingApp.js

import React from 'react';
import './Navbar.css';

const Navbar = () => {
 return (
    <div className="shopping-app">
      <div className='tri1'></div>
      <ul className='shopapp-nav'>
        <li>Best Sellers</li>
        <li>Gift Ideas</li>
        <li>New Releases</li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
      </ul>
      <div className='tri2'></div>
    </div>
  );
};

export default Navbar;
