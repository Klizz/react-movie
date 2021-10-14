import React, { useState, useEffect } from "react";
import MovieInfo from "../components/MovieInfo";
import Actors from "../components/Actors";
import ClipLoader from "react-spinners/ClipLoader";

function Movie() {
  //Api URL
  const API_URL = "https://api.themoviedb.org/3/";
  //Api Key
  const API_KEY = "0d59c137d4b1775154cc094577fbe290";

  const [movie, setMovie] = useState();
  const [crew, setCrew] = useState();

  useEffect(() => {
    let movieID = window.location.href;
    const currentMovie = movieID.split("/").pop();
    const url = `${API_URL}movie/${parseInt(
      currentMovie
    )}?api_key=${API_KEY}&language=en-US`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.log("Error", error));
  }, []);

  useEffect(() => {
    let movieID = window.location.href;
    const currentMovie = movieID.split("/").pop();
    const url = `${API_URL}movie/${parseInt(currentMovie)}/credits?api_key=${API_KEY}&language=en-US`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCrew(data))
      .catch((error) => console.log("Error", error));
  }, []);

  return(
    <div>
    {movie && crew ? 
      <MovieInfo
        background={movie.backdrop_path}
        poster={movie.poster_path}
        title={movie.title}
        rating={movie.vote_average}
        overview={movie.overview}
        directors={crew.crew.filter(i => i.job === "Director")}
        runtime={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
     : <ClipLoader />}
    {crew ? 
      <div className="container">
        <h2 style={{ margin: '40px', textAlign: 'center', fontSize: '3em'}}>Actors</h2>
        <div className="row">
          {crew.cast.map((actor, i) => {
            return <Actors key={i} actor={actor} />
          })}
        </div>
      </div>
     : <ClipLoader />}
  </div>
  );
}

export default Movie;
