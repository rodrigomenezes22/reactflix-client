import React from "react";
import MoviesList from "./MoviesList";
import Videos from "./Videos";
import Hero from "./Hero";


function Home() {
  return (
    <div>

      
      <Hero />

      <Videos genre="TV Series" />
    </div>
  );
}

export default Home;
