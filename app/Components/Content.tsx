"use client";

import { useEffect, useState } from "react";
import { BASE_URL, MovieCategory, MovieInfo, getMovieList } from "../Utilities";
import Link from "next/link";

const Content = () => {
  const [movies, setMovies] = useState<MovieInfo[]>();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      const { results } = await (await getMovieList(MovieCategory.popular)).json();
      setMovies(results);
      setIsLoaded(true);
    })();
  }, []);
  return (
    <>
      {isLoaded && (
        <ul>
          {movies?.map((item) => (
            <li key={item.id}>
              <Link href={`movies/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Content;
