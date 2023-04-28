import React from "react";
import "./Section6.css";
import { Container } from "react-bootstrap";

export default function Section6() {
  return (
    <section className="section6">
      <Container>
        <div className="section6-main">
          <div>
            <h1>Lets try our service now!</h1>
            <p className="pGrey">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
          <button>Get Started</button>
        </div>
      </Container>
    </section>
  );
}
