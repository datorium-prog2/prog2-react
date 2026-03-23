import axios from "axios";
import { CreateCommentRequest, CreatePostRequest, Post } from "./types";

const BASE_URL = "https://prog2-webapi-teaching-demo.onrender.com/api/posts";

const authHeader = (token: string) => ({
  headers: { Authorization: `Bearer ${token}` },
});

export const createPost = (request: CreatePostRequest, token: string) =>
  axios.post<{ id: number }>(`${BASE_URL}`, request, authHeader(token));

// export f-jas nosaukums = (f-jas argumenti) =>
//  funkcijas saturs
export const getPosts = (token: string) =>
  axios.get<Post[]>(`${BASE_URL}`, authHeader(token));
// axios - bibliotēkas nosaukums, kas ļauj veikt API izsaukumus
// get - HTTP metode, ko izmantojam (GET, POST, DELETE, PATCH...)
// <Post[]> - ko atgriež API (saraksts ar postiem)
// (`${BASE_URL}`,...) - URL, uz kuru sūtam pieprasījumu
// (..., authHeader(token)) - sūtam arī autorizācijas header (galveni)

export const likePost = (postId: number, token: string) =>
  axios.post<{ msg: string }>(
    `${BASE_URL}/${postId}/like`,
    {}, // POST pieprasīju ir arī jāpievieno request body
    authHeader(token),
  );

export const createComment = (
  postId: number,
  request: CreateCommentRequest,
  token: string,
) =>
  axios.post<{ id: number }>(
    `${BASE_URL}/${postId}/comment`,
    request, // POST pieprasīju ir arī jāpievieno request body
    authHeader(token),
  );
