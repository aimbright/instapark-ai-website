import React, { useState, useEffect } from "react";

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

  return (
    <div style={{ 
      background: "#ffffff", 
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      lineHeight: 1.6,
      overflowX: "hidden"
    }}>
      {/* ================= SERVICES HERO SECTION ================= */}
      <section style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        padding: isMobile ? "100px 20px 60px" : "120px 20px 80px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Background Image */}
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
          {/* Logo */}
          <div style={{ 
            marginBottom: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px"
          }}>
            <img 
              src="/src/assets/logo_withoutbg.png" 
              alt="InstaPark AI Logo" 
              style={{
                height: isMobile ? "50px" : "60px", 
                width: "auto",
                filter: "brightness(0) invert(1)"
              }}
            />
            <div style={{
              display: "flex",
              flexDirection: "column"
            }}>
              {/* <span style={{
                fontSize: isMobile ? "1.8rem" : "2rem",
                fontWeight: "800",
                color: "white",
                lineHeight: "1"
              }}>
                InstaPark
              </span>
              <span style={{
                fontSize: isMobile ? "1.3rem" : "1.5rem",
                fontWeight: "700",
                color: "#a4d030",
                lineHeight: "1",
                marginTop: "4px"
              }}>
                .AI
              </span> */}
            </div>
          </div>

          <h1 style={{
            color: "white", 
            fontSize: isMobile ? "2.5rem" : "3.5rem", 
            fontWeight: "700", 
            marginBottom: "20px",
            lineHeight: "1.2"
          }}>
            Our <span style={{color: '#a4d030'}}>Services</span>
          </h1>
          <p style={{
            color: '#e2e8f0', 
            fontSize: isMobile ? "1.1rem" : "1.3rem", 
            maxWidth: '600px', 
            margin: '0 auto 30px',
            lineHeight: "1.6"
          }}>
            Comprehensive AI-powered parking solutions for modern urban mobility
          </p>
          
          <div style={{ 
            display: "flex", 
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
          
            
          
          </div>
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
                background: "linear-gradient(135deg, #a4d030, #1fb85a)",
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
            {/* Service 1 - Smart Parking Detection */}
            <div style={{
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
                background: "linear-gradient(135deg, #a4d030, #1fb85a)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
                fontSize: "2rem",
                color: "white"
              }}>
                🔍
              </div>
              <h3 style={{
                color: "#1f2937",
                fontSize: isMobile ? "1.3rem" : "1.5rem",
                fontWeight: "600",
                marginBottom: "16px"
              }}>
                Smart Parking Detection
              </h3>
              <p style={{
                color: "#6b7280",
                lineHeight: "1.6",
                marginBottom: "24px",
                fontSize: isMobile ? "0.95rem" : "1rem"
              }}>
                AI-powered real-time parking slot detection and availability tracking across multiple locations with 99.9% accuracy.
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
                  Key Features:
                </div>
                <ul style={{
                  color: "#6b7280",
                  paddingLeft: "20px",
                  margin: 0,
                  fontSize: "0.9rem",
                  lineHeight: "1.8"
                }}>
                  <li>Real-time slot monitoring</li>
                  <li>AI-powered vehicle detection</li>
                  <li>Multi-location dashboard</li>
                  <li>Automated occupancy alerts</li>
                </ul>
              </div>
            </div>

            {/* Service 2 - Mobile Booking Platform */}
            <div style={{
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
                background: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
                fontSize: "2rem",
                color: "white"
              }}>
                📱
              </div>
              <h3 style={{
                color: "#1f2937",
                fontSize: isMobile ? "1.3rem" : "1.5rem",
                fontWeight: "600",
                marginBottom: "16px"
              }}>
                Mobile Booking Platform
              </h3>
              <p style={{
                color: "#6b7280",
                lineHeight: "1.6",
                marginBottom: "24px",
                fontSize: isMobile ? "0.95rem" : "1rem"
              }}>
                Seamless mobile booking experience with instant confirmation, digital receipts, and real-time updates.
              </p>
              <div style={{
                background: "#f0f9ff",
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
                  Key Features:
                </div>
                <ul style={{
                  color: "#6b7280",
                  paddingLeft: "20px",
                  margin: 0,
                  fontSize: "0.9rem",
                  lineHeight: "1.8"
                }}>
                  <li>One-tap booking system</li>
                  <li>Instant confirmation</li>
                  <li>Digital receipts & invoices</li>
                  <li>Push notifications</li>
                </ul>
              </div>
            </div>

            {/* Service 3 - EV Charging Integration */}
            <div style={{
              background: "white",
              borderRadius: "20px",
              padding: isMobile ? "30px 20px" : "40px 32px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              transition: "all 0.3s ease",
              textAlign: "center",
              position: "relative"
            }}>
              <div style={{
                position: "absolute",
                top: "-15px",
                right: "-15px",
                background: "linear-gradient(135deg, #10b981, #059669)",
                color: "white",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "0.8rem",
                fontWeight: "600"
              }}>
                NEW
              </div>
              <div style={{
                width: "80px",
                height: "80px",
                background: "linear-gradient(135deg, #10b981, #059669)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px"
              }}>
                <img 
                  src="/src/assets/ev_car_charging.png" 
                  alt="EV Charging" 
                  style={{
                    width: "40px",
                    height: "40px",
                    filter: "brightness(0) invert(1)"
                  }}
                />
              </div>
              <h3 style={{
                color: "#1f2937",
                fontSize: isMobile ? "1.3rem" : "1.5rem",
                fontWeight: "600",
                marginBottom: "16px"
              }}>
                EV Charging Integration
              </h3>
              <p style={{
                color: "#6b7280",
                lineHeight: "1.6",
                marginBottom: "24px",
                fontSize: isMobile ? "0.95rem" : "1rem"
              }}>
                Integrated electric vehicle charging stations with smart reservation, payment, and monitoring systems.
              </p>
              <div style={{
                background: "#f0fdf4",
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
                  Key Features:
                </div>
                <ul style={{
                  color: "#6b7280",
                  paddingLeft: "20px",
                  margin: 0,
                  fontSize: "0.9rem",
                  lineHeight: "1.8"
                }}>
                  <li>EV charging station booking</li>
                  <li>Charging status monitoring</li>
                  <li>Smart payment integration</li>
                  <li>Green energy tracking</li>
                </ul>
              </div>
            </div>

            {/* Service 4 - Analytics Dashboard */}
            <div style={{
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
                background: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
                fontSize: "2rem",
                color: "white"
              }}>
                📊
              </div>
              <h3 style={{
                color: "#1f2937",
                fontSize: isMobile ? "1.3rem" : "1.5rem",
                fontWeight: "600",
                marginBottom: "16px"
              }}>
                Analytics Dashboard
              </h3>
              <p style={{
                color: "#6b7280",
                lineHeight: "1.6",
                marginBottom: "24px",
                fontSize: isMobile ? "0.95rem" : "1rem"
              }}>
                Comprehensive analytics and reporting for parking operators with real-time insights and performance metrics.
              </p>
              <div style={{
                background: "#faf5ff",
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
                  Key Features:
                </div>
                <ul style={{
                  color: "#6b7280",
                  paddingLeft: "20px",
                  margin: 0,
                  fontSize: "0.9rem",
                  lineHeight: "1.8"
                }}>
                  <li>Usage analytics & reports</li>
                  <li>Revenue optimization</li>
                  <li>Performance metrics</li>
                  <li>Custom reporting</li>
                </ul>
              </div>
            </div>

            {/* Service 5 - Custom Integration */}
            <div style={{
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
                background: "linear-gradient(135deg, #F59E0B, #D97706)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
                fontSize: "2rem",
                color: "white"
              }}>
                ⚡
              </div>
              <h3 style={{
                color: "#1f2937",
                fontSize: isMobile ? "1.3rem" : "1.5rem",
                fontWeight: "600",
                marginBottom: "16px"
              }}>
                Custom Integration
              </h3>
              <p style={{
                color: "#6b7280",
                lineHeight: "1.6",
                marginBottom: "24px",
                fontSize: isMobile ? "0.95rem" : "1rem"
              }}>
                Tailored parking solutions for malls, offices, hospitals, and residential complexes with custom workflows.
              </p>
              <div style={{
                background: "#fffbeb",
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
                  Key Features:
                </div>
                <ul style={{
                  color: "#6b7280",
                  paddingLeft: "20px",
                  margin: 0,
                  fontSize: "0.9rem",
                  lineHeight: "1.8"
                }}>
                  <li>Custom workflow design</li>
                  <li>API integration</li>
                  <li>White-label solutions</li>
                  <li>Brand customization</li>
                </ul>
              </div>
            </div>

            {/* Service 6 - 24/7 Support */}
            <div style={{
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
                background: "linear-gradient(135deg, #EF4444, #DC2626)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
                fontSize: "2rem",
                color: "white"
              }}>
                🛡️
              </div>
              <h3 style={{
                color: "#1f2937",
                fontSize: isMobile ? "1.3rem" : "1.5rem",
                fontWeight: "600",
                marginBottom: "16px"
              }}>
                24/7 Support
              </h3>
              <p style={{
                color: "#6b7280",
                lineHeight: "1.6",
                marginBottom: "24px",
                fontSize: isMobile ? "0.95rem" : "1rem"
              }}>
                Round-the-clock customer support with multiple contact channels for instant assistance and technical support.
              </p>
              <div style={{
                background: "#fef2f2",
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
                  Support Channels:
                </div>
                <ul style={{
                  color: "#6b7280",
                  paddingLeft: "20px",
                  margin: 0,
                  fontSize: "0.9rem",
                  lineHeight: "1.8"
                }}>
                  <li>WhatsApp instant support</li>
                  <li>Phone support</li>
                  <li>Email support</li>
                  <li>Live chat</li>
                </ul>
              </div>
            </div>
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
            Ready to Transform Your Parking Services?
          </h2>
          <p style={{
            fontSize: isMobile ? "1rem" : "1.125rem",
            marginBottom: "30px",
            opacity: 0.9,
            lineHeight: "1.6"
          }}>
            Get started with our comprehensive AI-powered parking solutions and elevate your parking management experience.
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
                background: "linear-gradient(135deg, #a4d030, #1fb85a)",
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
                justifyContent: "center"
              }}
            >
              📞 Call Now
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
                background: "linear-gradient(135deg, #a4d030, #1fb85a)",
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
                <option value="Smart Parking Detection">Smart Parking Detection</option>
                <option value="Mobile Booking Platform">Mobile Booking Platform</option>
                <option value="EV Charging Integration">EV Charging Integration</option>
                <option value="Analytics Dashboard">Analytics Dashboard</option>
                <option value="Custom Integration">Custom Integration</option>
                <option value="24/7 Support">24/7 Support</option>
              </select>
            </div>

            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <button
                onClick={handleSubmit}
                style={{
                  background: "linear-gradient(135deg, #a4d030, #1fb85a)",
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
                      background: "#25D366",
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