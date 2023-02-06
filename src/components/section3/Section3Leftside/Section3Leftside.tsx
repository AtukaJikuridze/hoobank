import React from "react";
import "./Section3Leftside.css";
import Transaction from "./Transaction";
import { BsCheckLg } from "react-icons/bs";
export default function Section3Leftside() {
  return (
    <div className="section3-leftside">
      <div className="section3-paypal section3-paypal-animation">
        <div className="paypal-header">
          <div className="paypal-image">
            <img src={require("../../../assets/images/PayPal.png")} alt="" />
          </div>
          <div>
            <h1>PayPal</h1>
            <p>Checkout</p>
          </div>
        </div>
        <div className="paypal-middle">
          <div>
            <p>Total</p>
            <h1>210$</h1>
          </div>
          <div className="change-button">
            <p>Change</p>
          </div>
        </div>
        <button className="payment-button">Make Payment</button>
      </div>
      <div className="section3-transaction section3-transaction-animation">
        <h2>Lost Transaction</h2>
        <Transaction
          title="Dribble Pro"
          dayDuration="15 Days Ago"
          ratingImg={require("../../../assets/images/RedTransaction.png")}
          img={require("../../../assets/images/Dribble.png")}
          rating="-$250,93"
          className="Dribble"
        />

        <Transaction
          title="Netflix"
          dayDuration="4 Days Ago"
          ratingImg={require("../../../assets/images/RedTransaction.png")}
          img={require("../../../assets/images/Netflix.png")}
          rating="-$250,93"
          className="Netflix"
        />

        <Transaction
          title="Manulife Cash"
          dayDuration="4 Days Ago"
          ratingImg={require("../../../assets/images/GreenTransaction.png")}
          img={require("../../../assets/images/Cash.png")}
          rating="-$250,93"
          className="Cash"
        />
      </div>
      <div className="section3-success section3-success-animation">
        <div className="succes-icon">
          <BsCheckLg />
        </div>
        <p>Great! Your Payment is succesfully</p>
      </div>
    </div>
  );
}
