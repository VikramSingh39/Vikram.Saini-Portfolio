import React from 'react'
import Works from './Works';
import './Work.css'

const Work = () => {
  return (
      <section className="work section" id='porftolio'>
      <h2 className="section_title">Portfolio</h2>
      <span className="section_subtitle">Most Recent Project</span>
      <Works></Works>
    </section>
  )
}

export default Work;