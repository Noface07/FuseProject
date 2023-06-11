import React from 'react';
import "./css/footerstyle.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Whether you’re a prospective client, interested in viewing the fused space gallery or simply a fan of our work, stop by and say hello!</h4>
          </div>
          <div className="footer-col">
            <h4>Address</h4>
            <p>Vraj Valencia, Shop no. F14, F15 Behind Mahindra Showroom, Sola, Ahmedabad, 380060</p>
          </div>
          <div className="footer-col">
            <h4>Contact mails</h4>
            <p>abc@greenfieldcontrol.com xyz@greenfieldcontrol.com</p>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <p>© 2023 Smartlife by Greenfield. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
