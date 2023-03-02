import React from "react";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

function UppdateMovie() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    year: "",
    rating: "",
    genre: "",
    poster: "",
    movie_duration: "",
  });
  const [formError, setFormError] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((e) => console.log(e));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //   Check if title is empty
    if (movie.title.trim().length !== 0) {
      console.log("input value is NOT empty");
    } else {
      return setFormError(`Please do not send empty Title`);
    }
    //   Check if director is empty
    if (movie.director.trim().length !== 0) {
      console.log("input value is NOT empty");
    } else {
      return setFormError(`Please do not send empty Director`);
    }
    //   Check if genre is empty
    if (movie.genre.trim().length !== 0) {
      console.log("input value is NOT empty");
    } else {
      return setFormError(`Please do not send empty Genre`);
    }

    //   Check if Movie Duration is empty
    if (movie.movie_duration.trim().length !== 0) {
      console.log("input value is NOT empty");
    } else {
      return setFormError(`Please do not send empty Movie Duration`);
    }

    //   Check if Poster is empty
    if (movie.poster.trim().length !== 0) {
      console.log("input value is NOT empty");
    } else {
      return setFormError(`Please do not send empty Poster`);
    }

    axios
      .put(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/${id}`, movie)
      .then((res) => navigate("/api/movies"))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    console.log(formError);
  }, [setFormError]);

  return (
    <section className="adm-videos">
      <Container>
        <div className="row justify-content-center">
          <div className="col-6 videos-form-wrapper p-5">
            <h1 className="mt-5 text-start">Add new video</h1>
            <form className="row g-3  mb-5" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={movie.title}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label">
                  year
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="year"
                  name="year"
                  value={movie.year}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label for="inputAddress" className="form-label">
                  Director
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="director"
                  id="director"
                  placeholder="Director name"
                  value={movie.director}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label for="inputAddress2" className="form-label">
                  Genre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="genre"
                  name="genre"
                  placeholder="Genre, Comedy, TV Series, etc"
                  value={movie.genre}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Movie Duration
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="movie_duration"
                  name="movie_duration"
                  value={movie.movie_duration}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label">
                  Rating
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="rating"
                  name="rating"
                  value={movie.rating}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label for="inputAddress2" className="form-label">
                  Image Path
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="poster"
                  name="poster"
                  placeholder="Poster URL"
                  value={movie.poster}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 text-start">
                <button type="submit" className="btn btn-primary">
                  Update Movie
                </button>
                <br />
                <br />
                {formError !== "" ? (
                  <div className="alert alert-warning" role="alert">
                    {formError}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default UppdateMovie;
