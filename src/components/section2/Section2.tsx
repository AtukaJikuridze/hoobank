import React from "react";
import { Container } from "react-bootstrap";
import "./section2.css";
import Section2Rightside from "./Section2Rightside";
import "../../animations.css";
import { M_Scroll } from "../../ModernScrolls_React_V2";
export default function Section2() {
  M_Scroll(
    ".section2",
    ".section2-leftside",
    300,
    "section2-leftside-animation"
  );
  M_Scroll(
    ".section2",
    ".section2-rightside-card ",
    300,
    "section2-rightside-animation1"
  );

  M_Scroll(
    ".section2",
    ".section2-rightside-card ",
    500,
    "section2-rightside-animation2"
  );

  M_Scroll(
    ".section2",
    ".section2-rightside-card",
    700,
    "section2-rightside-animation3"
  );
  return (
    <section className="section2">
      <Container>
        <div className="section2-main">
          <div className="section2-leftside section2-leftside-animation">
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
