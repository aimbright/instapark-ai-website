import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import logo from './assets/logo_withoutbg.png';
import './App.css';

// Global function declaration
declare global {
  interface Window {
    openContactDialog?: () => void;
  }
}

// Component to handle scroll to top on route change with smooth animation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top with fade effect
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 100);

    // Add page transition class
    document.body.classList.add('page-enter');
    setTimeout(() => {
      document.body.classList.remove('page-enter');
    }, 600);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.mobile || !formData.email) {
      alert('Please fill in all fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Mobile number validation (10 digits)
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    
    setIsSubmitted(true);
  };

  const isFormValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10}$/;
    return formData.name.trim() !== '' && 
           mobileRegex.test(formData.mobile) && 
           emailRegex.test(formData.email);
  };

  const generateWhatsAppMessage = () => {
    const message = `Hi! I'm ${formData.name} (${formData.mobile}, ${formData.email}). I'm interested in learning more about InstaPark.AI's smart parking solutions.`;
    return `https://wa.me/919845802901?text=${encodeURIComponent(message)}`;
  };

  const generateEmailLink = () => {
    const subject = `Interest in InstaPark.AI - ${formData.name}`;
    const body = `Hello,\n\nI'm ${formData.name} (${formData.mobile}, ${formData.email}).\n\nI'm interested in learning more about InstaPark.AI's smart parking solutions.\n\nPlease contact me at your earliest convenience.\n\nBest regards,\n${formData.name}`;
    return `mailto:support@instaparkai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const closeDialog = () => {
    setShowDialog(false);
    setIsSubmitted(false);
    setFormData({ name: '', mobile: '', email: '' });
  };

  // Make dialog function globally available
  useEffect(() => {
    window.openContactDialog = () => setShowDialog(true);
    return () => {
      if (window.openContactDialog) {
        delete window.openContactDialog;
      }
    };
  }, []);

  // Initialize scroll animations after page is fully loaded
  useEffect(() => {
    const initializeAnimations = () => {
      import('./utils/scrollAnimations').then((module) => {
        // Wait for page to be fully ready
        setTimeout(() => {
          module.initScrollAnimations();
        }, 300);
      });
    };

    // Wait for page load
    if (document.readyState === 'complete') {
      initializeAnimations();
    } else {
      window.addEventListener('load', initializeAnimations);
    }

    // Also initialize after a delay to catch dynamically loaded content
    const timer = setTimeout(() => {
      import('./utils/scrollAnimations').then((module) => {
        module.initScrollAnimations();
      });
    }, 1000);

    return () => {
      window.removeEventListener('load', initializeAnimations);
      clearTimeout(timer);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen page-enter" style={{background: 'white'}}>
        <Navbar onContactClick={() => setShowDialog(true)} />
        <main style={{animation: 'pageTransition 0.6s ease-out'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        <Footer />

        {/* Global Contact Dialog */}
        {showDialog && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              padding: "20px",
              backdropFilter: "blur(8px)"
            }}
            onClick={closeDialog}
          >
            <div
              style={{
                background: "white",
                borderRadius: "20px",
                padding: isMobile ? "25px" : "40px",
                maxWidth: "500px",
                width: "100%",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
                position: "relative"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeDialog}
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  background: "none",
                  border: "none",
                  fontSize: "24px",
                  cursor: "pointer",
                  color: "#6b7280",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                ×
              </button>

              <div style={{ textAlign: "center", marginBottom: "8px" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  marginBottom: "16px"
                }}>
                  <img 
                    src={logo} 
                    alt="InstaPark AI Logo" 
                    style={{
                      height: "50px", 
                      width: "auto"
                    }}
                  />
                  <div>
                    {/* <span style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      color: "#1f2937"
                    }}>
                      InstaPark
                    </span>
                    <span style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      color: "#057eff",
                      marginLeft: "4px"
                    }}>
                      .AI
                    </span> */}
                  </div>
                </div>
                <h2 style={{ 
                  color: "#1f2937", 
                  fontSize: isMobile ? "1.3rem" : "1.5rem", 
                  fontWeight: 700, 
                  marginBottom: "8px" 
                }}>
                  Get Started with InstaPark.AI
                </h2>
                <p style={{ 
                  color: "#6b7280", 
                  marginBottom: "25px",
                  lineHeight: "1.5",
                  fontSize: isMobile ? "0.9rem" : "1rem"
                }}>
                  Provide your details and we'll contact you immediately
                </p>
              </div>

              {!isSubmitted ? (
                <>
                  <div style={{ marginBottom: "20px" }}>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full Name *"
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        border: "2px solid #e5e7eb",
                        borderRadius: "8px",
                        fontSize: "16px",
                        outline: "none",
                        marginBottom: "16px",
                        fontFamily: "inherit"
                      }}
                    />
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="Mobile Number (10 digits) *"
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        border: "2px solid #e5e7eb",
                        borderRadius: "8px",
                        fontSize: "16px",
                        outline: "none",
                        marginBottom: "16px",
                        fontFamily: "inherit"
                      }}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address *"
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        border: "2px solid #e5e7eb",
                        borderRadius: "8px",
                        fontSize: "16px",
                        outline: "none",
                        fontFamily: "inherit"
                      }}
                    />
                  </div>

                  <div style={{ textAlign: "center", marginBottom: "20px" }}>
                    <button
                      onClick={handleSubmit}
                      disabled={!isFormValid()}
                      style={{
                        background: isFormValid() ? "linear-gradient(135deg, #057eff, #6bb6ff)" : "#d1d5db",
                        color: "white",
                        padding: "14px 32px",
                        borderRadius: "8px",
                        border: "none",
                        fontSize: "16px",
                        fontWeight: "600",
                        cursor: isFormValid() ? "pointer" : "not-allowed",
                        transition: "all 0.3s ease",
                        width: "100%",
                        fontFamily: "inherit",
                        opacity: isFormValid() ? 1 : 0.6
                      }}
                    >
                      Continue to Contact Options
                    </button>
                  </div>
                </>
              ) : (
                <div style={{ 
                  borderTop: "1px solid #e5e7eb", 
                  paddingTop: "20px"
                }}>
                  <h3 style={{ 
                    color: "#374151", 
                    fontSize: "1.125rem", 
                    fontWeight: 600, 
                    marginBottom: "16px", 
                    textAlign: "center" 
                  }}>
                    Choose your preferred contact method:
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <a
                      href={generateWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        padding: "12px 20px",
                        background: "#3B82F6",
                        color: "white",
                        textDecoration: "none",
                        borderRadius: "8px",
                        fontWeight: "600",
                        fontSize: "14px"
                      }}
                    >
                      <img 
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488'/%3E%3C/svg%3E" 
                        alt="WhatsApp" 
                        style={{ width: "20px", height: "20px" }}
                      />
                      Chat on WhatsApp
                    </a>
                    <a
                      href={generateEmailLink()}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        padding: "12px 20px",
                        background: "#6B7280",
                        color: "white",
                        textDecoration: "none",
                        borderRadius: "8px",
                        fontWeight: "600",
                        fontSize: "14px"
                      }}
                    >
                      <img 
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/%3E%3C/svg%3E" 
                        alt="Email" 
                        style={{ width: "20px", height: "20px" }}
                      />
                      Send Email
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;