import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/frontend_assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../../context/Shopcontext';
import { useContext } from 'react';


const Navbar = ({ setShowlogin }) => {
  const {getTotalamount}=useContext(ShopContext)
  const [menu, setMenu] = React.useState('menu');
  return (
    <div>
      <div className="navbar-section">
        <div className="nav-logo">
          <Link to="/">
          <img src={assets.logo} alt="" className='logo' />
          </Link>
       
        
        </div>
        <ul className="menu-links">
          <li
            className={menu === 'home' ? 'active' : ''}
            onClick={() => setMenu('home')}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={menu === 'menu' ? 'active' : ''}
            onClick={() => setMenu('menu')}
          >
            Menu
          </li>
          <li
            className={menu === 'mobile-app' ? 'active' : ''}
            onClick={() => setMenu('mobile-app')}
          >
            mobile app
          
          </li>
          <li
            className={menu === 'contact-us' ? 'active' : ''}
            onClick={() => setMenu('contact-us')}
          >
          contact us
          </li>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
           
            <Link to="/cart">
              <img src={assets.basket_icon} alt="" />
              <div className={getTotalamount()===0?"":"dot"}></div>
            </Link>
          </div>
          <button onClick={() => setShowlogin(true)} className="btn-nav">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;