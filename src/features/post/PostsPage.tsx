import { useState, useEffect } from "react";
import { PostsForm } from "./PostsForm";
import { createPost, getPosts, likePost, createComment } from "./api";
import { Post } from "./types";

interface PostsPageProps {
  token: string;
}

const formatDate = (value: string) =>
  new Date(value).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });

export function PostsPage({ token }: PostsPageProps) {
  const [error, setError] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [commentInputs, setCommentInputs] = useState<Record<number, string>>(
    {},
  );

  const handleCreate = async (title: string, content: string) => {
    try {
      setError("");
      await createPost({ title, content }, token);
      await loadPosts();
    } catch {
      setError("Failed to create post.");
    }
  };

  const handleComment = async (postId: number) => {
    const content = commentInputs[postId]?.trim();

    // ja nav komentāra satura, beignt funckijas izpildi
    if (!content) {
      return;
    }

    try {
      setError("");
      await createComment(postId, { content }, token);
      // notīram komentāra lauku
      setCommentInputs((current) => ({
        ...current,
        [postId]: "",
      }));
      await loadPosts();
    } catch {
      setError("Failed to add comment.");
    }
  };

  const loadPosts = async () => {
    try {
      setError("");
      let response = await getPosts(token);
      // parāda postus reverse chronological order (jaunāki posti būs augšā)
      setPosts(response.data.slice().reverse());
    } catch {
      setError("Failed to load posts.");
    }
  };

  const handleLike = async (postId: number) => {
    try {
      setError("");
      await likePost(postId, token);
      await loadPosts();
    } catch {
      setError("Failed to like post.");
    }
  };

  // šis vienkārši pievieno jaunu Record<string, number>
  const handleCommentChange = (postId: number, value: string) => {
    setCommentInputs((current) => ({
      ...current,
      [postId]: value,
    }));
  };

  useEffect(() => {
    loadPosts();
  }, []); // [] - izpildīsies vienu reizi, katru reizi, kad komponente ielādējas

  return (
    <div className="p-4 flex flex-col gap-2 max-w-xl">
      <h1 className="text-2xl font-bold">Posts</h1>
      <PostsForm onSubmit={handleCreate} />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div>
        {
          // Katram postam izveidot JSX kodu (HTML) (map ir līdzīgs for/foreach loopam)
          posts.map((post: Post) => (
            <article
              key={post.id}
              className="border-2 rounded-lg p-4 flex flex-col gap-3"
            >
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-sm text-gray-600">
                  By {post.author.username} on {formatDate(post.createdAt)}
                </p>
              </div>
              <p>{post.content}</p>

              <div className="flex items-center gap-3">
                <button
                  className="py-2 rounded-lg"
                  onClick={() => handleLike(post.id)}
                >
                  ❤️ {post.likeCount}
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="">Comments ({post.comments.length})</h3>

                {post.comments.length === 0 ? (
                  <p className="text-sm text-gray-600">No comments yet.</p>
                ) : (
                  <div className="flex flex-col gap-2">
                    {post.comments.map((comment) => (
                      <div
                        key={comment.id}
                        className="bg-gray-50 border rounded-lg px-3 py-2"
                      >
                        <p>{comment.content}</p>
                        <p className="text-sm text-gray-600 mt-1">
                          {comment.author.username}{" "}
                          {formatDate(comment.createdAt)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-col gap-2 sm:flex-row">
                  <input
                    type="text"
                    value={commentInputs[post.id] ?? ""}
                    onChange={(e) =>
                      handleCommentChange(post.id, e.target.value)
                    }
                    placeholder="Write a comment..."
                    className="border-2 rounded-lg px-4 py-2 flex-1"
                  ></input>
                  <button
                    className="bg-cyan-500 text-white px-4 py-2 rounded-lg"
                    onClick={() => handleComment(post.id)}
                  >
                    Comment
                  </button>
                </div>
              </div>
            </article>
          ))
        }
      </div>
    </div>
  );
}
