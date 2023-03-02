import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import Container from 'react-bootstrap/Container'

function Hero() {

    const id = 18;
    const [movie, setMovie] = useState(null);
    useEffect(() => {
      axios
        .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies/${id}`)
        .then((res) => setMovie(res.data))
        .catch((e) => console.log(e));
    }, [id]);

return(

    <div className=" mt-0" id="hero">
        <div className="overlay">

        </div>
        <Container>
        <div className="hero-body"> 
            <h1 className="text-white bebas">{movie?.title}</h1>
            <p className="text-white">{movie?.year} | {movie?.movie_duration} | {movie?.genre} | Directed by {movie?.director}</p>
            <div className="col-2"><Link to={`/api/movies/${movie?.id}`} className="btn btn-primary"> <span class="material-symbols-sharp">read_more</span>View Details</Link></div>
        </div>
        </Container>
    </div>

);

}

export default Hero;
