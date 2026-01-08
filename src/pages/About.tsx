import React, { useState, useEffect, useRef } from "react";
import instaParkLogo from '../assets/InstaParkAI plain BG logo.png';
import aimboardImage from '../assets/aimboardimage.png';
import reinventingUrban from '../assets/Reinventing Urban Parking in India.png';
import coreValueProposition from '../assets/InstaParkAI - Core Value Propositio.png';

const About: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const valueScrollRef = useRef<HTMLDivElement>(null);
  const scrollAnimationRef = useRef<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll for Core Value Proposition cards
  useEffect(() => {
    const container = valueScrollRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame
    let isPaused = false;

    const scroll = () => {
      if (!isPaused && container) {
        scrollPosition += scrollSpeed;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0; // Reset to start
        }
        
        container.scrollLeft = scrollPosition;
      }
      scrollAnimationRef.current = requestAnimationFrame(scroll);
    };

    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    scrollAnimationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current);
      }
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
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
        position: "relative",
        padding: isMobile ? "100px 20px 60px" : "140px 20px 80px",
        textAlign: "center",
        minHeight: isMobile ? "600px" : "800px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }}>
        {/* Background Image - Full visible */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1
        }}>
          <img 
            src={reinventingUrban} 
            alt="Reinventing Urban Parking in India" 
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block"
            }}
          />
          {/* Very light overlay for text readability */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.4)",
            zIndex: 2
          }}></div>
        </div>

        {/* Content Overlay */}
        <div style={{
          position: "relative",
          zIndex: 3,
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%"
        }}>
          <h1 style={{
            color: "white", 
            fontSize: isMobile ? "2.5rem" : "4rem", 
            fontWeight: "800", 
            marginBottom: "24px",
            lineHeight: "1.1",
            letterSpacing: "-1.5px",
            textShadow: "0 4px 20px rgba(0, 0, 0, 0.7)"
          }}>
            Reinventing Urban Parking{" "}
            <span style={{
              background: "linear-gradient(135deg, #60a5fa, #93c5fd)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "none"
            }}>in India</span>
          </h1>
          
          <p style={{
            color: 'rgba(255, 255, 255, 0.95)', 
            fontSize: isMobile ? "1.125rem" : "1.375rem", 
            maxWidth: '800px', 
            margin: '0 auto 16px',
            lineHeight: "1.7",
            fontWeight: "500",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.7)"
          }}>
            InstaParkAI was founded with a simple belief:
          </p>
          <p style={{
            color: '#ffffff', 
            fontSize: isMobile ? "1.25rem" : "1.5rem", 
            maxWidth: '900px', 
            margin: '0 auto 32px',
            lineHeight: "1.6",
            fontWeight: "600",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.7)"
          }}>
            Parking should be smart, transparent, and stress-free.
          </p>
          <p style={{
            color: 'rgba(255, 255, 255, 0.9)', 
            fontSize: isMobile ? "1rem" : "1.125rem", 
            maxWidth: '900px', 
            margin: '0 auto',
            lineHeight: "1.7",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.7)"
          }}>
            India's rapid urbanization has created massive parking challenges. Despite high demand, most parking spaces remain manual, under-monetized, and poorly managed. InstaParkAI exists to fix this gap.
          </p>
        </div>
      </section>

      {/* ================= MISSION SECTION ================= */}
      <section 
        id="our-mission"
        style={{
          position: "relative",
          background: "white",
          padding: isMobile ? "40px 20px" : "60px 20px",
          overflow: "hidden"
        }}
      >
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto",
          position: "relative",
          zIndex: 2
        }}>
          {/* Background Image - aimboardImage */}
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            maxWidth: isMobile ? "100%" : "1200px",
            maxHeight: "100%",
            zIndex: 0,
            opacity: 0.65,
            pointerEvents: "none"
          }}>
            <img 
              src={aimboardImage} 
              alt="Aimboard" 
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain"
              }}
            />
          </div>

          <div style={{
            position: "relative",
            zIndex: 1
          }}>
            {/* Badge */}
            <div style={{
              textAlign: "center",
              marginBottom: "40px"
            }}>
              <div style={{
                display: "inline-block",
                padding: "8px 24px",
                background: "rgba(5, 126, 255, 0.08)",
                borderRadius: "6px",
                marginBottom: "20px"
              }}>
                <span style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#057eff",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase"
                }}>
                  OUR MISSION
                </span>
              </div>
            </div>

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
                  marginBottom: "24px",
                  fontWeight: "500"
                }}>
                  Enable seamless, automated parking operations using AI, IoT, and cloud technologies to deliver measurable value to:
                </p>
                <div style={{
                  fontSize: isMobile ? "1rem" : "1.125rem",
                  color: "#4b5563",
                  lineHeight: "1.8"
                }}>
                  <p style={{ marginBottom: "12px" }}>✓ Malls & commercial spaces</p>
                  <p style={{ marginBottom: "12px" }}>✓ Property owners & developers</p>
                  <p style={{ marginBottom: "12px" }}>✓ Parking operators</p>
                  <p style={{ marginBottom: "0" }}>✓ Cities & municipalities</p>
                </div>
              </div>
              <div style={{
                position: "relative"
              }}>
                <div style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(250, 251, 252, 0.95))",
                  borderRadius: "20px",
                  padding: "40px",
                  textAlign: "center",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  backdropFilter: "blur(10px)"
                }}>
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
        </div>
      </section>

      {/* ================= VISION SECTION ================= */}
      <section 
        id="our-vision"
        style={{
          position: "relative",
          padding: isMobile ? "80px 20px" : "120px 20px",
          minHeight: isMobile ? "600px" : "700px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden"
        }}
      >
        {/* Background Image - Logo */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          backgroundImage: `url(${instaParkLogo})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.15
        }}></div>
        
        {/* Overlay for better text readability */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, rgba(240, 244, 248, 0.85) 0%, rgba(255, 255, 255, 0.85) 50%, rgba(248, 250, 252, 0.85) 100%)",
          zIndex: 1
        }}></div>

        <div style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1400px", 
          margin: "0 auto",
          width: "100%"
        }}>
          <div style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 251, 252, 0.95) 100%)",
            borderRadius: "40px",
            padding: isMobile ? "60px 30px" : "100px 80px",
            boxShadow: "0 30px 80px rgba(0, 0, 0, 0.12), 0 10px 30px rgba(5, 126, 255, 0.08)",
            border: "1px solid rgba(5, 126, 255, 0.15)",
            position: "relative",
            overflow: "hidden",
            backdropFilter: "blur(10px)"
          }}>
            <div style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center"
            }}>
              {/* Content Section */}
              <div style={{
                maxWidth: "1100px",
                width: "100%"
              }}>
                {/* Enhanced OUR VISION Badge */}
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(135deg, rgba(5, 126, 255, 0.15), rgba(107, 182, 255, 0.15))",
                  padding: "14px 32px",
                  borderRadius: "50px",
                  marginBottom: "40px",
                  border: "2px solid rgba(5, 126, 255, 0.25)",
                  boxShadow: "0 6px 20px rgba(5, 126, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.5)"
                }}>
                  <span style={{
                    color: "#057eff",
                    fontSize: isMobile ? "0.875rem" : "1rem",
                    fontWeight: "800",
                    letterSpacing: "2px",
                    textTransform: "uppercase"
                  }}>
                    OUR VISION
                  </span>
                </div>
                
                {/* Enhanced Main Heading */}
                <h2 style={{
                  fontSize: isMobile ? "2.25rem" : "3.75rem",
                  fontWeight: "900",
                  color: "#111827",
                  marginBottom: "40px",
                  lineHeight: "1.15",
                  letterSpacing: "-2px",
                  background: "linear-gradient(135deg, #111827 0%, #374151 50%, #4b5563 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 2px 10px rgba(0, 0, 0, 0.05)"
                }}>
                  To digitize India's parking infrastructure and redefine urban mobility.
                </h2>
                
                {/* Enhanced Description with better spacing */}
                <div style={{
                  fontSize: isMobile ? "1.0625rem" : "1.25rem",
                  color: "#374151",
                  lineHeight: "2",
                  fontWeight: "400"
                }}>
                  <p style={{
                    marginBottom: "28px",
                    fontSize: isMobile ? "1.0625rem" : "1.25rem",
                    color: "#4b5563",
                    fontWeight: "500"
                  }}>
                    We envision transforming every parking space into a smart, connected, and revenue-generating urban asset powered by AI and real-time data.
                  </p>
                  <p style={{
                    marginBottom: "28px",
                    fontSize: isMobile ? "1.0625rem" : "1.25rem",
                    color: "#4b5563",
                    fontWeight: "500"
                  }}>
                    By eliminating manual processes and inefficiencies, we aim to create seamless parking experiences for users while enabling greater transparency, control, and profitability for operators, property owners, and cities.
                  </p>
                  <p style={{
                    marginBottom: 0,
                    fontSize: isMobile ? "1.0625rem" : "1.25rem",
                    color: "#4b5563",
                    fontWeight: "500"
                  }}>
                    Our vision is to support smarter cities, reduced congestion, optimized space utilization, and sustainable urban growth across India.
                  </p>
                </div>
              </div>
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

      {/* ================= CORE VALUE PROPOSITION SECTION ================= */}
      <section style={{
        position: "relative",
        padding: isMobile ? "60px 0 80px" : "80px 0 120px",
        minHeight: isMobile ? "800px" : "900px",
        overflow: "hidden"
      }}>
        {/* Background Image */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1
        }}>
          <img 
            src={coreValueProposition} 
            alt="InstaParkAI Core Value Proposition" 
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block"
            }}
          />
          {/* Very Light Overlay for minimal text readability */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.05)",
            zIndex: 2
          }}></div>
        </div>

        {/* Content Container */}
        <div style={{
          position: "relative",
          zIndex: 3,
          maxWidth: "1400px",
          margin: "0 auto",
          padding: isMobile ? "0 20px" : "0 40px",
          width: "100%"
        }}>
          {/* Header */}
          <div style={{
            textAlign: "center",
            marginBottom: isMobile ? "40px" : "60px"
          }}>
            <div style={{
              display: "inline-block",
              padding: "8px 24px",
              background: "rgba(5, 126, 255, 0.2)",
              borderRadius: "6px",
              marginBottom: "20px",
              backdropFilter: "blur(10px)"
            }}>
              <span style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#ffffff",
                letterSpacing: "0.5px",
                textTransform: "uppercase"
              }}>
                Core Value Proposition
              </span>
            </div>
            <h2 style={{
              fontSize: isMobile ? "2rem" : "3rem",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "16px",
              lineHeight: "1.2",
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.5)"
            }}>
              Why Choose InstaParkAI?
            </h2>
          </div>

          {/* Horizontal Scrolling Cards */}
          <div
            ref={valueScrollRef}
            style={{
              display: "flex",
              gap: "24px",
              overflowX: "auto",
              overflowY: "hidden",
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
              padding: isMobile ? "20px 20px 40px" : "40px 20px 60px",
              cursor: "grab",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
            onMouseDown={(e) => {
              const container = valueScrollRef.current;
              if (!container) return;
              const startX = e.pageX - container.offsetLeft;
              const scrollLeft = container.scrollLeft;
              let isDown = true;

              const handleMouseMove = (e: MouseEvent) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - container.offsetLeft;
                const walk = (x - startX) * 2;
                container.scrollLeft = scrollLeft - walk;
              };

              const handleMouseUp = () => {
                isDown = false;
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
              };

              document.addEventListener('mousemove', handleMouseMove);
              document.addEventListener('mouseup', handleMouseUp);
            }}
          >
            {[
              { icon: "💰", title: "Zero cash leakage", description: "Complete digital transactions eliminate manual cash handling" },
              { icon: "👁️", title: "Full real-time transparency", description: "Real-time monitoring and reporting for all operations" },
              { icon: "⚡", title: "Efficient & trained workforce", description: "Professional staff trained in modern parking management" },
              { icon: "📉", title: "Reduced owner dependency", description: "Automated systems reduce reliance on manual oversight" },
              { icon: "📈", title: "Guaranteed revenue uplift (up to 30%)", description: "Optimized pricing and utilization boost revenue" },
              { icon: "😊", title: "Seamless customer experience", description: "Smooth, hassle-free parking experience for all users" },
              { icon: "🎛️", title: "Centralized digital control", description: "Complete control from a single digital dashboard" }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  minWidth: isMobile ? "280px" : "320px",
                  background: "rgba(255, 255, 255, 0.85)",
                  borderRadius: "20px",
                  padding: isMobile ? "32px 24px" : "40px 32px",
                  textAlign: "center",
                  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
                  backdropFilter: "blur(10px)",
                  border: "2px solid rgba(255, 255, 255, 0.8)",
                  scrollSnapAlign: "start",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.95)";
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(0, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.85)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.3)";
                }}
              >
                <div style={{
                  fontSize: isMobile ? "3rem" : "4rem",
                  marginBottom: "20px",
                  display: "block"
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  color: "#111827",
                  fontWeight: 800,
                  fontSize: isMobile ? "1.25rem" : "1.5rem",
                  marginBottom: "12px",
                  lineHeight: "1.3"
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: "#4b5563",
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  {item.description}
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