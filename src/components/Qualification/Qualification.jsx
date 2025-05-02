import React from 'react'
import './Qualification.css'
const Qualification = () => {
      return (
            <section className="qualification section">
                  <h2 className="section_title">Qualification</h2>
                  <span className="section_subtitle">My Academic Journey</span>

<div className="qualification_container container">
    <div className="qualification_tabs">

     <div className="qualification_button qualification_active button--flex">
      <i className="ri-graduation-cap-line qualification_icon"></i> Education
     </div>
     </div>


</div>

<section className="education_section">
<div className="timeline">

  <div className="timeline_item left">
    <div className="edu_content">
      <h3>Master in Computer Application</h3>
      <p>Chandigarh University</p>
      <span className="date"><i className="ri-calendar-schedule-line"></i> 2024 - 2026</span>
    </div>
  </div>

 <div className="vertical_line">
  <div className="edu_circle"></div>
  <div className="edu_line"></div>
  <div className="edu_circle"></div>
 </div>

 <div className="timeline_item right"></div>
   
</div>

<div className="timeline">
  <div className="timeline_item left"></div>

  <div className="timeline_item right">
    <div className="edu_content">
      <h3>Job Ready AI Powered Cohort: FullStack Web + DSA</h3>
      <p>Sheryians Coding School</p>
      <span className="date"><i className="ri-calendar-schedule-line"></i> 2025 Jan - 2025 July</span>
    </div>
  </div>
</div>

<div className="timeline">

  <div className="timeline_item left">
    <div className="edu_content">
      <h3>Bachelor of Science (Non. Med)</h3>
      <p>Kurukshetra University</p>
      <span className="date"><i className="ri-calendar-schedule-line"></i> 2017 - 2020</span>
    </div>
  </div>

 <div className="vertical_line">
  <div className="edu_circle"></div>
  <div className="edu_line"></div>
  <div className="edu_circle"></div>
 </div>

 <div className="timeline_item right"></div>
   
</div>

</section>
</section>
      )
}

export default Qualification