import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      <Row xs={1} md={2} lg={4}>
        {movies.map((e) => (
          <Col key={e.id}>
            <Link to={`/api/movies/${e.id}`}>
              <img className="movieImages" src={e.poster} />
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default MoviesColumns;
