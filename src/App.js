import "./App.css";
import React, { useState } from "react";
import Card from "./features/card/card";

const App = () => {
  const [data, setData] = useState();

  const onClick = (event) => {
    fetch("https://jservice.io/api/random")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setData(data);
      })
      .catch(function () {
        console.log("Error retriving data");
      });
  };

  return (
    <div className="App">
      <Card data={data} />
      <button style={{ marginTop: "100px" }} onClick={onClick}>
        Randomize
      </button>
    </div>
  );
};

export default App;
