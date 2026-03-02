export function RegisterForm() {
  // Atgriež JSX -> Javascript ar HTML
  return (
    <div className="p-4 flex flex-col gap-2 max-w-sm">
      <input
        type="text"
        placeholder="Username"
        className="border-2 rounded-lg px-4 py-2"
      />
      <input
        type="text"
        placeholder="Password"
        className="border-2 rounded-lg px-4 py-2"
      />
      <input
        type="text"
        placeholder="Repeat password"
        className="border-2 rounded-lg px-4 py-2"
      />
      <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg">
        Register
      </button>
    </div>
  );
}
