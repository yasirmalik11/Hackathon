import React from 'react'
import Link from 'next/link';
import '../globals.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
  return (
    <>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "60px auto", // Centered
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Text */}
      <div style={{ fontWeight: "bold", fontSize: "18px" }}>Bandage</div>

      {/* Social Media Icons */}
      <div style={{ display: "flex", gap: "15px" }}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#3b5998", fontSize: "20px" }}
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#E4405F", fontSize: "20px" }}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1DA1F2", fontSize: "20px" }}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
    
    
    
    
    <div>
       <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <div className="footer-section">
            <h4>Company Info</h4>
            <ul>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/career">Career</Link></li>
              <li><Link href="/we-are-hiring">We are hiring</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/career">Career</Link></li>
              <li><Link href="/we-are-hiring">We are hiring</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Features</h4>
            <ul>
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>iOS & Android</li>
              <li><Link href="/watch-a-demo">Watch a Demo</Link></li>
              <li><Link href="/customers">Customers</Link></li>
              <li><Link href="/api">API</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Get In Touch</h4>
            <form>
              <input type="email" placeholder="Your Email" />
              <button type="submit">Subscribe</button>
            </form>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Made with Love by Finland All Right Reserved</p>
        </div>
      </div>
    </footer>
    </div>
    </>
  )
}
