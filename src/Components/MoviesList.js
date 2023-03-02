import React from "react";
import MoviesColumns from "./MoviesColumns";
import Container from "react-bootstrap/Container";

function MoviesList() {
  return (
    <>
      <Container>
        <h3 className="movieListTitle">Trending Movies</h3>
        <MoviesColumns />
      </Container>

      <Container>
        <h3 className="movieListTitle">Hit Movies</h3>
        <MoviesColumns />
      </Container>
    </>
  );
}

export default MoviesList;
