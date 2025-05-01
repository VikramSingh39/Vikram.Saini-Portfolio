import React from 'react'
import './About.css'
import AboutImg from '../../assets/about.jpg';
import CV from '../../assets/John-Cv.pdf';
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id='about'>
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">My Intorduction</span>

      <div className="about_container container grid">
            <img src={AboutImg} alt="" className="about_img" />

            <div className="about_data">
                  <Info></Info>
                  <p className="about_description"></p>
            </div>
      </div>
    </section>
  )
}

export default About