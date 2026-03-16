import { PostsForm } from "./PostsForm";

interface PostsPageProps {
  token: string;
}

export function PostsPage({ token }: PostsPageProps) {
  return (
    <div>
      <h1>Posts</h1>
      <PostsForm token={token} />
    </div>
  );
}
