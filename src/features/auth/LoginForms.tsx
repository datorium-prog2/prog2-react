export function LoginForm() {
  return (
    <div className="p-4 flex flex-col gap-2 max-w-sm">
      <input
        type="text"
        className="border-2 rounded-lg px-4 py-2"
        placeholder="Username"
      />
      <input
        type="password"
        className="border-2 rounded-lg px-4 py-2"
        placeholder="Password"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Login
      </button>
    </div>
  );
}
