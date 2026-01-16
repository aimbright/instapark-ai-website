import React, { useState, useEffect, useRef } from "react";
import SEO from "../components/SEO";
import reinventingUrban from "../assets/Reinventing Urban Parking in India.png";
import instaParkDigitises from "../assets/InstaParkAI Digitises & Optimises Parking Spaces.png";
import implementation1 from "../assets/Implementation1.png";
import implementation2 from "../assets/Implementation2.png";
import implementation3 from "../assets/Implementation3.png";
import implementation4 from "../assets/Implementation4.png";
import instaParkLogo from "../assets/InstaParkAI plain BG logo.png";
import aimboardImage from "../assets/aimboardimage.png";

const About: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLDivElement;
          target.setAttribute('data-visible', 'true');
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Add keyframes animation for cards
  useEffect(() => {
    const styleId = 'about-cards-animation';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);


  return (
    <div style={{ 
      background: "#ffffff", 
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      lineHeight: 1.6,
      overflowX: "hidden"
    }}>
      <SEO
        title="About InstaParkAI — Reinventing Urban Parking in India | Our Vision & Mission"
        description="InstaParkAI was founded to digitize India's parking infrastructure and transform every parking space into a smart, connected, revenue-generating urban asset. Learn about our vision, mission, and how we're solving parking challenges across India."
        keywords="InstaParkAI about, parking company India, smart parking vision, parking digitization India, urban parking solutions, parking infrastructure India, parking market opportunity, parking value proposition, parking technology company, parking innovation India"
        ogImage="https://instaparkai.com/og-image-about.png"
      />
      
      {/* ================= ABOUT HERO SECTION ================= */}
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

          {/* Main Headline */}
          <h1 style={{
            color: "#111827", 
            fontSize: isMobile ? "2rem" : "3.5rem", 
            fontWeight: "700", 
            marginBottom: "24px",
            lineHeight: "1.2",
            letterSpacing: "-0.5px",
            maxWidth: "900px",
            margin: "0 auto 24px"
          }}>
            Driving the Future of{" "}
            <span style={{
              background: "linear-gradient(135deg, #057eff, #6bb6ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>Smart Parking in India</span>
          </h1>
          
          {/* Sub-headline */}
          <p style={{
            color: '#4b5563', 
            fontSize: isMobile ? "1.125rem" : "1.25rem",
            maxWidth: '800px', 
            margin: '0 auto 60px',
            lineHeight: "1.7",
            fontWeight: "400"
          }}>
            InstaParkAI is redefining how parking works by building intelligent, connected, and scalable parking ecosystems. Our solutions go beyond technology—we combine AI, operations, and insights to deliver real-world impact.
          </p>

          {/* End-to-End Parking Transformation Section */}
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            marginTop: isMobile ? "60px" : "80px"
          }}>
            <h2 style={{
              color: "#111827",
              fontSize: isMobile ? "1.75rem" : "2.5rem",
              fontWeight: "700",
              marginBottom: "24px",
              lineHeight: "1.2"
            }}>
              End-to-End Parking Transformation
            </h2>
            <p style={{
              color: '#4b5563', 
              fontSize: isMobile ? "1rem" : "1.125rem",
              maxWidth: '800px', 
              margin: '0 auto',
              lineHeight: "1.7",
              fontWeight: "400"
            }}>
              From on-ground operations to cloud-based intelligence, we help businesses and cities transition from manual, inefficient parking systems to smart, automated, and revenue-optimized infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE INSTAPARKAI SECTION ================= */}
      <section
        id="why-choose-instaparkai"
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
          scrollMarginTop: "120px",
          padding: isMobile ? "80px 20px" : "120px 20px",
          position: "relative"
        }}
      >
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h2 style={{
            fontSize: isMobile ? "2rem" : "3rem",
            fontWeight: 800,
            color: "#111827",
            marginBottom: isMobile ? "40px" : "50px",
            lineHeight: "1.2",
            letterSpacing: "-0.5px"
          }}>
            Why Choose InstaParkAI
          </h2>

          {/* Cards Grid - 5 in one row */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(5, 1fr)",
            gap: isMobile ? "24px" : "20px",
            maxWidth: "1400px",
            margin: "0 auto"
          }}>
            {[
              {
                icon: "fa-layer-group",
                title: "Complete Parking Ecosystem",
                description: "Manpower, technology, and operations—everything under one roof."
              },
              {
                icon: "fa-chart-line",
                title: "Revenue-Focused Digitisation",
                description: "Increase parking revenue by up to 30% and eliminate cash leakage through real-time tracking."
              },
              {
                icon: "fa-map-marker-alt",
                title: "Find My Slot Integration",
                description: "Turn your parking space into a discoverable, bookable asset for new customers."
              },
              {
                icon: "fa-cogs",
                title: "End-to-End Operations",
                description: "From valet staff to PMS, we manage parking seamlessly from entry to exit."
              },
              {
                icon: "fa-tools",
                title: "AMC & After-Sales Support",
                description: "Comprehensive and non-comprehensive AMC to ensure zero downtime and long-term reliability."
              }
            ].map((card, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: isMobile ? "32px 24px" : "36px 24px",
                  borderRadius: "16px",
                  border: "1px solid rgba(5, 126, 255, 0.1)",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  textAlign: "center",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "default",
                  transform: "translateY(0) scale(1)",
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease forwards ${index * 0.1}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(5, 126, 255, 0.25)";
                  e.currentTarget.style.borderColor = "#057eff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(5, 126, 255, 0.1)";
                }}
              >
                <div style={{
                  width: isMobile ? "64px" : "72px",
                  height: isMobile ? "64px" : "72px",
                  margin: "0 auto 20px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: isMobile ? "1.75rem" : "2rem",
                  transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.15) rotate(5deg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                }}
                >
                  <i className={`fas ${card.icon}`}></i>
                </div>
                <h3 style={{
                  fontSize: isMobile ? "1.25rem" : "1.25rem",
                  fontWeight: 700,
                  color: "#1f2937",
                  marginBottom: "12px",
                  lineHeight: "1.3",
                  transition: "color 0.3s ease"
                }}>
                  {card.title}
                </h3>
                <p style={{
                  fontSize: isMobile ? "0.9375rem" : "0.9375rem",
                  color: "#6b7280",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT HERO SECTION ================= */}
      <section style={{
        position: "relative",
        padding: isMobile ? "100px 20px 60px" : "140px 20px 80px",
        textAlign: "center",
        minHeight: isMobile ? "600px" : "800px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
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
            src={reinventingUrban} 
            alt="Reinventing Urban Parking in India" 
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block"
            }}
          />
          {/* Dark Overlay for better text readability */}
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
            textShadow: "0 4px 20px rgba(0, 0, 0, 0.5)"
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
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)"
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
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)"
          }}>
            Parking should be smart, transparent, and stress-free.
          </p>
          <p style={{
            color: 'rgba(255, 255, 255, 0.9)', 
            fontSize: isMobile ? "1rem" : "1.125rem", 
            maxWidth: '900px', 
            margin: '0 auto',
            lineHeight: "1.7",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)"
          }}>
            India's rapid urbanization has created massive parking challenges. Despite high demand, most parking spaces remain manual, under-monetized, and poorly managed. InstaParkAI exists to fix this gap.
          </p>
        </div>
      </section>

      {/* ================= VISION SECTION ================= */}
      <section
        id="our-vision"
        ref={(el) => { sectionsRef.current[0] = el as HTMLDivElement | null; }}
        style={{
          scrollMarginTop: "120px",
          position: "relative",
          padding: isMobile ? "80px 20px" : "120px 20px",
          opacity: 0,
          transform: "translateY(30px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f0f9ff 100%)"
        }}
        data-visible="false"
      >
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%"
        }}>
          {/* Header Section */}
          <div style={{
            textAlign: "center",
            marginBottom: isMobile ? "50px" : "70px"
          }}>
            <h2 style={{
              fontSize: isMobile ? "2rem" : "3rem",
              fontWeight: 800,
              color: "#111827",
              marginBottom: isMobile ? "40px" : "50px",
              lineHeight: "1.2",
              letterSpacing: "-0.5px"
            }}>
              Our Vision
            </h2>
          </div>

          {/* Main Content Card */}
          <div style={{
            background: "white",
            borderRadius: "24px",
            padding: isMobile ? "40px 24px" : "60px 50px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(5, 126, 255, 0.06)",
            border: "1px solid rgba(5, 126, 255, 0.1)",
            marginBottom: isMobile ? "40px" : "50px"
          }}>
            <p style={{
              fontSize: isMobile ? "1.125rem" : "1.375rem",
              color: "#374151",
              lineHeight: "1.8",
              fontWeight: "500",
              marginBottom: "32px",
              textAlign: "center"
            }}>
              We envision transforming every parking space into a{" "}
              <strong style={{ color: "#057eff" }}>smart, connected, and revenue-generating</strong>{" "}
              urban asset powered by AI and real-time data.
            </p>
            
            <p style={{
              fontSize: isMobile ? "1rem" : "1.125rem",
              color: "#6b7280",
              lineHeight: "1.8",
              fontWeight: "400",
              textAlign: "center"
            }}>
              By eliminating manual processes and inefficiencies, we aim to create seamless parking experiences for users while enabling greater transparency, control, and profitability for operators, property owners, and cities.
            </p>
          </div>

          {/* Vision Goals Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "20px" : "24px"
          }}>
            {[
              {
                icon: "fa-city",
                title: "Smarter Cities",
                description: "Supporting intelligent urban planning and development"
              },
              {
                icon: "fa-traffic-light",
                title: "Reduced Congestion",
                description: "Optimizing traffic flow through efficient parking management"
              },
              {
                icon: "fa-chart-pie",
                title: "Optimized Space Utilization",
                description: "Maximizing the value of every parking space"
              },
              {
                icon: "fa-leaf",
                title: "Sustainable Growth",
                description: "Promoting eco-friendly and sustainable urban development"
              }
            ].map((goal, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: isMobile ? "28px 24px" : "32px 28px",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
                  border: "1px solid rgba(5, 126, 255, 0.1)",
                  transition: "all 0.3s ease",
                  textAlign: "center"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(5, 126, 255, 0.15)";
                  e.currentTarget.style.borderColor = "#057eff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.06)";
                  e.currentTarget.style.borderColor = "rgba(5, 126, 255, 0.1)";
                }}
              >
                <div style={{
                  width: "64px",
                  height: "64px",
                  background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "1.75rem",
                  margin: "0 auto 20px",
                  boxShadow: "0 8px 20px rgba(5, 126, 255, 0.25)"
                }}>
                  <i className={`fas ${goal.icon}`}></i>
                </div>
                <h3 style={{
                  fontSize: isMobile ? "1.25rem" : "1.375rem",
                  fontWeight: "700",
                  color: "#111827",
                  marginBottom: "12px"
                }}>
                  {goal.title}
                </h3>
                <p style={{
                  fontSize: isMobile ? "0.9375rem" : "1rem",
                  color: "#6b7280",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MISSION SECTION ================= */}
      <section
        id="our-mission"
        ref={(el) => { sectionsRef.current[1] = el as HTMLDivElement | null; }}
        style={{
          scrollMarginTop: "120px",
          position: "relative",
          padding: isMobile ? "80px 20px" : "120px 20px",
          opacity: 0,
          transform: "translateY(30px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f0f9ff 100%)"
        }}
        data-visible="false"
      >
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%"
        }}>
          {/* Header Section */}
          <div style={{
            textAlign: "center",
            marginBottom: isMobile ? "50px" : "70px"
          }}>
            <h2 style={{
              fontSize: isMobile ? "2rem" : "3rem",
              fontWeight: 800,
              color: "#111827",
              marginBottom: isMobile ? "40px" : "50px",
              lineHeight: "1.2",
              letterSpacing: "-0.5px"
            }}>
              Our Mission
            </h2>
          </div>

          {/* Main Content with Image */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "300px 1fr",
            gap: isMobile ? "30px" : "40px",
            alignItems: "center",
            marginBottom: isMobile ? "40px" : "50px"
          }}>
            {/* Image on Left */}
            <div style={{
              display: isMobile ? "none" : "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <img 
                src={aimboardImage} 
                alt="Aimboard Mission" 
                style={{
                  width: "100%",
                  maxWidth: "280px",
                  height: "auto",
                  borderRadius: "16px",
                  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(5, 126, 255, 0.1)"
                }}
              />
            </div>

            {/* Content Card */}
            <div style={{
              background: "white",
              borderRadius: "24px",
              padding: isMobile ? "40px 24px" : "60px 50px",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(5, 126, 255, 0.06)",
              border: "1px solid rgba(5, 126, 255, 0.1)"
            }}>
              <p style={{
                fontSize: isMobile ? "1.125rem" : "1.375rem",
                color: "#374151",
                lineHeight: "1.8",
                fontWeight: "500",
                marginBottom: "32px",
                textAlign: "center"
              }}>
                Using{" "}
                <strong style={{ color: "#057eff" }}>AI, IoT, and cloud technologies</strong>{" "}
                with{" "}
                <strong style={{ color: "#057eff" }}>EV ready parking slots</strong>,{" "}
                while delivering exceptional user experiences and measurable value.
              </p>
              
              <p style={{
                fontSize: isMobile ? "1rem" : "1.125rem",
                color: "#6b7280",
                lineHeight: "1.8",
                fontWeight: "400",
                textAlign: "center"
              }}>
                We deliver exceptional user experiences and measurable value to Corporate, AirPort, Malls, Commercial Space and residential societies.
              </p>
            </div>
          </div>

          {/* Target Segments Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: isMobile ? "20px" : "24px"
          }}>
            {[
              {
                icon: "fa-building",
                title: "Corporate",
                description: "Enterprise parking solutions for business campuses"
              },
              {
                icon: "fa-plane",
                title: "Airport",
                description: "High-traffic airport parking management"
              },
              {
                icon: "fa-store",
                title: "Malls",
                description: "Shopping center parking optimization"
              },
              {
                icon: "fa-briefcase",
                title: "Commercial Space",
                description: "Office buildings and commercial complexes"
              },
              {
                icon: "fa-home",
                title: "Residential Societies",
                description: "Apartment and housing society parking"
              },
              {
                icon: "fa-charging-station",
                title: "EV Ready",
                description: "Future-ready parking with EV charging infrastructure"
              }
            ].map((segment, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: isMobile ? "28px 24px" : "32px 28px",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
                  border: "1px solid rgba(5, 126, 255, 0.1)",
                  transition: "all 0.3s ease",
                  textAlign: "center"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(5, 126, 255, 0.15)";
                  e.currentTarget.style.borderColor = "#057eff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.06)";
                  e.currentTarget.style.borderColor = "rgba(5, 126, 255, 0.1)";
                }}
              >
                <div style={{
                  width: "64px",
                  height: "64px",
                  background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "1.75rem",
                  margin: "0 auto 20px",
                  boxShadow: "0 8px 20px rgba(5, 126, 255, 0.25)"
                }}>
                  <i className={`fas ${segment.icon}`}></i>
                </div>
                <h3 style={{
                  fontSize: isMobile ? "1.25rem" : "1.375rem",
                  fontWeight: "700",
                  color: "#111827",
                  marginBottom: "12px"
                }}>
                  {segment.title}
                </h3>
                <p style={{
                  fontSize: isMobile ? "0.9375rem" : "1rem",
                  color: "#6b7280",
                  lineHeight: "1.6",
                  margin: 0
                }}>
                  {segment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= THE PROBLEM WE SOLVE ================= */}
      <section
        id="problem-we-solve"
        ref={(el) => { sectionsRef.current[2] = el as HTMLDivElement | null; }}
        style={{
          scrollMarginTop: "120px",
          background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
        padding: isMobile ? "60px 20px" : "100px 20px",
          opacity: 0,
          transform: "translateY(30px)",
          transition: "opacity 0.6s ease, transform 0.6s ease"
        }}
        data-visible="false"
      >
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto"
        }}>
          <div style={{
                textAlign: "center",
            marginBottom: isMobile ? "40px" : "60px"
              }}>
              <h2 style={{
              fontSize: isMobile ? "2rem" : "3rem",
              fontWeight: "800",
              color: "#111827",
                marginBottom: "24px",
              lineHeight: "1.2",
              letterSpacing: "-1px"
            }}>
              The Problem We Solve
              </h2>
              <p style={{
              fontSize: isMobile ? "1.125rem" : "1.25rem",
                color: "#6b7280",
              maxWidth: "800px",
              margin: "0 auto",
                lineHeight: "1.7"
              }}>
              Parking owners today face critical challenges:
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
                { icon: "fa-money-bill-wave", title: "Cash leakage from manual handling" },
                { icon: "fa-search", title: "No real-time transparency" },
                { icon: "fa-users", title: "Heavy dependency on manpower" },
                { icon: "fa-car", title: "Congestion from manual access control" },
                { icon: "fa-chart-line", title: "Unutilized or idle parking space" },
                { icon: "fa-frown", title: "Poor customer satisfaction" }
              ].map((item, index) => (
                <div key={index} style={{
                  background: "white",
                  padding: isMobile ? "32px 24px" : "40px 32px",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  border: "1px solid #e5e7eb",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "16px",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(239, 68, 68, 0.2)";
                  e.currentTarget.style.borderColor = "#ef4444";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)";
                  e.currentTarget.style.borderColor = "#e5e7eb";
                }}
              >
                <div style={{
                  width: "64px",
                  height: "64px",
                  background: "linear-gradient(135deg, #ef4444, #dc2626)",
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
                  fontSize: isMobile ? "0.95rem" : "1.0625rem",
                  fontWeight: 600,
                  lineHeight: "1.5"
                }}>
                  {item.title}
                </div>
              </div>
              ))}
            </div>
        </div>
      </section>

      {/* ================= MARKET OPPORTUNITY ================= */}
      <section 
        id="market-opportunity"
        ref={(el) => { sectionsRef.current[3] = el as HTMLDivElement | null; }}
        style={{
          scrollMarginTop: "120px",
          background: "linear-gradient(135deg, #057eff 0%, #6bb6ff 100%)",
          color: "white",
          padding: isMobile ? "80px 20px" : "120px 20px",
          opacity: 0,
          transform: "translateY(30px)",
          transition: "opacity 0.6s ease, transform 0.6s ease"
        }}
        data-visible="false"
      >
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto",
          textAlign: "center"
        }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255, 255, 255, 0.2)",
            padding: "8px 20px",
            borderRadius: "50px",
                marginBottom: "24px",
            backdropFilter: "blur(10px)"
          }}>
            <span style={{ fontSize: "1.5rem" }}>📈</span>
            <span style={{
              color: "white",
              fontSize: isMobile ? "0.875rem" : "0.95rem",
              fontWeight: "600",
              letterSpacing: "0.5px"
            }}>
              MARKET OPPORTUNITY
            </span>
          </div>
          <h2 style={{
            fontSize: isMobile ? "2rem" : "3rem",
            fontWeight: "800",
            marginBottom: "32px",
            lineHeight: "1.2",
            letterSpacing: "-1px"
          }}>
            The Market Opportunity
          </h2>
            <div style={{
            fontSize: isMobile ? "3rem" : "5rem",
            fontWeight: "900",
            color: "white",
            marginBottom: "16px",
            textShadow: "0 4px 20px rgba(0, 0, 0, 0.2)"
          }}>
            $2.5 Billion
                  </div>
                <p style={{
            fontSize: isMobile ? "1.25rem" : "1.5rem",
            marginBottom: "60px",
            opacity: 0.95,
            lineHeight: "1.6",
            fontWeight: "500"
          }}>
            Urban Parking Market is waiting to be organized.
          </p>
            
              <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "20px" : "24px",
            maxWidth: "1000px",
            margin: "0 auto"
          }}>
            {[
              "Urban India needs structured parking",
              "Digitization unlocks 30% higher revenue",
              "Empty plots & basements can generate income",
              "Commercial spaces demand efficient parking flow"
            ].map((item, index) => (
              <div key={index} style={{
                background: "rgba(255, 255, 255, 0.15)",
                padding: isMobile ? "28px 24px" : "36px 32px",
                borderRadius: "16px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                gap: "16px"
              }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(255, 255, 255, 0.25)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  flexShrink: 0
                }}>
                  ✓
                </div>
                <span style={{ 
                fontSize: isMobile ? "1rem" : "1.125rem",
                  fontWeight: "500"
              }}>
                  {item}
                </span>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
     

      {/* ================= LONG-TERM VISION ================= */}
      <section 
        ref={(el) => { sectionsRef.current[6] = el as HTMLDivElement | null; }}
        style={{
          background: "white",
        padding: isMobile ? "60px 20px" : "100px 20px",
          opacity: 0,
          transform: "translateY(30px)",
          transition: "opacity 0.6s ease, transform 0.6s ease"
        }}
        data-visible="false"
      >
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto",
          textAlign: "center"
        }}>
          <div style={{
            background: "linear-gradient(135deg, rgba(5, 126, 255, 0.05), rgba(107, 182, 255, 0.05))",
            borderRadius: "24px",
            padding: isMobile ? "50px 24px" : "80px 60px",
            border: "1px solid rgba(5, 126, 255, 0.1)"
          }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "linear-gradient(135deg, rgba(5, 126, 255, 0.1), rgba(107, 182, 255, 0.1))",
              padding: "8px 20px",
              borderRadius: "50px",
              marginBottom: "24px"
            }}>
              <span style={{ fontSize: "1.5rem" }}>🚀</span>
              <span style={{
                color: "#057eff",
                fontSize: isMobile ? "0.875rem" : "0.95rem",
                  fontWeight: "600",
                letterSpacing: "0.5px"
              }}>
                LONG-TERM VISION
              </span>
                </div>
          <h2 style={{
              fontSize: isMobile ? "2rem" : "3rem",
              fontWeight: "800",
              color: "#111827",
                marginBottom: "24px",
              lineHeight: "1.2",
              letterSpacing: "-1px"
            }}>
              Our Long-Term Vision
              </h2>
              <p style={{
              fontSize: isMobile ? "1.25rem" : "1.5rem",
              color: "#4b5563",
              maxWidth: "900px",
              margin: "0 auto",
                lineHeight: "1.7",
              fontWeight: "500"
            }}>
              Beyond parking, we are creating smart urban ecosystems that optimize every square foot of city space.
            </p>
          </div>
        </div>
      </section>




      <section
        id="what-we-do"
        ref={(el) => { sectionsRef.current[4] = el as HTMLDivElement | null; }}
        style={{
          scrollMarginTop: "120px",
          background: "#fafbfc",
          padding: isMobile ? "50px 0 0" : "70px 0 0",
          position: "relative",
          opacity: 0,
          transform: "translateY(30px)",
          transition: "opacity 0.6s ease, transform 0.6s ease"
        }}
        data-visible="false"
      >
        {/* Header Section */}
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto",
          textAlign: "center",
          padding: isMobile ? "0 20px 30px" : "0 20px 40px"
        }}>
          {/* Tag/Label - Improved Contrast */}
          <div style={{
            display: "inline-block",
            padding: "10px 28px",
            background: "rgba(5, 126, 255, 0.12)",
            borderRadius: "8px",
            marginBottom: "24px",
            border: "1px solid rgba(5, 126, 255, 0.2)"
          }}>
            <span style={{
              fontSize: "0.95rem",
              fontWeight: 700,
              color: "#057eff",
              letterSpacing: "0.8px",
              textTransform: "uppercase"
            }}>
              What We Do
            </span>
          </div>

          {/* Main Heading - Improved Visibility */}
          <h2 style={{
            fontSize: isMobile ? "2.75rem" : "3.75rem",
            fontWeight: 800,
            color: "#000000",
            marginBottom: "28px",
            lineHeight: "1.1",
            letterSpacing: "-1.2px",
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)"
          }}>
            InstaParkAI Digitizes & Optimizes Parking Spaces
          </h2>

          {/* Subtitle - Improved Contrast */}
          <p style={{
            fontSize: isMobile ? "1.25rem" : "1.375rem",
            color: "#1f2937",
            maxWidth: "750px",
            margin: "0 auto",
            lineHeight: "1.7",
            fontWeight: "500"
          }}>
            Simple steps to transform your parking experience
          </p>
        </div>

        {/* Image with Cards Overlay */}
        <div style={{
          position: "relative",
          width: "100%",
          minHeight: isMobile ? "600px" : "800px",
          marginBottom: "0"
        }}>
          {/* Background Image - Darker Overlay */}
          <img
            src={instaParkDigitises}
            alt="InstaParkAI Digitizes & Optimizes Parking Spaces"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 1
            }}
          />

          {/* DARKER Overlay for MUCH better text readability */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4))",
            zIndex: 2
          }}></div>

          {/* Steps Grid Overlay */}
          <div style={{
            position: "relative",
            zIndex: 3,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: isMobile ? "50px 20px 0" : "80px 20px 0"
          }}>
          <div style={{
            display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: isMobile ? "24px" : "32px"
          }}>
            {[
              {
                  number: "1",
                  title: "Smart Parking Management System (PMS)"
                },
                {
                  number: "2",
                  title: "Valet operations with trained drivers"
                },
                {
                  number: "3",
                  title: "Custom valet app & admin dashboard"
                },
                {
                  number: "4",
                  title: "Real-time tracking & analytics"
                },
                {
                  number: "5",
                  title: "Revenue monitoring"
                },
                {
                  number: "6",
                  title: "Trained on-ground manpower"
                }
              ].map((step, index) => (
                <div
                  key={index}
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "20px",
                    padding: isMobile ? "40px 32px" : "56px 40px",
                    textAlign: "center",
                    border: "3px solid #057eff",
                transition: "all 0.3s ease",
                    boxShadow: "0 16px 48px rgba(0, 0, 0, 0.3)",
                    backdropFilter: "blur(5px)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 24px 60px rgba(5, 126, 255, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 16px 48px rgba(0, 0, 0, 0.3)";
                  }}
                >
                  {/* Step Number Circle - More Visible */}
                <div style={{
                    width: "72px",
                    height: "72px",
                    background: "linear-gradient(135deg, #057eff, #0056cc)",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "2rem",
                  margin: "0 auto 24px",
                    boxShadow: "0 8px 24px rgba(5, 126, 255, 0.8)",
                    border: "3px solid white"
                }}>
                    {step.number}
                </div>
                  
                  {/* Step Title - Black Text for Maximum Contrast */}
                <h3 style={{
                    color: "#000000",
                    fontWeight: 800,
                    marginBottom: "0",
                    fontSize: isMobile ? "1.375rem" : "1.625rem",
                    lineHeight: "1.4",
                    letterSpacing: "-0.3px"
                  }}>
                    {step.title}
                </h3>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SOME OF OUR IMPLEMENTATION ================= */}
      <section 
        id="our-implementations"
        ref={(el) => { sectionsRef.current[7] = el as HTMLDivElement | null; }}
        style={{
          scrollMarginTop: "120px",
          background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
        padding: isMobile ? "60px 20px" : "100px 20px",
          opacity: 0,
          transform: "translateY(30px)",
          transition: "opacity 0.6s ease, transform 0.6s ease"
        }}
        data-visible="false"
      >
          <div style={{
          maxWidth: "1400px", 
          margin: "0 auto"
      }}>
        <div style={{ 
            textAlign: "center",
            marginBottom: isMobile ? "50px" : "70px"
              }}>
                <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "linear-gradient(135deg, rgba(5, 126, 255, 0.1), rgba(107, 182, 255, 0.1))",
              padding: "8px 20px",
              borderRadius: "50px",
              marginBottom: "24px"
            }}>
              <span style={{ fontSize: "1.5rem" }}>🏗️</span>
              <span style={{
                color: "#057eff",
                fontSize: isMobile ? "0.875rem" : "0.95rem",
                  fontWeight: "600",
                letterSpacing: "0.5px"
              }}>
                OUR IMPLEMENTATIONS
              </span>
            </div>
          <h2 style={{
              fontSize: isMobile ? "2rem" : "3rem",
              fontWeight: "800",
              color: "#111827",
              marginBottom: "24px",
              lineHeight: "1.2",
              letterSpacing: "-1px"
            }}>
              Some of our Implementation
          </h2>
          <p style={{
              fontSize: isMobile ? "1.125rem" : "1.25rem",
              color: "#6b7280",
            maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.7"
          }}>
              Real-world deployments showcasing our AI-powered parking solutions
          </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "24px" : "32px"
          }}>
            {[
              { image: implementation1, alt: "Implementation 1" },
              { image: implementation2, alt: "Implementation 2" },
              { image: implementation3, alt: "Implementation 3" },
              { image: implementation4, alt: "Implementation 4" }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(5, 126, 255, 0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 16px 40px rgba(5, 126, 255, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.1)";
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover"
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BUSINESS OFFERING - DUAL REVENUE STREAMS ================= */}
      <section
        id="business-offering"
        ref={(el) => { sectionsRef.current[8] = el as HTMLDivElement | null; }}
        style={{
          background: "white",
          padding: isMobile ? "80px 20px" : "120px 20px",
          opacity: 1,
          transform: "translateY(0)",
          scrollMarginTop: "120px"
        }}
      >
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto"
        }}>
          <div style={{
            textAlign: "center",
            marginBottom: isMobile ? "50px" : "70px"
          }}>
            <h2 style={{
              fontSize: isMobile ? "2rem" : "3rem",
              fontWeight: "800",
              color: "#111827",
              marginBottom: "16px",
              lineHeight: "1.2",
              letterSpacing: "-1px"
            }}>
              Business Offering
            </h2>
            <h3 style={{
              fontSize: isMobile ? "1.5rem" : "2rem",
              fontWeight: "700",
              color: "#057eff",
              marginBottom: "24px",
              lineHeight: "1.3"
            }}>
              Dual Revenue Streams
            </h3>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "32px" : "40px",
            marginBottom: "60px"
          }}>
            {/* A) SaaS Card */}
            <div style={{
              background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
              padding: isMobile ? "40px 28px" : "50px 40px",
              borderRadius: "20px",
              border: "2px solid rgba(5, 126, 255, 0.15)",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(5, 126, 255, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.08)";
            }}
            >
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "24px"
              }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "1.5rem",
                  fontWeight: "bold"
                }}>
                  A
                </div>
                <h3 style={{
                  fontSize: isMobile ? "1.5rem" : "1.75rem",
                  fontWeight: "700",
                  color: "#111827",
                  margin: 0
                }}>
                  SaaS – Smart Parking Management System
                </h3>
              </div>
              <p style={{
                fontSize: isMobile ? "0.95rem" : "1rem",
                color: "#6b7280",
                marginBottom: "24px",
                lineHeight: "1.7"
              }}>
                For operators with existing manpower:
              </p>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0
              }}>
                {[
                  "Subscription-based parking management software",
                  "Valet App & Dashboard",
                  "Access control, QR entry, digital payments like FASTags payment system",
                  "Real-time dashboard & analytics",
                  "Revenue sharing model or monthly cost for software"
                ].map((item, index) => (
                  <li key={index} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "16px",
                    fontSize: isMobile ? "0.95rem" : "1rem",
                    color: "#374151",
                    lineHeight: "1.6"
                  }}>
                    <i className="fas fa-check-circle" style={{
                      color: "#057eff",
                      fontSize: "1.25rem",
                      marginTop: "2px",
                      flexShrink: 0
                    }}></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* B) Managed Parking Services Card */}
            <div style={{
              background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
              padding: isMobile ? "40px 28px" : "50px 40px",
              borderRadius: "20px",
              border: "2px solid rgba(5, 126, 255, 0.15)",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(5, 126, 255, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.08)";
            }}
            >
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "24px"
              }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "1.5rem",
                  fontWeight: "bold"
                }}>
                  B
                </div>
                <h3 style={{
                  fontSize: isMobile ? "1.5rem" : "1.75rem",
                  fontWeight: "700",
                  color: "#111827",
                  margin: 0
                }}>
                  Managed Parking Services – End-to-end Ops
                </h3>
              </div>
              <p style={{
                fontSize: isMobile ? "0.95rem" : "1rem",
                color: "#6b7280",
                marginBottom: "24px",
                lineHeight: "1.7"
              }}>
                End-to-end operations by InstaParkAI:
              </p>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                marginBottom: "24px"
              }}>
                {[
                  "Hardware setup + trained manpower + tech",
                  "Flexible Revenue sharing models",
                  "Best fit for Airports, Tollgates, malls, Hospitals, Hotels, Restaurants and any Commercial spaces."
                ].map((item, index) => (
                  <li key={index} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "16px",
                    fontSize: isMobile ? "0.95rem" : "1rem",
                    color: "#374151",
                    lineHeight: "1.6"
                  }}>
                    <i className="fas fa-check-circle" style={{
                      color: "#057eff",
                      fontSize: "1.25rem",
                      marginTop: "2px",
                      flexShrink: 0
                    }}></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div style={{
                background: "rgba(5, 126, 255, 0.08)",
                padding: "20px",
                borderRadius: "12px",
                borderLeft: "4px solid #057eff"
              }}>
                <p style={{
                  fontSize: isMobile ? "0.95rem" : "1rem",
                  color: "#1f2937",
                  margin: 0,
                  lineHeight: "1.7",
                  fontWeight: "500"
                }}>
                  <strong>Special expertise:</strong> Managing large-crowd events, temple parking, fairs, and high-traffic public gatherings with smooth, controlled, and fully digital operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY PARTNER WITH US ================= */}
      <section 
        id="why-partner-with-us"
        ref={(el) => { sectionsRef.current[9] = el as HTMLDivElement | null; }}
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)",
          padding: isMobile ? "80px 20px" : "120px 20px",
          opacity: 1,
          transform: "translateY(0)",
          scrollMarginTop: "120px"
        }}
      >
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto"
        }}>
          <div style={{
            textAlign: "center",
            marginBottom: isMobile ? "50px" : "70px"
          }}>
            <h2 style={{
              fontSize: isMobile ? "2rem" : "3rem",
              fontWeight: "800",
              color: "#111827",
              marginBottom: "24px",
              lineHeight: "1.2",
              letterSpacing: "-1px"
            }}>
              Why Partner With Us?
            </h2>
          </div>

          {/* Benefits Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
            gap: isMobile ? "20px" : "24px",
            marginBottom: isMobile ? "60px" : "80px"
          }}>
            {[
              "Zero hassle setup",
              "Minimal investment",
              "100% transparency",
              "Skilled workforce",
              "Peak operational efficiency",
              "Higher occupancy & customer satisfaction",
              "Guaranteed income growth"
            ].map((benefit, index) => (
              <div key={index} style={{
                background: "white",
                padding: isMobile ? "28px 20px" : "32px 24px",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(5, 126, 255, 0.1)",
                textAlign: "center",
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
                  width: "56px",
                  height: "56px",
                  background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "1.5rem",
                  margin: "0 auto 16px"
                }}>
                  <i className="fas fa-check-circle"></i>
                </div>
                <p style={{
                  color: "#1f2937",
                  fontSize: isMobile ? "0.95rem" : "1rem",
                  fontWeight: 600,
                  margin: 0,
                  lineHeight: "1.5"
                }}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Partnership Models */}
          <div 
            id="partnership-models"
            style={{
              textAlign: "center",
              marginBottom: isMobile ? "40px" : "60px",
              scrollMarginTop: "120px"
            }}
          >
            <h3 style={{
              fontSize: isMobile ? "1.75rem" : "2.25rem",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "16px",
              lineHeight: "1.3"
            }}>
              Partnership Models
            </h3>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "32px" : "40px"
          }}>
            {/* Subscription Model Card */}
            <div style={{
              background: "white",
              padding: isMobile ? "40px 28px" : "50px 40px",
              borderRadius: "20px",
              border: "2px solid rgba(5, 126, 255, 0.2)",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(5, 126, 255, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.08)";
            }}
            >
              <div style={{
                width: "64px",
                height: "64px",
                background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "1.75rem",
                margin: "0 auto 24px"
              }}>
                <i className="fas fa-cloud"></i>
              </div>
              <h4 style={{
                fontSize: isMobile ? "1.375rem" : "1.625rem",
                fontWeight: "700",
                color: "#111827",
                marginBottom: "16px",
                textAlign: "center"
              }}>
                Subscription Model (SaaS)
              </h4>
              <p style={{
                fontSize: isMobile ? "1rem" : "1.125rem",
                color: "#6b7280",
                lineHeight: "1.7",
                textAlign: "center",
                marginBottom: "20px"
              }}>
                For operators wanting only software
              </p>
              <div style={{
                background: "rgba(5, 126, 255, 0.08)",
                padding: "20px",
                borderRadius: "12px",
                textAlign: "left"
              }}>
                <p style={{
                  fontSize: isMobile ? "0.95rem" : "1rem",
                  color: "#374151",
                  margin: 0,
                  lineHeight: "1.7"
                }}>
                  <i className="fas fa-calendar-alt" style={{ color: "#057eff", marginRight: "8px" }}></i>
                  Monthly/Quarterly subscription based on number user traffic
                </p>
              </div>
            </div>

            {/* Managed Parking Model Card */}
            <div style={{
              background: "white",
              padding: isMobile ? "40px 28px" : "50px 40px",
              borderRadius: "20px",
              border: "2px solid rgba(5, 126, 255, 0.2)",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(5, 126, 255, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.08)";
            }}
            >
              <div style={{
                width: "64px",
                height: "64px",
                background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "1.75rem",
                margin: "0 auto 24px"
              }}>
                <i className="fas fa-handshake"></i>
              </div>
              <h4 style={{
                fontSize: isMobile ? "1.375rem" : "1.625rem",
                fontWeight: "700",
                color: "#111827",
                marginBottom: "16px",
                textAlign: "center"
              }}>
                Managed Parking Model (Revenue sharing)
              </h4>
              <p style={{
                fontSize: isMobile ? "1rem" : "1.125rem",
                color: "#6b7280",
                lineHeight: "1.7",
                textAlign: "center",
                marginBottom: "20px"
              }}>
                InstaParkAI manages complete operations
              </p>
              <div style={{
                background: "rgba(5, 126, 255, 0.08)",
                padding: "20px",
                borderRadius: "12px",
                textAlign: "left"
              }}>
                <p style={{
                  fontSize: isMobile ? "0.95rem" : "1rem",
                  color: "#374151",
                  margin: 0,
                  lineHeight: "1.7"
                }}>
                  <i className="fas fa-chart-line" style={{ color: "#057eff", marginRight: "8px" }}></i>
                  Revenue-sharing or fixed payout model
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
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
            Ready to Transform Your Parking?
          </h2>
          <p style={{
            fontSize: isMobile ? "1rem" : "1.125rem",
            marginBottom: "40px",
            opacity: 0.9,
            lineHeight: "1.6"
          }}>
            Join forward-thinking organizations leveraging AI-powered parking solutions
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
    </div>
  );
};

export default About;

