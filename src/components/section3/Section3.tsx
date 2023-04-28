import React from "react";
import "./section3.css";
import { Container, Row, Col } from "react-bootstrap";
import Section3Leftside from "./Section3Leftside/Section3Leftside";
import playstore from "../../assets/images/playstore.svg";
import { M_Scroll } from "../../ModernScrolls_React_V2";
import "../../animations.css";
export default function Section3() {
  M_Scroll(".section3", ".section3-paypal", 300, "section3-paypal-animation");
  M_Scroll(
    ".section3",
    ".section3-transaction",
    300,
    "section3-transaction-animation"
  );
  M_Scroll(".section3", ".section3-success", 300, "section3-success-animation");
  M_Scroll(
    ".section3",
    ".section3-rightside",
    300,
    "section3-rightside-animation"
  );
  return (
    <section className="section3">
      <Container>
        <Row>
          <Col lg={6} md={12}>
            <Section3Leftside />
          </Col>
          <Col lg={6} md={12}>
            <div className="section3-rightside section3-rightside-animation">
              <h1>Easily control your billing & invoicing.</h1>
              <p className="pGrey">
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
                integer platea placerat.
              </p>
              <div className="social-networks">
                <div className="social-network">
                  <img
                    src={require("../../assets/images/appstore.png")}
                    alt=""
                  />
                </div>
                <div className="social-network">
                  <img src={playstore} alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
