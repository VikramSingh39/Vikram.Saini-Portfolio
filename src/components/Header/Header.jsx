import React, { useState,useEffect } from 'react'
import './head.css';
const Header = () => {
      // ========== Toggle Menu ==========
      const [Toggle, showMenu] = useState(false);
      const [activeNav, setActiveNav] = useState("#home");
    
      useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll("section[id]");
          const scrollPosition =
            window.pageYOffset || document.documentElement.scrollTop;
    
          for (let i = 0; i < sections.length; i++) {
            const currentSection = sections[i];
            const sectionTop = currentSection.offsetTop - 50;
            const sectionBottom = sectionTop + currentSection.offsetHeight;
    
            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
              const id = currentSection.getAttribute("id");
              setActiveNav(`#${id}`);
            }
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    <header className="header">
    <nav className="nav container">
      <a href="#home" className="nav_logo">
      Ｖｉｋｒａｍ
      </a>
      <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
        <ul className="nav__list grid">
          <li className="nav__item">
            <a
              href="#home"
              className={
                activeNav === "#home" ? "nav__link active-link" : "nav__link"
              }
            >
              <i className="ri-home-4-line nav_icon"></i>Home
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#about"
              className={
                activeNav === "#about" ? "nav__link active-link" : "nav__link"
              }
            >
              <i className="ri-user-line nav_icon"></i>About
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#skills"
              className={
                activeNav === "#skills"
                  ? "nav__link active-link"
                  : "nav__link"
              }
            >
              <i className="ri-profile-line nav_icon"></i>Skills
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#services"
              className={
                activeNav === "#services"
                  ? "nav__link active-link"
                  : "nav__link"
              }
            >
             <i className="ri-briefcase-line nav_icon"></i>Services
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#projects"
              className={
                activeNav === "#projects"
                  ? "nav__link active-link"
                  : "nav__link"
              }
            >
              <i className="ri-id-card-line nav_icon"></i>Projects
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#contact"
              className={
                activeNav === "#contact"
                  ? "nav__link active-link"
                  : "nav__link"
              }
            >
              <i className="ri-send-plane-line nav_icon"></i>Contact
            </a>
          </li>
        </ul>
        <i
          className="ri-close-large-line nav__close"
          onClick={() => showMenu(!Toggle)}
        ></i>
      </div>

      <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
        <i className="ri-apps-2-line"></i>
      </div>
    </nav>
  </header>
  )
}

export default Header;





            
            
            
            