import React, { useState, useEffect } from "react";

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);







  return (
    <div style={{ 
      background: "#ffffff", 
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      lineHeight: 1.6,
      overflowX: "hidden"
    }}>
      {/* ================= ENHANCED HERO SECTION ================= */}
      <section
        id="home"
        style={{
          padding: isMobile ? "100px 20px 60px" : "120px 20px 80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
          position: "relative",
          overflow: "hidden",
          minHeight: isMobile ? "auto" : "100vh",
          display: "flex",
          alignItems: "center"
        }}
      >
        {/* Background Elements */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('/src/assets/some_wr_mid_scrresn_fullwidth.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
          zIndex: 1
        }}></div>

        <div style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto"
        }}>
          <div style={{
            display: isMobile ? "block" : "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: isMobile ? "40px" : "80px",
            alignItems: "center"
          }}>
            {/* Left Content */}
            <div style={{
              textAlign: isMobile ? "center" : "left"
            }}>

              <h1
                style={{
                  fontSize: isMobile ? "2.5rem" : "4rem",
                  fontWeight: 800,
                  color: "white",
                  marginBottom: "24px",
                  lineHeight: "1.1"
                }}
              >
                Smart. Scalable.
                <br />
                <span style={{
                  fontSize: isMobile ? "2.8rem" : "4.5rem",
                  background: "linear-gradient(135deg, #a4d030, #1fb85a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                  Stress-Free Parking.
              </span>
            </h1>
             
              <p
                style={{
                  fontSize: isMobile ? "1.1rem" : "1.3rem",
                  color: "#e2e8f0",
                  marginBottom: isMobile ? "30px" : "48px",
                  lineHeight: "1.7",
                  fontWeight: "400",
                  maxWidth: "90%",
                  marginLeft: isMobile ? "auto" : "0",
                  marginRight: isMobile ? "auto" : "0"
                }}
              >
                AI-powered parking management that transforms urban mobility. 
                Find, book, and manage parking effortlessly across cities, 
                corporate campuses, and commercial spaces.
              </p>

              <div style={{ 
                display: "flex", 
                gap: "16px",
                flexWrap: "wrap",
                justifyContent: isMobile ? "center" : "flex-start"
              }}>
                <button
                  onClick={() => window.openContactDialog?.()}
                  style={{
                    background: "linear-gradient(135deg, #a4d030, #1fb85a)",
                    color: "white",
                    padding: isMobile ? "16px 24px" : "18px 36px",
                    borderRadius: "12px",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    fontSize: isMobile ? "1rem" : "1.1rem",
                    boxShadow: "0 8px 30px rgba(164, 208, 48, 0.4)",
                    transition: "all 0.3s ease",
                    minWidth: isMobile ? "160px" : "220px"
                  }}
                >
                  🚀 Get Started
              </button>
                
                <a
                  href="#features"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    padding: isMobile ? "16px 24px" : "18px 36px",
                    borderRadius: "12px",
                    fontWeight: 600,
                    border: "2px solid rgba(255, 255, 255, 0.2)",
                    cursor: "pointer",
                    fontSize: isMobile ? "1rem" : "1.1rem",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    minWidth: isMobile ? "140px" : "180px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(10px)"
                  }}
                >
                  📋 Learn More
                </a>
              </div>

              {/* Trust Indicators */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: isMobile ? "20px" : "30px",
                marginTop: isMobile ? "40px" : "50px",
                flexWrap: "wrap",
                justifyContent: isMobile ? "center" : "flex-start"
              }}>
                {[
                  { icon: "⚡", title: "Instant", desc: "Booking" },
                  { icon: "🔒", title: "Secure", desc: "Payments" },
                  { icon: "📱", title: "24/7", desc: "Support" }
                ].map((item, index) => (
                  <div key={index} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px"
                  }}>
                    <div style={{
                      width: isMobile ? "40px" : "48px",
                      height: isMobile ? "40px" : "48px",
                      background: "rgba(164, 208, 48, 0.2)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: isMobile ? "1.2rem" : "1.5rem"
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{
                        color: "white",
                        fontWeight: "700",
                        fontSize: isMobile ? "1rem" : "1.2rem"
                      }}>{item.title}</div>
                      <div style={{
                        color: "#cbd5e1",
                        fontSize: "0.9rem"
                      }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Hero Image */}
            {!isMobile && (
              <div style={{
                position: "relative",
                animation: "slideInRight 1s ease-out 0.3s both"
              }}>
                <div style={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
                  border: "1px solid rgba(255, 255, 255, 0.1)"
                }}>
                  <img 
                    src="/src/assets/top_of_herosection.png" 
                    alt="InstaPark AI Smart Parking System" 
                    style={{
                      width: "100%",
                      height: "500px",
                      objectFit: "cover",
                      display: "block"
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section
        id="features"
        style={{
          background: "white",
          padding: isMobile ? "60px 20px" : "100px 20px",
        }}
      >
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h2
            style={{
              fontSize: isMobile ? "2rem" : "2.75rem",
              fontWeight: 700,
              color: "#1f2937",
              marginBottom: "16px",
              lineHeight: "1.2"
            }}
          >
            Intelligent Parking{" "}
            <span style={{ 
              background: "linear-gradient(135deg, #a4d030, #1fb85a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>Solutions</span>
            </h2>
          <p
            style={{
              fontSize: isMobile ? "1rem" : "1.125rem",
              color: "#6b7280",
              maxWidth: "600px",
              margin: "0 auto 40px",
              lineHeight: "1.6",
            }}
          >
            Harnessing AI and real-time data to revolutionize urban parking 
            with seamless automation and smart technology.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
              gap: isMobile ? "24px" : "32px",
              marginTop: "40px"
            }}
          >
            {[
              { 
                icon: "🤖", 
                title: "AI-Powered Detection", 
                desc: "Advanced computer vision for real-time parking slot availability and automated vehicle recognition." 
              },
              { 
                icon: "💳", 
                title: "Secure Digital Payments", 
                desc: "Multiple payment options with encrypted transactions and instant processing for hassle-free payments." 
              },
              { 
                icon: "📊", 
                title: "Real-Time Analytics", 
                desc: "Comprehensive dashboard with occupancy rates, revenue tracking, and predictive demand analysis." 
              },
              { 
                icon: "🌐", 
                title: "Scalable Infrastructure", 
                desc: "Cloud-based platform that scales from single lots to city-wide parking management systems." 
              },
              { 
                icon: "🔒", 
                title: "Enterprise Security", 
                desc: "Bank-level security protocols, data encryption, and compliance with global privacy standards." 
              },
              { 
                icon: "⚡", 
                title: "Instant Deployment", 
                desc: "Quick setup with minimal hardware requirements and comprehensive integration support." 
              },
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: isMobile ? "30px 20px" : "40px 32px",
                  borderRadius: "16px",
                  textAlign: "center",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s ease"
                }}
              >
                <div style={{ 
                  fontSize: isMobile ? "2.5rem" : "3rem", 
                  marginBottom: isMobile ? "16px" : "24px"
                }}>
                  {feature.icon}
          </div>
                <h3 style={{ 
                  color: "#1f2937", 
                  fontSize: isMobile ? "1.25rem" : "1.375rem", 
                  fontWeight: 600, 
                  marginBottom: "12px",
                  lineHeight: "1.3"
                }}>
                  {feature.title}
                </h3>
                <p style={{ 
                  color: "#6b7280", 
                  fontSize: isMobile ? "0.9rem" : "1rem", 
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  {feature.desc}
                </p>
              </div>
            ))}
            </div>
              </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)",
          padding: isMobile ? "60px 20px" : "100px 20px",
        }}
      >
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h2
            style={{
              fontSize: isMobile ? "2rem" : "2.75rem",
              fontWeight: 700,
              color: "#1f2937",
              marginBottom: "16px"
            }}
          >
            How It{" "}
            <span style={{ color: "#a4d030" }}>Works</span>
          </h2>
          <p
            style={{
              fontSize: isMobile ? "1rem" : "1.125rem",
              color: "#6b7280",
              maxWidth: "700px",
              margin: "0 auto 40px",
              lineHeight: "1.6"
            }}
          >
            Simple steps to transform your parking experience with AI-powered technology
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(250px, 1fr))",
              gap: isMobile ? "30px" : "40px",
              marginTop: "40px"
            }}
          >
            {[
              {
                number: "1",
                title: "Find Parking",
                desc: "Search for available parking spots using our intelligent platform with real-time availability."
              },
              {
                number: "2",
                title: "Book & Pay",
                desc: "Reserve your spot instantly and pay securely through multiple payment options."
              },
              {
                number: "3",
                title: "Park Stress-Free",
                desc: "Arrive at your reserved spot with digital access and automated verification."
              },
              {
                number: "4",
                title: "Manage Easily",
                desc: "Extend your parking time or manage multiple bookings through our mobile app."
              },
            ].map((step, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: isMobile ? "30px 20px" : "40px 32px",
                  textAlign: "center",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
                  position: "relative"
                }}
              >
                <div style={{
                  width: isMobile ? "50px" : "60px",
                  height: isMobile ? "50px" : "60px",
                  background: "linear-gradient(135deg, #a4d030, #1fb85a)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: isMobile ? "1.2rem" : "1.5rem",
                  margin: "0 auto 20px"
                }}>
                  {step.number}
            </div>
                <h3 style={{ 
                  color: "#1f2937", 
                  fontWeight: 600, 
                  marginBottom: "12px",
                  fontSize: isMobile ? "1.2rem" : "1.25rem"
                }}>
                  {step.title}
                </h3>
                <p style={{ 
                  color: "#6b7280", 
                  lineHeight: "1.6",
                  margin: 0,
                  fontSize: isMobile ? "0.9rem" : "1rem"
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ENTERPRISE SOLUTIONS ================= */}
      <section
        style={{
          background: "white",
          padding: isMobile ? "60px 20px" : "100px 20px",
        }}
      >
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h2
            style={{
              fontSize: isMobile ? "2rem" : "2.75rem",
              fontWeight: 700,
              color: "#1f2937",
              marginBottom: "16px"
            }}
          >
            Enterprise-Grade{" "}
            <span style={{ color: "#a4d030" }}>Solutions</span>
            </h2>
          <p
            style={{
              fontSize: isMobile ? "1rem" : "1.125rem",
              color: "#6b7280",
              maxWidth: "700px",
              margin: "0 auto 40px",
              lineHeight: "1.6"
            }}
          >
            Comprehensive parking management solutions for businesses, cities, and commercial spaces
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
              gap: isMobile ? "24px" : "32px",
              marginTop: "40px"
            }}
          >
            {[
              {
                icon: "🏢",
                title: "Commercial Complexes",
                desc: "Streamlined parking for shopping malls, business centers, and retail spaces with automated access control."
              },
              {
                icon: "🌆",
                title: "Smart Cities",
                desc: "City-wide parking management with real-time data integration and public parking optimization."
              },
              {
                icon: "⚡",
                title: "EV Charging Hubs",
                desc: "Integrated electric vehicle charging stations with smart reservation and payment systems."
              },
              {
                icon: "🏭",
                title: "Industrial Parks",
                desc: "Secure parking solutions for industrial areas with employee and visitor management systems."
              },
            ].map((solution, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: isMobile ? "30px 20px" : "40px 32px",
                  textAlign: "center",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
                  border: "1px solid rgba(0, 0, 0, 0.05)"
                }}
              >
                <div style={{ 
                  fontSize: isMobile ? "2.5rem" : "3rem", 
                  marginBottom: isMobile ? "16px" : "24px" 
                }}>
                  {solution.icon}
            </div>
                <h3 style={{ 
                  color: "#1f2937", 
                  fontWeight: 600, 
                  marginBottom: "12px",
                  fontSize: isMobile ? "1.2rem" : "1.25rem"
                }}>
                  {solution.title}
                </h3>
                <p style={{ 
                  color: "#6b7280", 
                  lineHeight: "1.6",
                  margin: 0,
                  fontSize: isMobile ? "0.9rem" : "1rem"
                }}>
                  {solution.desc}
                </p>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ENHANCED CTA SECTION ================= */}
      <section
        style={{
          background: "white",
          color: "#1f2937",
          padding: isMobile ? "80px 0" : "120px 0",
          textAlign: "center",
          position: "relative",
          overflow: "hidden"
        }}
      >

        <div style={{ 
          width: "100%",
          position: "relative",
          zIndex: 2
        }}>
          {/* Enhanced Card Design - Full Width */}
          <div style={{
            background: "white",
            borderRadius: "24px",
            padding: isMobile ? "40px 20px" : "60px 40px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
            position: "relative",
            overflow: "hidden",
            width: "100%",
            margin: "0 20px"
          }}>

            <div style={{ position: "relative", zIndex: 2 }}>
              {/* Icon */}
              <div style={{
                width: "80px",
                height: "80px",
                background: "linear-gradient(135deg, #a4d030, #1fb85a)",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 30px",
                fontSize: "2rem",
                boxShadow: "0 10px 30px rgba(164, 208, 48, 0.4)"
              }}>
                🚀
              </div>

              <h2
                style={{
                  fontSize: isMobile ? "2.2rem" : "3rem",
                  fontWeight: 800,
                  marginBottom: "24px",
                  lineHeight: "1.1",
                  background: "linear-gradient(135deg, #1f2937 0%, #a4d030 50%, #1fb85a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                Ready to Transform Your Parking Experience?
          </h2>
              
              <p
                style={{
                  fontSize: isMobile ? "1.1rem" : "1.3rem",
                  marginBottom: "40px",
                  color: "#6b7280",
                  lineHeight: "1.7",
                  maxWidth: "900px",
                  margin: "0 auto 40px"
                }}
              >
                Join forward-thinking organizations leveraging AI-powered parking 
                solutions to enhance efficiency, revenue, and customer satisfaction.
              </p>

              {/* Get Started Button */}
              <div style={{ 
                display: "flex", 
                justifyContent: "center"
              }}>
                <button
                  onClick={() => window.openContactDialog?.()}
                  style={{
                    background: "linear-gradient(135deg, #a4d030, #1fb85a)",
                    color: "white",
                    padding: isMobile ? "18px 36px" : "20px 48px",
                    borderRadius: "12px",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    fontSize: isMobile ? "1.1rem" : "1.2rem",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    minWidth: isMobile ? "200px" : "280px",
                    boxShadow: "0 8px 30px rgba(164, 208, 48, 0.4)",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 15px 40px rgba(164, 208, 48, 0.6)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(164, 208, 48, 0.4)";
                  }}
                >
                  <span style={{ position: "relative", zIndex: 2 }}>
                    🚀 Get Started
                  </span>
            </button>
              </div>

              {/* Trust Indicators */}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: isMobile ? "20px" : "60px",
                marginTop: "40px",
                flexWrap: "wrap",
                maxWidth: "1000px",
                margin: "40px auto 0"
              }}>
                {[
                  { icon: "🏢", title: "Enterprise Ready", desc: "Scalable Solutions" },
                  { icon: "🔒", title: "Secure & Compliant", desc: "Bank-Level Security" },
                  { icon: "⚡", title: "24/7 Support", desc: "Always Available" }
                ].map((item, index) => (
                  <div key={index} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: "#f8fafc",
                    padding: "12px 20px",
                    borderRadius: "12px",
                    border: "1px solid #e5e7eb"
                  }}>
                    <div style={{
                      fontSize: "1.5rem"
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{
                        color: "#1f2937",
                        fontWeight: "600",
                        fontSize: "0.9rem"
                      }}>{item.title}</div>
                      <div style={{
                        color: "#6b7280",
                        fontSize: "0.8rem"
                      }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
            </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;