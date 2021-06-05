import React from "react";
import "./App.css";
import Header from "./components/header";
import Quiz from "./components/quiz";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Quiz></Quiz>
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
      <br />
    </div>
  );
}

export default App;
