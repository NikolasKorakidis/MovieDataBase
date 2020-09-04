import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  const route_parameters = useParams();
  const [movie, setmovie] = useState([]);
  //   console.log(route_parameters);

  useEffect(() => {
    const getMovie = async () => {
      const movieId = route_parameters.imdb_id;
      const fetchedMovie = await axios.get(
        `http://www.omdbapi.com/?apikey=f0d0fe5&i=${movieId}`
      );

      setmovie(fetchedMovie.data);
    };
    getMovie();
  }, [route_parameters.imdb_id]);

  console.log(movie);

  return (
    <div>
      {movie ? (
        <div>
          <h2>{movie.Title}</h2>
          <h2>{movie.Actors}</h2>
          <h2>{movie.Year}</h2>
          <h2>{movie.Director}</h2>
          <h2>{movie.Genre}</h2>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
