import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo_withoutbg.png';
import './Navbar.css';

interface NavbarProps {
  onContactClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
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

  const servicesSubsections = [
    { name: 'Parking Solutions', id: 'parking-solutions' },
    { name: 'Business Models', id: 'business-models' },
    { name: 'Who We Serve', id: 'who-we-serve' }
  ];

  const aboutSubsections = [
    { name: 'OUR VISION', id: 'our-vision' },
    { name: 'OUR MISSION', id: 'our-mission' },
    { name: 'Problem We Solve', id: 'problem-we-solve' },
    { name: 'MARKET OPPORTUNITY', id: 'market-opportunity' },
    { name: 'VALUE PROPOSITION', id: 'value-proposition' },
    { name: 'What We Do', id: 'what-we-do' },
    { name: 'OUR IMPLEMENTATIONS', id: 'our-implementations' }
  ];

  const scrollToServicesSection = (sectionId: string) => {
    if (location.pathname !== '/services') {
      window.location.href = `/services#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setShowServicesDropdown(false);
    setMobileServicesOpen(false);
    setIsMenuOpen(false);
  };

  const scrollToAboutSection = (sectionId: string) => {
    if (location.pathname !== '/about') {
      window.location.href = `/about#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setShowAboutDropdown(false);
    setMobileAboutOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
         <Link to="/" className="logo" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
           <img 
             src={logo} 
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
          <li 
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
            style={{ position: 'relative' }}
          >
            <Link 
              to="/services" 
              className={location.pathname === '/services' ? 'active' : ''}
            >Services</Link>
            {showServicesDropdown && (
              <div className="services-dropdown">
                {servicesSubsections.map((item) => (
                  <div 
                    key={item.id}
                    className="dropdown-item"
                    onClick={() => scrollToServicesSection(item.id)}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            )}
            {/* Mobile dropdown */}
            <div className="mobile-menu-item" onClick={(e) => {
              e.preventDefault();
              setMobileServicesOpen(prev => {
                if (prev) {
                  setMobileAboutOpen(false);
                }
                return !prev;
              });
            }}>
              <Link 
                to="/services"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileServicesOpen(prev => {
                    if (prev) {
                      setMobileAboutOpen(false);
                    }
                    return !prev;
                  });
                }}
              >Services</Link>
              <span className="mobile-arrow" style={{
                transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}>▼</span>
            </div>
            {mobileServicesOpen && (
              <div className="mobile-dropdown">
                {servicesSubsections.map((item) => (
                  <div 
                    key={item.id}
                    className="dropdown-item"
                    onClick={() => scrollToServicesSection(item.id)}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            )}
          </li>
          <li 
            onMouseEnter={() => setShowAboutDropdown(true)}
            onMouseLeave={() => setShowAboutDropdown(false)}
            style={{ position: 'relative' }}
          >
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
            >About</Link>
            {showAboutDropdown && (
              <div className="services-dropdown">
                {aboutSubsections.map((item) => (
                  <div 
                    key={item.id}
                    className="dropdown-item"
                    onClick={() => scrollToAboutSection(item.id)}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            )}
            {/* Mobile dropdown */}
            <div className="mobile-menu-item" onClick={(e) => {
              e.preventDefault();
              setMobileAboutOpen(prev => {
                if (prev) {
                  setMobileServicesOpen(false);
                }
                return !prev;
              });
            }}>
              <Link 
                to="/about"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileAboutOpen(prev => {
                    if (prev) {
                      setMobileServicesOpen(false);
                    }
                    return !prev;
                  });
                }}
              >About</Link>
              <span className="mobile-arrow" style={{
                transform: mobileAboutOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}>▼</span>
            </div>
            {mobileAboutOpen && (
              <div className="mobile-dropdown">
                {aboutSubsections.map((item) => (
                  <div 
                    key={item.id}
                    className="dropdown-item"
                    onClick={() => scrollToAboutSection(item.id)}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            )}
          </li>
          <li>
            <a href="#contact" className="contact-btn" onClick={handleContactClick}>
              Contact us
            </a>
          </li>
        </ul>

        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;