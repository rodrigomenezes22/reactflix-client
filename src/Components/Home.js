import React from "react";
import MoviesList from "./MoviesList";
import Videos from "./Videos";
import Hero from "./Hero";


function Home() {
  return (
    <div>

      
      <Hero />

      <Videos genre="TV Series" />

      <Videos genre="Crime" />

      <Videos genre="Drama" />

      <Videos genre="Action" />
    </div>
  );
}

export default Home;
