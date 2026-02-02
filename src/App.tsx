import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from "react";
import { getHello } from "./api";

function Hello() {
  // izmantojam State, glabāt aplikācijas stāvokli (informāciju)
  // const [mainīgā nosaukums, funkcija lai mainītu vērtību] = useState(noklusējuma vērtība)
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  // izpildās vienu reizi, kad komponente ielādējas
  useEffect(() => {
    const fetchData = async () => {
      const response = await getHello();
      setMessage(response.data);
    };

    fetchData();
  }, []); // tukšs saraksts => izpildīt tikai vienu reizi

  const containerStyle = "max-w-3xl mx-auto px-6 py-6";
  const formStyle = "flex flex-col sm:flex-row items-center gap-3";
  const inputStyle =
    "flex-1 w-full px-4 py-2 rounded-md border border-gray-300 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300";
  const buttonStyle =
    "px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400";
  const pStyle =
    "text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-100 leading-relaxed max-w-prose mx-auto px-6 py-3 rounded-lg bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-sm";

  return (
    <div className={containerStyle}>
      <div className={formStyle}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputStyle}
          type="text"
          placeholder="Type a name..."
        />
        <button className={buttonStyle}>Greet me!</button>
      </div>
      <p className={pStyle}>{message}</p>
    </div>
  );
}

// Funkcijas ir komponents
// Komponented atgriež JSX (JavaScript XML) - HTML līdzīgu sintaksi JavaScript iekšā
function App() {
  // Tailwind klases - uzliek konkrētus CSS komponentei.
  let headerStyle =
    "text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent py-6";

  return (
    <div>
      <h1 className={headerStyle}>Prog2Social</h1>
      <Hello />
    </div>
  );
}

export default App;
