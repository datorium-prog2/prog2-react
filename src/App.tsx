import logo from "./logo.svg";
import "./App.css";

import { HelloForm } from "./features/greeting/HelloForm";
import { LoginForm } from "./features/auth/LoginForm";
import { RegisterForm } from "./features/auth/RegisterForm";
import { useState } from "react";

// Funkcijas ir komponents
// Komponented atgriež JSX (JavaScript XML) - HTML līdzīgu sintaksi JavaScript iekšā
function App() {
  // token var būt vai nu string, vai nu null
  const [token, setToken] = useState<string | null>(null);
  // glabājam esošu lapu state'ā
  const [page, setPage] = useState<"login" | "register">("login");

  // Tailwind klases - uzliek konkrētus CSS komponentei.
  let headerStyle =
    "text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent py-6";

  // ja tokens eksistē (ja esam ielogojušies)
  if (token) {
    return (
      <div>
        <h1 className={headerStyle}>Prog2Social</h1>
        <HelloForm />
      </div>
    );
  }

  if (page === "login") {
    return (
      <div>
        <h1 className={headerStyle}>Prog2Social</h1>
        <LoginForm onLogin={setToken} />
        <p className="p-4">
          Don't have an account?{" "}
          <button
            onClick={() => setPage("register")}
            className="text-blue-500 underline"
          >
            Register
          </button>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className={headerStyle}>Prog2Social</h1>
      <RegisterForm />
      <p className="p-4">
        Already have an account?{" "}
        <button
          onClick={() => setPage("login")}
          className="text-blue-500 underline"
        >
          Login
        </button>
      </p>
    </div>
  );
}

export default App;
