import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../components/SEO";
import userJourney from '../assets/user joureny.png';
import instaParkLogo from '../assets/InstaParkAI plain BG logo.png';
import endtoendOperations from '../assets/endtoend_operations.png';
import parkingManagement from '../assets/parking_management.png';
import findNearby from '../assets/findnearby.png';
import completeAMC from '../assets/complete_amc_support.png';

const Services: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [showEndToEndDetails, setShowEndToEndDetails] = useState(false);
  const [showParkingManagementDetails, setShowParkingManagementDetails] = useState(false);
  const [showFindNearbyDetails, setShowFindNearbyDetails] = useState(false);
  const [showAMCDetails, setShowAMCDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    service: ''
  });

  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle URL hash and auto-expand sections
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.replace('#', '') || location.hash.replace('#', '');
      if (hash) {
        // Map hash to state setters
        const sectionMap: { [key: string]: () => void } = {
          'end-to-end-operations': () => setShowEndToEndDetails(true),
          'ai-parking-management': () => setShowParkingManagementDetails(true),
          'parking-discovery': () => setShowFindNearbyDetails(true),
          'amc-support': () => setShowAMCDetails(true)
        };

        // Expand the corresponding section
        if (sectionMap[hash]) {
          sectionMap[hash]();
        }

        // Scroll to the section after a short delay to allow expansion
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const navHeight = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 500);
      }
    };

    // Handle initial hash and hash changes
    handleHashNavigation();
    
    // Also listen for hashchange events
    window.addEventListener('hashchange', handleHashNavigation);
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, [location.hash]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.mobile || !formData.email || !formData.service) {
      alert('Please fill in all fields');
      return;
    }
  };

  const generateWhatsAppMessage = () => {
    const message = `Hello! My name is ${formData.name}. I'm interested in ${formData.service} service. Contact me at ${formData.email} or ${formData.mobile}.`;
    return `https://wa.me/919353240270?text=${encodeURIComponent(message)}`;
  };

  const generateCallLink = () => {
    return `tel:+919353240270`;
  };

  const generateEmailLink = () => {
    const subject = `InstaPark.AI Service Inquiry - ${formData.service}`;
    const body = `Hello,\n\nMy name is ${formData.name} and I'm interested in ${formData.service} service.\n\nContact Details:\nEmail: ${formData.email}\nPhone: ${formData.mobile}\n\nPlease provide more information about this service.`;
    return `mailto:support@instaparkai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const services = [
    {
      id: "smart-parking",
      icon: "fa-search",
      title: "Smart Parking management",
      subtitle: "AI-powered detection with 95%+ accuracy.",
      features: [
        "AI camera vision",
        "Empty slot detection",
        "On-ground sensors & LED guidance",
        "Real-time occupancy alerts",
        "Multi-location dashboards"
      ],
      color: "linear-gradient(135deg, #057eff, #6bb6ff)"
    },
    {
      id: "mobile-booking",
      icon: "fa-mobile-alt",
      title: "Find Nearby Parking & Book Your Slot Easily",
      subtitle: "Discover available parking spaces near you and reserve your slot instantly using our app or website.",
      features: [
        "One-tap booking for hourly or monthly parking",
        "Instant booking confirmation",
        "Secure digital receipts",
        "Real-time push notifications & alerts"
      ],
      color: "linear-gradient(135deg, #3B82F6, #1D4ED8)"
    },
    {
      id: "access-control",
      icon: "fa-shield-alt",
      title: "Intelligent Access Control",
      subtitle: "Automated vehicle entry & exit.",
      features: [
        "AI-enabled ANPR",
        "RFID / FASTag detection",
        "QR / OTP entry",
        "Facial recognition (optional)",
        "Visitor & employee access control"
      ],
      color: "linear-gradient(135deg, #8B5CF6, #7C3AED)"
    },
    {
      id: "analytics",
      icon: "fa-chart-bar",
      title: "Analytics & Revenue Dashboard",
      subtitle: "Complete control for owners & admins.",
      features: [
        "Live occupancy",
        "Revenue reports (daily / monthly)",
        "Staff performance",
        "Payment reconciliation",
        "Peak pricing insights",
        "Anomaly alerts"
      ],
      color: "linear-gradient(135deg, #F59E0B, #D97706)"
    },
    {
      id: "ev-charging",
      icon: "fa-bolt",
      title: "EV Charging Integration",
      subtitle: "Make parking spaces EV-ready.",
      features: [
        "Charger booking",
        "Unified parking + charging payment",
        "Charging status monitoring",
        "Load balancing & energy analytics"
      ],
      color: "linear-gradient(135deg, #10b981, #059669)"
    },
    {
      id: "valet",
      icon: "fa-parking",
      title: "Valet Parking Operations",
      subtitle: "Tech-enabled valet services.",
      features: [
        "Trained valet drivers",
        "Valet app & task allocation",
        "Real-time vehicle tracking",
        "Digital audit trails"
      ],
      color: "linear-gradient(135deg, #EF4444, #DC2626)"
    },
    {
      id: "custom-integrations",
      icon: "fa-cog",
      title: "Custom Integrations & White-Label",
      subtitle: "Built for enterprises & governments.",
      features: [
        "API integrations",
        "White-label apps",
        "Custom workflows",
        "Brand customization"
      ],
      color: "linear-gradient(135deg, #6366F1, #4F46E5)"
    },
    {
      id: "safety-compliance",
      icon: "fa-shield-alt",
      title: "Safety & Compliance",
      subtitle: "Advanced safety features.",
      features: [
        "Overspeed detection",
        "Wrong-lane detection",
        "Find-My-Car feature",
        "Violation alerts & reports"
      ],
      color: "linear-gradient(135deg, #EC4899, #DB2777)"
    },
    {
      id: "value-added",
      icon: "fa-tools",
      title: "Value-Added Services",
      subtitle: "Additional services for enhanced experience.",
      features: [
        "EV charging",
        "Breakdown assistance",
        "Car services"
      ],
      color: "linear-gradient(135deg, #14B8A6, #0D9488)"
    }
  ];

  return (
    <div style={{ 
      background: "#ffffff", 
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      lineHeight: 1.6,
      overflowX: "hidden"
    }}>
      <SEO
        title="Comprehensive AI-Powered Parking Solutions | InstaParkAI Services"
        description="InstaParkAI delivers end-to-end parking solutions including smart parking detection, mobile booking platform, intelligent access control, analytics dashboard, EV charging integration, valet operations, and custom integrations. Transform your parking operations with AI-powered technology."
        keywords="parking management services, smart parking detection, parking booking app, ANPR parking system, RFID parking, parking analytics dashboard, EV charging parking, valet parking services, parking API integration, white-label parking solution, parking management software, automated parking system, parking access control, parking revenue optimization, parking IoT solutions"
        ogImage="https://instaparkai.com/og-image-services.png"
      />
      
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      {/* ================= SERVICES HERO SECTION ================= */}
      <section style={{
        background: "white",
        padding: isMobile ? "120px 20px 60px" : "160px 20px 100px",
        textAlign: "center",
        position: "relative"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          {/* Logo Graphic */}
          <div style={{ 
            marginBottom: isMobile ? "30px" : "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <img 
              src={instaParkLogo} 
              alt="InstaParkAI Logo" 
              style={{
                height: isMobile ? "150px" : "250px",
                width: "auto",
                maxWidth: "90%",
                objectFit: "contain",
                display: "block",
                margin: "0 auto"
              }}
            />
          </div>

          {/* Company Name with Stylized P */}
          <h1 style={{
            color: "#1e3a8a",
            fontSize: isMobile ? "2.5rem" : "4rem",
                fontWeight: "800",
            marginBottom: "12px",
            lineHeight: "1.1",
            letterSpacing: "-1px"
          }}>
            </h1>

          {/* Tagline */}
          <p style={{
            color: "#1e3a8a",
            fontSize: isMobile ? "0.875rem" : "1rem",
            fontWeight: "600",
            marginBottom: isMobile ? "40px" : "50px",
            letterSpacing: "1px",
            textTransform: "uppercase"
          }}>
          </p>

          {/* Main Headline */}
            <h2 style={{
            color: "#111827", 
            fontSize: isMobile ? "2rem" : "3.5rem", 
            fontWeight: "700", 
            marginBottom: "24px",
            lineHeight: "1.2",
            letterSpacing: "-0.5px",
            maxWidth: "900px",
            margin: "0 auto 24px"
          }}>
            Comprehensive{" "}
              <span style={{
              background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
            }}>AI-Driven Parking Solutions,</span>{" "}
            Tailored for Every Parking Need
            </h2>
          
          {/* Sub-headline */}
          <p style={{
            color: '#4b5563', 
            fontSize: isMobile ? "1.125rem" : "1.25rem",
            maxWidth: '800px', 
            margin: '0 auto 60px',
            lineHeight: "1.7",
            fontWeight: "400"
          }}>
            End-to-end AI-powered parking management services designed for businesses, cities, and commercial establishments
          </p>

          {/* End-to-End Parking Operations Section */}
          <div id="end-to-end-operations" style={{
            maxWidth: "1200px",
            margin: "0 auto",
            marginTop: isMobile ? "60px" : "80px",
            scrollMarginTop: "120px"
          }}>
            {/* Image and Heading Layout */}
          <div style={{
            display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? "30px" : "50px",
              alignItems: "center",
              marginBottom: "30px"
            }}>
              {/* Image on Left */}
            <div style={{
                order: isMobile ? 2 : 1
              }}>
                <img 
                  src={endtoendOperations} 
                  alt="End-to-End Parking Operations" 
                  style={{
                    width: "100%",
                    height: "auto",
              borderRadius: "20px",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                    display: "block"
                  }}
                />
              </div>

              {/* Heading on Right */}
              <div style={{
                order: isMobile ? 1 : 2
            }}>
          <div style={{ 
            display: "flex", 
                alignItems: "center",
                  gap: "12px",
                  marginBottom: "20px"
                }}>
                  <i className="fas fa-building" style={{
                    fontSize: isMobile ? "1.75rem" : "2.5rem",
                    color: "#057eff"
                  }}></i>
              <h3 style={{
                    fontSize: isMobile ? "1.75rem" : "2.5rem",
                fontWeight: "700",
                    color: "#111827",
                    margin: 0,
                    lineHeight: "1.2"
                  }}>
                    End-to-End Parking Operations
              </h3>
                </div>

              <p style={{
                  fontSize: isMobile ? "1rem" : "1.125rem",
                  color: "#4b5563",
                marginBottom: "24px",
                  lineHeight: "1.7"
                }}>
                  Complete parking management with professional manpower and advanced technology
                </p>

                {/* More Details Button */}
                <button
                  onClick={() => setShowEndToEndDetails(!showEndToEndDetails)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "transparent",
                    border: "2px solid #057eff",
                    color: "#057eff",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    fontSize: isMobile ? "0.9375rem" : "1rem",
                  fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    marginTop: "10px"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#057eff";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#057eff";
                  }}
                >
                  <span>More Details</span>
                  <i 
                    className={`fas fa-chevron-${showEndToEndDetails ? 'up' : 'down'}`}
                    style={{
                      fontSize: "0.875rem",
                      transition: "transform 0.3s ease"
                    }}
                  ></i>
                </button>
            </div>
          </div>

            {/* Expandable Feature Cards Grid */}
            {showEndToEndDetails && (
        <div style={{ 
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                gap: "24px",
                marginTop: "30px",
                animation: "fadeIn 0.5s ease-in"
              }}>
              {/* Complete Operational Ownership */}
          <div style={{
                background: "#f8fafc",
                padding: "28px",
                borderRadius: "16px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)"
              }}>
                <h4 style={{
                  fontSize: "1.25rem",
            fontWeight: "700", 
                  color: "#111827",
              marginBottom: "16px"
            }}>
                  Complete Operational Ownership
                </h4>
            <p style={{
                  fontSize: "0.9375rem",
              color: "#6b7280",
            marginBottom: "20px",
              lineHeight: "1.6"
            }}>
                  We handle everything from daily vehicle movement to compliance reporting. Our tech-enabled approach replaces manual processes with efficient systems.
                </p>
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0
                }}>
                  {["On-ground parking operations", "Staff deployment & supervision", "Technology implementation", "Digital payments & reporting"].map((item, idx) => (
                    <li key={idx} style={{
                      fontSize: "0.9375rem",
                      color: "#4b5563",
                      marginBottom: "10px",
                      paddingLeft: "24px",
                      position: "relative"
                    }}>
                      <i className="fas fa-check-circle" style={{
                        position: "absolute",
                        left: 0,
                        color: "#057eff",
                        fontSize: "0.875rem",
                        top: "3px"
                      }}></i>
                      {item}
                    </li>
                  ))}
                </ul>
          </div>

              {/* Professional Manpower & Training */}
          <div style={{
                background: "#f8fafc",
                padding: "28px",
                borderRadius: "16px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)"
              }}>
                <h4 style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#111827",
                  marginBottom: "16px"
                }}>
                  Professional Manpower & Training
                </h4>
          <p style={{
                  fontSize: "0.9375rem",
                  color: "#6b7280",
                  marginBottom: "20px",
            lineHeight: "1.6"
          }}>
                  Our teams undergo rigorous screening and training to deliver smooth, customer-friendly operations.
                </p>
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0
                }}>
                  {["Background verification", "PMS & payment training", "Customer service skills", "Performance monitoring"].map((item, idx) => (
                    <li key={idx} style={{
                      fontSize: "0.9375rem",
                      color: "#4b5563",
                      marginBottom: "10px",
                      paddingLeft: "24px",
                      position: "relative"
                    }}>
                      <i className="fas fa-check-circle" style={{
                        position: "absolute",
                        left: 0,
                        color: "#057eff",
                        fontSize: "0.875rem",
                        top: "3px"
                      }}></i>
                      {item}
                    </li>
                  ))}
              </ul>
            </div>

              {/* Technology-Driven Control */}
          <div style={{ 
                background: "#f8fafc",
                padding: "28px",
                borderRadius: "16px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)"
              }}>
                <h4 style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#111827",
                marginBottom: "16px"
              }}>
                  Technology-Driven Control
                </h4>
              <p style={{
                  fontSize: "0.9375rem",
                color: "#6b7280",
                  marginBottom: "20px",
                  lineHeight: "1.6"
                }}>
                  Real-time visibility and control across all parking sites with advanced monitoring systems.
                </p>
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0
                }}>
                  {["Live occupancy tracking", "Automated entry/exit logs", "Centralized dashboards", "Daily analytics reports"].map((item, idx) => (
                    <li key={idx} style={{
                      fontSize: "0.9375rem",
                      color: "#4b5563",
                      marginBottom: "10px",
                      paddingLeft: "24px",
              position: "relative"
            }}>
                      <i className="fas fa-check-circle" style={{
                position: "absolute",
                        left: 0,
                        color: "#057eff",
                        fontSize: "0.875rem",
                        top: "3px"
                      }}></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* End-to-End Management */}
              <div style={{
                background: "#f8fafc",
                padding: "28px",
                borderRadius: "16px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)"
              }}>
                <h4 style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#111827",
                marginBottom: "16px"
              }}>
                  End-to-End Management
                </h4>
              <p style={{
                  fontSize: "0.9375rem",
                  color: "#6b7280",
                  marginBottom: "20px",
                  lineHeight: "1.6"
                }}>
                  Covering the entire parking lifecycle from assessment to optimization.
                </p>
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0
                }}>
                  {["Site assessment", "Infrastructure deployment", "Daily operations", "Performance scaling"].map((item, idx) => (
                    <li key={idx} style={{
                      fontSize: "0.9375rem",
                      color: "#4b5563",
                      marginBottom: "10px",
                      paddingLeft: "24px",
                      position: "relative"
                    }}>
                      <i className="fas fa-check-circle" style={{
                        position: "absolute",
                        left: 0,
                        color: "#057eff",
                        fontSize: "0.875rem",
                        top: "3px"
                      }}></i>
                      {item}
                    </li>
                  ))}
              </ul>
              </div>
            </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= AI-POWERED PARKING MANAGEMENT SYSTEMS ================= */}
      <section id="ai-parking-management" style={{
        background: "white",
        padding: isMobile ? "60px 20px" : "100px 20px",
        scrollMarginTop: "120px"
      }}>
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto"
        }}>
          {/* Text and Image Layout */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "30px" : "50px",
            alignItems: "center",
            marginBottom: "30px"
          }}>
            {/* Text on Left */}
            <div style={{
              order: isMobile ? 2 : 1
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px"
              }}>
                <i className="fas fa-robot" style={{
                  fontSize: isMobile ? "1.75rem" : "2.5rem",
                  color: "#057eff"
                }}></i>
              <h3 style={{
                  fontSize: isMobile ? "1.75rem" : "2.5rem",
              fontWeight: "700",
                  color: "#111827",
                  margin: 0,
                  lineHeight: "1.2"
                }}>
                  AI-Powered Parking Management Systems
              </h3>
              </div>

            <p style={{
              fontSize: isMobile ? "1rem" : "1.125rem",
                color: "#4b5563",
                marginBottom: "24px",
                lineHeight: "1.7"
              }}>
                Advanced AI technology for real-time monitoring and optimization
              </p>

              {/* More Details Button */}
              <button
                onClick={() => setShowParkingManagementDetails(!showParkingManagementDetails)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "transparent",
                  border: "2px solid #057eff",
                  color: "#057eff",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  fontSize: isMobile ? "0.9375rem" : "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  marginTop: "10px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#057eff";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#057eff";
                }}
              >
                <span>More Details</span>
                <i 
                  className={`fas fa-chevron-${showParkingManagementDetails ? 'up' : 'down'}`}
                  style={{
                    fontSize: "0.875rem",
                    transition: "transform 0.3s ease"
                  }}
                ></i>
              </button>
          </div>

            {/* Image on Right */}
              <div style={{
              order: isMobile ? 1 : 2
            }}>
              <img 
                src={parkingManagement} 
                alt="AI-Powered Parking Management Systems" 
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "20px",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                  display: "block"
                }}
              />
            </div>
          </div>

          {/* Expandable Content */}
          {showParkingManagementDetails && (
            <div>
              {/* Feature Cards Grid */}
          <div style={{
            display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                gap: "24px",
                marginTop: "30px",
                animation: "fadeIn 0.5s ease-in"
              }}>
                {/* Intelligent Parking Detection */}
            <div style={{
                background: "#f8fafc",
                padding: "28px",
                borderRadius: "16px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)"
              }}>
                <h4 style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#111827",
                  marginBottom: "16px"
                }}>
                  Intelligent Parking Detection
                </h4>
                <p style={{
                  fontSize: "0.9375rem",
                  color: "#6b7280",
                  marginBottom: "20px",
                  lineHeight: "1.6"
                }}>
                  AI-powered systems with 95%+ accuracy for real-time vehicle detection and slot monitoring.
                </p>
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0
                }}>
                  {["AI camera vision", "Empty slot detection", "On-ground sensors & LED guidance", "Real-time occupancy alerts"].map((item, idx) => (
                    <li key={idx} style={{
                      fontSize: "0.9375rem",
                      color: "#4b5563",
                      marginBottom: "10px",
                      paddingLeft: "24px",
                      position: "relative"
                    }}>
                      <i className="fas fa-check-circle" style={{
                        position: "absolute",
                        left: 0,
                        color: "#057eff",
                        fontSize: "0.875rem",
                        top: "3px"
                      }}></i>
                      {item}
                    </li>
                  ))}
              </ul>
            </div>

              {/* Smart Access Control */}
              <div style={{
                background: "#f8fafc",
                padding: "28px",
                borderRadius: "16px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)"
              }}>
                <h4 style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#111827",
                  marginBottom: "16px"
                }}>
                  Smart Access Control
                </h4>
                <p style={{
                  fontSize: "0.9375rem",
                  color: "#6b7280",
                  marginBottom: "20px",
                  lineHeight: "1.6"
                }}>
                  Automated vehicle entry and exit management using cutting-edge technology.
                </p>
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0
                }}>
                  {["AI-enabled ANPR", "RFID / FASTag detection", "QR / OTP entry", "Facial recognition (optional)"].map((item, idx) => (
                    <li key={idx} style={{
                      fontSize: "0.9375rem",
                      color: "#4b5563",
                      marginBottom: "10px",
                      paddingLeft: "24px",
              position: "relative"
            }}>
                      <i className="fas fa-check-circle" style={{
                position: "absolute",
                        left: 0,
                        color: "#057eff",
                        fontSize: "0.875rem",
                        top: "3px"
                      }}></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Analytics & Revenue Dashboard */}
              <div style={{
                background: "#f8fafc",
                padding: "28px",
                borderRadius: "16px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)"
              }}>
                <h4 style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#111827",
                marginBottom: "16px"
              }}>
                  Analytics & Revenue Dashboard
                </h4>
              <p style={{
                  fontSize: "0.9375rem",
                color: "#6b7280",
                  marginBottom: "20px",
                  lineHeight: "1.6"
                }}>
                  Complete control for owners & admins with comprehensive reporting.
                </p>
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0
                }}>
                  {["Live occupancy", "Revenue reports", "Staff performance", "Payment reconciliation"].map((item, idx) => (
                    <li key={idx} style={{
                      fontSize: "0.9375rem",
                      color: "#4b5563",
                      marginBottom: "10px",
                      paddingLeft: "24px",
                      position: "relative"
                    }}>
                      <i className="fas fa-check-circle" style={{
                        position: "absolute",
                        left: 0,
                        color: "#057eff",
                        fontSize: "0.875rem",
                        top: "3px"
                      }}></i>
                      {item}
                    </li>
                  ))}
                </ul>
                </div>

              {/* Multi-Location Management */}
              <div style={{
                background: "#f8fafc",
                padding: "28px",
                borderRadius: "16px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)"
              }}>
                <h4 style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#111827",
                  marginBottom: "16px"
                }}>
                  Multi-Location Management
                </h4>
                <p style={{
                  fontSize: "0.9375rem",
                  color: "#6b7280",
                  marginBottom: "20px",
                  lineHeight: "1.6"
                }}>
                  Centralized control and monitoring across multiple parking sites.
                </p>
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0
                }}>
                  {["Unified dashboards", "Cross-site analytics", "Centralized reporting", "Performance insights"].map((item, idx) => (
                    <li key={idx} style={{
                      fontSize: "0.9375rem",
                      color: "#4b5563",
                      marginBottom: "10px",
                      paddingLeft: "24px",
                      position: "relative"
                    }}>
                      <i className="fas fa-check-circle" style={{
                        position: "absolute",
                        left: 0,
                        color: "#057eff",
                        fontSize: "0.875rem",
                        top: "3px"
                      }}></i>
                      {item}
                    </li>
                  ))}
              </ul>
              </div>
            </div>

              {/* PMS Use Cases Content */}
              <div style={{
                marginTop: isMobile ? "50px" : "70px"
              }}>
                <h3 style={{
                  fontSize: isMobile ? "1.5rem" : "2rem",
                  fontWeight: "700",
                  color: "#111827",
                  textAlign: "center",
                  marginBottom: isMobile ? "30px" : "40px"
                }}>
                  PMS Use Cases Offered
                </h3>

                {/* PMS Use Cases Section */}
                <div style={{
                  marginTop: "30px"
                }}>
                  {/* Use Case Cards - 2 per row */}
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                    gap: "20px"
                  }}>
                  {/* Intelligent Access Control Systems */}
                  <div style={{
                    background: "linear-gradient(135deg, #057eff 0%, #6bb6ff 100%)",
                padding: "20px",
                    borderRadius: "12px",
                    color: "white"
              }}>
                <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "12px"
                    }}>
                      <i className="fas fa-network-wired" style={{ fontSize: "1.5rem" }}></i>
                      <h5 style={{
                        fontSize: "1.125rem",
                        fontWeight: "700",
                        margin: 0
                      }}>
                        Intelligent Access Control Systems
                      </h5>
                </div>
                <ul style={{
                      listStyle: "none",
                      padding: 0,
                  margin: 0,
                      fontSize: "0.9375rem",
                  lineHeight: "1.8"
                }}>
                      <li>• AI-enabled ANPR with 95%+ accuracy</li>
                      <li>• RFID/FastTag Detection</li>
                      <li>• QR Code, Facial Recognition</li>
                      <li>• Systems Solves for visitors and employees</li>
              </ul>
            </div>

                  {/* Real-time Parking Availability & Guidance */}
            <div style={{
                    background: "linear-gradient(135deg, #057eff 0%, #6bb6ff 100%)",
                    padding: "20px",
                    borderRadius: "12px",
                    color: "white"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                      gap: "12px",
                      marginBottom: "12px"
                    }}>
                      <i className="fas fa-car" style={{ fontSize: "1.5rem" }}></i>
                      <h5 style={{
                        fontSize: "1.125rem",
                        fontWeight: "700",
                        margin: 0
                      }}>
                        Real-time Parking Availability & Guidance
                      </h5>
                    </div>
                    <ul style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      fontSize: "0.9375rem",
                      lineHeight: "1.8"
                    }}>
                      <li>• AI Camera Vision - Empty Parking Lot Detection</li>
                      <li>• On-ground sensors LED Guidance Systems</li>
                    </ul>
                  </div>

                  {/* Cloud Connectivity */}
                  <div style={{
                    background: "linear-gradient(135deg, #057eff 0%, #6bb6ff 100%)",
                    padding: "20px",
                    borderRadius: "12px",
                color: "white"
              }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "12px"
                    }}>
                      <i className="fas fa-cloud" style={{ fontSize: "1.5rem" }}></i>
                      <h5 style={{
                        fontSize: "1.125rem",
                        fontWeight: "700",
                        margin: 0
                      }}>
                        Cloud Connectivity
                      </h5>
              </div>
                    <ul style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      fontSize: "0.9375rem",
                      lineHeight: "1.8"
                    }}>
                      <li>• Real-time updates and alerts to Facility Control Room</li>
                      <li>• APIs for parking data for management systems</li>
                      <li>• Device health status for hassle-free maintenance</li>
                    </ul>
                  </div>

                  {/* Robust Hardware Portfolio */}
                  <div style={{
                    background: "linear-gradient(135deg, #057eff 0%, #6bb6ff 100%)",
                    padding: "20px",
                    borderRadius: "12px",
                    color: "white"
                  }}>
              <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "12px"
                    }}>
                      <i className="fas fa-shield-check" style={{ fontSize: "1.5rem" }}></i>
                      <h5 style={{
                        fontSize: "1.125rem",
                        fontWeight: "700",
                        margin: 0
                      }}>
                        Robust Hardware Portfolio
                      </h5>
                    </div>
                    <ul style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      fontSize: "0.9375rem",
                      lineHeight: "1.8"
                    }}>
                      <li>• Stringent selection process</li>
                      <li>• Life of 5+ years</li>
                      <li>• Hassle-free maintenance</li>
                    </ul>
                  </div>

                  {/* Safety Features */}
                  <div style={{
                    background: "linear-gradient(135deg, #057eff 0%, #6bb6ff 100%)",
                    padding: "20px",
                borderRadius: "12px",
                    color: "white"
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "12px"
                    }}>
                      <i className="fas fa-shield-alt" style={{ fontSize: "1.5rem" }}></i>
                      <h5 style={{
                        fontSize: "1.125rem",
                        fontWeight: "700",
                        margin: 0
                      }}>
                        Safety Features
                      </h5>
                    </div>
                    <ul style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      fontSize: "0.9375rem",
                      lineHeight: "1.8"
                    }}>
                      <li>• Overspeed Detection</li>
                      <li>• Wrong Lane Detection</li>
                      <li>• Find My Car</li>
                      <li>• Email alerts to FCM and user in case of violation</li>
                    </ul>
                  </div>

                  {/* Value Added Services */}
                  <div style={{
                    background: "linear-gradient(135deg, #057eff 0%, #6bb6ff 100%)",
                padding: "20px",
                    borderRadius: "12px",
                    color: "white"
              }}>
                <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "12px"
                    }}>
                      <i className="fas fa-cog" style={{ fontSize: "1.5rem" }}></i>
                      <h5 style={{
                        fontSize: "1.125rem",
                        fontWeight: "700",
                        margin: 0
                      }}>
                        Value Added Services
                      </h5>
                </div>
                <ul style={{
                      listStyle: "none",
                      padding: 0,
                  margin: 0,
                      fontSize: "0.9375rem",
                  lineHeight: "1.8"
                }}>
                      <li>• EV Charging</li>
                      <li>• Breakdown support</li>
                      <li>• Car Services</li>
              </ul>
                  </div>
                  </div>
                </div>
              </div>

            {/* Availability & Guidance for Users - Full Width */}
            <div style={{
                marginTop: isMobile ? "40px" : "60px"
              }}>
              <h4 style={{
                fontSize: isMobile ? "1.25rem" : "1.5rem",
                fontWeight: "700",
                color: "#057eff",
                marginBottom: "24px"
              }}>
                Availability & Guidance for Users
              </h4>

                {/* System Architecture Diagram */}
                <div style={{
                  background: "#f8fafc",
                  padding: "30px",
                  borderRadius: "16px",
                  border: "2px solid #e5e7eb"
                }}>
                  {/* Cloud Hub */}
                  <div style={{
                    background: "#1e3a8a",
                    color: "white",
                    padding: "20px",
                    borderRadius: "12px",
              textAlign: "center",
                    marginBottom: "20px",
              position: "relative"
            }}>
                    <i className="fas fa-cloud" style={{
                      fontSize: "2rem",
                      marginBottom: "8px",
                      display: "block"
                    }}></i>
              <div style={{
                      fontSize: "1.125rem",
                      fontWeight: "700"
                    }}>
                      Cloud
                    </div>
                    <i className="fas fa-lock" style={{
                position: "absolute",
                      top: "10px",
                      right: "10px",
                      fontSize: "0.875rem"
                    }}></i>
                  </div>

                  {/* IoT Gateway */}
                  <div style={{
                    background: "#3b82f6",
                color: "white",
                    padding: "20px",
                    borderRadius: "12px",
                    textAlign: "center",
                    marginBottom: "30px",
                    position: "relative"
                  }}>
                    <i className="fas fa-wifi" style={{
                      fontSize: "2rem",
                      marginBottom: "8px",
                      display: "block"
                    }}></i>
                    <div style={{
                      fontSize: "1.125rem",
                      fontWeight: "700"
                    }}>
                      IoT Gateway
                    </div>
                  </div>

                  {/* Connected Systems */}
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "15px"
                  }}>
                    {/* Building Management Systems */}
                    <div style={{
                      background: "#1e3a8a",
                      color: "white",
                      padding: "15px",
                      borderRadius: "10px",
                      textAlign: "center",
                      fontSize: "0.875rem",
                fontWeight: "600"
              }}>
                      Building Management Systems
              </div>

                    {/* App/Website */}
              <div style={{
                      background: "#1e3a8a",
                      color: "white",
                      padding: "15px",
                      borderRadius: "10px",
                      textAlign: "center",
                      fontSize: "0.875rem",
                      fontWeight: "600"
                    }}>
                      App/Website
              </div>

                    {/* 3rd Party Systems */}
                    <div style={{
                      background: "#1e3a8a",
                      color: "white",
                      padding: "15px",
                      borderRadius: "10px",
                      textAlign: "center",
                      fontSize: "0.875rem",
                      fontWeight: "600"
                    }}>
                      3rd Party Systems
                    </div>

                    {/* Sensors */}
              <div style={{
                      background: "#3b82f6",
                      color: "white",
                      padding: "15px",
                      borderRadius: "10px",
                      textAlign: "center",
                      fontSize: "0.875rem",
                      fontWeight: "600"
                    }}>
                      Sensors
                    </div>

                    {/* Cameras */}
                <div style={{
                      background: "#3b82f6",
                      color: "white",
                      padding: "15px",
                      borderRadius: "10px",
                      textAlign: "center",
                      fontSize: "0.875rem",
                      fontWeight: "600"
                    }}>
                      Cameras
                </div>

                    {/* Boom Barriers */}
                    <div style={{
                      background: "#3b82f6",
                      color: "white",
                      padding: "15px",
                      borderRadius: "10px",
                      textAlign: "center",
                      fontSize: "0.875rem",
                      fontWeight: "600"
                    }}>
                      Boom Barriers
              </div>
            </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ================= FIND NEARBY PARKING & BOOK SECTION ================= */}
      <section id="parking-discovery" style={{
        background: "white",
        padding: isMobile ? "60px 20px" : "100px 20px",
        scrollMarginTop: "120px"
      }}>
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto"
        }}>
          {/* Text and Image Layout */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "30px" : "50px",
            alignItems: "center",
            marginBottom: "30px"
          }}>
            {/* Image on Left */}
            <div style={{
              order: isMobile ? 2 : 1
            }}>
              <img 
                src={findNearby} 
                alt="Find Nearby Parking & Book" 
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "20px",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                  display: "block"
                }}
              />
            </div>

            {/* Text on Right */}
            <div style={{
              order: isMobile ? 1 : 2
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px"
              }}>
                <i className="fas fa-mobile-alt" style={{
                  fontSize: isMobile ? "1.75rem" : "2.5rem",
                  color: "#057eff"
                }}></i>
                <h3 style={{
                  fontSize: isMobile ? "1.75rem" : "2.5rem",
                  fontWeight: "700",
                  color: "#111827",
                  margin: 0,
                  lineHeight: "1.2"
                }}>
                  Find. Book. Park.
                </h3>
              </div>

              <p style={{
                fontSize: isMobile ? "1rem" : "1.125rem",
                color: "#4b5563",
                marginBottom: "12px",
                lineHeight: "1.7",
                fontWeight: "500"
              }}>
                One platform. Two powerful benefits.
              </p>

              <p style={{
                fontSize: isMobile ? "0.9375rem" : "1rem",
                color: "#6b7280",
                marginBottom: "24px",
                lineHeight: "1.7"
              }}>
                InstaParkAI's Find. Book. Park. module is designed to deliver a seamless parking experience for users while enabling higher revenue, transparency, and control for parking owners.
              </p>

              {/* More Details Button */}
              <button
                onClick={() => setShowFindNearbyDetails(!showFindNearbyDetails)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "transparent",
                  border: "2px solid #057eff",
                  color: "#057eff",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  fontSize: isMobile ? "0.9375rem" : "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  marginTop: "10px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#057eff";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#057eff";
                }}
              >
                <span>More Details</span>
                <i 
                  className={`fas fa-chevron-${showFindNearbyDetails ? 'up' : 'down'}`}
                  style={{
                    fontSize: "0.875rem",
                    transition: "transform 0.3s ease"
                  }}
                ></i>
              </button>
            </div>
          </div>

          {/* Expandable Content */}
          {showFindNearbyDetails && (
            <div style={{
              marginTop: "40px",
              animation: "fadeIn 0.5s ease-in"
            }}>
              {/* For Parking Users Section */}
              <div style={{
                marginBottom: "60px"
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "24px"
                }}>
                  <i className="fas fa-car" style={{
                    fontSize: isMobile ? "1.5rem" : "2rem",
                    color: "#057eff"
                  }}></i>
                  <h3 style={{
                    fontSize: isMobile ? "1.75rem" : "2.25rem",
                    fontWeight: "700",
                    color: "#111827",
                    margin: 0
                  }}>
                    Find. Book. Park. — For Parking Users
                  </h3>
                </div>
                <p style={{
                  fontSize: isMobile ? "1rem" : "1.125rem",
                  color: "#4b5563",
                  marginBottom: "30px",
                  lineHeight: "1.7",
                  fontWeight: "500"
                }}>
                  Parking made effortless — anytime, anywhere
                </p>
                <p style={{
                  fontSize: isMobile ? "0.9375rem" : "1rem",
                  color: "#6b7280",
                  marginBottom: "30px",
                  lineHeight: "1.7"
                }}>
                  Users can easily discover and book nearby parking spaces through the InstaParkAI app or website, whether for a quick visit or a monthly plan.
                </p>

                <h4 style={{
                  fontSize: isMobile ? "1.25rem" : "1.5rem",
                  fontWeight: "700",
                  color: "#111827",
                  marginBottom: "20px"
                }}>
                  What users experience:
                </h4>

                {/* User Features Grid */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                  gap: "24px",
                  marginBottom: "40px"
                }}>
                  {/* Find Parking Nearby */}
                  <div style={{
                    background: "#f8fafc",
                    padding: "28px",
                    borderRadius: "16px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)"
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "16px"
                    }}>
                      <div style={{
                        width: "40px",
                        height: "40px",
                        background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "1.25rem"
                      }}>
                        <i className="fas fa-search"></i>
                      </div>
                      <h4 style={{
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        color: "#111827",
                        margin: 0
                      }}>
                        Find Parking Nearby
                      </h4>
                    </div>
                    <p style={{
                      fontSize: "0.9375rem",
                      color: "#6b7280",
                      lineHeight: "1.6",
                      margin: 0
                    }}>
                      Search nearby parking locations and view real-time availability instantly.
                    </p>
                  </div>

                  {/* Book Instantly or in Advance */}
                  <div style={{
                    background: "#f8fafc",
                    padding: "28px",
                    borderRadius: "16px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)"
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "16px"
                    }}>
                      <div style={{
                        width: "40px",
                        height: "40px",
                        background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "1.25rem"
                      }}>
                        <i className="fas fa-bolt"></i>
                      </div>
                      <h4 style={{
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        color: "#111827",
                        margin: 0
                      }}>
                        Book Instantly or in Advance
                      </h4>
                    </div>
                    <p style={{
                      fontSize: "0.9375rem",
                      color: "#6b7280",
                      marginBottom: "12px",
                      lineHeight: "1.6"
                    }}>
                      Reserve parking with one tap using:
                    </p>
                    <ul style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      fontSize: "0.875rem",
                      color: "#6b7280"
                    }}>
                      <li style={{ marginBottom: "6px", paddingLeft: "20px", position: "relative" }}>
                        <i className="fas fa-check" style={{
                          position: "absolute",
                          left: 0,
                          color: "#057eff",
                          fontSize: "0.75rem",
                          top: "4px"
                        }}></i>
                        Hourly or daily bookings
                      </li>
                      <li style={{ marginBottom: "6px", paddingLeft: "20px", position: "relative" }}>
                        <i className="fas fa-check" style={{
                          position: "absolute",
                          left: 0,
                          color: "#057eff",
                          fontSize: "0.75rem",
                          top: "4px"
                        }}></i>
                        Monthly passes
                      </li>
                      <li style={{ marginBottom: "6px", paddingLeft: "20px", position: "relative" }}>
                        <i className="fas fa-check" style={{
                          position: "absolute",
                          left: 0,
                          color: "#057eff",
                          fontSize: "0.75rem",
                          top: "4px"
                        }}></i>
                        Advance booking for planned visits
                      </li>
                    </ul>
                  </div>

                  {/* Arrive & Park Easily */}
                  <div style={{
                    background: "#f8fafc",
                    padding: "28px",
                    borderRadius: "16px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)"
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "16px"
                    }}>
                      <div style={{
                        width: "40px",
                        height: "40px",
                        background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "1.25rem"
                      }}>
                        <i className="fas fa-car"></i>
                      </div>
                      <h4 style={{
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        color: "#111827",
                        margin: 0
                      }}>
                        Arrive & Park Easily
                      </h4>
                    </div>
                    <p style={{
                      fontSize: "0.9375rem",
                      color: "#6b7280",
                      lineHeight: "1.6",
                      margin: 0
                    }}>
                      Access parking via QR code, ANPR, or digital validation — no tickets, no queues.
                    </p>
                  </div>

                  {/* Stay Updated in Real Time */}
                  <div style={{
                    background: "#f8fafc",
                    padding: "28px",
                    borderRadius: "16px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)"
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "16px"
                    }}>
                      <div style={{
                        width: "40px",
                        height: "40px",
                        background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "1.25rem"
                      }}>
                        <i className="fas fa-bell"></i>
                      </div>
                      <h4 style={{
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        color: "#111827",
                        margin: 0
                      }}>
                        Stay Updated in Real Time
                      </h4>
                    </div>
                    <p style={{
                      fontSize: "0.9375rem",
                      color: "#6b7280",
                      marginBottom: "12px",
                      lineHeight: "1.6"
                    }}>
                      Receive live notifications for:
                    </p>
                    <ul style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      fontSize: "0.875rem",
                      color: "#6b7280"
                    }}>
                      <li style={{ marginBottom: "6px", paddingLeft: "20px", position: "relative" }}>
                        <i className="fas fa-check" style={{
                          position: "absolute",
                          left: 0,
                          color: "#057eff",
                          fontSize: "0.75rem",
                          top: "4px"
                        }}></i>
                        Booking confirmations
                      </li>
                      <li style={{ marginBottom: "6px", paddingLeft: "20px", position: "relative" }}>
                        <i className="fas fa-check" style={{
                          position: "absolute",
                          left: 0,
                          color: "#057eff",
                          fontSize: "0.75rem",
                          top: "4px"
                        }}></i>
                        Parking reminders
                      </li>
                      <li style={{ marginBottom: "6px", paddingLeft: "20px", position: "relative" }}>
                        <i className="fas fa-check" style={{
                          position: "absolute",
                          left: 0,
                          color: "#057eff",
                          fontSize: "0.75rem",
                          top: "4px"
                        }}></i>
                        Live status updates
                      </li>
                      <li style={{ marginBottom: "6px", paddingLeft: "20px", position: "relative" }}>
                        <i className="fas fa-check" style={{
                          position: "absolute",
                          left: 0,
                          color: "#057eff",
                          fontSize: "0.75rem",
                          top: "4px"
                        }}></i>
                        Expiry alerts
                      </li>
                    </ul>
                  </div>

                  {/* Pay Digitally & Exit Smoothly */}
                  <div style={{
                    background: "#f8fafc",
                    padding: "28px",
                    borderRadius: "16px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)"
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "16px"
                    }}>
                      <div style={{
                        width: "40px",
                        height: "40px",
                        background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "1.25rem"
                      }}>
                        <i className="fas fa-credit-card"></i>
                      </div>
                      <h4 style={{
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        color: "#111827",
                        margin: 0
                      }}>
                        Pay Digitally & Exit Smoothly
                      </h4>
                    </div>
                    <p style={{
                      fontSize: "0.9375rem",
                      color: "#6b7280",
                      lineHeight: "1.6",
                      margin: 0
                    }}>
                      Enjoy secure, cashless payments and automated exit for a smooth parking experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* For Parking Owners Section */}
              <div style={{
                background: "linear-gradient(135deg, #f8fafc 0%, #e5e7eb 100%)",
                padding: isMobile ? "40px 24px" : "50px 40px",
                borderRadius: "20px",
                marginBottom: "40px"
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "24px"
                }}>
                  <i className="fas fa-building" style={{
                    fontSize: isMobile ? "1.5rem" : "2rem",
                    color: "#057eff"
                  }}></i>
                  <h3 style={{
                    fontSize: isMobile ? "1.75rem" : "2.25rem",
                    fontWeight: "700",
                    color: "#111827",
                    margin: 0
                  }}>
                    Find. Book. Park. — For Parking Owners
                  </h3>
                </div>
                <p style={{
                  fontSize: isMobile ? "1rem" : "1.125rem",
                  color: "#4b5563",
                  marginBottom: "30px",
                  lineHeight: "1.7",
                  fontWeight: "500"
                }}>
                  A Revenue & Control Engine for Parking Assets
                </p>
                <p style={{
                  fontSize: isMobile ? "0.9375rem" : "1rem",
                  color: "#6b7280",
                  marginBottom: "30px",
                  lineHeight: "1.7"
                }}>
                  For parking owners, Find. Book. Park. acts as a digital booking and monetization engine that maximizes occupancy, eliminates cash leakage, and provides centralized control.
                </p>

                <h4 style={{
                  fontSize: isMobile ? "1.25rem" : "1.5rem",
                  fontWeight: "700",
                  color: "#111827",
                  marginBottom: "20px"
                }}>
                  What parking owners gain:
                </h4>

                {/* Owner Benefits Grid */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                  gap: "24px",
                  marginBottom: "40px"
                }}>
                  {/* Up to 30% Increase in Revenue */}
                  <div style={{
                    background: "white",
                    padding: "28px",
                    borderRadius: "16px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)"
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "16px"
                    }}>
                      <div style={{
                        width: "40px",
                        height: "40px",
                        background: "linear-gradient(135deg, #10b981, #34d399)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "1.25rem"
                      }}>
                        <i className="fas fa-chart-line"></i>
                      </div>
                      <h4 style={{
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        color: "#111827",
                        margin: 0
                      }}>
                        Up to 30% Increase in Revenue
                      </h4>
                    </div>
                    <ul style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      fontSize: "0.875rem",
                      color: "#6b7280"
                    }}>
                      <li style={{ marginBottom: "8px", paddingLeft: "20px", position: "relative" }}>
                        <i className="fas fa-check" style={{
                          position: "absolute",
                          left: 0,
                          color: "#10b981",
                          fontSize: "0.75rem",
                          top: "4px"
                        }}></i>
                        Higher utilization of idle and underused parking spaces
                      </li>
                      <li style={{ marginBottom: "8px", paddingLeft: "20px", position: "relative" }}>
                        <i className="fas fa-check" style={{
                          position: "absolute",
                          left: 0,
                          color: "#10b981",
                          fontSize: "0.75rem",
                          top: "4px"
                        }}></i>
                        Advance bookings and monthly passes ensure predictable income
                      </li>
                    </ul>
                  </div>

                  {/* Zero Cash Leakage */}
                  <div style={{
                    background: "white",
                    padding: "28px",
                    borderRadius: "16px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)"
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "16px"
                    }}>
                      <div style={{
                        width: "40px",
                        height: "40px",
                        background: "linear-gradient(135deg, #ef4444, #f87171)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "1.25rem"
                      }}>
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <h4 style={{
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        color: "#111827",
                        margin: 0
                      }}>
                        Zero Cash Leakage
                      </h4>
                    </div>
                    <ul style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      fontSize: "0.875rem",
                      color: "#6b7280"
                    }}>
                      <li style={{ marginBottom: "8px", paddingLeft: "20px", position: "relative" }}>
                        <i className="fas fa-check" style={{
                          position: "absolute",
                          left: 0,
                          color: "#ef4444",
                          fontSize: "0.75rem",
                          top: "4px"
                        }}></i>
                        100% digital payments
                      </li>
                      <li style={{ marginBottom: "8px", paddingLeft: "20px", position: "relative" }}>
                        <i className="fas fa-check" style={{
                          position: "absolute",
                          left: 0,
                          color: "#ef4444",
                          fontSize: "0.75rem",
                          top: "4px"
                        }}></i>
                        Automated reconciliation and transparent reporting
                      </li>
                    </ul>
                  </div>

                  {/* Centralized Monitoring & Control */}
                  <div style={{
                    background: "white",
                    padding: "28px",
                    borderRadius: "16px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)"
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "16px"
                    }}>
                      <div style={{
                        width: "40px",
                        height: "40px",
                        background: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "1.25rem"
                      }}>
                        <i className="fas fa-tachometer-alt"></i>
                      </div>
                      <h4 style={{
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        color: "#111827",
                        margin: 0
                      }}>
                        Centralized Monitoring & Control
                      </h4>
                    </div>
                    <ul style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      fontSize: "0.875rem",
                      color: "#6b7280"
                    }}>
                      <li style={{ marginBottom: "8px", paddingLeft: "20px", position: "relative" }}>
                        <i className="fas fa-check" style={{
                          position: "absolute",
                          left: 0,
                          color: "#8b5cf6",
                          fontSize: "0.75rem",
                          top: "4px"
                        }}></i>
                        Live dashboards for occupancy and revenue
                      </li>
                      <li style={{ marginBottom: "8px", paddingLeft: "20px", position: "relative" }}>
                        <i className="fas fa-check" style={{
                          position: "absolute",
                          left: 0,
                          color: "#8b5cf6",
                          fontSize: "0.75rem",
                          top: "4px"
                        }}></i>
                        Centralized visibility across single or multiple locations
                      </li>
                    </ul>
                  </div>

                  {/* Automated Access & Reduced Manpower Dependency */}
                  <div style={{
                    background: "white",
                    padding: "28px",
                    borderRadius: "16px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)"
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "16px"
                    }}>
                      <div style={{
                        width: "40px",
                        height: "40px",
                        background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "1.25rem"
                      }}>
                        <i className="fas fa-cog"></i>
                      </div>
                      <h4 style={{
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        color: "#111827",
                        margin: 0
                      }}>
                        Automated Access & Reduced Manpower Dependency
                      </h4>
                    </div>
                    <ul style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      fontSize: "0.875rem",
                      color: "#6b7280"
                    }}>
                      <li style={{ marginBottom: "8px", paddingLeft: "20px", position: "relative" }}>
                        <i className="fas fa-check" style={{
                          position: "absolute",
                          left: 0,
                          color: "#f59e0b",
                          fontSize: "0.75rem",
                          top: "4px"
                        }}></i>
                        ANPR / QR / RFID-based access control
                      </li>
                      <li style={{ marginBottom: "8px", paddingLeft: "20px", position: "relative" }}>
                        <i className="fas fa-check" style={{
                          position: "absolute",
                          left: 0,
                          color: "#f59e0b",
                          fontSize: "0.75rem",
                          top: "4px"
                        }}></i>
                        Faster entry/exit with minimal manual intervention
                      </li>
                    </ul>
                  </div>

                  {/* Better User Experience = Higher Retention */}
                  <div style={{
                    background: "white",
                    padding: "28px",
                    borderRadius: "16px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                    gridColumn: isMobile ? "1" : "1 / -1"
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "16px"
                    }}>
                      <div style={{
                        width: "40px",
                        height: "40px",
                        background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "1.25rem"
                      }}>
                        <i className="fas fa-smile"></i>
                      </div>
                      <h4 style={{
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        color: "#111827",
                        margin: 0
                      }}>
                        Better User Experience = Higher Retention
                      </h4>
                    </div>
                    <p style={{
                      fontSize: "0.9375rem",
                      color: "#6b7280",
                      lineHeight: "1.6",
                      margin: 0
                    }}>
                      Smoother parking flow leads to repeat usage and long-term demand
                    </p>
                  </div>
                </div>

                {/* Our Core Value Proposition */}
                <div style={{
                  marginTop: "60px",
                  padding: isMobile ? "40px 24px" : "50px 40px",
                  background: "linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)",
                  borderRadius: "20px"
                }}>
                <div style={{
                  textAlign: "center",
                  marginBottom: isMobile ? "40px" : "60px"
                }}>
                  <h3 style={{
                    fontSize: isMobile ? "1.75rem" : "2.25rem",
                    fontWeight: "800",
                    color: "#111827",
                    marginBottom: "24px",
                    lineHeight: "1.2",
                    letterSpacing: "-1px"
                  }}>
                    Our Core Value Proposition
                  </h3>
                  <p style={{
                    fontSize: isMobile ? "1.125rem" : "1.25rem",
                    color: "#6b7280",
                    maxWidth: "900px",
                    margin: "0 auto",
                    lineHeight: "1.7"
                  }}>
                    Why parking owners choose InstaParkAI:
                  </p>
                </div>

                <div style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                  gap: isMobile ? "20px" : "24px",
                  maxWidth: "1200px",
                  margin: "0 auto"
                }}>
                  {[
                    { icon: "fa-money-bill-wave", title: "Zero cash leakage" },
                    { icon: "fa-eye", title: "Full real-time transparency" },
                    { icon: "fa-bolt", title: "Efficient & trained workforce" },
                    { icon: "fa-chart-line", title: "Reduced owner dependency" },
                    { icon: "fa-chart-bar", title: "Guaranteed revenue uplift (up to 30%)" },
                    { icon: "fa-smile", title: "Seamless customer experience" },
                    { icon: "fa-sliders-h", title: "Centralized digital control" },
                    { icon: "fa-user-check", title: "Trained and verified on-ground staff" },
                    { icon: "fa-video", title: "24/7 CCTV monitoring and control" }
                  ].map((item, index) => (
                    <div key={index} style={{
                      background: "white",
                      padding: isMobile ? "32px 24px" : "40px 32px",
                      borderRadius: "16px",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                      border: "1px solid rgba(5, 126, 255, 0.1)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      gap: "16px",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0 8px 30px rgba(5, 126, 255, 0.2)";
                      e.currentTarget.style.borderColor = "#057eff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)";
                      e.currentTarget.style.borderColor = "rgba(5, 126, 255, 0.1)";
                    }}
                  >
                    <div style={{
                      width: "64px",
                      height: "64px",
                      background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "1.75rem"
                    }}>
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <div style={{
                      color: "#1f2937",
                      fontSize: isMobile ? "1rem" : "1.0625rem",
                      fontWeight: 600,
                      lineHeight: "1.5"
                    }}>
                      {item.title}
                    </div>
                  </div>
                  ))}
                </div>
              </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ================= COMPLETE AMC SUPPORT SECTION ================= */}
      <section id="amc-support" style={{
        background: "white",
        padding: isMobile ? "60px 20px" : "100px 20px",
        scrollMarginTop: "120px"
      }}>
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto"
        }}>
          {/* Text and Image Layout */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "30px" : "50px",
            alignItems: "center",
            marginBottom: "30px"
          }}>
            {/* Text on Left */}
            <div style={{
              order: isMobile ? 2 : 1
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px"
              }}>
                <i className="fas fa-tools" style={{
                  fontSize: isMobile ? "1.75rem" : "2.5rem",
                  color: "#057eff"
                }}></i>
                <h3 style={{
                  fontSize: isMobile ? "1.75rem" : "2.5rem",
                  fontWeight: "700",
                  color: "#111827",
                  margin: 0,
                  lineHeight: "1.2"
                }}>
                  Complete AMC Support
                </h3>
              </div>

              <p style={{
                fontSize: isMobile ? "1rem" : "1.125rem",
                color: "#4b5563",
                marginBottom: "24px",
                lineHeight: "1.7"
              }}>
                Comprehensive & Non-Comprehensive maintenance contracts available
              </p>

              <p style={{
                fontSize: isMobile ? "0.9375rem" : "1rem",
                color: "#6b7280",
                marginBottom: "24px",
                lineHeight: "1.7"
              }}>
                Instapark offers end-to-end Annual Maintenance Contracts to ensure uninterrupted, reliable, and high-performance parking operations—powered by technology and on-ground support.
              </p>

              {/* More Details Button */}
              <button
                onClick={() => setShowAMCDetails(!showAMCDetails)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "transparent",
                  border: "2px solid #057eff",
                  color: "#057eff",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  fontSize: isMobile ? "0.9375rem" : "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  marginTop: "10px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#057eff";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#057eff";
                }}
              >
                <span>More Details</span>
                <i 
                  className={`fas fa-chevron-${showAMCDetails ? 'up' : 'down'}`}
                  style={{
                    fontSize: "0.875rem",
                    transition: "transform 0.3s ease"
                  }}
                ></i>
              </button>
            </div>

            {/* Image on Right */}
            <div style={{
              order: isMobile ? 1 : 2
            }}>
              <img 
                src={completeAMC} 
                alt="Complete AMC Support" 
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "20px",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                  display: "block"
                }}
              />
            </div>
          </div>

          {/* Expandable Content */}
          {showAMCDetails && (
            <div style={{
              marginTop: "40px",
              animation: "fadeIn 0.5s ease-in"
            }}>
              {/* AMC Support Overview */}
              <div style={{
                background: "#f8fafc",
                padding: "28px",
                borderRadius: "16px",
                border: "1px solid #e5e7eb",
                marginBottom: "30px"
              }}>
                <h4 style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#111827",
                  marginBottom: "16px"
                }}>
                  AMC Support (Comprehensive & Non-Comprehensive)
                </h4>
                <p style={{
                  fontSize: "0.9375rem",
                  color: "#6b7280",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  Instapark offers end-to-end Annual Maintenance Contracts to ensure uninterrupted, reliable, and high-performance parking operations—powered by technology and on-ground support.
                </p>
              </div>

              {/* Two Column Layout for Comprehensive and Non-Comprehensive */}
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                gap: "24px",
                marginBottom: "30px"
              }}>
                {/* Comprehensive AMC */}
                <div style={{
                  background: "linear-gradient(135deg, #057eff 0%, #6bb6ff 100%)",
                  padding: "28px",
                  borderRadius: "16px",
                  color: "white"
                }}>
                  <h4 style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    marginBottom: "16px"
                  }}>
                    Comprehensive AMC
                  </h4>
                  <p style={{
                    fontSize: "0.9375rem",
                    marginBottom: "20px",
                    opacity: 0.95,
                    lineHeight: "1.6"
                  }}>
                    Ideal for corporates and parking spaces seeking complete peace of mind.
                  </p>
                  <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    fontSize: "0.9375rem",
                    lineHeight: "1.8"
                  }}>
                    {[
                      "Full maintenance of hardware, software, and PMS",
                      "Preventive and breakdown maintenance",
                      "On-ground technician support",
                      "Software updates and system upgrades",
                      "Device replacement and repairs",
                      "Priority support and faster resolution SLAs"
                    ].map((item, idx) => (
                      <li key={idx} style={{
                        marginBottom: "10px",
                        paddingLeft: "24px",
                        position: "relative"
                      }}>
                        <i className="fas fa-check-circle" style={{
                          position: "absolute",
                          left: 0,
                          fontSize: "0.875rem",
                          top: "4px"
                        }}></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div style={{
                    marginTop: "20px",
                    padding: "12px",
                    background: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    fontWeight: "600"
                  }}>
                    Best for: High-footfall parking, corporates, airports, malls, hospitals, and premium properties.
                  </div>
                </div>

                {/* Non-Comprehensive AMC */}
                <div style={{
                  background: "#f8fafc",
                  padding: "28px",
                  borderRadius: "16px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)"
                }}>
                  <h4 style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: "#111827",
                    marginBottom: "16px"
                  }}>
                    Non-Comprehensive AMC
                  </h4>
                  <p style={{
                    fontSize: "0.9375rem",
                    color: "#6b7280",
                    marginBottom: "20px",
                    lineHeight: "1.6"
                  }}>
                    Flexible support for properties with in-house teams or limited requirements.
                  </p>
                  <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    fontSize: "0.9375rem",
                    color: "#4b5563",
                    lineHeight: "1.8"
                  }}>
                    {[
                      "Software and PMS maintenance",
                      "Remote technical support",
                      "Periodic system health checks",
                      "Preventive maintenance guidance",
                      "Paid support for hardware repairs or replacements"
                    ].map((item, idx) => (
                      <li key={idx} style={{
                        marginBottom: "10px",
                        paddingLeft: "24px",
                        position: "relative"
                      }}>
                        <i className="fas fa-check-circle" style={{
                          position: "absolute",
                          left: 0,
                          color: "#057eff",
                          fontSize: "0.875rem",
                          top: "4px"
                        }}></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div style={{
                    marginTop: "20px",
                    padding: "12px",
                    background: "#e5e7eb",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    color: "#4b5563"
                  }}>
                    Best for: Corporate campuses, IT parks, and controlled parking environments.
                  </div>
                </div>
              </div>

              {/* Why Instapark AMC */}
              <div style={{
                background: "linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)",
                padding: "28px",
                borderRadius: "16px",
                border: "1px solid #e5e7eb"
              }}>
                <h4 style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#111827",
                  marginBottom: "20px",
                  textAlign: "center"
                }}>
                  Why Instapark AMC
                </h4>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                  gap: "16px"
                }}>
                  {[
                    "Reduced downtime and operational risk",
                    "Consistent parking experience for users",
                    "Transparent support processes",
                    "Scalable as your parking operations grow"
                  ].map((item, idx) => (
                    <div key={idx} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      fontSize: "0.9375rem",
                      color: "#4b5563"
                    }}>
                      <i className="fas fa-check-circle" style={{
                        color: "#057eff",
                        fontSize: "1.125rem",
                        flexShrink: 0
                      }}></i>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ================= BEYOND PARKING SECTION ================= */}
      <section id="beyond-parking" style={{
        position: "relative",
        padding: isMobile ? "80px 20px" : "120px 20px",
        overflow: "hidden"
      }}>
        {/* Full-width Background Image */}
            <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${userJourney})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0
        }}></div>
        
        {/* Overlay for better readability */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.4)",
          zIndex: 1
        }}></div>

        {/* Content */}
        <div style={{ 
          position: "relative",
          zIndex: 2,
          maxWidth: "1400px", 
          margin: "0 auto"
        }}>
          {/* Header */}
                <div style={{
            textAlign: "center",
            marginBottom: isMobile ? "50px" : "70px"
          }}>
            <h2 style={{
              fontSize: isMobile ? "2.5rem" : "3.5rem",
              fontWeight: 700,
              color: "white",
              marginBottom: "20px",
              lineHeight: "1.1",
              letterSpacing: "-1px",
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)"
            }}>
              Beyond Parking
            </h2>
            <p style={{
              fontSize: isMobile ? "1.125rem" : "1.25rem",
              color: "rgba(255, 255, 255, 0.95)",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.7",
              fontWeight: "400",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)"
            }}>
              We are building future urban infrastructure:
            </p>
            </div>

          {/* Cards Overlaid on Image */}
            <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "24px" : "32px",
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            {[
              {
                id: "instapark",
                title: "InstaPark",
                subtitle: "Core Parking Platform",
                number: "1",
                icon: "fa-parking",
                vision: "Organize, digitize, and optimize urban parking",
                visionIcon: "fa-car",
                description: "InstaPark is the foundation of the InstaParkAI ecosystem, powering smart, connected, and revenue-driven parking operations across cities and commercial spaces.",
                features: [
                  "End-to-end AI-powered parking management",
                  "Real-time parking availability, access control, and guidance",
                  "Live dashboards for occupancy, revenue, and analytics",
                  "Seamless integration with hardware, apps, and cloud systems"
                ],
                result: "Parking operations become transparent, efficient, scalable, and up to 30% more profitable for operators and cities."
              },
              {
                id: "instacharge",
                title: "InstaCharge",
                subtitle: "EV Charging Network",
                number: "2",
                icon: "fa-bolt",
                vision: "Make every parking site EV-ready",
                visionIcon: "fa-bolt",
                description: "InstaCharge integrates smart EV charging stations into parking spaces managed by InstaParkAI.",
                features: [
                  "Seamless EV slot booking, charging & payment from one app",
                  "Real-time charging status and usage monitoring",
                  "Smart analytics for load balancing, power efficiency, and demand forecasting",
                  "Enables partnerships with EV OEMs and renewable energy providers"
                ],
                result: "Parking spaces become future-ready EV hubs."
              },
              {
                id: "instakitchen",
                title: "InstaKitchen",
                subtitle: "Cloud Kitchens at Parking Hubs",
                number: "3",
                icon: "fa-utensils",
                vision: "Merging mobility & food commerce",
                visionIcon: "fa-utensils",
                description: "InstaKitchen transforms prime parking locations into micro food production and delivery hubs.",
                features: [
                  "Plug-and-play cloud kitchen pods at parking hubs",
                  "Targeted for QSRs and food delivery brands needing faster last-mile reach",
                  "IoT-enabled monitoring and shared utilities",
                  "Creates new rental and revenue income for parking owners"
                ],
                result: "Parking spaces evolve into high-value food commerce zones."
              },
              {
                id: "instadarkstore",
                title: "InstaDarkStore",
                subtitle: "Micro Logistics & Storage",
                number: "4",
                icon: "fa-warehouse",
                vision: "Enable same-day city logistics",
                visionIcon: "fa-box",
                description: "InstaDarkStore converts parking real estate into micro-warehouses for quick-commerce and delivery brands.",
                features: [
                  "Localized inventory hubs within city centers",
                  "Ultra-fast delivery (10–15 minutes) enablement",
                  "Secure access, tracking, and operations powered by InstaParkAI",
                  "Fully integrated with the InstaPark digital ecosystem"
                ],
                result: "Parking spaces become last-mile logistics powerhouses."
              }
            ].map((item, index) => (
              <div
                key={index}
                id={item.id}
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  padding: isMobile ? "32px 24px" : "40px 32px",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  transition: "all 0.3s ease",
                  scrollMarginTop: "120px"
                }}
              >
                {/* Header with Number and Title */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px"
                }}>
                  <div style={{
                    width: "56px",
                    height: "56px",
                    background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    flexShrink: 0
                  }}>
                    {item.number}
                  </div>
                  <div>
                    <h3 style={{
                      color: "#111827",
                      fontSize: isMobile ? "1.5rem" : "1.75rem",
                      fontWeight: 700,
                      margin: 0,
                      lineHeight: "1.2"
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      color: "#6b7280",
                      fontSize: isMobile ? "0.875rem" : "1rem",
                      margin: "4px 0 0 0",
                      fontWeight: 500
                    }}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Vision */}
                <div style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "16px",
                  background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
                  borderRadius: "12px",
                  border: "1px solid #bae6fd"
                }}>
                  <i className={`fas ${item.visionIcon}`} style={{
                    fontSize: "1.25rem",
                    color: "#057eff",
                    marginTop: "2px",
                    flexShrink: 0
                  }}></i>
                  <div>
                    <p style={{
                      color: "#111827",
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      margin: 0,
                      lineHeight: "1.5"
                    }}>
                      <strong>Vision:</strong> {item.vision}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p style={{
                  color: "#4b5563",
                  fontSize: isMobile ? "0.9375rem" : "1rem",
                  margin: 0,
                  lineHeight: "1.7"
                }}>
                  {item.description}
                </p>

                {/* What it delivers */}
                <div>
                  <h4 style={{
                    color: "#111827",
                    fontSize: "1rem",
                    fontWeight: 600,
                    marginBottom: "12px"
                  }}>
                    What it delivers:
                  </h4>
                  <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0
                  }}>
                    {item.features.map((feature, idx) => (
                      <li key={idx} style={{
                        fontSize: "0.9375rem",
                        color: "#4b5563",
                        marginBottom: "10px",
                        paddingLeft: "24px",
                        position: "relative",
                        lineHeight: "1.6"
                      }}>
                        <i className="fas fa-check-circle" style={{
                          position: "absolute",
                          left: 0,
                          color: "#057eff",
                          fontSize: "0.875rem",
                          top: "4px"
                        }}></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Result */}
                <div style={{
                  padding: "16px",
                  background: "linear-gradient(135deg, #057eff 0%, #6bb6ff 100%)",
                  borderRadius: "12px",
                  color: "white"
                }}>
                  <p style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    margin: 0,
                    lineHeight: "1.6"
                  }}>
                    <strong>Result:</strong> {item.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BUSINESS MODELS ================= */}
      <section id="business-models" style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)",
        padding: isMobile ? "60px 20px" : "100px 20px",
              }}>
                <div style={{
          maxWidth: "1200px", 
          margin: "0 auto"
        }}>
          <h2 style={{
            fontSize: isMobile ? "2rem" : "2.75rem",
            fontWeight: "700",
                  color: "#1f2937",
            marginBottom: "40px",
            textAlign: "center",
            lineHeight: "1.2"
          }}>
            Business Models
          </h2>

          {/* Business Model Cards */}
            <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "24px" : "32px"
          }}>
            <div 
              id="saas-model"
              style={{
              background: "white",
              borderRadius: "20px",
              padding: isMobile ? "30px 20px" : "40px 32px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
              border: "1px solid rgba(0, 0, 0, 0.05)",
                scrollMarginTop: "120px"
            }}>
              <div style={{
                fontSize: "2.5rem",
                marginBottom: "16px"
              }}>
                💼
              </div>
              <h3 style={{
                color: "#1f2937",
                fontSize: isMobile ? "1.5rem" : "1.75rem",
                fontWeight: "600",
                marginBottom: "16px"
              }}>
                A) SaaS Model
              </h3>
              <p style={{
                color: "#6b7280",
                fontSize: isMobile ? "1rem" : "1.125rem",
                lineHeight: "1.6",
                margin: 0
              }}>
                Subscription-based PMS for operators with existing manpower.
              </p>
            </div>

            <div 
              id="managed-model"
              style={{
              background: "white",
              borderRadius: "20px",
              padding: isMobile ? "30px 20px" : "40px 32px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
              border: "1px solid rgba(0, 0, 0, 0.05)",
                scrollMarginTop: "120px"
            }}>
              <div style={{
                fontSize: "2.5rem",
                marginBottom: "16px"
              }}>
                🤝
              </div>
              <h3 style={{
                color: "#1f2937",
                fontSize: isMobile ? "1.5rem" : "1.75rem",
                fontWeight: "600",
                marginBottom: "16px"
              }}>
                B) Managed Parking Model
              </h3>
              <p style={{
                color: "#6b7280",
                fontSize: isMobile ? "1rem" : "1.125rem",
                lineHeight: "1.6",
                margin: 0
              }}>
                End-to-end operations with revenue sharing or fixed payouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO WE SERVE ================= */}
      <section id="who-we-serve" style={{
        background: "white",
        padding: isMobile ? "60px 20px" : "100px 20px",
      }}>
              <div style={{
          maxWidth: "1200px", 
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h2 style={{
            fontSize: isMobile ? "2rem" : "2.75rem",
            fontWeight: "700",
            color: "#1f2937",
            marginBottom: "40px",
            lineHeight: "1.2"
          }}>
            Who We Serve
          </h2>

                <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: isMobile ? "20px" : "24px"
          }}>
            {[
              { icon: "fa-store", title: "Malls & retail complexes" },
              { icon: "fa-hospital", title: "Hospitals & hotels" },
              { icon: "fa-plane", title: "Airports & toll plazas" },
              { icon: "fa-building", title: "IT parks & campuses" },
              { icon: "fa-home", title: "Residential societies" },
              { icon: "fa-city", title: "Smart cities" }
            ].map((item, index) => (
              <div key={index} style={{
                background: "#f8fafc",
                borderRadius: "16px",
                padding: isMobile ? "30px 20px" : "40px 32px",
                textAlign: "center",
                border: "1px solid #e5e7eb"
              }}>
                <div style={{
                  fontSize: isMobile ? "2.5rem" : "3rem",
                  marginBottom: "16px",
                  color: "#057eff"
                }}>
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3 style={{
                  color: "#1f2937",
                  fontSize: isMobile ? "1.1rem" : "1.25rem",
                  fontWeight: "600",
                  margin: 0
                }}>
                  {item.title}
                </h3>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section id="cta" style={{
        background: "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
        color: "white",
        padding: isMobile ? "60px 20px" : "80px 20px",
        textAlign: "center"
      }}>
        <div style={{ 
          maxWidth: "800px", 
          margin: "0 auto"
        }}>
          <h2 style={{
            fontSize: isMobile ? "2rem" : "2.5rem",
            fontWeight: "700",
            marginBottom: "20px",
            lineHeight: "1.2"
          }}>
            Ready to Upgrade Your Parking?
          </h2>
          <p style={{
            fontSize: isMobile ? "1rem" : "1.125rem",
            marginBottom: "40px",
            opacity: 0.9,
            lineHeight: "1.6"
          }}>
            Get started with our comprehensive AI-powered parking solutions
          </p>
          
          {/* Sales and Support Cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "24px" : "32px",
            maxWidth: "900px",
            margin: "0 auto"
          }}>
            {/* Sales Card */}
            <div style={{
              background: "rgba(255, 255, 255, 0.95)",
              borderRadius: "20px",
              padding: isMobile ? "32px 24px" : "40px 32px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              textAlign: "center",
              transition: "all 0.3s ease"
            }}>
              <div style={{
                width: "64px",
                height: "64px",
                background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                color: "white",
                fontSize: "1.75rem"
              }}>
                <i className="fas fa-handshake"></i>
              </div>
              <h3 style={{
                color: "#111827",
                fontSize: isMobile ? "1.5rem" : "1.75rem",
                fontWeight: 700,
                marginBottom: "16px",
                lineHeight: "1.2"
              }}>
                Sales
              </h3>
              <p style={{
                color: "#6b7280",
                fontSize: "0.9375rem",
                marginBottom: "24px",
                lineHeight: "1.6"
              }}>
                Get in touch with our sales team for inquiries and partnerships
              </p>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px"
              }}>
                <a
                  href="mailto:sales@instaparkai.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                    color: "white",
                    padding: "14px 20px",
                    borderRadius: "10px",
                    fontWeight: 600,
                    textDecoration: "none",
                    fontSize: "0.9375rem",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(5, 126, 255, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <i className="fas fa-envelope"></i>
                  sales@instaparkai.com
                </a>
                <a
                  href="tel:+919353240270"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    background: "transparent",
                    color: "#057eff",
                    padding: "14px 20px",
                    borderRadius: "10px",
                    fontWeight: 600,
                    textDecoration: "none",
                    fontSize: "0.9375rem",
                    border: "2px solid #057eff",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#057eff";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#057eff";
                  }}
                >
                  <i className="fas fa-phone"></i>
                  +91 9353240270
                </a>
              </div>
            </div>

            {/* Support Card */}
            <div style={{
              background: "rgba(255, 255, 255, 0.95)",
              borderRadius: "20px",
              padding: isMobile ? "32px 24px" : "40px 32px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              textAlign: "center",
              transition: "all 0.3s ease"
            }}>
              <div style={{
                width: "64px",
                height: "64px",
                background: "linear-gradient(135deg, #10b981, #059669)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                color: "white",
                fontSize: "1.75rem"
              }}>
                <i className="fas fa-headset"></i>
              </div>
              <h3 style={{
                color: "#111827",
                fontSize: isMobile ? "1.5rem" : "1.75rem",
                fontWeight: 700,
                marginBottom: "16px",
                lineHeight: "1.2"
              }}>
                Support
              </h3>
              <p style={{
                color: "#6b7280",
                fontSize: "0.9375rem",
                marginBottom: "24px",
                lineHeight: "1.6"
              }}>
                Need help? Our support team is here to assist you
              </p>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px"
              }}>
                <a
                  href="mailto:support@instaparkai.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    background: "linear-gradient(135deg, #10b981, #059669)",
                    color: "white",
                    padding: "14px 20px",
                    borderRadius: "10px",
                    fontWeight: 600,
                    textDecoration: "none",
                    fontSize: "0.9375rem",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(16, 185, 129, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <i className="fas fa-envelope"></i>
                  support@instaparkai.com
                </a>
                <a
                  href="tel:+919353240270"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    background: "transparent",
                    color: "#10b981",
                    padding: "14px 20px",
                    borderRadius: "10px",
                    fontWeight: 600,
                    textDecoration: "none",
                    fontSize: "0.9375rem",
                    border: "2px solid #10b981",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#10b981";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#10b981";
                  }}
                >
                  <i className="fas fa-phone"></i>
                  +91 9353240270
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Dialog */}
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
          onClick={() => setShowDialog(false)}
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
              onClick={() => setShowDialog(false)}
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
                margin: "0 auto 16px"
              }}>
                <img 
                  src={instaParkLogo} 
                  alt="InstaParkAI Logo" 
                  style={{
                    height: "60px", 
                    width: "auto"
                  }}
                />
              </div>
              <h2 style={{ 
                color: "#1f2937", 
                fontSize: isMobile ? "1.3rem" : "1.5rem", 
                fontWeight: "700", 
                marginBottom: "8px" 
              }}>
                Service Inquiry
              </h2>
              <p style={{ 
                color: "#6b7280", 
                marginBottom: "25px",
                lineHeight: "1.5",
                fontSize: isMobile ? "0.9rem" : "1rem"
              }}>
                Tell us which service you're interested in
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
                placeholder="Mobile Number *"
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
                  marginBottom: "16px",
                  fontFamily: "inherit"
                }}
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: "2px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "16px",
                  outline: "none",
                  fontFamily: "inherit",
                  background: "white"
                }}
              >
                <option value="">Select Service *</option>
                {services.map((service, idx) => (
                  <option key={idx} value={service.title}>{service.title}</option>
                ))}
              </select>
            </div>

            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <button
                onClick={handleSubmit}
                style={{
                  background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                  color: "white",
                  padding: "14px 32px",
                  borderRadius: "8px",
                  border: "none",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  width: "100%",
                  fontFamily: "inherit"
                }}
              >
                Get Service Details
              </button>
            </div>

            {formData.name && formData.mobile && formData.email && formData.service && (
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
                  Contact us for {formData.service}:
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
                    💬 WhatsApp
                  </a>
                  <a
                    href={generateCallLink()}
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
                    📞 Call Now
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
                    📧 Email Us
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
