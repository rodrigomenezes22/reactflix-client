import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

function Moviesdetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate()
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((e) => console.log(e));
  }, [id]);



  const handleDelete = (e) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/${e.target.value}`)
      .then((res) => navigate("/api/movies"))
      .catch((e) => console.log(e));
  };


  return (
    <div className="container">
      <div className="spacer"></div>
      <h2 className="text-white mt-5">{movie?.title}</h2>
      <img
        className="movieDetailsImages col-3"
        src={movie?.poster}
        alt={movie?.title}
      />
      <br />
      <h5 className="text-light">Director: {movie?.director}</h5>
      <h5 className="text-light">Year: {movie?.year}</h5>
      <h5 className="text-light">Rating: {movie?.rating}</h5>
      <h5 className="text-light">Genre :{movie?.genre}</h5>
      <h5 className="text-light">Duration: {movie?.movie_duration}</h5>

      <div className="buttons">
      <Link to={`/update/movies/${movie?.id}`} className="btn btn-primary btn-sm" type="button">
         Edit
      </Link>
      <button className="btn btn-danger btn-sm" value={movie?.id} onClick={handleDelete} type="button">
        Delete
      </button>
      </div>
    </div>

  );
}

export default Moviesdetails;
