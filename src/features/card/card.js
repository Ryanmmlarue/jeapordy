import React, { useEffect, useState } from "react";
import "./card.css";

const Card = ({ data }) => {
  const question = data && data[0].question;
  const answer = data && data[0].answer;
  const value = data && data[0].value;

  useEffect(() => {
    var card = document.getElementById("card-container");

    window.addEventListener("keypress", (event) => {
      // If the user presses the "Enter" key on the keyboard
      if (event.key === "Enter") {
        // cancel the default action, if needed
        event.preventDefault();

        // rotates the card
        card.classList.toggle("is-flipped");
      }
    });
  }, []);

  return (
    <div className="container" id="card-container">
      <div className="card">
        <div className="front">
          <div className="top">
            <h3>{value}</h3>
          </div>
          <div className="bottom">
            <h2>{question}</h2>
          </div>
        </div>
        <div className="back">
          <h1>{answer}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
