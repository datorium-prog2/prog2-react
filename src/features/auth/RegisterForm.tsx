import { useState } from "react";

export function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    setError("");
    validateInputs();

    if (!error) {
      // Reģistrēsim lietotāju ar API
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
    </div>
  );
}
