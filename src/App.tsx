import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from "react";
import { getHello } from "./api";

function Hello() {
  // izmantojam State, glabāt aplikācijas stāvokli (informāciju)
  // const [mainīgā nosaukums, funkcija lai mainītu vērtību] = useState(noklusējuma vērtība)
  const [message, setMessage] = useState("");

  // izpildās vienu reizi, kad komponente ielādējas
  useEffect(() => {
    const fetchData = async () => {
      const response = await getHello();
      setMessage(response.data);
    };

    fetchData();
  }, []); // tukšs saraksts => izpildīt tikai vienu reizi

  const pStyle =
    "text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-100 leading-relaxed max-w-prose mx-auto px-6 py-3 rounded-lg bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-sm";
  return <p className={pStyle}>{message}</p>;
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
