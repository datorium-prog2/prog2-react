import React from "react";
import logo from "./logo.svg";
import "./App.css";

function HelloDatorium() {
  return <p>Prog2 ir ļoti cool!</p>;
}

// Funkcijas ir komponents
// Komponented atgriež JSX (JavaScript XML) - HTML līdzīgu sintaksi JavaScript iekšā
function App() {
  return (
    <div>
      <h1>Hello from React!</h1>
      <HelloDatorium />
    </div>
  );
}

export default App;
