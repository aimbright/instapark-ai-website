import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_withoutbg.png';
import aimbrightLogo from '../assets/aimbrightlogo.png';

const Footer: React.FC = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-container">
          <div className="footer-col">
            <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}>
              <img 
                src={logo} 
                alt="InstaPark AI Logo" 
                style={{height: '50px', width: 'auto'}}
              />
            </div>
            <p style={{color: '#1e3a8a', marginBottom: '20px'}}>Smart AI-Driven Parking — Powered by Technology, Designed for People.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li><a href="https://docs.instaparkai.com" target="_blank" rel="noopener noreferrer">Documentation</a></li>
              <li><a href="https://api.instaparkai.com" target="_blank" rel="noopener noreferrer">API Reference</a></li>
              <li><a href="https://instaparkai.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              <li><a href="https://instaparkai.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <a href="tel:+919845802901" className="contact-item clickable">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <p style={{color: '#1e3a8a', fontWeight: '600'}}>+91 98458 02901</p>
                </div>
              </a>
              <a href="mailto:support@instaparkai.com" className="contact-item clickable">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p style={{color: '#1e3a8a', fontWeight: '600'}}>support@instaparkai.com</p>
                </div>
              </a>
              <a href="https://wa.me/919845802901" target="_blank" rel="noopener noreferrer" className="contact-item clickable">
                <div className="contact-icon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <p style={{color: '#1e3a8a', fontWeight: '600'}}>+91 98458 02901</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p style={{color: '#1e3a8a'}}>© 2025 InstaPark.AI. All Rights Reserved.</p>
          <div className="designed-by">
            <span className="designed-by-text">Designed by</span>
            <a 
              href="https://aimbright.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="aimbright-link"
            >
              <img 
                src={aimbrightLogo} 
                alt="Aim Bright Logo" 
                className="aimbright-logo"
              />
              <span className="aimbright-text">Aim Bright</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
