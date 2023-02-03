import React from "react";

export default function Transaction(props: {
  title: string;
  dayDuration: string;
  rating: string;
  img: string;
  ratingImg: string;
  className: string;
}) {
  return (
    <>
      <div className="section3-transaction-middle">
        <div className="transaction-leftside">
          <div className={`transaction-image ${props.className}`}>
            <img src={props.img} alt="" />
          </div>
          <div>
            <h1 className="normalsize-h1">{props.title}</h1>
            <p className="grey-p">{props.dayDuration}</p>
          </div>
        </div>
        <div className="transaction-rightside">
          <img src={props.ratingImg} alt="" />
          <p>{props.rating}</p>
        </div>
      </div>
    </>
  );
}
