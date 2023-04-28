import React, { useState } from "react";
import { Months } from "../Months";
import "./Section4Rightside.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { M_Scroll } from "../../../ModernScrolls_React_V2";
import "../../../animations.css";
export default function Section4Rightside() {
  const [MonthsState, setMonthsState] = useState(1);

  const setActiveMonth = (id: number) => {
    setMonthsState(id);
  };

  M_Scroll(
    ".section4",
    ".setion4-creditcard",
    100,
    "section4-creditcard-animation"
  );

  M_Scroll(
    ".section4",
    ".section4-analysiscard",
    100,
    "section4-analysiscard-animation"
  );

  M_Scroll(".section4", ".payment-card", 100, "payment-card-animation");
  return (
    <div className="section4-rightside">
      <div className="section4-top-cards">
        <div className="setion4-creditcard section4-creditcard-animation">
          <div className="creditcard-logo">
            <img
              src={require("../../../assets/images/creditcard.png")}
              alt=""
            />
          </div>
          <h3>Scan Credit Cards</h3>
          <p className="pGrey">Scan your credit card in 4 minutes.</p>
        </div>
        <div className="section4-analysiscard section4-analysiscard-animation">
          <div className="analysis-header">
            <h3>Online Analysis</h3>
            <p>
              1 Month <IoMdArrowDropdown />{" "}
            </p>
          </div>
          <div className="analysis-colorizetext">
            <div>
              <h3>$ 2,333,61</h3>
              <p> Income</p>
            </div>
            <div>
              <h3>$ 5.32M</h3>
              <p> Expenses</p>
            </div>
          </div>
          <div className="analysis-image">
            <img
              src={require("../../../assets/images/analysis-image.png")}
              alt=""
            />
          </div>
          <div className="analysis-months">
            {Months.map((e, indx) => (
              <p
                key={indx}
                onClick={() => setActiveMonth(e.id)}
                className={MonthsState === e.id ? "active" : ""}
              >
                {e.month}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="payment-card payment-card-animation">
        <div className="payment-header">
          <h3>Pay Method</h3>
          <IoMdArrowDropdown />
        </div>
        <div className="paycards-main">
          <div className="paycard">
            <img src={require("../../../assets/images/PayPal.png")} alt="" />
          </div>
          <div className="paycard">
            <img src={require("../../../assets/images/apple.png")} alt="" />
          </div>
          <div className="paycard">
            <img src={require("../../../assets/images/Shopify.png")} alt="" />
          </div>
          <div className="paycard">
            <img src={require("../../../assets/images/Visa.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
