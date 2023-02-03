import React from "react";
import "./section5.css";
import { Container, Row } from "react-bootstrap";
import Section5Card from "./Section5Card";

export default function Section5() {
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
              active="active"
              userImage={require("../../assets/images/section5-userimage1.png")}
              userName="Herman Jensen"
              description="Money is only a tool. It will
              take you wherever you wish, but it will not 
              replace you as the driver."
            />

            <Section5Card
              active=" "
              userImage={require("../../assets/images/section5-userimage2.png")}
              userName="Herman Jensen"
              description="Money is only a tool. It will
              take you wherever you wish, but it will not 
              replace you as the driver."
            />
            <Section5Card
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
