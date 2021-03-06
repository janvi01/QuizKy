import React, { useState } from "react";
import data from "./reload";
import "./header.css";

function Header() {
  const [i, seti] = useState(0);
  return (
    <header className="App-header">
      <h1>QUIZKY</h1>
      <p>Play random quiz</p>
      <h4>
        {data[i]} &nbsp;&nbsp;
        <i class="fas fa-sync-alt" onClick={() => seti(i + 1)}></i>
      </h4>
    </header>
  );
}

export default Header;
