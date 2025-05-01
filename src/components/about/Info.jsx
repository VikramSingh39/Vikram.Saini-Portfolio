import React from 'react'

const Info = () => {
  return (
    <div className="about_info grid">

      <div className="about_box">
      <i className="ri-award-line about_icon"></i>
            <h3 className="about_title">Experience</h3>
            <span className="about_subtitle">1 Year Experience</span>
      </div>

      <div className="about_box">
      <i className="ri-briefcase-line about_icon"></i>
            <h3 className="about_title">Completed</h3>
            <span className="about_subtitle">10 + Projects</span>
      </div>

      <div className="about_box">
      <i className="ri-customer-service-line about_icon"></i>
            <h3 className="about_title">Support</h3>
            <span className="about_subtitle">Online 24/7</span>
      </div>

    </div>
  )
}

export default Info