import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Vikram Singh</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/iam.svikram/"
            className="footer__social-link"
            target="_blank"
          >
           <i className="ri-instagram-line"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/vksingh15/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="ri-linkedin-box-fill"></i>
          </a>

          <a
            href="https://github.com/VikramSingh39"
            className="footer__social-link"
            target="_blank"
          >
            <i className="ri-github-fill"></i>
          </a>
          <a
            href="https://x.com/SinghVikram59"
            className="footer__social-link"
            target="_blank"
          >
          <i className="ri-twitter-x-line"></i>
          </a>
        </div>


        <span className="footer__copy">
             Vikram Singh. &#169; 2025 All rights reserved

        </span>
      </div>
    </footer>
  );
};

export default Footer;