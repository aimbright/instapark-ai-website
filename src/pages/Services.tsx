import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../components/SEO";
import howItWorksProviders from '../assets/How it works -For Parking Providers chart.png';
import userJourney from '../assets/user joureny.png';
import instaParkLogo from '../assets/InstaParkAI plain BG logo.png';
import parkingOperatorImage from '../assets/Parking Operator with Manpower & Technology.png';
import aiParkingManagementImage from '../assets/Parking Management System with Latest AI Technology.png';
import parkingDiscoveryImage from '../assets/Find Nearby Parking & Book for One-Time or Monthly Use.png';
import amcSupportImage from '../assets/Complete AMC Support.png';
import bottomImage from '../assets/image.png';

const Services: React.FC = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [expandedServiceIndex, setExpandedServiceIndex] = useState<number | null>(null);
  const [selectedServiceDialog, setSelectedServiceDialog] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    service: ''
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Check for dialog query parameter and open dialog
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const dialogIndex = searchParams.get('dialog');
    if (dialogIndex !== null) {
      const index = parseInt(dialogIndex, 10);
      if (index >= 0 && index <= 3) {
        setSelectedServiceDialog(index);
        // Remove query parameter from URL
        window.history.replaceState({}, '', '/services');
      }
    }
  }, [location.search]);

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
    return `https://wa.me/919845802901?text=${encodeURIComponent(message)}`;
  };

  const generateCallLink = () => {
    return `tel:+919845802901`;
  };

  const generateEmailLink = () => {
    const subject = `InstaPark.AI Service Inquiry - ${formData.service}`;
    const body = `Hello,\n\nMy name is ${formData.name} and I'm interested in ${formData.service} service.\n\nContact Details:\nEmail: ${formData.email}\nPhone: ${formData.mobile}\n\nPlease provide more information about this service.`;
    return `mailto:support@instaparkai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const services = [
    {
      id: "end-to-end-operations",
      icon: "🏢",
      title: "End-to-End Parking Operations",
      subtitle: "Manpower & Technology",
      description: "We operate parking locations with trained on-ground manpower supported by modern technology to ensure smooth, efficient, and reliable parking operations.",
      color: "linear-gradient(135deg, #057eff, #6bb6ff)",
      image: parkingOperatorImage
    },
    {
      id: "ai-parking-management",
      icon: "🤖",
      title: "AI-Powered Parking Management",
      subtitle: "Smart Systems",
      description: "Advanced parking management solutions using the latest AI technologies for real-time monitoring, control, and optimization of parking spaces.",
      color: "linear-gradient(135deg, #F87171, #EF4444)",
      image: aiParkingManagementImage
    },
    {
      id: "parking-discovery",
      icon: "📍",
      title: "Parking Discovery & Booking",
      subtitle: "One-Time & Monthly",
      description: "Find available parking spaces across cities and book your slot easily for one-time or monthly use through our digital platforms.",
      color: "linear-gradient(135deg, #4ADE80, #22C55E)",

      image: parkingDiscoveryImage
    },
    {
      id: "amc-support",
      icon: "🔧",
      title: "AMC & Support Services",
      subtitle: "Complete Maintenance",
      description: "Complete Annual Maintenance Contract (AMC) support, including both comprehensive and non-comprehensive coverage, ensuring uninterrupted operations and long-term reliability.",
      color: "linear-gradient(135deg, #F59E0B, #D97706)",
      image: amcSupportImage
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

      {/* ================= SERVICES GRID ================= */}
      <section id="services-grid" style={{
        background: "white",
        padding: isMobile ? "120px 24px 60px" : "160px 20px 100px",
        position: "relative"
      }}>
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto"
        }}>
          <div style={{
            textAlign: "center",
            marginBottom: isMobile ? "48px" : "72px"
          }}>
            <div style={{
              marginBottom: "24px",
              display: "flex",
              justifyContent: "center"
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
            <h2 style={{
              fontSize: isMobile ? "2.5rem" : "3rem",
              fontWeight: "800",
              color: "#111827",
              marginBottom: "20px",
              lineHeight: "1.1"
            }}>
             Comprehensive{" "}
              <span style={{ 
                background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
               backgroundClip: "text",
               display: "inline-block"
             }}>AI-Driven Parking Solutions,</span>{" "}
             Tailored for Every Parking Need
            </h2>
            <p style={{
              fontSize: isMobile ? "1.125rem" : "1.25rem",
              color: "#6b7280",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6"
            }}>
              End-to-end AI-powered parking management services designed for businesses, cities, and commercial establishments
            </p>
          </div>

          {/* Services Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "32px" : "40px",
            marginBottom: isMobile ? "48px" : "72px"
          }}>
            {services.map((service, index) => (
              <div 
                key={index}
                id={service.id}
                onClick={() => {
                  setSelectedServiceDialog(index);
                }}
                style={{
                  background: "white",
                  borderRadius: "24px",
                  padding: isMobile ? "20px" : "24px",
                  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
                  border: "1px solid rgba(229, 231, 235, 0.8)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  scrollMarginTop: "120px",
                  cursor: "pointer",
                  transform: "translateY(0)",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 16px 48px rgba(5, 126, 255, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 24px rgba(0, 0, 0, 0.06)";
                }}
              >
                {/* Decorative corner */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "60px",
                  height: "60px",
                  background: "linear-gradient(135deg, transparent 50%, rgba(5, 126, 255, 0.05) 50%)",
                  borderBottomLeftRadius: "24px"
                }}></div>

                <div style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: isMobile ? "16px" : "20px",
                  marginBottom: "16px"
                }}>
                <div style={{
                    width: isMobile ? "60px" : "72px",
                    height: isMobile ? "60px" : "72px",
                  background: service.color,
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                    fontSize: isMobile ? "1.75rem" : "2rem",
                    color: "white",
                    flexShrink: 0,
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)"
                }}>
                  {service.icon}
                </div>
                  <div style={{ flex: 1 }}>
                <h3 style={{
                      color: "#111827",
                      fontSize: isMobile ? "1.375rem" : "1.5rem",
                      fontWeight: "700",
                      marginBottom: "4px",
                      lineHeight: "1.3"
                }}>
                  {service.title}
                </h3>
                <p style={{
                  color: "#6b7280",
                      fontSize: isMobile ? "0.875rem" : "1rem",
                      fontWeight: "500",
                      margin: 0,
                      opacity: 0.8
                }}>
                  {service.subtitle}
                </p>
                  </div>
                </div>
                
                <div style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                  marginTop: "auto",
                  position: "relative"
                }}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    style={{
                      width: "100%",
                      height: isMobile ? "320px" : "400px",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.3s ease"
                    }}
                  />
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end"
                  }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedServiceDialog(index);
                      }}
                      style={{
                        background: service.color,
                        color: "white",
                        padding: isMobile ? "10px 20px" : "12px 28px",
                        borderRadius: "10px",
                    fontWeight: "600",
                        border: "none",
                        cursor: "pointer",
                        fontSize: isMobile ? "0.9rem" : "1rem",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                        whiteSpace: "nowrap"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
                      }}
                    >
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expanded Service Details */}
          {expandedServiceIndex !== null && (
            <div style={{
              background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
              borderRadius: "24px",
              padding: isMobile ? "32px" : "48px",
              boxShadow: "0 20px 60px rgba(5, 126, 255, 0.1)",
              border: "1px solid rgba(5, 126, 255, 0.1)",
              marginTop: "32px",
              animation: "fadeIn 0.4s ease"
            }}>
              {expandedServiceIndex === 0 && (
                <div>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "32px"
                  }}>
                    <div style={{
                      width: "64px",
                      height: "64px",
                      background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2rem",
                      color: "white"
                    }}>
                      🏢
                  </div>
                    <div>
                      <h3 style={{
                        fontSize: isMobile ? "1.75rem" : "2rem",
                        fontWeight: "800",
                        color: "#111827",
                        marginBottom: "4px",
                        lineHeight: "1.2"
                      }}>
                        End-to-End Parking Operations
                      </h3>
                      <p style={{
                        color: "#6b7280",
                        fontSize: "1.125rem"
                      }}>
                        Complete parking management with professional manpower and advanced technology
                      </p>
                    </div>
                  </div>

                  <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                    gap: "32px"
                  }}>
                    {[
                      {
                        title: "Complete Operational Ownership",
                        description: "We handle everything from daily vehicle movement to compliance reporting. Our tech-enabled approach replaces manual processes with efficient systems.",
                        features: ["On-ground parking operations", "Staff deployment & supervision", "Technology implementation", "Digital payments & reporting"]
                      },
                      {
                        title: "Professional Manpower & Training",
                        description: "Our teams undergo rigorous screening and training to deliver smooth, customer-friendly operations.",
                        features: ["Background verification", "PMS & payment training", "Customer service skills", "Performance monitoring"]
                      },
                      {
                        title: "Technology-Driven Control",
                        description: "Real-time visibility and control across all parking sites with advanced monitoring systems.",
                        features: ["Live occupancy tracking", "Automated entry/exit logs", "Centralized dashboards", "Daily analytics reports"]
                      },
                      {
                        title: "End-to-End Management",
                        description: "Covering the entire parking lifecycle from assessment to optimization.",
                        features: ["Site assessment", "Infrastructure deployment", "Daily operations", "Performance scaling"]
                      }
                    ].map((item, idx) => (
                      <div key={idx} style={{
                        background: "white",
                        borderRadius: "16px",
                        padding: "24px",
                        border: "1px solid rgba(229, 231, 235, 0.8)"
                      }}>
                        <h4 style={{
                          fontSize: "1.25rem",
                          fontWeight: "700",
                          color: "#111827",
                          marginBottom: "12px"
                        }}>
                          {item.title}
                        </h4>
                        <p style={{
                          color: "#6b7280",
                          marginBottom: "16px",
                          lineHeight: "1.6"
                        }}>
                          {item.description}
                        </p>
                  <ul style={{
                    color: "#6b7280",
                    paddingLeft: "20px",
                    margin: 0,
                          listStyleType: "none"
                        }}>
                          {item.features.map((feature, i) => (
                            <li key={i} style={{
                              marginBottom: "8px",
                              display: "flex",
                              alignItems: "center",
                              gap: "8px"
                            }}>
                              <span style={{
                                width: "6px",
                                height: "6px",
                                background: "#057eff",
                                borderRadius: "50%"
                              }}></span>
                              {feature}
                            </li>
                    ))}
                  </ul>
              </div>
            ))}
          </div>
                </div>
              )}

              {/* Other service details would go here with similar structure */}
              {expandedServiceIndex !== 0 && (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{
                    fontSize: "3rem",
                    marginBottom: "20px"
                  }}>
                    {services[expandedServiceIndex].icon}
                  </div>
                  <h3 style={{
                    fontSize: isMobile ? "1.75rem" : "2rem",
                    fontWeight: "800",
                    color: "#111827",
                    marginBottom: "16px"
                  }}>
                    {services[expandedServiceIndex].title}
                  </h3>
                  <p style={{
                    color: "#6b7280",
                    fontSize: "1.125rem",
                    maxWidth: "600px",
                    margin: "0 auto",
                    lineHeight: "1.7"
                  }}>
                    Detailed information about {services[expandedServiceIndex].title.toLowerCase()}. Contact us to learn more about this service.
                  </p>
                  <button
                    onClick={() => setShowDialog(true)}
                    style={{
                      background: services[expandedServiceIndex].color,
                      color: "white",
                      padding: "12px 28px",
                      borderRadius: "10px",
                      fontWeight: "600",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "1rem",
                      marginTop: "24px",
                      transition: "transform 0.3s ease"
                    }}
                  >
                    Get Service Details
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Bottom Image */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop: isMobile ? "60px" : "80px"
          }}>
            <img 
              src={bottomImage} 
              alt="Services" 
              style={{
                width: "100%",
                maxWidth: "1200px",
                height: "auto",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
              }}
            />
          </div>
        </div>
      </section>

      {/* ================= BEYOND PARKING SECTION ================= */}
      <section id="beyond-parking" style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        padding: isMobile ? "80px 24px" : "120px 20px",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundImage: `url(${userJourney})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.2"
        }}></div>
        
        <div style={{ 
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px", 
          margin: "0 auto"
        }}>
          <div style={{
            textAlign: "center",
            marginBottom: isMobile ? "60px" : "80px"
          }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px",
              padding: "8px 20px",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "50px"
            }}>
              <span style={{
                width: "8px",
                height: "8px",
                background: "#60a5fa",
                borderRadius: "50%"
              }}></span>
              <span style={{
                fontSize: "0.875rem",
                fontWeight: "600",
                color: "#60a5fa",
                letterSpacing: "0.05em"
              }}>
                FUTURE VISION
              </span>
            </div>
            <h2 style={{
              fontSize: isMobile ? "2.5rem" : "3rem",
              fontWeight: "800",
              color: "white",
              marginBottom: "20px",
              lineHeight: "1.1"
            }}>
              Beyond Parking:<br />
              Building Urban Infrastructure
            </h2>
            <p style={{
              fontSize: isMobile ? "1.125rem" : "1.25rem",
              color: "rgba(255, 255, 255, 0.8)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6"
            }}>
              Expanding our platform to create integrated urban mobility solutions
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "24px" : "32px"
          }}>
            {[
              {
                id: "instapark",
                title: "InstaPark", 
                description: "Core parking management platform",
                icon: "🏢",
                number: "01"
              },
              {
                id: "instacharge",
                title: "InstaCharge", 
                description: "EV charging network integration",
                icon: "⚡",
                number: "02"
              },
              { 
                id: "instakitchen",
                title: "InstaKitchen", 
                description: "Cloud kitchens at parking hubs",
                icon: "🍽️",
                number: "03"
              },
              { 
                id: "instadarkstore",
                title: "InstaDarkStore", 
                description: "Micro-logistics & storage solutions",
                icon: "📦",
                number: "04"
              }
            ].map((item, index) => (
              <div
                key={index}
                id={item.id}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "24px",
                  padding: "32px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                }}
              >
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginBottom: "20px"
                }}>
                  <div style={{
                    width: "64px",
                    height: "64px",
                    background: "linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(59, 130, 246, 0.1))",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem"
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}>
                  <h3 style={{ 
                        color: "white",
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        margin: 0
                  }}>
                    {item.title}
                  </h3>
                      <span style={{
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        color: "rgba(255, 255, 255, 0.6)"
                      }}>
                        {item.number}
                      </span>
                </div>
                <p style={{ 
                      color: "rgba(255, 255, 255, 0.7)",
                      margin: "8px 0 0 0",
                      fontSize: "1rem"
                    }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BUSINESS MODELS ================= */}
      <section id="business-models" style={{
        background: "white",
        padding: isMobile ? "80px 24px" : "120px 20px",
      }}>
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto"
        }}>
          <div style={{
            textAlign: "center",
            marginBottom: isMobile ? "60px" : "80px"
          }}>
            <h2 style={{
              fontSize: isMobile ? "2.5rem" : "3rem",
              fontWeight: "800",
              color: "#111827",
              marginBottom: "20px",
              lineHeight: "1.1"
            }}>
              Flexible Business Models
          </h2>
            <p style={{
              fontSize: isMobile ? "1.125rem" : "1.25rem",
              color: "#6b7280",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6"
            }}>
              Choose the model that fits your operational needs
            </p>
          </div>

          <div style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: isMobile ? "60px" : "80px"
          }}>
            <div style={{
              background: "white",
              borderRadius: "24px",
              padding: "32px",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
              border: "1px solid rgba(229, 231, 235, 0.8)",
              maxWidth: "1000px",
              width: "100%"
            }}>
              <img 
                src={howItWorksProviders} 
                alt="How It Works - For Parking Providers" 
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  display: "block"
                }}
              />
            </div>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "24px" : "32px"
          }}>
            <div 
              id="saas-model"
              style={{
                background: "linear-gradient(135deg, #f8fafc, #ffffff)",
                borderRadius: "20px",
                padding: "40px 32px",
                border: "2px solid #e5e7eb",
                position: "relative",
                overflow: "hidden"
              }}>
              <div style={{
                fontSize: "2.5rem",
                marginBottom: "24px"
              }}>
                💼
              </div>
              <h3 style={{
                color: "#111827",
                fontSize: "1.5rem",
                fontWeight: "700",
                marginBottom: "16px"
              }}>
                A) SaaS Model
              </h3>
              <p style={{
                color: "#6b7280",
                fontSize: "1.125rem",
                lineHeight: "1.6",
                marginBottom: "24px"
              }}>
                Subscription-based Parking Management System for operators with existing manpower.
              </p>
              <ul style={{
                color: "#6b7280",
                paddingLeft: "0",
                margin: "0",
                listStyle: "none"
              }}>
                <li style={{
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  <span style={{
                    width: "6px",
                    height: "6px",
                    background: "#057eff",
                    borderRadius: "50%"
                  }}></span>
                  Monthly/Annual subscription
                </li>
                <li style={{
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  <span style={{
                    width: "6px",
                    height: "6px",
                    background: "#057eff",
                    borderRadius: "50%"
                  }}></span>
                  Full feature access
                </li>
                <li style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  <span style={{
                    width: "6px",
                    height: "6px",
                    background: "#057eff",
                    borderRadius: "50%"
                  }}></span>
                  Regular updates & support
                </li>
              </ul>
            </div>

            <div 
              id="managed-model"
              style={{
                background: "linear-gradient(135deg, #f8fafc, #ffffff)",
                borderRadius: "20px",
                padding: "40px 32px",
                border: "2px solid #e5e7eb",
                position: "relative",
                overflow: "hidden"
              }}>
              <div style={{
                fontSize: "2.5rem",
                marginBottom: "24px"
              }}>
                🤝
              </div>
              <h3 style={{
                color: "#111827",
                fontSize: "1.5rem",
                fontWeight: "700",
                marginBottom: "16px"
              }}>
                B) Managed Parking Model
              </h3>
              <p style={{
                color: "#6b7280",
                fontSize: "1.125rem",
                lineHeight: "1.6",
                marginBottom: "24px"
              }}>
                End-to-end operations with revenue sharing or fixed payouts.
              </p>
              <ul style={{
                color: "#6b7280",
                paddingLeft: "0",
                margin: "0",
                listStyle: "none"
              }}>
                <li style={{
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  <span style={{
                    width: "6px",
                    height: "6px",
                    background: "#7c3aed",
                    borderRadius: "50%"
                  }}></span>
                  Complete operational takeover
                </li>
                <li style={{
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  <span style={{
                    width: "6px",
                    height: "6px",
                    background: "#7c3aed",
                    borderRadius: "50%"
                  }}></span>
                  Manpower + Technology
                </li>
                <li style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  <span style={{
                    width: "6px",
                    height: "6px",
                    background: "#7c3aed",
                    borderRadius: "50%"
                  }}></span>
                  Revenue sharing model
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO WE SERVE ================= */}
      <section id="who-we-serve" style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)",
        padding: isMobile ? "80px 24px" : "120px 20px",
      }}>
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto"
        }}>
          <div style={{
            textAlign: "center",
            marginBottom: isMobile ? "60px" : "80px"
        }}>
          <h2 style={{
              fontSize: isMobile ? "2.5rem" : "3rem",
              fontWeight: "800",
              color: "#111827",
              marginBottom: "20px",
              lineHeight: "1.1"
            }}>
              Trusted By Industry Leaders
          </h2>
            <p style={{
              fontSize: isMobile ? "1.125rem" : "1.25rem",
              color: "#6b7280",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6"
            }}>
              Serving diverse industries with our parking solutions
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
            gap: isMobile ? "20px" : "24px"
          }}>
            {[
              { icon: "🏢", title: "Malls & Retail Complexes", color: "#3B82F6" },
              { icon: "🏥", title: "Hospitals & Hotels", color: "#8B5CF6" },
              { icon: "✈️", title: "Airports & Toll Plazas", color: "#057eff" },
              { icon: "🏭", title: "IT Parks & Campuses", color: "#F59E0B" },
              { icon: "🏘️", title: "Residential Societies", color: "#10B981" },
              { icon: "🌆", title: "Smart Cities", color: "#EF4444" }
            ].map((item, index) => (
              <div key={index} style={{
                background: "white",
                borderRadius: "20px",
                padding: isMobile ? "32px 20px" : "40px 32px",
                textAlign: "center",
                border: "2px solid rgba(229, 231, 235, 0.8)",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.borderColor = item.color + "20";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(229, 231, 235, 0.8)";
              }}>
                <div style={{
                  fontSize: isMobile ? "3rem" : "3.5rem",
                  marginBottom: "24px"
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  color: "#111827",
                  fontSize: isMobile ? "1.125rem" : "1.25rem",
                  fontWeight: "600",
                  margin: 0,
                  lineHeight: "1.4"
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
        background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
        padding: isMobile ? "80px 24px" : "120px 20px",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Decorative elements */}
        <div style={{
          position: "absolute",
          top: "0",
          right: "0",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(5, 126, 255, 0.15) 0%, transparent 70%)",
          borderRadius: "50%"
        }}></div>
        
        <div style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
          borderRadius: "50%"
        }}></div>

        <div style={{ 
          maxWidth: "800px", 
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          textAlign: "center"
        }}>
          <div style={{
            marginBottom: "40px"
          }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "24px",
              padding: "8px 20px",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "50px"
            }}>
              <span style={{
                width: "8px",
                height: "8px",
                background: "#60a5fa",
                borderRadius: "50%"
              }}></span>
              <span style={{
                fontSize: "0.875rem",
                fontWeight: "600",
                color: "#60a5fa",
                letterSpacing: "0.05em"
              }}>
                GET STARTED
              </span>
            </div>
            
          <h2 style={{
              fontSize: isMobile ? "2.5rem" : "3rem",
              fontWeight: "800",
              color: "white",
              marginBottom: "24px",
              lineHeight: "1.1"
            }}>
              Ready to Transform<br />Your Parking Operations?
          </h2>
            
          <p style={{
              fontSize: isMobile ? "1.125rem" : "1.25rem",
              color: "rgba(255, 255, 255, 0.8)",
              marginBottom: "40px",
            lineHeight: "1.6"
          }}>
              Get started with our comprehensive AI-powered parking solutions today
          </p>
          </div>

          <div style={{ 
            display: "flex", 
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center", 
            gap: "16px",
            marginBottom: "40px"
          }}>
            <button
              onClick={() => setShowDialog(true)}
              style={{
                background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                color: "white",
                padding: isMobile ? "16px 32px" : "18px 40px",
                borderRadius: "12px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                fontSize: isMobile ? "1rem" : "1.125rem",
                transition: "all 0.3s ease",
                flex: isMobile ? "none" : "1",
                maxWidth: isMobile ? "100%" : "300px",
                boxShadow: "0 8px 24px rgba(5, 126, 255, 0.3)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(5, 126, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(5, 126, 255, 0.3)";
              }}
            >
              🚀 Get Free Consultation
            </button>
            
            <div style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "16px",
              flex: isMobile ? "none" : "1",
              maxWidth: isMobile ? "100%" : "400px"
            }}>
            <a
              href="tel:+919845802901"
              style={{
                  background: "rgba(255, 255, 255, 0.1)",
                color: "white",
                  padding: isMobile ? "16px 32px" : "18px 32px",
                  borderRadius: "12px",
                  fontWeight: "600",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                cursor: "pointer",
                  fontSize: isMobile ? "1rem" : "1.125rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
                  display: "flex",
                alignItems: "center",
                justifyContent: "center",
                  gap: "10px",
                  flex: "1"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                📞 Call Now
              </a>
              
            <a
              href="mailto:support@instaparkai.com"
              style={{
                  background: "rgba(255, 255, 255, 0.1)",
                color: "white",
                  padding: isMobile ? "16px 32px" : "18px 32px",
                  borderRadius: "12px",
                  fontWeight: "600",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                cursor: "pointer",
                  fontSize: isMobile ? "1rem" : "1.125rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
                  display: "flex",
                alignItems: "center",
                justifyContent: "center",
                  gap: "10px",
                  flex: "1"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                📧 Email Us
              </a>
            </div>
          </div>

          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            flexWrap: "wrap",
            marginTop: "40px",
            paddingTop: "40px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}>
              <div style={{
                width: "40px",
                height: "40px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.25rem"
              }}>
                ⚡
              </div>
              <div>
                <div style={{
                  fontSize: "0.875rem",
                  color: "rgba(255, 255, 255, 0.6)",
                  marginBottom: "4px"
                }}>
                  Quick Response
                </div>
                <div style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "white"
                }}>
                  Within 24 Hours
                </div>
              </div>
            </div>
            
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}>
              <div style={{
                width: "40px",
                height: "40px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.25rem"
              }}>
                🎯
              </div>
              <div>
                <div style={{
                  fontSize: "0.875rem",
                  color: "rgba(255, 255, 255, 0.6)",
                  marginBottom: "4px"
                }}>
                  Custom Solutions
                </div>
                <div style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "white"
                }}>
                  Tailored to Your Needs
                </div>
              </div>
            </div>
            
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}>
              <div style={{
                width: "40px",
                height: "40px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.25rem"
              }}>
                🛡️
              </div>
              <div>
                <div style={{
                  fontSize: "0.875rem",
                  color: "rgba(255, 255, 255, 0.6)",
                  marginBottom: "4px"
                }}>
                  Support
                </div>
                <div style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "white"
                }}>
                  24/7 Technical Help
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Dialog - Improved Version */}
      {/* Service Details Dialog */}
      {selectedServiceDialog !== null && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
            backdropFilter: "blur(8px)",
            animation: "fadeIn 0.3s ease",
            overflowY: "auto"
          }}
          onClick={() => setSelectedServiceDialog(null)}
        >
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              padding: isMobile ? "32px 24px" : "48px",
              maxWidth: "900px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 32px 64px rgba(0, 0, 0, 0.3)",
              position: "relative",
              animation: "slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              margin: "auto"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedServiceDialog(null)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "#f3f4f6",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: "#6b7280",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                zIndex: 10
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#e5e7eb";
                e.currentTarget.style.color = "#374151";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#f3f4f6";
                e.currentTarget.style.color = "#6b7280";
              }}
            >
              ×
            </button>

            {selectedServiceDialog === 0 && (
              <div>
              <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "32px"
                }}>
                  <div style={{
                    width: "64px",
                    height: "64px",
                    background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                    borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                    fontSize: "2rem",
                    color: "white"
                  }}>
                    🏢
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: isMobile ? "1.75rem" : "2rem",
                      fontWeight: "800",
                      color: "#111827",
                      marginBottom: "4px",
                      lineHeight: "1.2"
                    }}>
                      End-to-End Parking Operations
                    </h3>
                    <p style={{
                      color: "#6b7280",
                      fontSize: "1.125rem"
                    }}>
                      Complete parking management with professional manpower and advanced technology
                    </p>
                  </div>
                </div>

                <div style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                  gap: "24px"
                }}>
                  {[
                    {
                      title: "Complete Operational Ownership",
                      description: "We handle everything from daily vehicle movement to compliance reporting. Our tech-enabled approach replaces manual processes with efficient systems.",
                      features: ["On-ground parking operations", "Staff deployment & supervision", "Technology implementation", "Digital payments & reporting"]
                    },
                    {
                      title: "Professional Manpower & Training",
                      description: "Our teams undergo rigorous screening and training to deliver smooth, customer-friendly operations.",
                      features: ["Background verification", "PMS & payment training", "Customer service skills", "Performance monitoring"]
                    },
                    {
                      title: "Technology-Driven Control",
                      description: "Real-time visibility and control across all parking sites with advanced monitoring systems.",
                      features: ["Live occupancy tracking", "Automated entry/exit logs", "Centralized dashboards", "Daily analytics reports"]
                    },
                    {
                      title: "End-to-End Management",
                      description: "Covering the entire parking lifecycle from assessment to optimization.",
                      features: ["Site assessment", "Infrastructure deployment", "Daily operations", "Performance scaling"]
                    }
                  ].map((item, idx) => (
                    <div key={idx} style={{
                      background: "#f8fafc",
                      borderRadius: "16px",
                      padding: "24px",
                      border: "1px solid rgba(229, 231, 235, 0.8)"
                    }}>
                      <h4 style={{
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        color: "#111827",
                        marginBottom: "12px"
                      }}>
                        {item.title}
                      </h4>
                      <p style={{
                        color: "#6b7280",
                        marginBottom: "16px",
                        lineHeight: "1.6",
                        fontSize: "0.95rem"
                      }}>
                        {item.description}
                      </p>
                      <ul style={{
                        color: "#6b7280",
                        paddingLeft: "20px",
                        margin: 0,
                        listStyleType: "none"
                      }}>
                        {item.features.map((feature, i) => (
                          <li key={i} style={{
                            marginBottom: "8px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "0.9rem"
                          }}>
                            <span style={{
                              width: "6px",
                              height: "6px",
                              background: "#057eff",
                              borderRadius: "50%"
                            }}></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedServiceDialog === 1 && (
              <div>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "32px"
                }}>
                  <div style={{
                    width: "64px",
                    height: "64px",
                    background: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    color: "white"
                  }}>
                    🤖
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: isMobile ? "1.75rem" : "2rem",
                      fontWeight: "800",
                      color: "#111827",
                      marginBottom: "4px",
                      lineHeight: "1.2"
                    }}>
                      AI-Powered Parking Management Systems
                    </h3>
                    <p style={{
                      color: "#6b7280",
                      fontSize: "1.125rem"
                    }}>
                      Advanced AI technology for real-time monitoring and optimization
                    </p>
                  </div>
                </div>

                <div style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                  gap: "24px"
                }}>
                  {[
                    {
                      title: "Intelligent Parking Detection",
                      description: "AI-powered systems with 95%+ accuracy for real-time vehicle detection and slot monitoring.",
                      features: ["AI camera vision", "Empty slot detection", "On-ground sensors & LED guidance", "Real-time occupancy alerts"]
                    },
                    {
                      title: "Smart Access Control",
                      description: "Automated vehicle entry and exit management using cutting-edge technology.",
                      features: ["AI-enabled ANPR", "RFID / FASTag detection", "QR / OTP entry", "Facial recognition (optional)"]
                    },
                    {
                      title: "Analytics & Revenue Dashboard",
                      description: "Complete control for owners & admins with comprehensive reporting.",
                      features: ["Live occupancy", "Revenue reports", "Staff performance", "Payment reconciliation"]
                    },
                    {
                      title: "Multi-Location Management",
                      description: "Centralized control and monitoring across multiple parking sites.",
                      features: ["Unified dashboards", "Cross-site analytics", "Centralized reporting", "Performance insights"]
                    }
                  ].map((item, idx) => (
                    <div key={idx} style={{
                      background: "#f8fafc",
                      borderRadius: "16px",
                      padding: "24px",
                      border: "1px solid rgba(229, 231, 235, 0.8)"
                    }}>
                      <h4 style={{
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        color: "#111827",
                        marginBottom: "12px"
                      }}>
                        {item.title}
                      </h4>
                      <p style={{
                        color: "#6b7280",
                        marginBottom: "16px",
                        lineHeight: "1.6",
                        fontSize: "0.95rem"
                      }}>
                        {item.description}
                      </p>
                      <ul style={{
                        color: "#6b7280",
                        paddingLeft: "20px",
                        margin: 0,
                        listStyleType: "none"
                      }}>
                        {item.features.map((feature, i) => (
                          <li key={i} style={{
                            marginBottom: "8px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "0.9rem"
                          }}>
                            <span style={{
                              width: "6px",
                              height: "6px",
                              background: "#3B82F6",
                              borderRadius: "50%"
                            }}></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedServiceDialog === 2 && (
              <div>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "32px"
                }}>
                  <div style={{
                    width: "64px",
                    height: "64px",
                    background: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    color: "white"
                  }}>
                    📱
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: isMobile ? "1.75rem" : "2rem",
                      fontWeight: "800",
                      color: "#111827",
                      marginBottom: "4px",
                      lineHeight: "1.2"
                    }}>
                      Nearby Parking Discovery & Slot Booking
                    </h3>
                    <p style={{
                      color: "#6b7280",
                      fontSize: "1.125rem"
                    }}>
                      Find and book parking spaces easily through our digital platforms
                    </p>
                  </div>
                </div>

                <div style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                  gap: "24px"
                }}>
                  {[
                    {
                      title: "One-Tap Booking",
                      description: "Easily discover available parking spaces near you and reserve your slot instantly.",
                      features: ["Instant booking confirmation", "Hourly or monthly parking", "Secure digital receipts", "Real-time availability"]
                    },
                    {
                      title: "Real-Time Notifications",
                      description: "Stay informed with instant updates and alerts about your parking.",
                      features: ["Push notifications", "Booking reminders", "Parking alerts", "Expiry warnings"]
                    },
                    {
                      title: "Multi-Platform Access",
                      description: "Access parking services through our app or website seamlessly.",
                      features: ["Mobile app", "Web platform", "Cross-device sync", "User-friendly interface"]
                    },
                    {
                      title: "Flexible Booking Options",
                      description: "Choose from various booking options to suit your needs.",
                      features: ["One-time bookings", "Monthly subscriptions", "Pre-booking", "Recurring reservations"]
                    }
                  ].map((item, idx) => (
                    <div key={idx} style={{
                      background: "#f8fafc",
                      borderRadius: "16px",
                      padding: "24px",
                      border: "1px solid rgba(229, 231, 235, 0.8)"
                    }}>
                      <h4 style={{
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        color: "#111827",
                        marginBottom: "12px"
                      }}>
                        {item.title}
                      </h4>
                      <p style={{
                        color: "#6b7280",
                        marginBottom: "16px",
                        lineHeight: "1.6",
                        fontSize: "0.95rem"
                      }}>
                        {item.description}
                      </p>
                      <ul style={{
                        color: "#6b7280",
                        paddingLeft: "20px",
                        margin: 0,
                        listStyleType: "none"
                      }}>
                        {item.features.map((feature, i) => (
                          <li key={i} style={{
                            marginBottom: "8px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "0.9rem"
                          }}>
                            <span style={{
                              width: "6px",
                              height: "6px",
                              background: "#8B5CF6",
                              borderRadius: "50%"
                            }}></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedServiceDialog === 3 && (
              <div>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "32px"
                }}>
                  <div style={{
                    width: "64px",
                    height: "64px",
                    background: "linear-gradient(135deg, #F59E0B, #D97706)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    color: "white"
                  }}>
                    🔧
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: isMobile ? "1.75rem" : "2rem",
                      fontWeight: "800",
                      color: "#111827",
                      marginBottom: "4px",
                      lineHeight: "1.2"
                    }}>
                      Comprehensive AMC & Support Services
                    </h3>
                    <p style={{
                      color: "#6b7280",
                      fontSize: "1.125rem"
                    }}>
                      Complete maintenance and support for uninterrupted operations
                    </p>
                  </div>
                </div>

                <div style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                  gap: "24px"
                }}>
                  {[
                    {
                      title: "Comprehensive AMC",
                      description: "Full coverage including all maintenance, repairs, and support services.",
                      features: ["Complete system maintenance", "Regular inspections", "24/7 technical support", "Replacement parts included"]
                    },
                    {
                      title: "Non-Comprehensive AMC",
                      description: "Flexible maintenance plans tailored to your specific needs and budget.",
                      features: ["Customizable coverage", "Selective service options", "Cost-effective plans", "Flexible terms"]
                    },
                    {
                      title: "Preventive Maintenance",
                      description: "Regular maintenance to prevent issues and ensure optimal performance.",
                      features: ["Scheduled maintenance", "System health checks", "Performance optimization", "Early issue detection"]
                    },
                    {
                      title: "Long-Term Reliability",
                      description: "Ensuring uninterrupted operations and extended system lifespan.",
                      features: ["Extended warranty", "Lifecycle management", "Upgrade support", "Performance guarantees"]
                    }
                  ].map((item, idx) => (
                    <div key={idx} style={{
                      background: "#f8fafc",
                      borderRadius: "16px",
                      padding: "24px",
                      border: "1px solid rgba(229, 231, 235, 0.8)"
                    }}>
                      <h4 style={{
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        color: "#111827",
                        marginBottom: "12px"
                      }}>
                        {item.title}
                      </h4>
                      <p style={{
                        color: "#6b7280",
                        marginBottom: "16px",
                        lineHeight: "1.6",
                        fontSize: "0.95rem"
                      }}>
                        {item.description}
                      </p>
                      <ul style={{
                        color: "#6b7280",
                        paddingLeft: "20px",
                        margin: 0,
                        listStyleType: "none"
                      }}>
                        {item.features.map((feature, i) => (
                          <li key={i} style={{
                            marginBottom: "8px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "0.9rem"
                          }}>
                            <span style={{
                              width: "6px",
                              height: "6px",
                              background: "#F59E0B",
                              borderRadius: "50%"
                            }}></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {showDialog && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
            backdropFilter: "blur(8px)",
            animation: "fadeIn 0.3s ease"
          }}
          onClick={() => setShowDialog(false)}
        >
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              padding: isMobile ? "32px 24px" : "40px",
              maxWidth: "500px",
              width: "100%",
              boxShadow: "0 32px 64px rgba(0, 0, 0, 0.3)",
              position: "relative",
              animation: "slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowDialog(false)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "#f3f4f6",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
                color: "#6b7280",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#e5e7eb";
                e.currentTarget.style.color = "#374151";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#f3f4f6";
                e.currentTarget.style.color = "#6b7280";
              }}
            >
              ×
            </button>

            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <div style={{
                marginBottom: "20px"
              }}>
                <img 
                  src={instaParkLogo} 
                  alt="InstaParkAI Logo" 
                  style={{
                    height: "50px", 
                    width: "auto",
                    margin: "0 auto"
                  }}
                />
              </div>
              <h2 style={{ 
                color: "#111827", 
                fontSize: isMobile ? "1.5rem" : "1.75rem", 
                fontWeight: "800", 
                marginBottom: "12px" 
              }}>
                Service Inquiry
              </h2>
              <p style={{ 
                color: "#6b7280", 
                marginBottom: "32px",
                lineHeight: "1.6",
                fontSize: "1rem"
              }}>
                Tell us which service you're interested in and we'll get back to you promptly
              </p>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name *"
                style={{
                  width: "100%",
                  padding: "16px",
                  border: "2px solid #e5e7eb",
                  borderRadius: "12px",
                  fontSize: "16px",
                  outline: "none",
                  marginBottom: "16px",
                  fontFamily: "inherit",
                  transition: "border-color 0.3s ease"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#057eff";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e5e7eb";
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
                  padding: "16px",
                  border: "2px solid #e5e7eb",
                  borderRadius: "12px",
                  fontSize: "16px",
                  outline: "none",
                  marginBottom: "16px",
                  fontFamily: "inherit",
                  transition: "border-color 0.3s ease"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#057eff";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e5e7eb";
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
                  padding: "16px",
                  border: "2px solid #e5e7eb",
                  borderRadius: "12px",
                  fontSize: "16px",
                  outline: "none",
                  marginBottom: "16px",
                  fontFamily: "inherit",
                  transition: "border-color 0.3s ease"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#057eff";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e5e7eb";
                }}
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "16px",
                  border: "2px solid #e5e7eb",
                  borderRadius: "12px",
                  fontSize: "16px",
                  outline: "none",
                  fontFamily: "inherit",
                  background: "white",
                  transition: "border-color 0.3s ease"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#057eff";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e5e7eb";
                }}
              >
                <option value="">Select Service *</option>
                {services.map((service, idx) => (
                  <option key={idx} value={service.title}>{service.title}</option>
                ))}
              </select>
            </div>

            <div style={{ textAlign: "center" }}>
              <button
                onClick={handleSubmit}
                style={{
                  background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                  color: "white",
                  padding: "16px 32px",
                  borderRadius: "12px",
                  border: "none",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  width: "100%",
                  fontFamily: "inherit",
                  marginBottom: "24px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(5, 126, 255, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Get Service Details
              </button>
            </div>

            {formData.name && formData.mobile && formData.email && formData.service && (
              <div style={{ 
                borderTop: "1px solid #e5e7eb", 
                paddingTop: "24px",
                marginTop: "24px"
              }}>
                <p style={{ 
                  color: "#374151", 
                  fontSize: "1rem", 
                  fontWeight: 600, 
                  marginBottom: "16px", 
                  textAlign: "center" 
                }}>
                  Quick contact options for {formData.service}:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "12px",
                      padding: "14px 20px",
                      background: "#25D366",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "10px",
                      fontWeight: "600",
                      fontSize: "15px",
                      transition: "transform 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    💬 WhatsApp
                  </a>
                  <div style={{ display: "flex", gap: "12px" }}>
                  <a
                    href={generateCallLink()}
                    style={{
                        flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                        padding: "14px 20px",
                      background: "#3B82F6",
                      color: "white",
                      textDecoration: "none",
                        borderRadius: "10px",
                      fontWeight: "600",
                        fontSize: "14px",
                        transition: "transform 0.3s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      📞 Call
                  </a>
                  <a
                    href={generateEmailLink()}
                    style={{
                        flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                        padding: "14px 20px",
                      background: "#6B7280",
                      color: "white",
                      textDecoration: "none",
                        borderRadius: "10px",
                      fontWeight: "600",
                        fontSize: "14px",
                        transition: "transform 0.3s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      📧 Email
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </div>
  );
};

export default Services;