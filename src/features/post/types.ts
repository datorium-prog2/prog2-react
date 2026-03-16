export interface CreatePostRequest {
  title: string;
  content: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  authors: {
    id: number;
    username: string;
  };
  likeCount: number;
}
