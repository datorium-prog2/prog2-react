export function PostsForm() {
  return (
    <div className="flex flex-col gap-2 mb-6">
      <input
        className="border-2 rounded-lg px-4 py-2"
        type="text"
        placeholder="Title"
      />
      <textarea
        className="border-2 rounded-lg px-4 py-2"
        placeholder="Share your thoughts..."
        rows={3}
      ></textarea>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Post!
      </button>
    </div>
  );
}
