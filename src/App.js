import React, { useEffect, useState } from "react";
import "./App.css";
import Headerr from "./components/header";
import Quiz from "./components/quiz";

const apii =
  "https://quizapi.io/api/v1/questions?apiKey=1Mxr4dO4YvLtfodL6scGwHqs5KAMIS4RqT7ZGauq&difficulty=Easy&category=code&limit=20";
function App() {
  const [question, setQuestion] = useState([]);
  const [index, setindex] = useState(0);
  useEffect(() => {
    fetch(apii)
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data);
      });
  }, []);
  const [exit, setexit] = useState("");

  return (
    <div className="App">
      <Headerr></Headerr>
      {question.length > 0 ? (
        <div>
          <Quiz data={question[index]}></Quiz>
          <h4>{exit}</h4>
          <div className="control">
            <button className="btn" onClick={() => {setindex(index + 1);
            setexit("");}}>
              Next question
            </button>
            <button className="btn" onClick={() => setexit("Thanks for playing! 🤗")}>
              Quit
            </button>
          </div>
        </div>
      ) : (
        <div className="App-header">Loading.....</div>
      )}
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
