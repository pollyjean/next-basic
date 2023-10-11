import { BASE_URL, MovieCategory } from ".";

export const getMovieList = (category: MovieCategory) => {
  return fetch(`${BASE_URL}/${category}`, { cache: "no-cache" });
};

export const getMovie = (id: string) => {
  return fetch(`${BASE_URL}/movie?id=${id}`, { cache: "no-cache" });
};
