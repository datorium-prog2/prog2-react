import { useState } from "react";
import { createPost } from "./api";

interface PostsFormProps {
  token: string;
}

export function PostsForm({ token }: PostsFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  // funkcija, kas tiek izsaukta, kad spiežam pogu Post
  const handleCreate = async () => {
    try {
      setError("");
      await createPost({ title, content }, token);
      setTitle("");
      setContent("");
    } catch {
      setError("Failed to create post.");
    }
  };

  return (
    <div className="flex flex-col gap-2 mb-6">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border-2 rounded-lg px-4 py-2"
        type="text"
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border-2 rounded-lg px-4 py-2"
        placeholder="Share your thoughts..."
        rows={3}
      ></textarea>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        onClick={handleCreate}
      >
        Post!
      </button>
      {error && <p className="text-red-500 mb-4">{error}</p>}
    </div>
  );
}
