import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import Row from "react-bootstrap/Row";

function Moviesdetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((e) => console.log(e));
  }, [id]);

  const handleDelete = (e) => {
    axios
      .delete(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/${e.target.value}`
      )
      .then((res) => navigate("/api/movies"))
      .catch((e) => console.log(e));
  };

  return (
    <div className="container">
      <div className="spacer"></div>
      <div className="row justify-content-center">
        <div className="col-4">
          <img
            className="movieDetailsImages"
            src={movie?.poster}
            alt={movie?.title}
          />
        </div>
        <div className="col-6 text-start">
          <h3 className="text-white roboto-light mt-5">Movie Title</h3>
          <h2 className="text-white roboto-large">{movie?.title}</h2>
          <h3 className="text-white roboto-light mt-3">Director</h3>
          <h5 className="text-light roboto">{movie?.director}</h5>
          <h3 className="text-white roboto-light mt-3">Year</h3>
          <h5 className="text-light roboto">{movie?.year}</h5>
          <h3 className="text-white roboto-light mt-3">Rating</h3>
          <h5 className="text-light roboto"> {movie?.rating}</h5>
          <h3 className="text-white roboto-light mt-3">Genre</h3>
          <h5 className="text-light roboto">{movie?.genre}</h5>
          <h3 className="text-white roboto-light mt-3">Duration</h3>
          <h5 className="text-light roboto">{movie?.movie_duration}</h5>
          <div className="buttons mt-5">
            <Link
              to={`/update/movies/${movie?.id}`}
              className="btn btn-primary m-3"
              type="button"
            >
              <span class="material-symbols-sharp">edit</span>Edit
            </Link>
            <button
              className="btn btn-danger m-3"
              value={movie?.id}
              onClick={handleDelete}
              type="button"
            >
              {" "}
              <span class="material-symbols-sharp">delete</span>Delete
            </button>
          </div>
          <div className="buttons">
            <Link
              to="/api/movies"
              className="btn btn-secondary m-3 p-2"
              type="button"
            >
              <span class="material-symbols-sharp">arrow_back</span>
              Go back to Movies List
            </Link>
          </div>
        </div>
      </div>

      <br />
    </div>
  );
}

export default Moviesdetails;
