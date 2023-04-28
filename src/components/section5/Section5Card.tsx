import React from "react";
import "./section5.css";
import { Col } from "react-bootstrap";
import S5Header from "../../assets/images/“.svg";
interface section5card {
  description: string;
  userName: string;
  userImage: string;
  active: string;
  animation: string;
}
export default function Section5Card(props: section5card) {
  return (
    <Col lg={4} md={4} sm={12}>
      <div className={`section5-card ${props.active} ${props.animation}`}>
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
