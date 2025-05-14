import React from 'react'
import { useState } from 'react'
import './Services.css'

const Services = () => {
     const[toggleState, setToggleState] = useState(0);
     const toggleTab = (index) =>{
      setToggleState(index);
     }
  return (
    <section className="servicrs section" id='services'>
       <h2 className="section_title">Services</h2>
       <span className="section_subtitle">What I Offer</span>

       <div className="services_container container grid">

            <div className="services_content">
                  <div>
                        <i className='ri-window-line services_icon'></i>
                        <h3 className="services_title">Frontend<br/> Developer</h3>
                  </div>
                  <span className="services_button" 
                  onClick={() => toggleTab(1)}>View More
                        <i className='ri-arrow-right-line services_button-icon'></i>
                  </span>
                  <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                              <i onClick={()=> toggleTab(0)} className="ri-close-line services_modal-close"></i>

                              <h3 className="services_modal-title">Frontend Developer</h3>
                              <p className="services_modal-description"> Frontend Developer Specializing in Responsive Web Interfaces and User-Centric Design.</p>

                              <ul className="services_modal-services grid">

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">Creating mobile-first, cross-browser compatible interfaces with precision.</p>
                                    </li>

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">Leveraging modern JavaScript frameworks to deliver dynamic user experiences.</p>
                                    </li>

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">Convert Figma Design page into Code</p>
                                    </li>

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">Design and mockups of products for companies</p>
                                    </li>

                              </ul>
                        </div>
                  </div>
            </div>

            <div className="services_content">
                  <div>
                        <i className='ri-expand-left-right-line services_icon'></i>
                        <h3 className="services_title">UI/UX <br/> Designer</h3>
                  </div>
                  <span className="services_button" onClick={() => toggleTab(2)}>View More
                        <i className='ri-arrow-right-line services_button-icon'></i>
                  </span>
                  <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                              <i onClick={()=> toggleTab(0)} className="ri-close-line services_modal-close"></i>

                              <h3 className="services_modal-title">UI/UX Designer</h3>
                              <p className="services_modal-description">I Code Digital Experiences That Feel as Good as They Look</p>

                              <ul className="services_modal-services grid">

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">Crafting interfaces with empathy, clarity, and usability at the core.</p>
                                    </li>

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">Translating ideas into seamless, interactive journeys that captivate users</p>
                                    </li>

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">Balancing aesthetic appeal with purposeful interaction and accessibility.</p>
                                    </li>

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">Leveraging feedback and research to continuously enhance the user experience.</p>
                                    </li>

                              </ul>
                        </div>
                  </div>
            </div>

            <div className="services_content">
                  <div>
                        <i className='ri-pencil-ruler-2-line services_icon'></i>
                        <h3 className="services_title">Visual <br/> Designer</h3>
                  </div>
                  <span className="services_button" 
                  onClick={() => toggleTab(3)}>View More
                        <i className='ri-arrow-right-line services_button-icon'></i>
                  </span>
                  <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                              <i onClick={()=> toggleTab(0)} className="ri-close-line services_modal-close"></i>

                              <h3 className="services_modal-title">Visual Designer</h3>
                              <p className="services_modal-description">Bringing Ideas to Life Through Bold and Beautiful Visuals</p>

                              <ul className="services_modal-services grid">

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">Designing with purpose to evoke emotion, clarity, and brand identity.</p>
                                    </li>

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">Merging color, typography, and layout into compelling visual compositions.</p>
                                    </li>

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">Creating unified design systems that resonate across every platform.</p>
                                    </li>

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">Communicating powerful messages through striking visual language.</p>
                                    </li>

                              </ul>
                        </div>
                  </div>
            </div>
       </div> 
    </section>
  )
}

export default Services