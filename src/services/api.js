import axios from "axios";

// ==========================================
// MOVIE API CLIENT
// ==========================================

const movieAPI = axios.create({
  baseURL: "https://api.tvmaze.com",
  timeout: 10000,
});

// ==========================================
// GET ALL MOVIES
// ==========================================

export const getMovies = async () => {
  const response = await movieAPI.get("/shows");

  return response.data;
};

// ==========================================
// GET SINGLE MOVIE
// ==========================================

export const getMovieById = async (id) => {
  const response = await movieAPI.get(`/shows/${id}`);

  return response.data;
};
