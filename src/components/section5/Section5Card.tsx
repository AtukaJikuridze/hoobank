import React from "react";
import "./section5.css";
import { Col } from "react-bootstrap";
import S5Header from "../../assets/images/“.svg";
export default function Section5Card(props: {
  description: string;
  userName: string;
  userImage: string;
  active: string;
}) {
  return (
    <Col lg={4} md={4} sm={12}>
      <div className={`section5-card ${props.active}`}>
        <img src={S5Header} alt="" />
        <p>{props.description}</p>
        <div className="section5-user">
          <img src={props.userImage} alt="" />
          <div>
            <p>{props.userName}</p>
            <div className="pGrey">Founder & Leader</div>
          </div>
        </div>
      </div>
    </Col>
  );
}
