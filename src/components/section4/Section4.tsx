import React from "react";
import "./section4.css";
import { Container, Row, Col } from "react-bootstrap";
import Section4Rightside from "./Section4Rightside/Section4Rightside";

export default function Section4() {
  return (
    <section className="section4">
      <Container>
        <Row>
          <Col lg={6} md={12}>
            <div className="section4-leftside">
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
