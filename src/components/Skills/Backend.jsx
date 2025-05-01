import React from 'react'
import './Skills.css'

const Backend = () => {
  return (
      <div className="skills_content">
      <h3 className='skills_title'>Backend Developer</h3>

      <div className="skills_box">
            <div className="skills_group">

                  <div className="skills_data">
                  <i className="ri-verified-badge-line"></i>
                  <div>
                       <h3 className="skills_name">Java</h3> 
                       <span className="skills_level">Basic</span>
                  </div>
                  </div>

                  <div className="skills_data">
                  <i className="ri-verified-badge-line"></i>
                  <div>
                       <h3 className="skills_name">SpringBoot</h3> 
                       <span className="skills_level">Basic</span>
                  </div>
                  </div>

                  <div className="skills_data">
                  <i className="ri-verified-badge-line"></i>
                  <div>
                       <h3 className="skills_name">NodeJS</h3> 
                       <span className="skills_level">Basic</span>
                  </div>
                  </div>
                  
            </div>

            <div className="skills_group">

<div className="skills_data">
<i className="ri-verified-badge-line"></i>
<div>
     <h3 className="skills_name">SQL</h3> 
     <span className="skills_level">Intermidate</span>
</div>
</div>

<div className="skills_data">
<i className="ri-verified-badge-line"></i>
<div>
     <h3 className="skills_name">Express</h3> 
     <span className="skills_level">Basic</span>
</div>
</div>

<div className="skills_data">
<i className="ri-verified-badge-line"></i>
<div>
     <h3 className="skills_name">MongoDB</h3> 
     <span className="skills_level">Intermidate</span>
</div>
</div>

            </div>
      </div>

    </div>
  )
}

export default Backend