import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="front">
          <h1>Question</h1>
        </div>
        <div className="back">
          <h1>Back of Card</h1>
          <p>Additional info on the back of the card</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
