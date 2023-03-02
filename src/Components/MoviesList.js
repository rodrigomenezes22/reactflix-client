import React from "react";
import MoviesColumns from "./MoviesColumns";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MoviesList() {
  return (
    <>
      <Container>
        <Row className="movieListTitleRow">
          <Col sm={6}>
            <h3 className="movieListTitle">Trending Movies</h3>
          </Col>
          <Col sm={6}>
            <Link to={`/movies/new`}>
              <button className="btn btn-primary btn-sm" type="button">
                Add Movie
              </button>
            </Link>
          </Col>
        </Row>

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
