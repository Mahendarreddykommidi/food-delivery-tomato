import React from 'react';
import './Loginpopup.css';
import { assets } from '../../assets/frontend_assets/assets';

const Loginpopup = ({ setShowlogin }) => {
  const [currentState, setCurrentState] = React.useState('login'); // Tracks the current state (login/register)

  const handleClose = () => {
    setShowlogin(false); // Close the popup
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState === 'login' ? 'Login' : 'Register'}</h2>
          <img
            onClick={handleClose}
            src={assets.cross_icon}
            alt="Close"
            className="close-icon"
          />
        </div>
        {currentState === 'login' ? (
          <>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
            <p className="switch-state">
              Don't have an account?{' '}
              <span onClick={() => setCurrentState('register')}>Register</span>
            </p>
          </>
        ) : (
          <>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="login-btn">
              Register
            </button>
            <p className="switch-state">
              Already have an account?{' '}
              <span onClick={() => setCurrentState('login')}>Login</span>
            </p>
          </>
        )}
      </form>
    </div>
  );
};

export default Loginpopup;