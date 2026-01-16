import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/InstaPark white BG nav bar logo.png';
import './Navbar.css';

interface NavbarProps {
  onContactClick?: () => void;
}

// Services sub-sections
const servicesSubsections = [
  { id: 'end-to-end-operations', label: 'Parking Operations' },
  { id: 'ai-parking-management', label: 'Parking Management' },
  { id: 'parking-discovery', label: 'Find Book & Park' },
  { id: 'amc-support', label: 'Complete AMC' },

];

// About sub-sections
const aboutSubsections = [
  { id: 'why-choose-instaparkai', label: 'Why Choose us' },
  { id: 'our-vision', label: 'OUR VISION' },
  { id: 'our-mission', label: 'OUR MISSION' },
  { id: 'problem-we-solve', label: 'Problem We Solve' },
  { id: 'market-opportunity', label: 'MARKET OPPORTUNITY' },
  { id: 'what-we-do', label: 'What We Do' },
  { id: 'our-implementations', label: 'OUR IMPLEMENTATIONS' },
  { id: 'business-offering', label: 'Business Models' },
  { id: 'partnership-models', label: 'Partnership Models' },
];

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const scrollToServicesSection = (sectionId: string) => {
    setIsMenuOpen(false);
    setShowServicesDropdown(false);
    setMobileServicesOpen(false);
    
    // Navigate to services page with hash if not already there
    if (location.pathname !== '/services') {
      navigate(`/services#${sectionId}`);
    } else {
      // Already on services page, update hash and scroll
      window.location.hash = sectionId;
      // The Services page useEffect will handle the expansion and scrolling
    }
  };

  const scrollToAboutSection = (sectionId: string) => {
    setIsMenuOpen(false);
    setShowAboutDropdown(false);
    setMobileAboutOpen(false);
    
    // Navigate to about page first if not already there
    if (location.pathname !== '/about') {
      navigate(`/about#${sectionId}`);
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navHeight = 120;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 300);
    } else {
      // Already on about page, update hash and scroll
      window.location.hash = sectionId;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navHeight = 120;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 50);
    }
  };

  return (
    <header className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
         <Link to="/" className="logo" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
           <img 
             src={logo} 
             alt="InstaPark AI Logo" 
             style={{height: '60px', width: 'auto'}}
           />
         </Link>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link 
            to="/" 
            onClick={() => setIsMenuOpen(false)}
            className={location.pathname === '/' ? 'active' : ''}
          >Home</Link></li>
          <li 
            className="services-dropdown-container"
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            <div 
              className="mobile-menu-item"
            >
              <Link 
                to="/services" 
                onClick={(e) => {
                  if (!isMobile) {
                    setIsMenuOpen(false);
                    setShowServicesDropdown(false);
                  } else {
                    e.preventDefault();
                    // Close About if open, toggle Services
                    if (mobileAboutOpen) {
                      setMobileAboutOpen(false);
                    }
                    setMobileServicesOpen(!mobileServicesOpen);
                  }
                }}
                className={location.pathname === '/services' ? 'active' : ''}
                style={{ flex: 1 }}
              >
                Services
              </Link>
              {isMobile && (
                <span 
                  className="mobile-arrow" 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // Close About if open, toggle Services
                    if (mobileAboutOpen) {
                      setMobileAboutOpen(false);
                    }
                    setMobileServicesOpen(!mobileServicesOpen);
                  }}
                  style={{ 
                    marginLeft: 'auto',
                    transition: 'transform 0.3s ease',
                    transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    cursor: 'pointer',
                    padding: '0 30px 0 10px',
                    userSelect: 'none'
                  }}
                >
                  ▼
                </span>
              )}
            </div>
            {(showServicesDropdown || (isMobile && mobileServicesOpen)) && (
              <div className={`services-dropdown ${isMobile ? 'mobile-dropdown' : ''}`}>
                {servicesSubsections.map((subsection) => (
                  <button
                    key={subsection.id}
                    onClick={() => {
                      // Close sub-list immediately in mobile
                      if (isMobile) {
                        setMobileServicesOpen(false);
                      }
                      // Then handle navigation and scrolling
                      scrollToServicesSection(subsection.id);
                    }}
                    className="dropdown-item"
                  >
                    {subsection.label}
                  </button>
                ))}
              </div>
            )}
          </li>
          <li 
            className="services-dropdown-container"
            onMouseEnter={() => setShowAboutDropdown(true)}
            onMouseLeave={() => setShowAboutDropdown(false)}
          >
            <div 
              className="mobile-menu-item"
            >
              <Link 
                to="/about" 
                onClick={(e) => {
                  if (!isMobile) {
                    setIsMenuOpen(false);
                    setShowAboutDropdown(false);
                  } else {
                    e.preventDefault();
                    e.stopPropagation();
                    // Close Services if open
                    setMobileServicesOpen(false);
                    // Toggle About using functional update
                    setMobileAboutOpen(prev => !prev);
                  }
                }}
                className={location.pathname === '/about' ? 'active' : ''}
                style={{ flex: 1 }}
              >
                About
              </Link>
              {isMobile && (
                <span 
                  className="mobile-arrow" 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // Close Services if open
                    setMobileServicesOpen(false);
                    // Toggle About using functional update
                    setMobileAboutOpen(prev => !prev);
                  }}
                  style={{ 
                    marginLeft: 'auto',
                    transition: 'transform 0.3s ease',
                    transform: mobileAboutOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    cursor: 'pointer',
                    padding: '0 30px 0 10px',
                    userSelect: 'none'
                  }}
                >
                  ▼
                </span>
              )}
            </div>
            {(showAboutDropdown || (isMobile && mobileAboutOpen)) && (
              <div className={`services-dropdown ${isMobile ? 'mobile-dropdown' : ''}`}>
                {aboutSubsections.map((subsection) => (
                  <button
                    key={subsection.id}
                    onClick={() => {
                      // Close sub-list immediately in mobile
                      if (isMobile) {
                        setMobileAboutOpen(false);
                      }
                      // Then handle navigation and scrolling
                      scrollToAboutSection(subsection.id);
                    }}
                    className="dropdown-item"
                  >
                    {subsection.label}
                  </button>
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
          {isMenuOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;