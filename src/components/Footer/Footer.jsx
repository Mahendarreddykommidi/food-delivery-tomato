import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import  './Footer.css';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Corrupti, quae debitis recusandae ipsum minus id!</p>
                <div className="footer-social">
                    <img src={assets.facebook_icon} alt="Facebook" />
                    <img src={assets.twitter_icon} alt="Twitter" />
                    <img src={assets.linkedin_icon} alt="linked-in" />
                    </div>

            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul className='footer-list'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <li>+2345-645-973</li>
                <li>contact@gmail.com</li>

                </div>
        </div>
        <hr />
        <p className='copy'>@copy right all rights reserved</p>

    </div>
    
  )
}

export default Footer