import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState([]);
  const [searchState, set_searchState] = useState({ status: "idle" });

  const search = async () => {
    set_searchState({ status: "searching" });
    try {
      const queryParam = encodeURIComponent(searchText);
      const data = await axios.get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=f0d0fe5&s=${queryParam}`
      );
      set_searchState({ status: "done", data: data });
    } catch (err) {
      console.log({
        message: "An Error has occured",
        error: err,
      });
    }
  };

  let output;

  if (searchState.status === "searching") {
    output = "Loading";
  } else if (searchState.status === "done") {
    output = searchState.data.data.Search.map((movie) => (
      <div key={movie.imdbID}>
        <Link to={`/discover/${movie.imdbID}`}>
          <p>{movie.Title}</p>
        </Link>
        <img src={movie.Poster}></img>
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
        <button onClick={search}>Search</button>
      </p>
      <h3>{output}</h3>
    </div>
  );
}
