import React from "react";
import { Container } from "react-bootstrap";
import "./section2.css";
import Section2Rightside from "./Section2Rightside";
export default function Section2() {
  return (
    <section className="section2">
      <Container>
        <div className="section2-main">
          <div className="section2-leftside">
            <h1>You do the business, well handle the money.</h1>
            <p>
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </p>
            <button>Get Started</button>
          </div>
          <div className="section2-rightside">
            <Section2Rightside />
          </div>
        </div>
      </Container>
    </section>
  );
}
