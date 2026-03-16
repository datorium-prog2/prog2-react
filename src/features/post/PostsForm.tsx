import { useState } from "react";
import { createPost } from "./api";

interface PostsFormProps {
  onSubmit: (title: string, content: string) => void;
}

export function PostsForm({ onSubmit }: PostsFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleClick = async () => {
    onSubmit(title, content);
    setTitle("");
    setContent("");
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
        onClick={handleClick}
      >
        Post!
      </button>
    </div>
  );
}
