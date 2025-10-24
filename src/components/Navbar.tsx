import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
  onContactClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onContactClick) {
      onContactClick();
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <Link to="/" className="logo" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <img 
            src="/src/assets/logo_withoutbg.png" 
            alt="InstaPark AI Logo" 
            style={{height: '45px', width: 'auto'}}
          />
        </Link>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link 
            to="/" 
            onClick={() => setIsMenuOpen(false)}
            className={location.pathname === '/' ? 'active' : ''}
          >Home</Link></li>
          <li><Link 
            to="/services" 
            onClick={() => setIsMenuOpen(false)}
            className={location.pathname === '/services' ? 'active' : ''}
          >Services</Link></li>
          <li><Link 
            to="/about" 
            onClick={() => setIsMenuOpen(false)}
            className={location.pathname === '/about' ? 'active' : ''}
          >About</Link></li>
          <li>
            <a href="#contact" className="contact-btn" onClick={handleContactClick}>
              Contact us
            </a>
          </li>
        </ul>

        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;