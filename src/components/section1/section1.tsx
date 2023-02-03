import React from "react";
import "./section1.css";
import { Container } from "react-bootstrap";
export default function Section1() {
  return (
    <section className="section1">
      <Container className="section1-container">
        <div className="section1-main">
          <h1>3800+</h1>
          <p>USER ACTIVE</p>
          <div className="line"></div>
        </div>

        <div className="section1-main sec1border">
          <h1>230+</h1>
          <p>TRUSTED COMPANY</p>
          <div className="line"></div>
        </div>

        <div className="section1-main">
          <h1>$230M+</h1>
          <p>TRANSACTION</p>
        </div>
      </Container>
    </section>
  );
}
