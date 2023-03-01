import React from "react";
import MoviesColumns from "./MoviesColumns";
import Container from "react-bootstrap/Container";

function MoviesList() {
  return (
    <>
      <Container>
        <h3 className="listTitle">Trending Movies</h3>
        <MoviesColumns />
      </Container>

    </>
  );
}

export default MoviesList;
