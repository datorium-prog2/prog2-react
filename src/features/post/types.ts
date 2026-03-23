// šajā failā mēs definējam datu tipus (interfeisi/klases)
// ko mēs sūtīsim vai saņemsim no API
// šos pašus tipus varēs izmantot datu attēlošani

export interface CreatePostRequest {
  title: string;
  content: string;
}

export interface Author {
  id: number;
  username: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  author: Author;
  likeCount: number;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  author: Author;
}
