// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
    
    <img src={profile_img} alt="" />
    <h1><span>I &apos;m Elçin Karadeniz</span>,Full Stack Developer based in Turkey</h1>
<p>I work as a full stack developer. I have just graduated and as experience I have interned in more than one company.</p>

<div className='hero-action'>
<div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect with me</AnchorLink></div>
<div className="hero-resume">My resume</div>
</div>
    </div>
  )
}

export default Hero