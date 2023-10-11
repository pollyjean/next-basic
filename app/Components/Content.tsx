"use client";

import { useEffect, useState } from "react";
import { BASE_URL, MovieCategory, MovieInfo } from "../Utilities";

const Content = () => {
  const [movies, setMovies] = useState<MovieInfo[]>();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`${BASE_URL}/${MovieCategory.popular}`)).json();
      setMovies(results);
      setIsLoaded(true);
    })();
  }, []);
  return (
    <>
      {isLoaded && (
        <ul>
          {movies?.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Content;
