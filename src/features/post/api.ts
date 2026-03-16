import axios from "axios";
import { CreatePostRequest, Post } from "./types";

const BASE_URL = "https://prog2-webapi-teaching-demo.onrender.com/api/posts";

const authHeader = (token: string) => ({
  headers: { Authorization: `Bearer ${token}` },
});

export const createPost = (request: CreatePostRequest, token: string) =>
  axios.post<{ id: number }>(`${BASE_URL}`, request, authHeader(token));
