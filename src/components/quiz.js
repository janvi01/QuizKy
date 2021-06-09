import React, { useState, useEffect } from "react";
import {Link} from 'react-scroll'
import "./quiz.css";

function Quiz() {
  const [questioncontent, setQuestioncontent] = useState([]);
  const [category, setcategory] = useState("9");
  const [Heading, setHeading] = useState("General Knowledge");
  const [Question, setQuestion] = useState([]);
  const [option, setoption] = useState([]);
  const [index, setindex] = useState(0);
  const [correctans, setcorrectans] = useState("");
  const [show, setshow] = useState(false);
  const [resultshow, setresultshow] = useState(false);
  const [click, setclick] = useState(0);
  const [score, setscore] = useState(0);
  const [res, setres] = useState("");

  useEffect(() => {
    const api_url = `https://opentdb.com/api.php?amount=30&category=${category}`;
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        setQuestioncontent(data.results);
        setQuestion([data.results[index].question]);
        setoption(
          [
            data.results[index].correct_answer,
            ...data.results[index].incorrect_answers,
          ].sort()
        );
        setcorrectans(data.results[index].correct_answer);
        
      });
  }, [category, index]);

  //on clicking generate btn
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

  //result onclick
  function checkCorrect(optionChosen, idChosen) {
    setclick(click + 1);
    if (optionChosen === correctans) {
      if (click === 0) setscore(score + 1);
      setres("Yayy! Correct answer 🎉");
      document.getElementById(idChosen).className = "correct";
    } else {
      setres("Oops, Wrong answer.");
      document.getElementById(idChosen).className = "incorrect";
    }
  }

  //next
  function next() {
    setclick(0);
    setindex(index + 1);
    document.getElementById("a").className = "btn";
    document.getElementById("b").className = "btn";
    document.getElementById("c").className = "btn";
    document.getElementById("d").className = "btn";
    setres("");
  }

  //playagain
  function playagain() {
    setindex(0);
    setresultshow(false);
    document.getElementById("a").className = "btn";
    document.getElementById("b").className = "btn";
    document.getElementById("c").className = "btn";
    document.getElementById("d").className = "btn";
    setres("");
    setclick(0);
    setscore(0);
  }

  return (
    <div className="quizContainer">
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
        className="btn2"
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
          <h3>
            Your score is {score}/{index + 1}.
          </h3>
          <h3>Thanks for playing! </h3>
          <button className="btn2" id="pa" onClick={() => playagain()}>
            Play Again
          </button>
        </div>
        <div className="main">
          {questioncontent.length > 0 ? (
            <div className="container">
              <span className="Qno">Q.No. ~ {index + 1}</span>
              <div className="head">
                <span>Score : {score}</span>
                <br />
              </div>
              <div className="qbox">
                <h2>{Question}</h2>
              </div>
              <div className="answerbox">
                <button
                  className="btn"
                  id="a"
                  onClick={() => checkCorrect(option[0], "a")}
                >
                  {option[0]}
                </button>
                <button
                  className="btn"
                  id="b"
                  onClick={() => checkCorrect(option[1], "b")}
                >
                  {option[1]}
                </button>
                <button
                  className="btn"
                  id="c"
                  onClick={() => checkCorrect(option[2], "c")}
                >
                  {option[2]}
                </button>
                <button
                  className="btn"
                  id="d"
                  onClick={() => checkCorrect(option[3], "d")}
                >
                  {option[3]}
                </button>
              </div>
              <h4>{res}</h4>
            </div>
          ) : (
            <div
              className="container"
              onClick={() => console.log(questioncontent[index])}
            >
              Loading.....
            </div>
          )}
        </div>
        <button className="btn2" onClick={() => next()}>
          Next
        </button>
        <Link to="pa"><button className="btn2" onClick={() => setresultshow(true)}>
          Quit
        </button></Link>
      </div>
    </div>
  );
}

export default Quiz;
