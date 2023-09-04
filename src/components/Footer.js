import "./FooterStyles.css";

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaHome,
  FaMailBulk,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const [fadeIn, setFadeIn] = useState(false);

  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const elementTop = footerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.8) {
        setFadeIn(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="footer">
      <div
        className={`footer-container ${fadeIn ? "fade-in" : ""}`}
        ref={footerRef}
      >
        <div className="left">
          <div className="location">
            <FaHome size={40} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <h4>Office</h4>
              <p>
                Jl. Daan Mogot Baru Blok LB 3 No. 17-18, Kalideres, Jakarta,
                Indonesia, 11840
              </p>
              <h4>Warehouse</h4>
              <p>Jl. Bayur, Kedaung Barat Pulau Indah No. 88, Tangerang</p>
            </div>
          </div>

          <div className="phone">
            <FaPhone
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <div>
              <p>Phone : +62-21 543 73 132</p>
              <p>Fax : +62-21 543 66 488</p>
              <p>Mobile : +62-811 873 382</p>
            </div>
          </div>

          <div className="email">
            <FaMailBulk
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <p>kreasiemas1@yahoo.com</p>
          </div>
        </div>

        <div className="middle">
          <div className="about">
            <h4 className="quick-link">Quick Links</h4>
            <div className="links">
              <Link to="/about" className="about-title">
                <h4>About</h4>
              </Link>
              <Link to="/product" className="about-title">
                <h4>Products</h4>
              </Link>
              <div className="product-link">
                <Link to="/product/dammar-batu" className="product-title">
                  <p>Dammar Batu</p>
                </Link>
                <Link to="/product/dammar-gum" className="product-title">
                  <p>Dammar Gum</p>
                </Link>
                <Link to="/product/copal-gum" className="product-title">
                  <p>Copal Gum</p>
                </Link>
              </div>
              <Link to="/market" className="about-title">
                <h4>Market</h4>
              </Link>
              <Link to="/contact" className="about-title">
                <h4>Contact Us</h4>
              </Link>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="media">
            <a
              href="https://wa.me/62811873382"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaWhatsapp
                  size={25}
                  style={{ color: "white", marginRight: "8px" }}
                />
                <p>Contact via Whatsapp</p>
              </div>
            </a>
          </div>
          <div className="about">
            <p>© Copyright PT Kreasi Emas Gemilang. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
