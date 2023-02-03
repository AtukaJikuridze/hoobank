import React from "react";
import "./section3.css";
import { Container, Row, Col } from "react-bootstrap";
import Section3Leftside from "./Section3Leftside/Section3Leftside";
import playstore from "../../assets/images/playstore.svg";
export default function Section3() {
  return (
    <section className="section3">
      <Container>
        <Row>
          <Col lg={6} md={12}>
            <Section3Leftside />
          </Col>
          <Col lg={6} md={12}>
            <div className="section3-rightside">
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
