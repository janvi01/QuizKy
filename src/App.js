import React from "react";
import "./App.css";
import Headerr from "./components/header";
import Quiz from "./components/quiz";

function App() {
  return (
    <div className="App">
      <Headerr></Headerr>
      <Quiz ></Quiz>
      <h4>
        Made using{" "}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
      </h4>
    </div>
  );
}

export default App;
