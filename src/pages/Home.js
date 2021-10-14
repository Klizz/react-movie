/* eslint-disable import/first */
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import MovieCard from "../components/MovieCard";
import LoadMore from "../components/LoadMore";
import PreviousPage from "../components/PreviousPage";
// import SearchBar from "../components/SearchBar";
// import ClipLoader from "react-spinners/ClipLoader";

function Home() {
  //Api URL
  const API_URL = "https://api.themoviedb.org/3";
  //Api Key
  const API_KEY = "0d59c137d4b1775154cc094577fbe290";
  //Images URL
  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";

  const [movies, setMovies] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    const url = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log("Error", error));
  }, []);

  const nextPage = () => {
    let url = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${
      currentPage + 1
    }`;
    fetch(url)
      .then((data) => data.json())
      .then((data) => setMovies(data.results), setCurrentPage(currentPage + 1))
      .catch((error) => console.log("Error", error));
    console.log(currentPage);
  };

  const previousPage = () => {
    let url = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${
      currentPage - 1
    }`;
    fetch(url)
      .then((data) => data.json())
      .then((data) => setMovies(data.results), setCurrentPage(currentPage - 1))
      .catch((error) => console.log("Error", error));
  };

  const doSearch = () => {
    const url = `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log("Error", error));
  };

  return (
    <div>
      {movies ? (
        <div>
          <Hero
            image={`${IMAGE_BASE_URL}w1280${movies[0].backdrop_path}`}
            name={movies[0].title}
            overview={movies[0].overview}
          />
        </div>
      ) : null}
      <div className="container" id="top-list">
        <div className="search-section">
          <div className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search by title"
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search"
            />
            <button
              className="btn btn-outline-info"
              disabled={!searchTerm}
              onClick={() => doSearch()}
            >
              Search
            </button>
          </div>
        </div>
        <div className="row">
          {movies
            ? movies.map((movie, i) => {
                return (
                  <div className="col-sm-3">
                    <MovieCard
                      key={i}
                      title={movie.title}
                      poster={
                        movie.backdrop_path
                          ? `${IMAGE_BASE_URL}w500${movie.poster_path}`
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"
                      }
                      details={`${movie.overview.substring(0, 200)}...`}
                      linkID={`/movie/${movie.id}`}
                    />
                  </div>
                );
              })
            : ""}
          <div className="row" style={{ marginBottom: "100px" }}>
            <PreviousPage onClick={() => previousPage()} />
            <LoadMore onClick={() => nextPage()} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
