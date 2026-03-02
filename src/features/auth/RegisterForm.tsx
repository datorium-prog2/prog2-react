import { useState } from "react";
import { registerUser } from "./api";

export function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    setError("");
    setMessage("");
    validateInputs();

    // UN-HAPPY PATH
    if (error) {
      return; // early return
    }

    // HAPPY PATH
    try {
      await registerUser({ username, password });
      setMessage("User registered successfully!");
    } catch (err: any) {
      if (err.reponse?.data) {
        setError(err.response?.data);
      } else if (err.response?.status == 409) {
        setError("Username is already taken!");
      } else {
        setError("Something went wrong. Please try again!");
      }
    }
  };

  const validateInputs = () => {
    if (!username) {
      setError("Username ir required!");
      return;
    }
    if (!password) {
      setError("Password is required!");
      return;
    }
    if (password !== repeatPassword) {
      setError("Passwords must match!");
      return;
    }
  };

  // Atgriež JSX -> Javascript ar HTML
  return (
    <div className="p-4 flex flex-col gap-2 max-w-sm">
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
        className="border-2 rounded-lg px-4 py-2"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="border-2 rounded-lg px-4 py-2"
      />
      <input
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
        type="password"
        placeholder="Repeat password"
        className="border-2 rounded-lg px-4 py-2"
      />
      <button
        className="bg-cyan-500 text-white px-4 py-2 rounded-lg"
        onClick={handleRegister}
      >
        Register
      </button>
      {/* ja ir error, rādīt error */}
      {error && <p className="text-red-500">{error}</p>}
      {message && <p className="text-black">{message}</p>}
    </div>
  );
}
