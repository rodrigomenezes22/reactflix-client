import React from "react";
import MoviesList from "./MoviesList";
import Videos from "./Videos";
import Hero from "./Hero";


function Home() {
  return (
    <div>

      
      <Hero />
      <MoviesList />

      <h1>Home!</h1>

      <Videos />
    </div>
  );
}

export default Home;
