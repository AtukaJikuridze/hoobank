import React from "react";
import "./footer.css";
import FooterLogo from "../../assets/images/FooterLogo.svg";
import { Container } from "react-bootstrap";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { SiViber } from "react-icons/si";
export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="footer-main">
          <div className="footer-logo">
            <img src={FooterLogo} alt="" />
            <p>A new way to make the payments easy, reliable and secure.</p>
          </div>
          <div className="footer-text">
            <p className="main-link">Usefull Links</p>
            <p>Content</p>
            <p>How it Works</p>
            <p>Create</p>
            <p>Explore</p>
            <p>Terms & Services</p>
          </div>

          <div className="footer-text">
            <p className="main-link">Community</p>
            <p>Help Center</p>
            <p>Partners</p>
            <p>Suggestions</p>
            <p>Blog</p>
            <p>Newsletters</p>
          </div>

          <div className="footer-text last-footer-text">
            <p>Our Partner</p>
            <p>Our Partner</p>

            <p>Become a Partner</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2021 HooBank. All Rights Reserved.</p>
          <div className="footer-icons">
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
            <SiViber />
          </div>
        </div>
      </Container>
    </footer>
  );
}
