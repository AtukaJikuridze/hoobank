import React, { useState, useRef } from "react";
import "./navbar.css";
import { Container } from "react-bootstrap";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [bars, setBars] = useState(false);
  const navRef = useRef<any>(null);
  const switchBars = () => {
    setBars(!bars);
    navRef.current.classList.toggle("afternav");
  };
  return (
    <nav ref={navRef}>
      {bars ? (
        <AiOutlineClose onClick={switchBars} />
      ) : (
        <AiOutlineBars onClick={switchBars} />
      )}
      <Container className="navbar-container">
        <div className="logo">
          <img src={require("../../assets/images/logo.png")} alt="" />
          <h1>
            Hoo <span>Bank</span>
          </h1>
        </div>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Features</li>
          <li>Solution</li>
        </ul>
      </Container>
    </nav>
  );
}
