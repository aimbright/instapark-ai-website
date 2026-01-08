import React, { useState, useEffect, useRef } from "react";
import SEO from "../components/SEO";
import reinventingUrban from "../assets/Reinventing Urban Parking in India.png";
import instaParkDigitises from "../assets/InstaParkAI Digitises & Optimises Parking Spaces.png";
import coreValueProp from "../assets/InstaParkAI - Core Value Propositio.png";
import implementation1 from "../assets/Implementation1.png";
import implementation2 from "../assets/Implementation2.png";
import implementation3 from "../assets/Implementation3.png";
import implementation4 from "../assets/Implementation4.png";
import instaParkLogo from "../assets/InstaParkAI plain BG logo.png";
import aimboardImage from "../assets/aimboardimage.png";

const About: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const problemScrollRef = useRef<HTMLDivElement | null>(null);
  const valueScrollRef = useRef<HTMLDivElement | null>(null);
  const problemScrollAnimationRef = useRef<number | null>(null);
  const valueScrollAnimationRef = useRef<number | null>(null);

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

  // Auto-scroll for Problem section
  useEffect(() => {
    if (!problemScrollRef.current || isMobile) return;

    let scrollSpeed = 0.5;
    let isPaused = false;

    const scroll = () => {
      if (!isPaused && problemScrollRef.current) {
        problemScrollRef.current.scrollLeft += scrollSpeed;
        
        if (problemScrollRef.current.scrollLeft >= problemScrollRef.current.scrollWidth - problemScrollRef.current.clientWidth) {
          problemScrollRef.current.scrollLeft = 0;
        }
      }
      problemScrollAnimationRef.current = requestAnimationFrame(scroll);
    };

    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    problemScrollRef.current.addEventListener('mouseenter', handleMouseEnter);
    problemScrollRef.current.addEventListener('mouseleave', handleMouseLeave);
    
    problemScrollAnimationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (problemScrollAnimationRef.current) {
        cancelAnimationFrame(problemScrollAnimationRef.current);
      }
      if (problemScrollRef.current) {
        problemScrollRef.current.removeEventListener('mouseenter', handleMouseEnter);
        problemScrollRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isMobile]);

  // Auto-scroll for Value Proposition section
  useEffect(() => {
    if (!valueScrollRef.current || isMobile) return;

    let scrollSpeed = 0.5;
    let isPaused = false;

    const scroll = () => {
      if (!isPaused && valueScrollRef.current) {
        valueScrollRef.current.scrollLeft += scrollSpeed;
        
        if (valueScrollRef.current.scrollLeft >= valueScrollRef.current.scrollWidth - valueScrollRef.current.clientWidth) {
          valueScrollRef.current.scrollLeft = 0;
        }
      }
      valueScrollAnimationRef.current = requestAnimationFrame(scroll);
    };

    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    valueScrollRef.current.addEventListener('mouseenter', handleMouseEnter);
    valueScrollRef.current.addEventListener('mouseleave', handleMouseLeave);
    
    valueScrollAnimationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (valueScrollAnimationRef.current) {
        cancelAnimationFrame(valueScrollAnimationRef.current);
      }
      if (valueScrollRef.current) {
        valueScrollRef.current.removeEventListener('mouseenter', handleMouseEnter);
        valueScrollRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isMobile]);

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
        padding: isMobile ? "100px 20px 60px" : "140px 20px 80px",
        textAlign: "center",
        position: "relative"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <h1 style={{
            color: "#111827", 
            fontSize: isMobile ? "2.5rem" : "4rem", 
            fontWeight: "800", 
            marginBottom: "24px",
            lineHeight: "1.1",
            letterSpacing: "-1.5px"
          }}>
            Reinventing Urban Parking{" "}
            <span style={{
              background: "linear-gradient(135deg, #057eff, #6bb6ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>in India</span>
          </h1>
          
          <p style={{
            color: '#4b5563', 
            fontSize: isMobile ? "1.125rem" : "1.375rem", 
            maxWidth: '800px', 
            margin: '0 auto 16px',
            lineHeight: "1.7",
            fontWeight: "500"
          }}>
            InstaParkAI was founded with a simple belief:
          </p>
          <p style={{
            color: '#1f2937', 
            fontSize: isMobile ? "1.25rem" : "1.5rem", 
            maxWidth: '900px', 
            margin: '0 auto 32px',
            lineHeight: "1.6",
            fontWeight: "600"
          }}>
            Parking should be smart, transparent, and stress-free.
          </p>
          <p style={{
            color: '#6b7280', 
            fontSize: isMobile ? "1rem" : "1.125rem", 
            maxWidth: '900px', 
            margin: '0 auto 50px',
            lineHeight: "1.7"
          }}>
            India's rapid urbanization has created massive parking challenges. Despite high demand, most parking spaces remain manual, under-monetized, and poorly managed. InstaParkAI exists to fix this gap.
          </p>
          
          <div style={{ 
            maxWidth: "1000px",
            margin: "0 auto",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.12)"
          }}>
            <img 
              src={reinventingUrban} 
              alt="Reinventing Urban Parking in India" 
              style={{
                width: "100%",
                height: "auto",
                display: "block"
              }}
            />
          </div>
        </div>
      </section>

      {/* ================= VISION SECTION ================= */}
      <section 
        id="our-vision"
        ref={(el) => { sectionsRef.current[0] = el as HTMLDivElement | null; }}
        style={{
          background: "linear-gradient(135deg, #f0f4f8 0%, #ffffff 50%, #f8fafc 100%)",
          padding: isMobile ? "80px 20px" : "120px 20px",
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
            background: "linear-gradient(135deg, #ffffff 0%, #fafbfc 100%)",
            borderRadius: "40px",
            padding: isMobile ? "60px 30px" : "100px 80px",
            boxShadow: "0 30px 80px rgba(0, 0, 0, 0.12), 0 10px 30px rgba(5, 126, 255, 0.08)",
            border: "1px solid rgba(5, 126, 255, 0.15)",
        position: "relative",
            overflow: "hidden",
            backdropFilter: "blur(10px)"
      }}>
            {/* Enhanced Decorative background elements */}
        <div style={{
          position: "absolute",
              top: "-100px",
              right: "-100px",
              width: "400px",
              height: "400px",
              background: "linear-gradient(135deg, rgba(5, 126, 255, 0.08), rgba(107, 182, 255, 0.08))",
              borderRadius: "50%",
              zIndex: 0,
              filter: "blur(40px)"
            }}></div>
            <div style={{
              position: "absolute",
              bottom: "-80px",
              left: "-80px",
              width: "350px",
              height: "350px",
              background: "linear-gradient(135deg, rgba(5, 126, 255, 0.06), rgba(107, 182, 255, 0.06))",
              borderRadius: "50%",
              zIndex: 0,
              filter: "blur(40px)"
        }}></div>

        <div style={{
          position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center"
            }}>
              {/* Logo Section - Top Center with enhanced styling */}
          <div style={{ 
            display: "flex",
            justifyContent: "center",
                alignItems: "center",
                marginBottom: isMobile ? "45px" : "60px",
                padding: isMobile ? "20px" : "30px",
                background: "linear-gradient(135deg, rgba(5, 126, 255, 0.03), rgba(107, 182, 255, 0.03))",
                borderRadius: "24px",
                border: "1px solid rgba(5, 126, 255, 0.1)"
          }}>
            <img 
                  src={instaParkLogo} 
                  alt="InstaParkAI Logo"
              style={{
                    width: isMobile ? "220px" : "360px",
                    height: "auto",
                    objectFit: "contain",
                    filter: "drop-shadow(0 12px 32px rgba(5, 126, 255, 0.2))",
                    transition: "transform 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>

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

      {/* ================= MISSION SECTION ================= */}
      <section 
        id="our-mission"
        ref={(el) => { sectionsRef.current[1] = el as HTMLDivElement | null; }}
        style={{
        background: "white",
        padding: isMobile ? "40px 20px" : "60px 20px",
          opacity: 0,
          transform: "translateY(30px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          position: "relative",
          overflow: "hidden"
        }}
        data-visible="false"
      >
        {/* Aimboard Image - Center Background (Clear and Visible) */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 0,
          opacity: 0.65,
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          maxHeight: "100%"
        }}>
          <img 
            src={aimboardImage} 
            alt="Aimboard"
            style={{
              width: "100%",
              height: "100%",
              maxWidth: isMobile ? "100%" : "1200px",
              maxHeight: "100%",
              objectFit: "contain",
              objectPosition: "center"
            }}
          />
        </div>

        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto",
          position: "relative",
          zIndex: 1
        }}>
          <div style={{
            textAlign: "center",
            marginBottom: isMobile ? "40px" : "60px"
          }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, rgba(5, 126, 255, 0.1), rgba(107, 182, 255, 0.1))",
              padding: "8px 20px",
              borderRadius: "50px",
              marginBottom: "24px"
            }}>
              <span style={{
                color: "#057eff",
                fontSize: isMobile ? "0.875rem" : "0.95rem",
                fontWeight: "600",
                letterSpacing: "0.5px"
              }}>
                OUR MISSION
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
              Enable seamless, automated parking operations
              </h2>
          <p style={{
              fontSize: isMobile ? "1.125rem" : "1.25rem",
                color: "#6b7280",
              maxWidth: "900px",
              margin: "0 auto",
                lineHeight: "1.7"
              }}>
              Using AI, IoT, and cloud technologies to deliver measurable value to:
              </p>
            </div>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "20px" : "24px",
            maxWidth: "1000px",
            margin: "0 auto"
          }}>
            {[
              "Malls & commercial spaces",
              "Property owners & developers",
              "Parking operators",
              "Cities & municipalities"
            ].map((item, index) => (
              <div key={index} style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                padding: isMobile ? "24px 20px" : "32px 28px",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                border: "1px solid rgba(5, 126, 255, 0.1)",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                transition: "all 0.3s ease"
              }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  background: "linear-gradient(135deg, #057eff, #6bb6ff)",
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
                  color: "#1f2937",
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

      {/* ================= THE PROBLEM WE SOLVE ================= */}
      <section 
        id="problem-we-solve"
        ref={(el) => { sectionsRef.current[2] = el as HTMLDivElement | null; }}
        style={{
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
            
            <div 
              ref={(el) => { problemScrollRef.current = el; }}
              style={{
                  display: "flex",
                gap: isMobile ? "20px" : "24px",
                overflowX: "auto",
                overflowY: "hidden",
                paddingBottom: "20px",
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "thin",
                scrollBehavior: "smooth"
              }}
            >
              {[
                { icon: "💵", title: "Cash leakage from manual handling" },
                { icon: "🔍", title: "No real-time transparency" },
                { icon: "👥", title: "Heavy dependency on manpower" },
                { icon: "🚗", title: "Congestion from manual access control" },
                { icon: "📉", title: "Unutilized or idle parking space" },
                { icon: "😞", title: "Poor customer satisfaction" }
              ].map((item, index) => (
                <div key={index} style={{
                  flex: "0 0 auto",
                  width: isMobile ? "calc(100vw - 80px)" : "350px",
                  minWidth: isMobile ? "280px" : "350px",
                  background: "white",
                  padding: isMobile ? "28px 20px" : "36px 28px",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                  border: "1px solid rgba(239, 68, 68, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                textAlign: "center",
                  gap: "16px",
                  transition: "all 0.3s ease",
                  scrollSnapAlign: "start"
              }}>
                <div style={{
                    fontSize: isMobile ? "2.5rem" : "3rem"
                }}>
                    {item.icon}
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
     

      {/* ================= CORE VALUE PROPOSITION ================= */}
      <section 
        id="value-proposition"
        ref={(el) => { sectionsRef.current[5] = el as HTMLDivElement | null; }}
                    style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)",
          padding: isMobile ? "60px 0" : "100px 0",
          opacity: 0,
          transform: "translateY(30px)",
          transition: "opacity 0.6s ease, transform 0.6s ease"
        }}
        data-visible="false"
      >
                  <div style={{
          maxWidth: "1200px", 
          margin: "0 auto",
          padding: isMobile ? "0 20px" : "0 20px"
        }}>
          <div style={{
            textAlign: "center",
            marginBottom: isMobile ? "40px" : "60px"
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
              <span style={{ fontSize: "1.5rem" }}>💎</span>
              <span style={{
                color: "#057eff",
                fontSize: isMobile ? "0.875rem" : "0.95rem",
                  fontWeight: "600",
                letterSpacing: "0.5px"
              }}>
                VALUE PROPOSITION
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
              Our Core Value Proposition
          </h2>
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
            </div>
            
        {/* Full-width Image */}
            <div style={{
          width: "100%",
          margin: "0 auto 60px",
          overflow: "hidden"
        }}>
          <img 
            src={coreValueProp} 
            alt="InstaParkAI Core Value Proposition" 
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "cover"
            }}
          />
        </div>

        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto",
          padding: isMobile ? "0 20px" : "0 20px"
        }}>

          <div 
            ref={(el) => { valueScrollRef.current = el; }}
            style={{
              display: "flex",
              gap: isMobile ? "20px" : "24px",
              overflowX: "auto",
              overflowY: "hidden",
              paddingBottom: "20px",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "thin",
              scrollBehavior: "smooth"
            }}
          >
            {[
              { icon: "💰", title: "Zero cash leakage" },
              { icon: "👁️", title: "Full real-time transparency" },
              { icon: "⚡", title: "Efficient & trained workforce" },
              { icon: "📉", title: "Reduced owner dependency" },
              { icon: "📈", title: "Guaranteed revenue uplift (up to 30%)" },
              { icon: "😊", title: "Seamless customer experience" },
              { icon: "🎛️", title: "Centralized digital control" }
            ].map((item, index) => (
              <div key={index} style={{
                flex: "0 0 auto",
                width: isMobile ? "calc(100vw - 80px)" : "350px",
                minWidth: isMobile ? "280px" : "350px",
                background: "white",
                padding: isMobile ? "28px 20px" : "36px 28px",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(5, 126, 255, 0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "16px",
                transition: "all 0.3s ease",
                scrollSnapAlign: "start"
              }}>
                <div style={{
                  fontSize: isMobile ? "2.5rem" : "3rem"
                }}>
                  {item.icon}
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
      </section>

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
            marginBottom: "30px",
            opacity: 0.9,
            lineHeight: "1.6"
          }}>
            Join forward-thinking organizations leveraging AI-powered parking solutions
          </p>
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "16px",
            flexWrap: "wrap"
          }}>
            <button
              onClick={() => window.openContactDialog?.()}
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
                background: "rgba(255, 255, 255, 0.1)",
                color: "white",
                padding: isMobile ? "14px 24px" : "16px 32px",
                borderRadius: "10px",
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
                gap: "8px",
                backdropFilter: "blur(10px)"
              }}
            >
              📞 +91 98458 02901
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

