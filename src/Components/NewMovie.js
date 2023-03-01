import React from 'react'
import Container from 'react-bootstrap/Container'
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function NewMovie() {

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [year, setYear] = useState(0);
    const [rating, setRating] = useState(0);
    const [genre, setGenre] = useState("");
    const [poster, setPoster] = useState("");
    const [movie_duration, setMovieDuration] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post(`${process.env.REACT_APP_SERVER_BASE_URL}/api/movies`, {
            title,
            director,
            year,
            rating,
            genre,
            poster,
            movie_duration
        })
        .then((res) => navigate("/"))
        .catch((e) => console.log(e));
    };
    

  return (
    <section className='adm-videos'>
        <Container>
            <div className='row justify-content-center'>
                <div className='col-8'>
                    <h1 className='text-white mt-5'>Edit videos</h1>
                    <form className="row g-3  mb-5" onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label text-white">Title</label>
                            <input type="text" className="form-control" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">year</label>
                            <input type="number" className="form-control" id="year" name="year" value={year} onChange={(e) => setYear(e.target.value)} />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Director</label>
                            <input type="text" className="form-control" name="director" id="director" placeholder="Director name" value={director} onChange={(e) => setDirector(e.target.value)} />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress2" className="form-label">Genre</label>
                            <input type="text" className="form-control" id="genre" name='genre' placeholder="Genre, Comedy, TV Series, etc" value={genre} onChange={(e) => setGenre(e.target.value)} />
                        </div>

                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label text-white">Movie Duration</label>
                            <input type="text" className="form-control" id="movie_duration" name="movie_duration" value={movie_duration} onChange={(e) => setMovieDuration(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Rating</label>
                            <input type="number" className="form-control" id="rating" name="rating" value={rating} onChange={(e) => setRating(e.target.value)} />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress2" className="form-label">Image Path</label>
                            <input type="text" className="form-control" id="poster" name='poster' placeholder="Poster URL" value={poster} onChange={(e) => setPoster(e.target.value)} />
                        </div>
                        <div className="col-12 text-start">
                            <button type="submit" className="btn btn-primary">Create Movie</button>
                        </div>
                    </form>
            </div>
        </div>
      </Container>
    </section>
  )
}

export default NewMovie
