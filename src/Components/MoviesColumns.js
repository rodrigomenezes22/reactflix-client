import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { Button } from "bootstrap";

function MoviesColumns() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [deleteFlag, setDeleteFlag] = useState(false);
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);

  useEffect(() => {
    setIsLoadingMovies(true);
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies`)
      .then((res) => {
        setMovies(res.data)
        setIsLoadingMovies(false);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleDelete = (e) => {
    axios
      .delete(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/${e.target.value}`
      )
      .then((res) => navigate("/api/movies"))
      .catch((e) => console.log(e));

    setDeleteFlag(!deleteFlag);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies`)
      .then((res) => setMovies(res.data))
      .catch((e) => console.log(e));
  }, [deleteFlag]);

  return (
    <>
      {isLoadingMovies ? 
      
      <div class="spinner-border text-light" role="status">
      <span class="visually-hidden">Loading...</span>
      </div>

      :
      
      movies.map((e) => (
        <Row className="bg-dark border rounded m-3 p-1" key={e.id}>
          <Col lg={2} md={6} sm={12}>
            <Link to={`/api/movies/${e.id}`}>
              <img className="movieImages" src={e.poster} />
            </Link>
          </Col>
          <Col lg={10} md={12}  sm={12} className="movieInfoColumn">
            <Row className="fs-5 fw-bold text-wrap text-uppercase text-white">
              {e.title}
            </Row>
            <Row>
              <Col lg={3} md={2} sm={6}>
                <Row className="fw-bold text-white">Director</Row>
                <Row className="text-white">{e?.director}</Row>
              </Col>
              <Col lg={1} md={2} sm={6}>
                <Row className="fw-bold text-white">Year</Row>
                <Row className="text-white">{e?.year}</Row>
              </Col>
              <Col lg={1} md={2} sm={6}>
                <Row className="fw-bold text-white">Rating</Row>
                <Row className="text-white">{e?.rating}</Row>
              </Col>
              <Col lg={1} md={2} sm={6}>
                <Row className="fw-bold text-white">Genre</Row>
                <Row className="text-white">{e?.genre}</Row>
              </Col>
              <Col lg={1} md={2} sm={6}>
                <Row className="fw-bold text-white">Duration</Row>
                <Row className="text-white">{e?.movie_duration}</Row>
              </Col>

              <Col lg={5} md={12} sm={12} id="movieInfoButtons">
                <Col lg={4}>
                  <Link
                    to={`/update/movies/${e.id}`}
                    className="btn btn-primary btn-sm"
                    type="button"
                  >
                    <span class="material-symbols-sharp">
                      edit
                      </span>
                    Edit
                  </Link>
                </Col>

                <Col lg={3} md={3} sm={12}>
                  <button
                    className="btn btn-danger btn-sm"
                    value={e.id}
                    onClick={handleDelete}
                    type="button"
                  >
                   <span class="material-symbols-sharp">
                    delete
                    </span>
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

export default MoviesColumns;
