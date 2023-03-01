import React from "react";
import MoviesList from "./MoviesList";
import Videos from './Videos'

function Home() {
  return (
    <div>
      <h1>Home!</h1>
      <MoviesList />
      <Videos />
    </div>
  );
}

export default Home;
