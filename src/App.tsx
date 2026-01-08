import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import logo from './assets/InstaParkAI plain BG logo.png';
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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show scrollbar when scrolling
  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;
    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        document.documentElement.classList.add('scrolling');
        document.body.classList.add('scrolling');
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        document.documentElement.classList.remove('scrolling');
        document.body.classList.remove('scrolling');
      }, 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Restrict mobile to 10 digits only
    if (name === 'mobile') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData({
        ...formData,
        [name]: digitsOnly
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
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
    
    // Directly open WhatsApp with the message
    const message = `Hi! I'm ${formData.name} (Mobile: ${formData.mobile}, Email: ${formData.email}). I'm interested in learning more about InstaPark.AI's smart parking solutions.`;
    const whatsappUrl = `https://wa.me/919845802901?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Close dialog after opening WhatsApp
    closeDialog();
  };

  const isFormValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10}$/;
    return formData.name.trim() !== '' && 
           mobileRegex.test(formData.mobile) && 
           emailRegex.test(formData.email);
  };

  const closeDialog = () => {
    setShowDialog(false);
    setFormData({
      name: '',
      mobile: '',
      email: ''
    });
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
    <Router basename={import.meta.env.PROD ? '/instapark-ai-website' : ''}>
      <ScrollToTop />
      <div className="min-h-screen page-enter" style={{background: 'white'}}>
        <Navbar onContactClick={() => setShowDialog(true)} />
        <main style={{animation: 'pageTransition 0.6s ease-out'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<Home />} />
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
                    alt="InstaParkAI Logo" 
                    style={{
                      height: "60px", 
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
                  placeholder="Mobile Number (10 digits only) *"
                  maxLength={10}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: formData.mobile && formData.mobile.length !== 10 ? "2px solid #ef4444" : "2px solid #e5e7eb",
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                    marginBottom: "16px",
                    fontFamily: "inherit"
                  }}
                />
                {formData.mobile && formData.mobile.length !== 10 && formData.mobile.length > 0 && (
                  <p style={{ color: "#ef4444", fontSize: "12px", marginTop: "-12px", marginBottom: "12px" }}>
                    Please enter exactly 10 digits
                  </p>
                )}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address *"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "2px solid #ef4444" : "2px solid #e5e7eb",
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                    marginBottom: "16px",
                    fontFamily: "inherit"
                  }}
                />
                {formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                  <p style={{ color: "#ef4444", fontSize: "12px", marginTop: "-12px", marginBottom: "12px" }}>
                    Please enter a valid email address
                  </p>
                )}
              </div>

              <div style={{ textAlign: "center" }}>
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
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;