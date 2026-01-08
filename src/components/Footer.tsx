import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/InstaParkAI plain BG logo.png';
import aimbrightLogo from '../assets/aimbrightlogo.png';

const Footer: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <footer id="contact">
      <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
        <div className="footer-container" style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1.5fr',
          gap: isMobile ? '40px' : '50px',
          marginBottom: '40px',
          alignItems: 'start'
        }}>
          <div className="footer-col">
            <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}>
              <img 
                src={logo} 
                alt="InstaPark AI Logo" 
                style={{height: '100px', width: 'auto'}}
              />
            </div>
            <p style={{color: '#1e3a8a', marginBottom: '20px', fontSize: '1rem', lineHeight: '1.6'}}>Smart. Scalable. Stress-Free Parking.</p>
            <div className="social-links" style={{gap: '16px'}}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook" style={{
                width: '56px',
                height: '56px',
                fontSize: '1.5rem',
                background: 'rgba(5, 126, 255, 0.1)',
                border: '2px solid rgba(5, 126, 255, 0.2)',
                color: '#057eff'
              }}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram" style={{
                width: '56px',
                height: '56px',
                fontSize: '1.5rem',
                background: 'rgba(5, 126, 255, 0.1)',
                border: '2px solid rgba(5, 126, 255, 0.2)',
                color: '#057eff'
              }}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link youtube" style={{
                width: '56px',
                height: '56px',
                fontSize: '1.5rem',
                background: 'rgba(5, 126, 255, 0.1)',
                border: '2px solid rgba(5, 126, 255, 0.2)',
                color: '#057eff'
              }}>
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin" style={{
                width: '56px',
                height: '56px',
                fontSize: '1.5rem',
                background: 'rgba(5, 126, 255, 0.1)',
                border: '2px solid rgba(5, 126, 255, 0.2)',
                color: '#057eff'
              }}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="footer-col" style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h3 style={{
              fontSize: isMobile ? '1.2rem' : '1.3rem',
              marginBottom: '24px',
              color: '#1e3a8a',
              fontWeight: '700'
            }}>Quick Links</h3>
            <div className="contact-info" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <Link to="/" className="contact-item clickable" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '8px',
                background: 'rgba(5, 126, 255, 0.05)',
                border: '1px solid rgba(5, 126, 255, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <div className="contact-icon" style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(5, 126, 255, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#057eff'
                }}>
                  <i className="fas fa-home"></i>
                </div>
                <div>
                  <p style={{color: '#1e3a8a', fontWeight: '600', margin: 0, fontSize: '0.95rem'}}>Home</p>
                </div>
              </Link>
              <Link to="/services" className="contact-item clickable" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '8px',
                background: 'rgba(5, 126, 255, 0.05)',
                border: '1px solid rgba(5, 126, 255, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <div className="contact-icon" style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(5, 126, 255, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#057eff'
                }}>
                  <i className="fas fa-cog"></i>
                </div>
                <div>
                  <p style={{color: '#1e3a8a', fontWeight: '600', margin: 0, fontSize: '0.95rem'}}>Services</p>
                </div>
              </Link>
              <Link to="/about" className="contact-item clickable" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '8px',
                background: 'rgba(5, 126, 255, 0.05)',
                border: '1px solid rgba(5, 126, 255, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <div className="contact-icon" style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(5, 126, 255, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#057eff'
                }}>
                  <i className="fas fa-info-circle"></i>
                </div>
                <div>
                  <p style={{color: '#1e3a8a', fontWeight: '600', margin: 0, fontSize: '0.95rem'}}>About</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="footer-col" style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h3 style={{
              fontSize: isMobile ? '1.2rem' : '1.3rem',
              marginBottom: '24px',
              color: '#1e3a8a',
              fontWeight: '700'
            }}>Contact Us</h3>
            <div className="contact-info" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <a href="tel:+919845802901" className="contact-item clickable" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '8px',
                background: 'rgba(5, 126, 255, 0.05)',
                border: '1px solid rgba(5, 126, 255, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <div className="contact-icon" style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(5, 126, 255, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#057eff'
                }}>
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <p style={{color: '#1e3a8a', fontWeight: '600', margin: 0, fontSize: '0.95rem'}}>+91 98458 02901</p>
                </div>
              </a>
              <a href="mailto:support@instaparkai.com" className="contact-item clickable" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '8px',
                background: 'rgba(5, 126, 255, 0.05)',
                border: '1px solid rgba(5, 126, 255, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <div className="contact-icon" style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(5, 126, 255, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#057eff'
                }}>
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p style={{color: '#1e3a8a', fontWeight: '600', margin: 0, fontSize: '0.95rem'}}>support@instaparkai.com</p>
                </div>
              </a>
              <a href="https://wa.me/919845802901" target="_blank" rel="noopener noreferrer" className="contact-item clickable" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '8px',
                background: 'rgba(5, 126, 255, 0.05)',
                border: '1px solid rgba(5, 126, 255, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <div className="contact-icon" style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(5, 126, 255, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#057eff'
                }}>
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <p style={{color: '#1e3a8a', fontWeight: '600', margin: 0, fontSize: '0.95rem'}}>+91 98458 02901</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="copyright" style={{
          textAlign: 'center',
          paddingTop: '30px',
          borderTop: '1px solid rgba(5, 126, 255, 0.2)',
          marginTop: '40px'
        }}>
          <p style={{
            color: '#1e3a8a', 
            marginBottom: '16px',
            fontSize: '0.95rem',
            fontWeight: '500'
          }}>
            © 2025 InstaParkAI. All Rights Reserved
          </p>
          <div className="designed-by" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap'
          }}>
            <span style={{
              color: '#1e3a8a',
              fontSize: '0.9rem'
            }}>
              Designed by:
            </span>
            <a 
              href="https://aimbright.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                padding: '6px 12px',
                borderRadius: '8px',
                background: 'rgba(5, 126, 255, 0.1)',
                border: '1px solid rgba(5, 126, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(5, 126, 255, 0.2)';
                e.currentTarget.style.borderColor = '#057eff';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(5, 126, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(5, 126, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(5, 126, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img 
                src={aimbrightLogo} 
                alt="Aim Bright Logo" 
                style={{
                  height: '24px',
                  width: 'auto'
                }}
              />
              <strong style={{
                color: '#1e3a8a',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>
                Aim Bright
              </strong>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
