import { useState } from "react";
import { PostsForm } from "./PostsForm";
import { createPost } from "./api";

interface PostsPageProps {
  token: string;
}

export function PostsPage({ token }: PostsPageProps) {
  const [error, setError] = useState("");

  const handleCreate = async (title: string, content: string) => {
    try {
      setError("");
      await createPost({ title, content }, token);
    } catch {
      setError("Failed to create post.");
    }
  };

  return (
    <div className="p-4 flex flex-col gap-2 max-w-sm">
      <h1 className="text-2xl font-bold">Posts</h1>
      <PostsForm onSubmit={handleCreate} />
      {error && <p className="text-red-500 mb-4">{error}</p>}
    </div>
  );
}
