import React from "react";
import "./section5.css";
import { Container, Row } from "react-bootstrap";
import Section5Card from "./Section5Card";
import { M_Scroll } from "../../ModernScrolls_React_V2";
export default function Section5() {
  M_Scroll(".section5", ".section5-card", 300, "section5-card1-animation");
  M_Scroll(".section5", ".section5-card", 600, "section5-card2-animation");
  M_Scroll(".section5", ".section5-card", 900, "section5-card3-animation");
  return (
    <section className="section5">
      <div className="section5-header-text">
        <Container>
          <h1>What people are saying about us</h1>
        </Container>
      </div>
      <div className="section5-main">
        <Container>
          <Row>
            <Section5Card
              animation="section5-card1-animation"
              active="active"
              userImage={require("../../assets/images/section5-userimage1.png")}
              userName="Herman Jensen"
              description="Money is only a tool. It will
              take you wherever you wish, but it will not 
              replace you as the driver."
            />

            <Section5Card
              animation="section5-card2-animation"
              active=" "
              userImage={require("../../assets/images/section5-userimage2.png")}
              userName="Herman Jensen"
              description="Money is only a tool. It will
              take you wherever you wish, but it will not 
              replace you as the driver."
            />
            <Section5Card
              animation="section5-card3-animation"
              active=" "
              userImage={require("../../assets/images/section5-userimage3.png")}
              userName="Kenn Gallagher"
              description="It is usually people in the money business, finance, and international trade that are really rich."
            />
          </Row>
        </Container>
      </div>
    </section>
  );
}
