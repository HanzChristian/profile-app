import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavbarStyles.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const [showProductSubMenu, setShowProductSubMenu] = useState(false); // New state

  const handleClick = () => setClick(!click);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const handleProductSubMenu = () => {
    setShowProductSubMenu(!showProductSubMenu);
  };

  window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to="/">
        <div className="logo-container">
          <img src="http://localhost:3000/logo.jpg" className="logo" alt="Logo" />
          <h2>PT Kreasi Emas Gemilang</h2>
        </div>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li className="products-dropdown">
  <Link to="/product" className="dropdown-trigger">Products</Link>
  <ul className="sub-menu">
    <li>
      <Link to="/product/dammar-gum">Gum Damar</Link>
    </li>
    <li>
      <Link to="/product/copal-gum">Gum Benzoin</Link>
    </li>
    <li>
      <Link to="/product/dammar-batu">Damar Batu</Link>
    </li>
  </ul>
</li>
        <li>
          <Link to="/market">Market</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes size={20} style={{ color: 'white' }} /> : <FaBars size={20} style={{ color: 'white' }} />}
      </div>
    </div>
  );
};

export default Navbar;
