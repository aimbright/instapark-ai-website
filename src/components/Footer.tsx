import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/InstaParkAI plain BG logo.png';
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
                style={{height: '100px', width: 'auto'}}
              />
            </div>
            <p style={{color: '#1e3a8a', marginBottom: '20px'}}>Smart. Scalable. Stress-Free Parking.</p>
            <div className="social-links" style={{display: 'flex', gap: '12px', marginTop: '20px'}}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook" style={{
                width: '56px',
                height: '56px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #057eff, #6bb6ff)',
                color: '#ffffff',
                fontSize: '1.5rem',
                textDecoration: 'none',
                border: '2px solid rgba(5, 126, 255, 0.3)',
                transition: 'all 0.3s ease'
              }}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram" style={{
                width: '56px',
                height: '56px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #057eff, #6bb6ff)',
                color: '#ffffff',
                fontSize: '1.5rem',
                textDecoration: 'none',
                border: '2px solid rgba(5, 126, 255, 0.3)',
                transition: 'all 0.3s ease'
              }}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link youtube" style={{
                width: '56px',
                height: '56px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #057eff, #6bb6ff)',
                color: '#ffffff',
                fontSize: '1.5rem',
                textDecoration: 'none',
                border: '2px solid rgba(5, 126, 255, 0.3)',
                transition: 'all 0.3s ease'
              }}>
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin" style={{
                width: '56px',
                height: '56px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #057eff, #6bb6ff)',
                color: '#ffffff',
                fontSize: '1.5rem',
                textDecoration: 'none',
                border: '2px solid rgba(5, 126, 255, 0.3)',
                transition: 'all 0.3s ease'
              }}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <div className="contact-info">
              <Link to="/" className="contact-item clickable">
                <div className="contact-icon">
                  <i className="fas fa-home"></i>
                </div>
                <div>
                  <p style={{color: '#1e3a8a', fontWeight: '600'}}>Home</p>
                </div>
              </Link>
              <Link to="/services" className="contact-item clickable">
                <div className="contact-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <div>
                  <p style={{color: '#1e3a8a', fontWeight: '600'}}>Services</p>
                </div>
              </Link>
              <Link to="/about" className="contact-item clickable">
                <div className="contact-icon">
                  <i className="fas fa-info-circle"></i>
                </div>
                <div>
                  <p style={{color: '#1e3a8a', fontWeight: '600'}}>About</p>
                </div>
              </Link>
            </div>
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
