import React from "react";
import "./section4.css";
import { Container, Row, Col } from "react-bootstrap";
import Section4Rightside from "./Section4Rightside/Section4Rightside";
import { M_Scroll } from "../../ModernScrolls_React_V2";
import "../../animations.css";

export default function Section4() {
  M_Scroll(
    ".section4",
    ".section4-leftside",
    300,
    "section4-leftside-animation"
  );
  return (
    <section className="section4">
      <Container>
        <Row>
          <Col lg={6} md={12}>
            <div className="section4-leftside section4-leftside-animation">
              <h1>Find a better card deal in few easy steps.</h1>
              <p className="pGrey">
                Arcu tortor, purus in mattis at sed integer faucibus. Aliquet
                quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
              </p>
              <button>Get Started</button>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <Section4Rightside />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
