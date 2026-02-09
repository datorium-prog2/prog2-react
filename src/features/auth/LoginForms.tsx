import { useState } from "react";
import { getAuthToken } from "./api";

interface LoginFormProps {
  // onLogin ir funkcija, kas ņemt kā argumentu vienu string, un atgriež neko
  onLogin: (token: string) => void;
}

// kā arguments šai komponentei būš funkcija, kas var nomainīt token (setToken)
export function LoginForm({ onLogin }: LoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setError("");
      const response = await getAuthToken({ username, password });
      onLogin(response.data.token);
    } catch (err: any) {
      if (err.response?.data) {
        setError(err.response?.data);
      } else {
        setError("Something went wrong :(");
      }
    }
  };

  return (
    <div className="p-4 flex flex-col gap-2 max-w-sm">
      <input
        type="text"
        className="border-2 rounded-lg px-4 py-2"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="border-2 rounded-lg px-4 py-2"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={handleLogin}
      >
        Login
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
