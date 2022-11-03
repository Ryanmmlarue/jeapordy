import React from "react";
import "./card.css";

const Card = ({ data }) => {
  if (data === undefined) {
    return <>Load Spinner Here</>;
  }

  const question = data[0].question;
  const answer = data[0].answer;
  const category = data[0].category.title;
  const value = data[0].value;

  return (
    <div className="container">
      <div className="card">
        <div className="front">
          <div className="space-between">
            {/* <h2>{category}</h2>
            <h2>{value}</h2> */}
          </div>
          <h1>{question}</h1>
          <input type="text" style={{ marginTop: "75px" }}></input>
        </div>
        <div className="back">
          <h1>{answer}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
