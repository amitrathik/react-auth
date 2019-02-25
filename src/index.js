import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import AuthExample from "./AuthExample";

function App() {
  return (
    <div className="App">
      <AuthExample />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
