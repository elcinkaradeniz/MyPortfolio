// eslint-disable-next-line no-unused-vars
import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
 <div className="about-title">
    <h1>About me</h1>
    <img src={theme_pattern} alt="" />
 </div>
     <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I work as a full stack developer. </p>
                <p>I have just graduated and as experience I have interned in more than one company.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS </p><hr style={{width:"50%"}}/> </div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/> </div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/> </div>
                <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/> </div>
            </div>
        </div>
     </div>
<div className="about-achievements">
<div className="about-achievement">
    <h1>0-1+</h1>
    <p>YEARS OF EXPERIENCE</p>
</div>
<hr />
<div className="about-achievement">
    <h1>17+</h1>
    <p>PROJECT COMPLETED</p>
</div>
<hr />
<div className="about-achievement">
    <h1>12+</h1>
    <p>GİTHUB PROJECT</p>
</div>
</div>
    </div>
  )
}

export default About