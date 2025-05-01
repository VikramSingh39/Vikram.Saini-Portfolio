import React, { useState } from 'react'
import './Header.css';
const Header = () => {
      // ========== Toggle Menu ==========
      const[Toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">

             {!Toggle && (
               <a href="index.html" className='nav_logo'>ＶＩＫＲＡＭ</a>
             )}
           
      

      <div className={Toggle? "nav_menu show-menu" : "nav_menu"}>
        <ul className="nav_list grid">

          <li className="nav_item">
            <a href="home" className="nav_link active-link">
            <i className="ri-home-4-line nav_icon"></i>Home
            </a>
          </li>

          <li className="nav_item">
            <a href="about" className="nav_link">
            <i className="ri-user-line nav_icon"></i>About
            </a>
          </li>

          <li className="nav_item">
            <a href="skills" className="nav_link">
            <i className="ri-profile-line nav_icon"></i>Skills
            </a>
          </li>

          <li className="nav_item">
            <a href="services" className="nav_link">
            <i className="ri-briefcase-line nav_icon"></i>Services
            </a>
          </li>

          <li className="nav_item">
            <a href="portfolio" className="nav_link">
            <i className="ri-id-card-line nav_icon"></i>Portfolio
            </a>
          </li>

          <li className="nav_item">
            <a href="contact" className="nav_link">
            <i className="ri-send-plane-line nav_icon"></i>Contact
            </a>
          </li>
        </ul> 
        <i className="ri-close-line nav_close" 
        onClick={()=> showMenu (!Toggle)}></i>   
      </div>

      {/* <div className="nav_taggle" onClick={()=> showMenu (!Toggle)}>
          <i className="ri-apps-line nav_toggle"></i>  
      </div> */}
      {/* Nav toggle icon only shown when menu is hidden */}
      {!Toggle && (
        <div
          className="nav_taggle"
          onClick={() => showMenu(true)}
        >
          <i className="ri-apps-line nav_toggle"></i>
        </div>
      )}
      </nav>
    </header>
  )
}

export default Header