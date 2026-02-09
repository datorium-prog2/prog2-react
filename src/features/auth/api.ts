import axios from "axios";
import { UserRequest } from "./types";

const BASE_URL = "https://prog2-webapi-teaching-demo.onrender.com";

export const getAuthToken = (request: UserRequest) =>
  axios.post<{ token: string }>(`${BASE_URL}/login`, request);
