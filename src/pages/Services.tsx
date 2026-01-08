import React, { useState, useEffect } from "react";
import SEO from "../components/SEO";
import pmsUseCases from '../assets/PMS use cases offered CHART.png';
import howItWorksProviders from '../assets/How it works -For Parking Providers chart.png';
import userJourney from '../assets/user joureny.png';

const Services: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
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
      icon: "🔍",
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
      icon: "📱",
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
      icon: "🚧",
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
      icon: "📊",
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
      icon: "⚡",
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
      icon: "🅿️",
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
      icon: "⚙️",
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
      icon: "🛡️",
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
      icon: "🛠️",
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
      {/* ================= SERVICES HERO SECTION ================= */}
      <section style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        padding: isMobile ? "100px 20px 60px" : "120px 20px 80px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('/src/assets/top_of_herosection.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
          zIndex: 1
        }}></div>

        <div style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <h1 style={{
            color: "white", 
            fontSize: isMobile ? "2.5rem" : "3.5rem", 
            fontWeight: "700", 
            marginBottom: "20px",
            lineHeight: "1.2"
          }}>
            Comprehensive AI-Powered Parking Solutions
          </h1>
          <p style={{
            color: '#e2e8f0', 
            fontSize: isMobile ? "1.1rem" : "1.3rem", 
            maxWidth: '800px', 
            margin: '0 auto 30px',
            lineHeight: "1.6"
          }}>
            InstaParkAI delivers end-to-end parking solutions—from technology to operations.
          </p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section id="services-grid" style={{
        background: "white",
        padding: isMobile ? "60px 20px" : "100px 20px",
      }}>
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto"
        }}>
          <div style={{
            textAlign: "center",
            marginBottom: isMobile ? "40px" : "60px"
          }}>
            <h2 style={{
              fontSize: isMobile ? "2rem" : "2.75rem",
              fontWeight: "700",
              color: "#1f2937",
              marginBottom: "16px"
            }}>
              Complete Parking{" "}
              <span style={{ 
                background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>Solutions</span>
            </h2>
            <p style={{
              fontSize: isMobile ? "1rem" : "1.125rem",
              color: "#6b7280",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6"
            }}>
              End-to-end AI-powered parking management services designed for businesses, 
              cities, and commercial establishments
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(350px, 1fr))",
            gap: isMobile ? "24px" : "32px"
          }}>
            {services.map((service, index) => (
              <div key={index} style={{
                background: "white",
                borderRadius: "20px",
                padding: isMobile ? "30px 20px" : "40px 32px",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                transition: "all 0.3s ease",
                textAlign: "center"
              }}>
                <div style={{
                  width: "80px",
                  height: "80px",
                  background: service.color,
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  fontSize: "2rem",
                  color: "white"
                }}>
                  {service.icon}
                </div>
                <h3 style={{
                  color: "#1f2937",
                  fontSize: isMobile ? "1.3rem" : "1.5rem",
                  fontWeight: "600",
                  marginBottom: "8px"
                }}>
                  {service.title}
                </h3>
                <p style={{
                  color: "#6b7280",
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  marginBottom: "24px",
                  lineHeight: "1.5"
                }}>
                  {service.subtitle}
                </p>
                <div style={{
                  background: "#f8fafc",
                  borderRadius: "12px",
                  padding: "20px",
                  textAlign: "left"
                }}>
                  <div style={{
                    color: "#1f2937",
                    fontWeight: "600",
                    marginBottom: "12px",
                    fontSize: "0.95rem"
                  }}>
                    Features:
                  </div>
                  <ul style={{
                    color: "#6b7280",
                    paddingLeft: "20px",
                    margin: 0,
                    fontSize: "0.9rem",
                    lineHeight: "1.8"
                  }}>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BEYOND PARKING SECTION ================= */}
      <section style={{
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
                title: "InstaPark", 
                desc: "Core parking platform",
                number: "1"
              },
              {
                title: "InstaCharge", 
                desc: "EV charging network",
                number: "2"
              },
              { 
                title: "InstaKitchen", 
                desc: "Cloud kitchens at parking hubs",
                number: "3"
              },
              { 
                title: "InstaDarkStore", 
                desc: "Micro-logistics & storage",
                number: "4"
              }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  padding: isMobile ? "32px 24px" : "40px 32px",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  transition: "all 0.3s ease"
                }}
              >
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
                  <h3 style={{ 
                    color: "#111827", 
                    fontSize: isMobile ? "1.5rem" : "1.75rem",
                    fontWeight: 700,
                    margin: 0,
                    lineHeight: "1.2"
                  }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ 
                  color: "#6b7280", 
                  fontSize: isMobile ? "1rem" : "1.125rem",
                  margin: 0,
                  lineHeight: "1.6"
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BUSINESS MODELS ================= */}
      <section style={{
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

          {/* Charts Section */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "24px" : "32px",
            marginBottom: isMobile ? "40px" : "60px"
          }}>
            {/* PMS Use Cases Chart */}
            <div style={{
              background: "white",
              borderRadius: "20px",
              padding: isMobile ? "20px" : "24px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
              border: "1px solid rgba(0, 0, 0, 0.05)"
            }}>
              <img 
                src={pmsUseCases} 
                alt="PMS Use Cases Offered" 
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  display: "block"
                }}
              />
            </div>

            {/* How It Works For Parking Providers Chart */}
            <div style={{
              background: "white",
              borderRadius: "20px",
              padding: isMobile ? "20px" : "24px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
              border: "1px solid rgba(0, 0, 0, 0.05)"
            }}>
              <img 
                src={howItWorksProviders} 
                alt="How It Works For Parking Providers" 
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  display: "block"
                }}
              />
            </div>
          </div>

          {/* Business Model Cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "24px" : "32px"
          }}>
            <div style={{
              background: "white",
              borderRadius: "20px",
              padding: isMobile ? "30px 20px" : "40px 32px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
              border: "1px solid rgba(0, 0, 0, 0.05)"
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

            <div style={{
              background: "white",
              borderRadius: "20px",
              padding: isMobile ? "30px 20px" : "40px 32px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
              border: "1px solid rgba(0, 0, 0, 0.05)"
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
      <section style={{
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
              { icon: "🏢", title: "Malls & retail complexes" },
              { icon: "🏥", title: "Hospitals & hotels" },
              { icon: "✈️", title: "Airports & toll plazas" },
              { icon: "🏭", title: "IT parks & campuses" },
              { icon: "🏘️", title: "Residential societies" },
              { icon: "🌆", title: "Smart cities" }
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
                  marginBottom: "16px"
                }}>
                  {item.icon}
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
      <section style={{
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
            marginBottom: "30px",
            opacity: 0.9,
            lineHeight: "1.6"
          }}>
            Get started with our comprehensive AI-powered parking solutions
          </p>
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "16px",
            flexWrap: "wrap"
          }}>
            <button
              onClick={() => setShowDialog(true)}
              style={{
                background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                color: "white",
                padding: isMobile ? "14px 24px" : "16px 32px",
                borderRadius: "10px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                fontSize: isMobile ? "1rem" : "1.1rem",
                transition: "all 0.3s ease",
                minWidth: isMobile ? "140px" : "180px"
              }}
            >
              🚀 Get Started
            </button>
            <a
              href="tel:+919845802901"
              style={{
                background: "transparent",
                color: "white",
                padding: isMobile ? "14px 24px" : "16px 32px",
                borderRadius: "10px",
                fontWeight: 600,
                border: "2px solid rgba(255, 255, 255, 0.3)",
                cursor: "pointer",
                fontSize: isMobile ? "1rem" : "1.1rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
                minWidth: isMobile ? "140px" : "180px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px"
              }}
            >
              📞 +91 98458 02901
            </a>
            <a
              href="mailto:support@instaparkai.com"
              style={{
                background: "transparent",
                color: "white",
                padding: isMobile ? "14px 24px" : "16px 32px",
                borderRadius: "10px",
                fontWeight: 600,
                border: "2px solid rgba(255, 255, 255, 0.3)",
                cursor: "pointer",
                fontSize: isMobile ? "1rem" : "1.1rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
                minWidth: isMobile ? "140px" : "180px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px"
              }}
            >
              📧 support@instaparkai.com
            </a>
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
                width: "60px",
                height: "60px",
                background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: "20px",
                margin: "0 auto 16px"
              }}>
                IP
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
