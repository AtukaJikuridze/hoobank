import React, { useEffect } from "react";
import "./header.css";
import Container from "react-bootstrap/esm/Container";
import { HiTrendingUp } from "react-icons/hi";
import { M_ScrollLoad } from "../../ModernScrolls_React_V2";
import "../../animations.css";

export default function Header() {
  M_ScrollLoad(".header-leftside", 100, "header-leftside-animation");
  M_ScrollLoad(".header-rightside img", 100, "header-rightside-animation");

  return (
    <header>
      <Container className="header-container">
        <div className="header-leftside header-leftside-animation ">
          <div className="header-discount">
            <img
              src={require("../../assets/images/header-discount.png")}
              alt=""
            />
            <p>
              20% DISCOUNT FOR <span> 1 MONTH</span> ACCOUNT
            </p>
          </div>
          <div className="header-leftside-text">
            <h1>the next</h1>
            <h1>generation</h1>
            <h1>payment method</h1>
            <p>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
            <div className="header-getstarted">
              <div>
                <p>Get</p>
                <HiTrendingUp />
              </div>
              <p>Started</p>
            </div>
          </div>
        </div>

        <div className="header-rightside">
          <img
            src={require("../../assets/images/header-image.webp")}
            alt=""
            className="header-rightside-animation"
          />
        </div>
      </Container>
    </header>
  );
}
