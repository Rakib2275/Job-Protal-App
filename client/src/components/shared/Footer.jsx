import React from 'react'
import "./footer.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
      <footer className="footer">
      <p className='footer-text'>© 2025 Your Company. All rights reserved.</p>
      <div className="social-links">
        <a href="https://www.facebook.com/rakib1215" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.linkedin.com/in/rakibul-hasan-336017214/" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>
    </footer>
  )
}

export default Footer
