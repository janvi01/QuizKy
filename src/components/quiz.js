import React, { useState } from "react";
import "./quiz.css";

function Quiz({ data: { question, answers, correct_answers } }) {
  const [score, setscore] = useState(0);
  const [res, setres] = useState("");
  const [count, setcount] = useState(0);
  const [wrong, setwrong] = useState(0);
  function check(correct, nam) {
    if (correct === "true") {
        setcount(count+1); 
        if(count===0)
      setscore(score + 1);
      setres("Yayy! Correct answer 🎉");
      document.getElementById(nam).className="correct";
    } else {
        setwrong(wrong+1);
        setres("Oops, Wrong answer.");
        document.getElementById(nam).className="incorrect";
    }
  }  
  function reset(){
    document.getElementById("a").className="btnn";
    document.getElementById("b").className="btnn";
    document.getElementById("c").className="btnn";
    document.getElementById("d").className="btnn";
    setres("");
    setcount(0);
  }
  

  return (
    <div className="main">
      <div className="container">
        <div className="head">
          <span>Score : {score}</span><br/>
        </div>
        <div className="topbox">
          <h2>{question}</h2>
        </div>
        <div className="answerbox">
          <button className="btnn" id="a"
            onClick={() => {
              check(correct_answers.answer_a_correct, "a");
            }}
          >
            {answers.answer_a}
          </button>
          <button className="btnn" id="b"
            onClick={() => {
              check(correct_answers.answer_b_correct, "b");
            }}
          >
            {answers.answer_b}
          </button>
          <button className="btnn" id="c"
            onClick={() => {
              check(correct_answers.answer_c_correct, "c");
            }}
          >
            {answers.answer_c}
          </button>
          <button className="btnn" id="d"
            onClick={() => {
              check(correct_answers.answer_d_correct, "d");
            }}
          >
            {answers.answer_d}
          </button>
          <h4>{res}</h4>
          <i class="fas fa-sync-alt" onClick={reset}></i>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
