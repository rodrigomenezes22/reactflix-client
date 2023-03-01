import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { Button } from "bootstrap";

function MoviesColumns() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies`)
      .then((res) => setMovies(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      {movies.map((e) => (
        <Row className="bg-light border rounded m-4">
          <Col sm={2}>
            <Link to={`/api/movies/${e.id}`}>
              <img className="movieImages" src={e.poster} />
            </Link>
          </Col>
          <Col sm={10} className="movieInfoColumn">
            <Row className="fs-5 fw-bold text-wrap text-uppercase">
              {e.title}
            </Row>
            <Row>
              <Col sm={3}>
                <Row className="fw-bold">Director</Row>
                <Row>{e?.director}</Row>
              </Col>
              <Col sm={1}>
                <Row className="fw-bold">Year</Row>
                <Row>{e?.year}</Row>
              </Col>
              <Col sm={1}>
                <Row className="fw-bold">Rating</Row>
                <Row>{e?.rating}</Row>
              </Col>
              <Col sm={1}>
                <Row className="fw-bold">Genre</Row>
                <Row>{e?.genre}</Row>
              </Col>
              <Col sm={1}>
                <Row className="fw-bold">Duration</Row>
                <Row>{e?.movie_duration}</Row>
              </Col>
              <Col sm={5} id="movieInfoButtons">
                <Col sm={1}>
                  <button className="btn btn-primary btn-sm" type="button">
                    Edit
                  </button>
                </Col>
                <Col sm={9}>
                  <button className="btn btn-danger btn-sm" type="button">
                    Delete
                  </button>
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      ))}
    </>
  );
}

// <div className="col-" key={e.id}>
//   <Link to={`/api/movies/${e.id}`}>
//     <img className="movieImages" src={e.poster} />
//   </Link>
// </div>

export default MoviesColumns;
