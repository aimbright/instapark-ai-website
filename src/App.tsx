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
  const [fabExpanded, setFabExpanded] = useState(false);
  const [contactMethod, setContactMethod] = useState<'message' | 'mail'>('message');
  const [inquiryType, setInquiryType] = useState<'sales' | 'support' | 'ask'>('sales');
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    
    if (contactMethod === 'message') {
      // Send to WhatsApp
      let whatsappMessage = `Hi! I'm ${formData.name} (Mobile: ${formData.mobile}, Email: ${formData.email}).\n\nInquiry Type: ${inquiryType.charAt(0).toUpperCase() + inquiryType.slice(1)}.\n\n`;
      if (formData.message.trim()) {
        whatsappMessage += `Message: ${formData.message}\n\n`;
      }
      whatsappMessage += `I'm interested in learning more about InstaPark.AI's smart parking solutions.`;
      const whatsappUrl = `https://wa.me/919353240270?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      // Send to Email
      let emailTo = '';
      if (inquiryType === 'sales') {
        emailTo = 'sales@instaparkai.com';
      } else if (inquiryType === 'support') {
        emailTo = 'support@instaparkai.com';
      } else {
        emailTo = 'support@instaparkai.com'; // Ask goes to support
      }
      
      const subject = `InstaPark.AI Inquiry - ${inquiryType.charAt(0).toUpperCase() + inquiryType.slice(1)}`;
      let body = `Hello,\n\nMy name is ${formData.name}.\n\nContact Details:\nEmail: ${formData.email}\nPhone: ${formData.mobile}\n\nInquiry Type: ${inquiryType.charAt(0).toUpperCase() + inquiryType.slice(1)}\n\n`;
      if (formData.message.trim()) {
        body += `Message:\n${formData.message}\n\n`;
      }
      body += `Please provide more information about InstaPark.AI's smart parking solutions.`;
      const mailtoUrl = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    }
    
    // Close dialog after opening WhatsApp or email
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
      email: '',
      message: ''
    });
    setContactMethod('message');
    setInquiryType('sales');
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

        {/* Floating Action Buttons - WhatsApp, Call & Mail */}
        {isMobile ? (
          // Mobile: Expandable FAB menu in bottom right
          <div style={{
            position: "fixed",
            right: "20px",
            bottom: "20px",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "center"
          }}>
            {/* Expanded buttons */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: "center",
              opacity: fabExpanded ? 1 : 0,
              transform: fabExpanded ? "translateY(0)" : "translateY(20px)",
              pointerEvents: fabExpanded ? "auto" : "none",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              marginBottom: fabExpanded ? "0" : "-80px"
            }}>
              {/* Mail FAB */}
              <a
                href="mailto:support@instaparkai.com"
                onClick={() => setFabExpanded(false)}
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                  color: "#057eff",
                  fontSize: "24px",
                  border: "2px solid rgba(5, 126, 255, 0.1)"
                }}
                aria-label="Email us"
              >
                <i className="fas fa-envelope"></i>
              </a>

              {/* Call FAB */}
              <a
                href="tel:+919353240270"
                onClick={() => setFabExpanded(false)}
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                  color: "#057eff",
                  fontSize: "24px",
                  border: "2px solid rgba(5, 126, 255, 0.1)"
                }}
                aria-label="Call us"
              >
                <i className="fas fa-phone-alt"></i>
              </a>

              {/* WhatsApp FAB */}
              <a
                href="https://wa.me/919353240270"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setFabExpanded(false)}
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: "#25D366",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 24px rgba(37, 211, 102, 0.4)",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                  color: "white",
                  fontSize: "28px"
                }}
                aria-label="Contact us on WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>

            {/* Main toggle button */}
            <button
              onClick={() => setFabExpanded(!fabExpanded)}
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(5, 126, 255, 0.2)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(5, 126, 255, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(5, 126, 255, 0.2)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                color: "#057eff",
                fontSize: "20px"
              }}
              aria-label="Toggle support options"
            >
              <i className="fas fa-headset"></i>
            </button>
          </div>
        ) : (
          // Desktop: All buttons visible on left side
          <div style={{
            position: "fixed",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "center"
          }}>
            {/* WhatsApp FAB */}
            <a
              href="https://wa.me/919353240270"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                background: "#25D366",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 24px rgba(37, 211, 102, 0.4)",
                transition: "all 0.3s ease",
                textDecoration: "none",
                color: "white",
                fontSize: "28px"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(37, 211, 102, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(37, 211, 102, 0.4)";
              }}
              aria-label="Contact us on WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>

            {/* Call FAB */}
            <a
              href="tel:+919353240270"
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                transition: "all 0.3s ease",
                textDecoration: "none",
                color: "#057eff",
                fontSize: "24px",
                border: "2px solid rgba(5, 126, 255, 0.1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(5, 126, 255, 0.3)";
                e.currentTarget.style.borderColor = "#057eff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.15)";
                e.currentTarget.style.borderColor = "rgba(5, 126, 255, 0.1)";
              }}
              aria-label="Call us"
            >
              <i className="fas fa-phone-alt"></i>
            </a>

            {/* Mail FAB */}
            <a
              href="mailto:support@instaparkai.com"
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                transition: "all 0.3s ease",
                textDecoration: "none",
                color: "#057eff",
                fontSize: "24px",
                border: "2px solid rgba(5, 126, 255, 0.1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(5, 126, 255, 0.3)";
                e.currentTarget.style.borderColor = "#057eff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.15)";
                e.currentTarget.style.borderColor = "rgba(5, 126, 255, 0.1)";
              }}
              aria-label="Email us"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        )}

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
                  marginBottom: "20px",
                  lineHeight: "1.5",
                  fontSize: isMobile ? "0.9rem" : "1rem"
                }}>
                  Provide your details and we'll contact you immediately
                </p>
              </div>

              {/* Contact Method Tabs */}
              <div style={{
                display: "flex",
                gap: "8px",
                marginBottom: "20px",
                background: "#f3f4f6",
                padding: "4px",
                borderRadius: "8px"
              }}>
                <button
                  onClick={() => setContactMethod('message')}
                  style={{
                    flex: 1,
                    padding: "10px 16px",
                    borderRadius: "6px",
                    border: "none",
                    background: contactMethod === 'message' ? "linear-gradient(135deg, #057eff, #6bb6ff)" : "transparent",
                    color: contactMethod === 'message' ? "white" : "#6b7280",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                >
                  <i className="fab fa-whatsapp" style={{ marginRight: "6px" }}></i>
                  Message
                </button>
                <button
                  onClick={() => setContactMethod('mail')}
                  style={{
                    flex: 1,
                    padding: "10px 16px",
                    borderRadius: "6px",
                    border: "none",
                    background: contactMethod === 'mail' ? "linear-gradient(135deg, #057eff, #6bb6ff)" : "transparent",
                    color: contactMethod === 'mail' ? "white" : "#6b7280",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                >
                  <i className="fas fa-envelope" style={{ marginRight: "6px" }}></i>
                  Mail
                </button>
              </div>

              {/* Inquiry Type Dropdown */}
              <div style={{ marginBottom: "20px" }}>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value as 'sales' | 'support' | 'ask')}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e5e7eb",
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                    marginBottom: "16px",
                    fontFamily: "inherit",
                    background: "white",
                    cursor: "pointer"
                  }}
                >
                  <option value="sales">Sales</option>
                  <option value="support">Support</option>
                </select>
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
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter your message (optional)"
                  rows={5}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e5e7eb",
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                    marginBottom: "16px",
                    fontFamily: "inherit",
                    resize: "vertical",
                    minHeight: "120px"
                  }}
                />
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
                  {contactMethod === 'message' ? (
                    <>
                      <i className="fab fa-whatsapp" style={{ marginRight: "8px" }}></i>
                      Send Message
                    </>
                  ) : (
                    <>
                      <i className="fas fa-envelope" style={{ marginRight: "8px" }}></i>
                      Send Email
                    </>
                  )}
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