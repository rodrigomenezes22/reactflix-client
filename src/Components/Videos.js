import React, { useState, useEffect } from "react";
import {  Link } from "react-router-dom";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from 'react-bootstrap/Container'



function Videos({genre}) {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies`)
      .then((res) => setMovies(res.data))
      .catch((e) => console.log(e));
  }, []);

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1921 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1920, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const filterList = movies.filter((movie) => movie.genre === genre);
      console.log(filterList);

  return (
    <section className='videos'>
        <Container>
          <h2 className="text-white mt-4 text-start">{genre}</h2>
        </Container>
        <Container>
            <Carousel responsive={responsive}>
            {
                filterList.map((movie) => ( <div className='video-wrappers'  key={movie.id}><Link to={`/api/movies/${movie.id}`}><img src={movie.poster} className="video-covers" alt={movie.title} /></Link></div>))
            }
            </Carousel>
        </Container>
    </section>
  )
}

export default Videos
