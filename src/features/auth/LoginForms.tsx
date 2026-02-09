import { useState } from "react";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Login
      </button>
    </div>
  );
}
