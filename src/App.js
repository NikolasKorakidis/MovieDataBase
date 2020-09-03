import React from "react";
import "./App.css";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NavBar from "./compoments/NavBar";
import { Switch, Route } from "react-router-dom";
import MoviePage from "./compoments/MoviePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/discover" exact component={DiscoverMoviesPage} />
        <Route path="/discover/:imdb_id" exact component={MoviePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

// My API
// http://www.omdbapi.com/?i=tt3896198&apikey=f0d0fe5

//ask about Using HTTPie, in your terminal:

export default App;
