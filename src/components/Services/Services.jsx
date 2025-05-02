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
                        <h3 className="services_title">Product <br/> Designer</h3>
                  </div>
                  <span className="services_button" 
                  onClick={() => toggleTab(1)}>View More
                        <i className='ri-arrow-right-line services_button-icon'></i>
                  </span>
                  <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                              <i onClick={()=> toggleTab(0)} className="ri-close-line services_modal-close"></i>

                              <h3 className="services_modal-title">Product Designer</h3>
                              <p className="services_modal-description">Expertise in providing quality work to clients and companies</p>

                              <ul className="services_modal-services grid">

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">I Develop the user interface</p>
                                    </li>

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">Web page development</p>
                                    </li>

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">I create UX element interactions</p>
                                    </li>

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">I position your company brand</p>
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
                              <p className="services_modal-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, eos?</p>

                              <ul className="services_modal-services grid">

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">I Develop the user interface</p>
                                    </li>

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">Web page development</p>
                                    </li>

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">I create UX element interactions</p>
                                    </li>

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">I position your company brand</p>
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
                              <p className="services_modal-description">Velit qui ducimus quam nisi dicta voluptas modi repudiandae alias eaque consequuntur?</p>

                              <ul className="services_modal-services grid">

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">I Develop the user interface</p>
                                    </li>

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">Web page development</p>
                                    </li>

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">I create UX element interactions</p>
                                    </li>

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">I position your company brand</p>
                                    </li>

                                    <li className="services_modal-service">
                                          <i className="ri-verified-badge-line services_modal-icon"></i>
                                          <p className="services_modal-info">Design and mockups of products for companies</p>
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