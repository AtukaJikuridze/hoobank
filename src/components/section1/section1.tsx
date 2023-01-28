import React from "react";
import "./section1.css";
import { Container, Row, Col } from "react-bootstrap";
export default function Section1() {
  return (
    <section className="section1">
      <Container>
        <Row>
          <Col lg={4} md={12}>
            <div className="section1-main">
              <h1>3800+</h1>
              <p>USER ACTIVE</p>
            </div>
            <div className="line"></div>
          </Col>

          <Col lg={4} md={12}>
            <div className="section1-main sec1border">
              <h1>230+</h1>
              <p>TRUSTED COMPANY</p>
            </div>
            <div className="line"></div>
          </Col>

          <Col lg={4} md={12}>
            <div className="section1-main">
              <h1>$230M+</h1>
              <p>TRANSACTION</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
