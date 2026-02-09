import logo from "./logo.svg";
import "./App.css";

import { HelloForm } from "./features/greeting/HelloForm";
import { LoginForm } from "./features/auth/LoginForms";
import { useState } from "react";

// Funkcijas ir komponents
// Komponented atgriež JSX (JavaScript XML) - HTML līdzīgu sintaksi JavaScript iekšā
function App() {
  // token var būt vai nu string, vai nu null
  const [token, setToken] = useState<string | null>(null);

  // Tailwind klases - uzliek konkrētus CSS komponentei.
  let headerStyle =
    "text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent py-6";

  return (
    <div>
      <h1 className={headerStyle}>Prog2Social</h1>
      <HelloForm />
      <LoginForm onLogin={setToken} />
      {token}
    </div>
  );
}

export default App;
