import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import userJourney from "../assets/user joureny.png";
import instaParkLogo from "../assets/InstaParkAI plain BG logo.png";
import problemToday1 from "../assets/The Problem Today1.png";
import problemToday2 from "../assets/The Problem Today2.png";
import howItWorks from "../assets/How It Works.png";
import instaCharge from "../assets/InstaCharge - EV Charging Network.png";
import instaDarkStore from "../assets/A vision of future InstaDarkStore at parking.png";
import instaKitchen from "../assets/A vision of future Kitchen pods at Instapark.AI .png";
import partners1 from "../assets/Partners 1.png";
import partners2 from "../assets/Partners2.png";
import partners3 from "../assets/Partners3.png";
import partners4 from "../assets/IDEMIA_Logo.jpg";

import partners5 from "../assets/co_logo.png";
import partners6 from "../assets/klaus_logo.png";


import accorLogo from "../assets/client accor logo.png";
import ibisLogo from "../assets/client ibis logo.png";
import prestigeLogo from "../assets/client prestige group logo.png";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const partnersClientsScrollRef = React.useRef<HTMLDivElement>(null);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      if (section.id && section.id !== 'home') {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame
    let animationId: number;

    const autoScroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset to start when reaching the end
      if (scrollPosition >= container.scrollWidth - container.clientWidth) {
        scrollPosition = 0;
      }
      
      container.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(autoScroll);
    };

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(autoScroll);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    animationId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const container = partnersClientsScrollRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    let animationId: number;
    let isPaused = false;

    const autoScroll = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;
        
        // Get the width of one set of logos (half of total scrollWidth since we duplicate)
        const singleSetWidth = container.scrollWidth / 2;
        
        // When we've scrolled past one complete set, reset to 0 seamlessly
        if (scrollPosition >= singleSetWidth) {
          scrollPosition = scrollPosition - singleSetWidth;
        }
        
        container.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    animationId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationId);
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
      <SEO
        title="InstaParkAI — Smart. Scalable. Stress-Free Parking Solutions | AI-Powered Parking Management"
        description="InstaParkAI is an AI-powered smart parking platform that digitizes, automates, and monetizes parking infrastructure across India. Transform parking into a connected, intelligent, revenue-generating ecosystem with zero cash leakage and real-time visibility."
        keywords="smart parking, AI parking system, parking automation, parking management system, automated parking, parking digitization, parking revenue optimization, ANPR parking, RFID parking, parking analytics, valet parking, EV charging parking, parking booking app, parking management software, smart city parking, commercial parking, mall parking, hospital parking, airport parking, parking IoT, computer vision parking, parking platform India, InstaParkAI, parking solutions, parking technology"
        ogImage="https://instaparkai.com/og-image.png"
      />
      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        style={{
          padding: isMobile ? "80px 20px 40px" : "100px 20px 60px",
          background: "white",
          position: "relative",
          overflow: "hidden",
          minHeight: isMobile ? "auto" : "100vh",
          display: "flex",
          alignItems: "center"
        }}
      >
        {/* User Journey Background Image */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${userJourney})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 1.0,
          zIndex: 1,
          filter: "none",
          backdropFilter: "none"
        }}></div>

        <div style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          {/* Logo */}
          <div style={{
            marginTop: isMobile ? "40px" : "30px",
            marginBottom: isMobile ? "15px" : "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
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

          {/* Border Line */}
            <div style={{
            width: isMobile ? "100px" : "150px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #057eff, transparent)",
            margin: "0 auto",
            marginTop: "-10px",
            marginBottom: isMobile ? "10px" : "15px"
          }}></div>

              <h1
                style={{
                  fontSize: isMobile ? "1.8rem" : "4rem",
                  fontWeight: 800,
                  color: "#1f2937",
              marginBottom: "16px",
                  marginTop: "-20px",
                  lineHeight: "1.1",
                  textAlign: "center",
                  width: "100%"
                }}
              >
                <span style={{
                  fontSize: isMobile ? "2rem" : "4.5rem",
              background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                  Stress-Free Parking.
              </span>
                <br />
                Smart. Scalable.
            </h1>

              <div style={{ 
                display: "flex", 
                gap: "16px",
                flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "60px"
              }}>
                <button
                  onClick={() => window.openContactDialog?.()}
                  style={{
                background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                    color: "white",
                    padding: isMobile ? "16px 24px" : "18px 36px",
                    borderRadius: "12px",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    fontSize: isMobile ? "1rem" : "1.1rem",
                    boxShadow: "0 8px 30px rgba(5, 126, 255, 0.4)",
                    transition: "all 0.3s ease",
                    minWidth: isMobile ? "160px" : "220px",
                    transform: "translateY(0)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(5, 126, 255, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(5, 126, 255, 0.4)";
                  }}
                >
                  <i className="fas fa-rocket" style={{ marginRight: "8px" }}></i> Get Started
              </button>
                
                <button
                  onClick={() => window.openContactDialog?.()}
                  style={{
                    background: "white",
                    color: "#057eff",
                    padding: isMobile ? "16px 24px" : "18px 36px",
                    borderRadius: "12px",
                    fontWeight: 600,
                    border: "2px solid #057eff",
                    cursor: "pointer",
                    fontSize: isMobile ? "1rem" : "1.1rem",
                    transition: "all 0.3s ease",
                    minWidth: isMobile ? "160px" : "220px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    transform: "translateY(0)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.background = "#f0f9ff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.background = "white";
                  }}
                >
                  <i className="fas fa-parking" style={{ marginRight: "8px" }}></i> Book Parking Slot
                </button>
              </div>

              {/* Trust Indicators */}
              <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            gap: "20px",
            maxWidth: "1000px",
            margin: "0 auto"
              }}>
                {[
              { number: "100+", label: "Parking Locations" },
              { number: "5+", label: "Cities Covered" },
              { number: "99.9%", label: "Platform Uptime" },
              { number: "24/7", label: "Operations Support" }
            ].map((stat, index) => (
                  <div key={index} style={{
                textAlign: "center",
                padding: "20px",
                background: "rgba(255, 255, 255, 0.3)",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                backdropFilter: "blur(10px)"
                  }}>
                    <div style={{
                  color: "#057eff",
                  fontSize: isMobile ? "1.5rem" : "2rem",
                  fontWeight: "700",
                  marginBottom: "8px",
                  textShadow: "0 2px 4px rgba(255, 255, 255, 0.8)"
                }}>
                  {stat.number}
                    </div>
                      <div style={{
                  color: "#1f2937",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)"
                }}>
                  {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
      </section>

      {/* ================= WHAT WE DO SECTION ================= */}
      <section
        id="what-we-do"
        style={{
          background: "linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)",
          padding: isMobile ? "100px 20px 60px" : "120px 20px 80px",
          position: "relative"
        }}
      >
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          padding: isMobile ? "0 24px" : "0 24px"
        }}>
          <h2 style={{
            fontSize: isMobile ? "2rem" : "3rem",
            fontWeight: 800,
            color: "#111827",
            marginBottom: "16px",
            lineHeight: "1.2",
            letterSpacing: "-0.5px"
          }}>
            What InstaParkAI Offers
          </h2>
          
          {/* Supporting Line */}
          <p style={{
            color: "#6b7280",
            fontSize: isMobile ? "1rem" : "1.125rem",
            maxWidth: "700px",
            margin: "0 auto 50px",
            lineHeight: "1.6",
            fontWeight: "400"
          }}>
            Complete smart parking solutions combining technology, operations, and intelligence.
          </p>

          {/* 4 Cards Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "24px" : "32px",
            width: "100%"
          }}>
            {[
              {
                icon: "fa-layer-group",
                title: "End-to-End Parking Operations",
                description: "Expert manpower, professional valet drivers, and technology-driven solutions",
                sectionId: "end-to-end-operations"
              },
              {
                icon: "fa-microchip",
                title: "AI-Driven Smart Parking Management Systems",
                description: "Advanced AI-powered parking management solutions for real-time monitoring and control",
                sectionId: "ai-parking-management"
              },
              {
                icon: "fa-map-location-dot",
                title: "Find. Book. Park.",
                description: "Nearby parking spaces - one-time or monthly booking options",
                sectionId: "parking-discovery"
              },
              {
                icon: "fa-wrench",
                title: "Complete AMC Support",
                description: "Comprehensive & Non-Comprehensive maintenance contracts available",
                sectionId: "amc-support"
              }
            ].map((card, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: isMobile ? "36px 28px" : "48px 40px",
                  borderRadius: "20px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "default",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  minHeight: isMobile ? "280px" : "320px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(5, 126, 255, 0.2)";
                  e.currentTarget.style.borderColor = "#057eff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)";
                  e.currentTarget.style.borderColor = "#e5e7eb";
                }}
              >
                <div style={{
                  width: isMobile ? "64px" : "80px",
                  height: isMobile ? "64px" : "80px",
                  margin: "0 auto 20px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: isMobile ? "1.75rem" : "2rem"
                }}>
                  <i className={`fas ${card.icon}`}></i>
                </div>
                <h3 style={{
                  fontSize: isMobile ? "1.25rem" : "1.375rem",
                  fontWeight: 700,
                  color: "#1f2937",
                  marginBottom: "12px",
                  lineHeight: "1.3"
                }}>
                  {card.title}
                </h3>
                <p style={{
                  fontSize: isMobile ? "0.9375rem" : "1rem",
                  color: "#6b7280",
                  lineHeight: "1.6",
                  marginBottom: "24px",
                  flex: 1
                }}>
                  {card.description}
                </p>
                <button
                  onClick={() => navigate(`/services#${card.sectionId}`)}
                  style={{
                    background: "transparent",
                    border: "2px solid #057eff",
                    color: "#057eff",
                    padding: "12px 24px",
                    borderRadius: "10px",
                    fontWeight: 600,
                    fontSize: isMobile ? "0.9375rem" : "1rem",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    marginTop: "auto"
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
                  <i className="fas fa-arrow-right" style={{ fontSize: "0.875rem" }}></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= THE PROBLEM SECTION ================= */}
      <section
        id="problem"
        style={{
          background: "#fafbfc",
          padding: isMobile ? "0 20px 0" : "0 20px 0",
                position: "relative",
          opacity: visibleSections.has('problem') ? 1 : 0,
          transform: visibleSections.has('problem') ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease'
        }}
      >
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto"
        }}>
          {/* Header Section */}
                <div style={{
            textAlign: "center",
            marginBottom: isMobile ? "60px" : "80px",
            paddingTop: isMobile ? "40px" : "50px"
        }}>
          <h2
            style={{
                fontSize: isMobile ? "2.5rem" : "3.5rem",
              fontWeight: 700,
                color: "#111827",
                marginBottom: "24px",
                lineHeight: "1.1",
                letterSpacing: "-1px"
              }}
            >
              The Problem with Parking Today
            </h2>
            
            <p
              style={{
                fontSize: isMobile ? "1.125rem" : "1.25rem",
                color: "#4b5563",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: "1.7",
                fontWeight: "400"
              }}
            >
              Urban parking today is largely <strong style={{ color: "#111827", fontWeight: 600 }}>manual, fragmented, and inefficient</strong>, leading to operational challenges and revenue losses.
            </p>
          </div>

          {/* Challenges Grid */}
          <div style={{
            marginBottom: isMobile ? "60px" : "80px"
          }}>
          <p
            style={{
              fontSize: isMobile ? "1rem" : "1.125rem",
              color: "#6b7280",
                textAlign: "center",
                marginBottom: "40px",
                fontWeight: 500
              }}
            >
              Common challenges include:
          </p>

          <div
            style={{
              display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(5, 1fr)",
                gap: isMobile ? "20px" : "24px",
                maxWidth: "1100px",
                margin: "0 auto"
            }}
          >
            {[
                { icon: "fa-money-bill-wave", title: "Manual and cash-driven" },
                { icon: "fa-search", title: "Opaque and inefficient" },
                { icon: "fa-users", title: "Manpower-dependent" },
                { icon: "fa-car", title: "Congested during peak hours" },
                { icon: "fa-tachometer-alt", title: "Underutilized despite high demand" }
              ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                    padding: isMobile ? "28px 20px" : "36px 24px",
                    borderRadius: "12px",
                  textAlign: "center",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
                    transition: "all 0.2s ease"
                }}
              >
                <div style={{ 
                    fontSize: isMobile ? "2.25rem" : "2.5rem", 
                    marginBottom: "12px",
                    lineHeight: "1",
                    color: "#057eff"
                  }}>
                    <i className={`fas ${item.icon}`}></i>
          </div>
                  <div style={{ 
                    color: "#111827", 
                    fontSize: isMobile ? "0.9375rem" : "1rem", 
                  fontWeight: 600, 
                    lineHeight: "1.4"
                  }}>
                    {item.title}
                  </div>
              </div>
            ))}
            </div>
          </div>

          {/* Problem Images */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "24px" : "32px",
            marginBottom: isMobile ? "40px" : "60px",
            maxWidth: "1000px",
            margin: "0 auto"
                }}>
                  <img 
              src={problemToday1} 
              alt="The Problem Today" 
                    style={{
                      width: "100%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)"
              }}
            />
            <img 
              src={problemToday2} 
              alt="The Problem Today" 
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)"
                    }}
                  />
                </div>
          
          {/* Conclusion */}
          <div style={{
            textAlign: "center",
            padding: isMobile ? "32px 24px" : "40px 32px",
            background: "white",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
            maxWidth: "900px",
            margin: "0 auto"
          }}>
            <p
              style={{
                fontSize: isMobile ? "1.125rem" : "1.25rem",
                color: "#111827",
                margin: "0",
                lineHeight: "1.7",
                fontWeight: "500"
              }}
            >
              These challenges result in <strong style={{ color: "#ef4444", fontWeight: 700 }}>revenue leakage, poor user experience, and operational chaos</strong>.
            </p>
            </div>
              </div>
      </section>

      {/* ================= OUR SOLUTION SECTION ================= */}
      <section
        id="solution"
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)",
          padding: isMobile ? "0 20px 50px" : "0 20px 70px",
          opacity: visibleSections.has('solution') ? 1 : 0,
          transform: visibleSections.has('solution') ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease'
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
            Our Solution
          </h2>
          <h3 style={{
            fontSize: isMobile ? "1.5rem" : "2rem",
            fontWeight: 600,
            color: "#057eff",
            marginBottom: "40px"
          }}>
            One Platform. Complete Parking Control.
          </h3>
          
          <p
            style={{
              fontSize: isMobile ? "1rem" : "1.125rem",
              color: "#6b7280",
              maxWidth: "800px",
              margin: "0 auto 50px",
              lineHeight: "1.6"
            }}
          >
            InstaParkAI digitizes parking operations using:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: isMobile ? "24px" : "32px",
              marginBottom: "50px"
            }}
          >
            <div style={{
              background: "white",
              padding: isMobile ? "30px 20px" : "40px 32px",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
              border: "1px solid rgba(0, 0, 0, 0.05)"
            }}>
              <h4 style={{
                fontSize: isMobile ? "1.2rem" : "1.5rem",
                fontWeight: 600,
                color: "#1f2937",
                marginBottom: "20px"
              }}>
                Technology Stack
              </h4>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                textAlign: "left"
              }}>
                {[
                  "AI & Computer Vision",
                  "IoT devices & sensors",
                  "Cloud-based dashboards",
                  "Automated access control & digital payments"
                ].map((item, idx) => (
                  <li key={idx} style={{
                    padding: "12px 0",
                    color: "#6b7280",
                    fontSize: isMobile ? "0.95rem" : "1rem",
                    borderBottom: idx < 3 ? "1px solid #e5e7eb" : "none"
                  }}>
                    <span style={{ color: "#057eff", marginRight: "8px" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              </div>
            
            <div style={{
              background: "white",
              padding: isMobile ? "30px 20px" : "40px 32px",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
              border: "1px solid rgba(0, 0, 0, 0.05)"
            }}>
              <h4 style={{
                fontSize: isMobile ? "1.2rem" : "1.5rem",
                fontWeight: 600,
                color: "#1f2937",
                marginBottom: "20px"
              }}>
                Results
              </h4>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                textAlign: "left"
              }}>
                {[
                  "Zero cash leakage",
                  "Real-time visibility",
                  "Faster entry & exit",
                  "Up to 30% higher revenue"
                ].map((item, idx) => (
                  <li key={idx} style={{
                    padding: "12px 0",
                    color: "#6b7280",
                    fontSize: isMobile ? "0.95rem" : "1rem",
                    borderBottom: idx < 3 ? "1px solid #e5e7eb" : "none"
                  }}>
                    <span style={{ color: "#10b981", marginRight: "8px" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            </div>
              </div>
      </section>

      {/* ================= HOW IT WORKS SECTION ================= */}
      <section
        id="how-it-works"
        style={{
          background: "#fafbfc",
          padding: isMobile ? "50px 0 0" : "70px 0 0",
          position: "relative",
          opacity: visibleSections.has('how-it-works') ? 1 : 0,
          transform: visibleSections.has('how-it-works') ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease'
        }}
      >
        {/* Header Section */}
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto",
          textAlign: "center",
          padding: isMobile ? "0 20px 30px" : "0 20px 40px"
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
              Process Overview
            </span>
          </div>

          <h2
            style={{
              fontSize: isMobile ? "2.5rem" : "3.5rem",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "24px",
              lineHeight: "1.1",
              letterSpacing: "-1px"
            }}
          >
            How InstaParkAI Works
          </h2>
          
          <p
            style={{
              fontSize: isMobile ? "1.125rem" : "1.25rem",
              color: "#4b5563",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.7",
              fontWeight: "400"
            }}
          >
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
          {/* Background Image */}
          <img 
            src={howItWorks} 
            alt="How InstaParkAI Works" 
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
          
          {/* Overlay for better readability */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.1)",
            zIndex: 2
          }}></div>

          {/* Steps Grid Overlay */}
          <div style={{ 
            position: "relative",
            zIndex: 3,
            maxWidth: "1200px", 
            margin: "0 auto",
            padding: isMobile ? "40px 20px 0" : "60px 20px 0"
          }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                gap: isMobile ? "20px" : "24px"
            }}
          >
            {[
              {
                  number: 1,
                  icon: "fa-eye",
                  title: "AI detects real-time parking availability",
                  desc: "Advanced computer vision identifies available slots instantly"
                },
                {
                  number: 2,
                  icon: "fa-mobile-alt",
                  title: "Users book via app or website",
                  desc: "One-tap booking with instant confirmation"
                },
                {
                  number: 3,
                  icon: "fa-qrcode",
                  title: "Entry via ANPR / RFID / QR",
                  desc: "Automated access control for seamless entry"
                },
                {
                  number: 4,
                  icon: "fa-video",
                  title: "Parking monitored live",
                  desc: "Real-time tracking and occupancy management"
                },
                {
                  number: 5,
                  icon: "fa-credit-card",
                  title: "Digital payment on exit",
                  desc: "Secure, cashless transactions"
                },
                {
                  number: 6,
                  icon: "fa-chart-bar",
                  title: "Revenue & analytics updated instantly",
                  desc: "Complete visibility into operations and performance"
              },
            ].map((step, index) => (
              <div
                key={index}
                style={{
                    background: "rgba(0, 0, 0, 0.75)",
                  borderRadius: "16px",
                    padding: isMobile ? "36px 28px" : "44px 36px",
                  textAlign: "center",
                    border: "2px solid rgba(5, 126, 255, 0.5)",
                    transition: "all 0.3s ease",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
                    backdropFilter: "blur(10px)"
                }}
              >
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #057eff, #6bb6ff)",
                  color: "white",
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  marginBottom: "16px"
                }}>
                  <i className={`fas ${step.icon}`} style={{ fontSize: "1.2rem" }}></i>
            </div>
                <h3 style={{ 
                    color: "#ffffff", 
                  fontWeight: 700, 
                  marginBottom: "12px",
                    fontSize: isMobile ? "1.25rem" : "1.375rem",
                    lineHeight: "1.4",
                    textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)"
                }}>
                  {step.title}
                </h3>
                <p style={{ 
                    color: "#e5e7eb", 
                  lineHeight: "1.6",
                  margin: 0,
                    fontSize: isMobile ? "1rem" : "1.125rem",
                    textShadow: "0 2px 6px rgba(0, 0, 0, 0.5)",
                    fontWeight: "400"
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* ================= WHO WE SERVE SECTION ================= */}
      <section
        id="who-we-serve"
        style={{
          background: "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
          color: "white",
          padding: isMobile ? "0 20px 30px" : "0 20px 40px",
          opacity: visibleSections.has('who-we-serve') ? 1 : 0,
          transform: visibleSections.has('who-we-serve') ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease'
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
              marginBottom: "16px",
              lineHeight: "1.2"
            }}
          >
            Who We Serve
            </h2>
          <p
            style={{
              fontSize: isMobile ? "1rem" : "1.125rem",
              marginBottom: "40px",
              opacity: 0.9,
              lineHeight: "1.6",
              maxWidth: "700px",
              margin: "0 auto 40px"
            }}
          >
            Comprehensive parking solutions for diverse urban spaces
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: isMobile ? "24px" : "32px"
            }}
          >
            {[
              { icon: "fa-store", title: "Shopping Malls & Retail" },
              { icon: "fa-hospital", title: "Hospitals & Hotels" },
              { icon: "fa-plane", title: "Airports & Transport Hubs" },
              { icon: "fa-building", title: "IT Parks & Industrial Campuses" },
              { icon: "fa-home", title: "Residential Societies" },
              { icon: "fa-city", title: "Smart Cities & Municipalities" }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  padding: isMobile ? "30px 20px" : "40px 32px",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  textAlign: "center"
                }}
              >
                <div style={{
                  fontSize: isMobile ? "2.5rem" : "3rem",
                  marginBottom: "16px",
                  color: "white"
                }}>
                  <i className={`fas ${item.icon}`}></i>
            </div>
                <h3 style={{ 
                  fontSize: isMobile ? "1.2rem" : "1.3rem",
                  fontWeight: "600",
                  margin: 0,
                  color: "white"
                }}>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BEYOND PARKING SECTION ================= */}
      <section
        id="beyond-parking"
        style={{
          background: "#fafbfc",
          padding: isMobile ? "50px 0" : "70px 0",
          opacity: visibleSections.has('beyond-parking') ? 1 : 0,
          transform: visibleSections.has('beyond-parking') ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease'
        }}
      >
        <div style={{ 
          maxWidth: "1400px", 
          margin: "0 auto",
          padding: isMobile ? "0 20px" : "0 40px"
        }}>
          {/* Header */}
          <div style={{
            textAlign: "center",
            marginBottom: isMobile ? "50px" : "70px"
        }}>
          <h2
            style={{
                fontSize: isMobile ? "2.5rem" : "3.5rem",
              fontWeight: 700,
                color: "#111827",
                marginBottom: "20px",
                lineHeight: "1.1",
                letterSpacing: "-1px"
              }}
            >
              Beyond Parking
            </h2>
          <p
            style={{
                fontSize: isMobile ? "1.125rem" : "1.25rem",
                color: "#4b5563",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: "1.7",
                fontWeight: "400"
              }}
            >
              We are building future urban infrastructure:
            </p>
          </div>

          {/* Horizontal Auto-Scrolling Cards */}
          <div
            ref={scrollContainerRef}
            style={{
              display: "flex",
              gap: isMobile ? "24px" : "32px",
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
              {
                title: "InstaPark", 
                desc: "Core parking platform",
                image: userJourney
              },
              {
                title: "InstaCharge", 
                desc: "EV charging network",
                image: instaCharge
              },
              { 
                title: "InstaKitchen", 
                desc: "Cloud kitchens at parking hubs",
                image: instaKitchen
              },
              { 
                title: "InstaDarkStore", 
                desc: "Micro-logistics & storage",
                image: instaDarkStore
              }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  flex: "0 0 auto",
                  width: isMobile ? "calc(100vw - 80px)" : "calc(50vw - 120px)",
                  minWidth: isMobile ? "280px" : "500px",
                  maxWidth: isMobile ? "400px" : "600px",
                  background: "white",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  border: "1px solid #e5e7eb",
                  scrollSnapAlign: "start",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                {/* Image with side gaps */}
                <div style={{ 
                  width: "100%",
                  padding: isMobile ? "20px" : "32px",
                  paddingBottom: "0"
                }}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "12px",
                      objectFit: "cover",
                      display: "block"
                    }}
                  />
            </div>
                
                {/* Content */}
                <div style={{
                  padding: isMobile ? "24px 20px" : "32px",
                  textAlign: "center",
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}>
                <h3 style={{ 
                    color: "#111827", 
                    fontSize: isMobile ? "1.5rem" : "1.75rem",
                    fontWeight: 700,
                  marginBottom: "12px",
                    lineHeight: "1.2"
                }}>
                    {item.title}
                </h3>
                <p style={{ 
                  color: "#6b7280", 
                    fontSize: isMobile ? "1rem" : "1.125rem",
                  margin: 0,
                    lineHeight: "1.6"
                }}>
                    {item.desc}
                </p>
                </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PARTNERS & CLIENTS SECTION ================= */}
      <section
        id="partners-clients"
        style={{
          background: "#f8fafc",
          padding: isMobile ? "50px 20px" : "70px 20px",
          opacity: visibleSections.has('partners-clients') ? 1 : 0,
          transform: visibleSections.has('partners-clients') ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease'
        }}
      >
        <div style={{ 
          maxWidth: "1400px", 
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h2
            style={{
              fontSize: isMobile ? "2.5rem" : "3.5rem",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "20px",
              lineHeight: "1.1",
              letterSpacing: "-1px"
            }}
          >
            Our Partners & Clients
          </h2>
          <p
            style={{
              fontSize: isMobile ? "1.125rem" : "1.25rem",
              color: "#4b5563",
              maxWidth: "800px",
              margin: "0 auto 50px",
              lineHeight: "1.7",
              fontWeight: "400"
            }}
          >
            Trusted by leading organizations and strategic partners across India
          </p>

          {/* Auto-Scrolling Logos - Infinite Scroll */}
          <div
            ref={partnersClientsScrollRef}
            style={{
              display: "flex",
              gap: isMobile ? "40px" : "60px",
              overflowX: "hidden",
              overflowY: "hidden",
              paddingBottom: "20px",
              alignItems: "center",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch"
            }}
          >
            {/* Partner Logos - First Set */}
            {[partners1, partners2, partners3, partners4, partners5, partners6].map((partner, index) => (
              <div key={`partner-${index}`} style={{ 
                flex: "0 0 auto",
                background: "white",
                padding: isMobile ? "20px" : "30px",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                height: isMobile ? "100px" : "120px",
                width: isMobile ? "200px" : "250px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <img 
                  src={partner} 
                  alt={`Partner ${index + 1}`} 
                  style={{
                    height: isMobile ? "60px" : "80px",
                    width: "auto",
                    objectFit: "contain",
                    maxWidth: "100%"
                  }}
                />
              </div>
            ))}

            {/* Partner Logos - Duplicated Set for Infinite Scroll */}
            {[partners1, partners2, partners3, partners4, partners5, partners6].map((partner, index) => (
              <div key={`partner-duplicate-${index}`} style={{ 
                flex: "0 0 auto",
                background: "white",
                padding: isMobile ? "20px" : "30px",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                height: isMobile ? "100px" : "120px",
                width: isMobile ? "200px" : "250px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <img 
                  src={partner} 
                  alt={`Partner ${index + 1}`} 
                  style={{
                    height: isMobile ? "60px" : "80px",
                    width: "auto",
                    objectFit: "contain",
                    maxWidth: "100%"
                  }}
                />
              </div>
            ))}

            {/* Client Logos */}
              <div style={{
              flex: "0 0 auto",
              height: isMobile ? "70px" : "90px",
              width: isMobile ? "150px" : "200px",
                display: "flex",
                alignItems: "center",
              justifyContent: "center"
            }}>
              <img 
                src={accorLogo} 
                alt="Accor" 
                style={{
                  height: isMobile ? "50px" : "70px",
                  width: "auto",
                  objectFit: "contain",
                  transition: "transform 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
              </div>
            <div style={{
              flex: "0 0 auto",
              height: isMobile ? "70px" : "90px",
              width: isMobile ? "150px" : "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <img 
                src={ibisLogo} 
                alt="Ibis" 
                style={{
                  height: isMobile ? "50px" : "70px",
                  width: "auto",
                  objectFit: "contain",
                  transition: "transform 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </div>
            <div style={{
              flex: "0 0 auto",
              height: isMobile ? "70px" : "90px",
              width: isMobile ? "150px" : "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <img 
                src={prestigeLogo} 
                alt="Prestige Group" 
                style={{
                  height: isMobile ? "50px" : "70px",
                  width: "auto",
                  objectFit: "contain",
                  transition: "transform 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "white",
          padding: isMobile ? "50px 20px" : "70px 20px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div style={{ 
          maxWidth: "800px", 
          margin: "0 auto",
          position: "relative",
          zIndex: 2
        }}>
              <h2
                style={{
                  fontSize: isMobile ? "2.2rem" : "3rem",
                  fontWeight: 800,
                  marginBottom: "24px",
              lineHeight: "1.1"
            }}
          >
            Ready to Organize Your Parking?
          </h2>
              
              <p
                style={{
                  fontSize: isMobile ? "1.1rem" : "1.3rem",
                  marginBottom: "40px",
              opacity: 0.9,
              lineHeight: "1.7"
            }}
          >
            Transform your parking infrastructure into a smart, revenue-generating ecosystem
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

export default Home;