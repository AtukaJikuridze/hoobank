import React from "react";
import shield from "../../assets/images/Shield.svg";
import send from "../../assets/images/Send.png";

export default function Section2Rightside() {
  return (
    <>
      <div className="section2-rightside-card section2-rightside-animation1">
        <div className="image-box">
          <img src={require("../../assets/images/Star.png")} alt="" />
        </div>
        <div className="section2-text">
          <h2>Rewards</h2>
          <p>
            The best credit cards offer some tantalizing combinations of
            promotions and prizes
          </p>
        </div>
      </div>

      <div className="section2-rightside-card middle section2-rightside-animation2">
        <div className="image-box">
          <img src={shield} alt="" />
        </div>
        <div className="section2-text">
          <h2>100% Secured</h2>
          <p>
            We take proactive steps make sure your information and transactions
            are secure.
          </p>
        </div>
      </div>

      <div className="section2-rightside-card section2-rightside-animation3">
        <div className="image-box">
          <img src={send} alt="" />
        </div>
        <div className="section2-text">
          <h2>Balance Transfer</h2>
          <p>
            A balance transfer credit card can save you a lot of money in
            interest charges.
          </p>
        </div>
      </div>
    </>
  );
}
