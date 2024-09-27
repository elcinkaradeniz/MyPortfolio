// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import elcin   from '../../assets/elcin.svg'
import user_icon   from '../../assets/user_icon.svg'
import theme_pattern from '../../assets/theme_pattern.svg'


const Footer = () => {
  return (
    <div id='footer' className='footer'>
    <div className="footer-top">
        <div className="footer-top-left">
           <img src={elcin} alt="" /> 
           <img src={theme_pattern} alt="" className='logo'/>
           <p>I have 2 months of internship experience at KMK Information Technologies, HangaarLab Information Technologies, and TurkGen Software.</p>
        </div>
        <div className="footer-top-right">
        <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter your email' />
        </div>
        <div className="footer-subscribe">Subscribe</div>
        </div>
    </div>
    <hr />
    <div className="footer-bottom">
     <p className='footer-bottom-left'>@ 2024 Elçin Karadeniz.All rights reserved</p>
     <div className="footer-bottom-right">
        <p>Term of Services</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
     </div>
    </div>
    </div>
  )
}

export default Footer