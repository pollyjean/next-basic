"use client";
import { useEffect, useState } from "react";
import { MovieDataDetail, getMovie } from "../Utilities";

const Details = ({ id }: { id: string }) => {
  const [movies, setMovies] = useState<MovieDataDetail>();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      const data = await (await getMovie(id)).json();
      setMovies(data);
      setIsLoaded(true);
    })();
  }, [id]);
  return (
    <>
      {isLoaded && (
        <section>
          <h2>{movies?.title}</h2>
        </section>
      )}
    </>
  );
};

export default Details;
