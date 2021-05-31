import React, { useState, useEffect } from "react";
import "./quiz.css";

function Quiz() {
  const [category, setcategory] = useState("9");
  const [Heading, setHeading] = useState("General Knowledge");
  const [questioncontent, setQuestioncontent] = useState([]);
  const [index, setindex] = useState(0);
  useEffect(() => {
    const api_url = `https://opentdb.com/api.php?amount=30&category=${category}`;
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        setQuestioncontent(data.results);
      });
  }, [category]);
  function generate() {
    const headinglist = [
      "General Knowledge",
      "Sports",
      "Entertainment",
      "Science and Nature",
      "Computers",
      "Music",
    ];
    var index = document.getElementById("cat").selectedIndex;
    setcategory(document.getElementById("cat").value);
    setHeading(headinglist[index]);
  }
  const [show, setshow] = useState(false);
  const [resultshow, setresultshow] = useState(false);

  return (
    <div className="mid">
      <h2>Select Category</h2>
      <select id="cat">
        <option value="9">General Knowledge</option>
        <option value="21">Sports</option>
        <option value="11">Entertainment</option>
        <option value="17">Science and Nature</option>
        <option value="18">Computers</option>
        <option value="12">Music</option>
      </select>
      <br />
      <br />
      <button
        className="GenBtn"
        onClick={() => {
          generate();
          setshow(true);
          setresultshow(false);
        }}
      >
        Generate
      </button>
      <div style={{ display: show ? "block" : "none" }}>
        <h2 className="catTitle">{Heading}</h2>
        <div
          className="result"
          style={{ display: resultshow ? "block" : "none" }}
        >
          <h3>Your score is 0/0.</h3>
          <h3>Thanks for playing! 🤗</h3>
          <button className="btn2">Play Again</button>
        </div>
        <div className="main">
          {questioncontent.length > 0 ? (
            <div className="container">
              <span className="Qno">Q.No. ~ {index + 1}</span>
              <div className="head">
                <span>Score : 0</span>
                <br />
              </div>
              <div className="topbox">
                <h2>{questioncontent[index].question}</h2>
              </div>
              <div className="answerbox">
                <button className="btn">
                  {questioncontent[index].correct_answer}
                </button>
                <button className="btn">
                  {questioncontent[index].incorrect_answers[0]}
                </button>
                <button className="btn">
                  {questioncontent[index].incorrect_answers[1]}
                </button>
                <button className="btn">
                  {questioncontent[index].incorrect_answers[2]}
                </button>
              </div>
            </div>
          ) : (
            <div
              className="App-header"
              onClick={() => console.log(questioncontent[index])}
            >
              Loading.....
            </div>
          )}
        </div>
        <button className="btn2" onClick={() => setindex(index + 1)}>
          Next
        </button>
        <button className="btn2" onClick={() => setresultshow(true)}>
          Quit
        </button>
      </div>
    </div>
  );
}

export default Quiz;
