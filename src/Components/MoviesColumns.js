import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function MoviesColumns() {
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      year: 1994,
      rating: 9,
      genre: "Drama",
      poster:
        "https://images.squarespace-cdn.com/content/v1/5c75dfa97d0c9166551f52b1/9351f4e2-94f9-42e2-81df-003d5fe7b8e0/9964546b0ba1f6e14a6045e34b341f8ca2a3569752c5afed95b89682fcde1a68._RI_V_TTW_.jpg",
      movie_duration: "1h",
    },
    {
      id: 2,
      title: "	The Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      rating: 9,
      genre: "	Crime",
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
      movie_duration: "1h",
    },
    {
      id: 3,
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      rating: 8,
      genre: "Crime",
      poster:
        "https://cdn.vox-cdn.com/thumbor/Kr_zFMNcZmn28_TBF-8YYlhD9gw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/11694967/0_c9S8ajFBpwX89ZuU.jpeg",
      movie_duration: "1h50min",
    },
    {
      id: 4,
      title: "Pathaan",
      director: "Siddharth Anand",
      year: 2023,
      rating: 8,
      genre: " film",
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2QzM2JiNTMtYjU4Ny00MDZkLTk3MmUtYTRjMzVkZGJlNmYyXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_FMjpg_UX1000_.jpg",
      movie_duration: "2h30min",
    },
  ];
  const imagehandle = () => {};
  return (
    <Container>
      <Row xs={1} md={2} lg={4}>
        {movies.map((e) => (
          <Col>
            <img className="movieImages" src={e.poster} onClick={imagehandle} />
          </Col>
          // <div>
          //   <h2>{e.title}</h2>
          //   <h3>{e.director}</h3>
          //   <h3>{e.year}</h3>
          //   <img src={e.poster} />
          // </div>
        ))}
      </Row>
    </Container>
  );
}

export default MoviesColumns;
