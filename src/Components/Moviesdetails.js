import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Moviesdetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((e) => console.log(e));
  }, [id]);
  return (
    <div className="container">
      <h2 className="text-white">{movie?.title}</h2>
      <img
        className="movieImages col-3 mb-1"
        src={movie?.poster}
        alt={movie?.title}
      />
      <br />
      <h5 className="text-light">Director: {movie?.director}</h5>
      <h5 className="text-light">Year: {movie?.year}</h5>
      <h5 className="text-light">Rating: {movie?.rating}</h5>
      <h5 className="text-light">Genre :{movie?.genre}</h5>
      <h5 className="text-light">Duration: {movie?.movie_duration}</h5>
    </div>
  );
}

export default Moviesdetails;
