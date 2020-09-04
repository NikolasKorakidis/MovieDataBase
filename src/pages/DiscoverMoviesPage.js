import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState([]);
  const [searchState, set_searchState] = useState({ status: "idle" });
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    const search = async () => {
      try {
        if (params.searchText) {
          set_searchState({ status: "searching" });
          const data = await axios.get(
            `http://www.omdbapi.com/?i=tt3896198&apikey=f0d0fe5&s=${params.searchText}`
          );
          set_searchState({ status: "done", data: data });
        }
      } catch (err) {
        console.log({
          message: "An Error has occured",
          error: err.message,
        });
      }
    };
    search();
  }, [params.searchText]);

  const navigateToSearch = () => {
    const routeParam = encodeURIComponent(searchText);
    history.push(`/discover/${routeParam}`);
  };

  let output;

  if (searchState.status === "searching") {
    output = "Loading";
  } else if (searchState.status === "done") {
    if (!searchState.data.data.Search) {
      return <h1>Movie Not found</h1>;
    }
    output = searchState.data.data.Search.map((movie) => (
      <div key={movie.imdbID}>
        <Link to={`/movie/${movie.imdbID}`}>
          <p>{movie.Title}</p>
        </Link>
        <img alt="Movie" src={movie.Poster}></img>
      </div>
    ));
  }
  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={navigateToSearch}>Search</button>
      </p>
      <h3>{output}</h3>
    </div>
  );
}
