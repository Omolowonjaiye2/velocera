import React from "react";
import { ArrowUpRight, Instagram, Youtube, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/velocera-logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__brand">
          <img src={logo} alt="VÉLOCÉRA" />
        </div>
        <div className="footer__top">
          <div>
            <p className="eyebrow">VÉLOCÉRA / 2026</p>
            <h2>DRIVEN BY<br /><em>IMAGINATION.</em></h2>
          </div>
          <p className="footer__statement">Driven by imagination.<br />Engineered for the extraordinary.</p>
        </div>
        <div className="footer__links">
          <div>
            <span className="eyebrow">EXPLORE</span>
            <Link to="/cars">Cars <ArrowUpRight size={14} /></Link>
            <Link to="/compare">Compare <ArrowUpRight size={14} /></Link>
            <Link to="/brand">Brand <ArrowUpRight size={14} /></Link>
          </div>
          <div>
            <span className="eyebrow">CONNECT</span>
            <a href="#contact">Contact <ArrowUpRight size={14} /></a>
            <a href="#privacy">Privacy <ArrowUpRight size={14} /></a>
          </div>
          <div>
            <span className="eyebrow">FOLLOW</span>
            <div className="socials">
              <a href="#instagram" aria-label="Instagram"><Instagram size={17} /></a>
              <a href="#youtube" aria-label="YouTube"><Youtube size={17} /></a>
              <a href="#linkedin" aria-label="LinkedIn"><Linkedin size={17} /></a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 VÉLOCÉRA AUTOMOTIVE. FICTIONAL PORTFOLIO CONCEPT.</span>
          <span>ENGINEERED TO EXCITE.</span>
        </div>
      </div>
    </footer>
  );
}