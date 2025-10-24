import React, { useState, useEffect } from "react";
import logo from '../assets/logo_withoutbg.png';
import evCarCharging from '../assets/ev_car_charging.png';

const About: React.FC = () => {
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
      {/* ================= ABOUT HERO SECTION ================= */}
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
          backgroundImage: "url('/src/assets/some_wr_mid_scrresn_fullwidth.jpg')",
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
              src={logo} 
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
            About <span style={{color: '#a4d030'}}>InstaPark AI</span>
          </h1>
          <p style={{
            color: '#e2e8f0', 
            fontSize: isMobile ? "1.1rem" : "1.3rem", 
            maxWidth: '700px', 
            margin: '0 auto 30px',
            lineHeight: "1.6"
          }}>
            Revolutionizing urban mobility through AI-powered parking solutions that make cities smarter and parking stress-free
          </p>
          
          {/* Stats Bar */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            gap: "20px",
            marginTop: "50px",
            maxWidth: "800px",
            margin: "50px auto 0"
          }}>
            {[
              { number: "1000+", label: "Parking Locations" },
              { number: "50+", label: "Cities Covered" },
              { number: "24/7", label: "Support" },
              { number: "99.9%", label: "Uptime" }
            ].map((stat, index) => (
              <div key={index} style={{
                textAlign: "center",
                padding: "20px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)"
              }}>
                <div style={{
                  color: "#a4d030",
                  fontSize: isMobile ? "1.5rem" : "2rem",
                  fontWeight: "700",
                  marginBottom: "8px"
                }}>
                  {stat.number}
                </div>
                <div style={{
                  color: "#e2e8f0",
                  fontSize: "0.9rem",
                  fontWeight: "500"
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MISSION SECTION ================= */}
      <section style={{
        background: "white",
        padding: isMobile ? "60px 20px" : "100px 20px",
      }}>
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto"
        }}>
          <div style={{
            display: isMobile ? "block" : "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: isMobile ? "40px" : "80px",
            alignItems: "center"
          }}>
            <div>
              <h2 style={{
                fontSize: isMobile ? "2rem" : "2.5rem",
                fontWeight: "700",
                color: "#1f2937",
                marginBottom: "24px",
                lineHeight: "1.2"
              }}>
                Our <span style={{ 
                  background: "linear-gradient(135deg, #a4d030, #1fb85a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>Mission</span>
              </h2>
              <p style={{
                fontSize: isMobile ? "1rem" : "1.125rem",
                color: "#6b7280",
                lineHeight: "1.7",
                marginBottom: "24px"
              }}>
                To create a smarter, safer, and more sustainable parking ecosystem through innovation and AI-driven technology. We believe that parking should be effortless, transparent, and accessible to everyone.
              </p>
              <p style={{
                fontSize: isMobile ? "1rem" : "1.125rem",
                color: "#6b7280",
                lineHeight: "1.7"
              }}>
                Our mission is to eliminate the stress and inefficiency of traditional parking systems by leveraging cutting-edge artificial intelligence, computer vision, and real-time data analytics.
              </p>
            </div>
            <div style={{
              position: "relative"
            }}>
              <div style={{
                background: "linear-gradient(135deg, #f8fafc, #f0fdf4)",
                borderRadius: "20px",
                padding: "40px",
                textAlign: "center",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(0, 0, 0, 0.05)"
              }}>
                <div style={{
                  fontSize: "4rem",
                  marginBottom: "20px",
                  color: "#a4d030"
                }}>
                  🎯
                </div>
                <h3 style={{
                  color: "#1f2937",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "16px"
                }}>
                  Driving Innovation
                </h3>
                <p style={{
                  color: "#6b7280",
                  lineHeight: "1.6"
                }}>
                  Transforming urban mobility one parking spot at a time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISION SECTION ================= */}
      <section style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)",
        padding: isMobile ? "60px 20px" : "100px 20px",
      }}>
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto"
        }}>
          <div style={{
            display: isMobile ? "block" : "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: isMobile ? "40px" : "80px",
            alignItems: "center"
          }}>
            <div style={{
              position: "relative",
              order: isMobile ? 2 : 1
            }}>
              <div style={{
                background: "white",
                borderRadius: "20px",
                padding: "40px",
                textAlign: "center",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(0, 0, 0, 0.05)"
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                  marginBottom: "20px"
                }}>
                  <img 
                    src={evCarCharging} 
                    alt="EV Charging Future" 
                    style={{
                      width: "60px",
                      height: "60px"
                    }}
                  />
                  <div style={{
                    fontSize: "2.5rem",
                    color: "#10b981"
                  }}>
                    🔮
                  </div>
                </div>
                <h3 style={{
                  color: "#1f2937",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "16px"
                }}>
                  Future Ready
                </h3>
                <p style={{
                  color: "#6b7280",
                  lineHeight: "1.6"
                }}>
                  Preparing cities for the future of mobility and sustainable transportation
                </p>
              </div>
            </div>
            
            <div style={{
              order: isMobile ? 1 : 2
            }}>
              <h2 style={{
                fontSize: isMobile ? "2rem" : "2.5rem",
                fontWeight: "700",
                color: "#1f2937",
                marginBottom: "24px",
                lineHeight: "1.2"
              }}>
                Our <span style={{ 
                  background: "linear-gradient(135deg, #a4d030, #1fb85a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>Vision</span>
              </h2>
              <p style={{
                fontSize: isMobile ? "1rem" : "1.125rem",
                color: "#6b7280",
                lineHeight: "1.7",
                marginBottom: "24px"
              }}>
                To redefine urban and commercial parking through AI-driven automation, delivering convenience, efficiency, and real-time control for both users and operators.
              </p>
              <p style={{
                fontSize: isMobile ? "1rem" : "1.125rem",
                color: "#6b7280",
                lineHeight: "1.7"
              }}>
                We envision a world where finding parking is never a challenge, where cities flow smoothly, and where technology serves to enhance urban living rather than complicate it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUES SECTION ================= */}
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
            marginBottom: "16px"
          }}>
            Our <span style={{ color: "#a4d030" }}>Values</span>
          </h2>
          <p style={{
            fontSize: isMobile ? "1rem" : "1.125rem",
            color: "#6b7280",
            maxWidth: "600px",
            margin: "0 auto 40px",
            lineHeight: "1.6"
          }}>
            The principles that guide our innovation and shape our solutions
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
            gap: isMobile ? "24px" : "32px"
          }}>
            {[
              {
                icon: "💡",
                title: "Innovation",
                description: "Continuously pushing the boundaries of parking technology with cutting-edge AI solutions and real-time data analytics.",
                color: "#a4d030"
              },
              {
                icon: "👥",
                title: "User-Centric",
                description: "Every feature is designed with the end user in mind, ensuring simplicity, accessibility, and exceptional user experience.",
                color: "#3B82F6"
              },
              {
                icon: "🛡️",
                title: "Security",
                description: "Bank-grade security measures to protect user data, ensure safe transactions, and maintain system integrity.",
                color: "#EF4444"
              },
              {
                icon: "🌱",
                title: "Sustainability",
                description: "Reducing traffic congestion, emissions, and environmental impact through efficient parking management solutions.",
                color: "#10b981"
              }
            ].map((value, index) => (
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
                  background: `linear-gradient(135deg, ${value.color}, ${value.color}99)`,
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  fontSize: "2.5rem"
                }}>
                  {value.icon}
                </div>
                <h3 style={{
                  color: "#1f2937",
                  fontSize: isMobile ? "1.3rem" : "1.5rem",
                  fontWeight: "600",
                  marginBottom: "16px"
                }}>
                  {value.title}
                </h3>
                <p style={{
                  color: "#6b7280",
                  lineHeight: "1.6",
                  fontSize: isMobile ? "0.95rem" : "1rem"
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section style={{
        background: "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
        color: "white",
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
            marginBottom: "16px",
            lineHeight: "1.2"
          }}>
            Why Choose <span style={{ color: "#a4d030" }}>InstaPark.AI</span>?
          </h2>
          <p style={{
            fontSize: isMobile ? "1rem" : "1.125rem",
            marginBottom: "40px",
            opacity: 0.9,
            lineHeight: "1.6",
            maxWidth: "700px",
            margin: "0 auto 40px"
          }}>
            Experience the difference with our comprehensive AI-powered parking platform designed for modern urban challenges
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(250px, 1fr))",
            gap: isMobile ? "24px" : "32px"
          }}>
            {[
              {
                icon: "🤖",
                title: "AI-Powered Intelligence",
                description: "Advanced machine learning algorithms for optimal parking management"
              },
              {
                icon: "⚡",
                title: "Real-Time Operations",
                description: "Live updates and instant booking confirmations for seamless experience"
              },
              {
                icon: "🔒",
                title: "Enterprise Security",
                description: "Military-grade encryption and secure payment processing"
              },
              {
                icon: "🌐",
                title: "Scalable Platform",
                description: "Grows with your needs from single lots to city-wide deployments"
              },
              {
                icon: "📱",
                title: "Mobile First",
                description: "Optimized for smartphones with intuitive user interface"
              },
              {
                icon: "🔄",
                title: "Continuous Innovation",
                description: "Regular updates with new features and improvements"
              }
            ].map((feature, index) => (
              <div key={index} style={{
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                padding: isMobile ? "25px 20px" : "30px 25px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                textAlign: "center"
              }}>
                <div style={{
                  fontSize: "2.5rem",
                  marginBottom: "16px"
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: isMobile ? "1.2rem" : "1.3rem",
                  fontWeight: "600",
                  marginBottom: "12px",
                  color: "white"
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  opacity: 0.8,
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section style={{
        background: "white",
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
            color: "#1f2937",
            marginBottom: "20px",
            lineHeight: "1.2"
          }}>
            Ready to Experience Smart Parking?
          </h2>
          <p style={{
            fontSize: isMobile ? "1rem" : "1.125rem",
            color: "#6b7280",
            marginBottom: "30px",
            lineHeight: "1.6"
          }}>
            Join thousands of satisfied users and parking operators who have transformed their parking experience with InstaPark.AI
          </p>
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "16px",
            flexWrap: "wrap"
          }}>
            <a
              href="https://wa.me/919845802901"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(135deg, #a4d030, #1fb85a)",
                color: "white",
                padding: isMobile ? "14px 24px" : "16px 32px",
                borderRadius: "10px",
                fontWeight: 600,
                border: "none",
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
              💬 Get Started Today
            </a>
            <a
              href="tel:+919845802901"
              style={{
                background: "transparent",
                color: "#1f2937",
                padding: isMobile ? "14px 24px" : "16px 32px",
                borderRadius: "10px",
                fontWeight: 600,
                border: "2px solid #a4d030",
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
              📞 Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;