import React from "react";

const MovieInfo = props => {
    const calcTime = time => {
      const hours = Math.floor(time / 60);
      const mins = time % 60;
      return `${hours}h ${mins}m`;
    };

    const convertMoney = (money) => {
        let formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
        });
        return formatter.format(money);
      }

  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
  return (
    <div className="movie-bg"
    style={{
        backgroundImage: `url('${IMAGE_BASE_URL}w500${props.movie.backdrop_path}')`
    }}
    >
        <div className="movie-container movie-info">
      <div className="row">
        <div className="col s4">
          <img className="poster" src={`${IMAGE_BASE_URL}w500${props.movie.poster_path}`}alt="?" />
        </div>
        <div className="col s8">
          <h1>{props.movie.title}</h1>
          <span className="tag">Plot:</span>
          <p>{props.movie.overview}</p>
          <span className="tag">IMBD rating:</span> <br />
          <meter
            min="0"
            max="100"
            optimum="100"
            low="40"
            high="70"
            value={props.movie.vote_average * 10}
          /> <br /> <br />
          <span className="tag">Directed by:</span>
          {props.directors.map((director, i) => {
              return <p key={i}>{director.name}</p>
          })} <br />
          <span className="tag">Running time: </span> {calcTime(props.movie.runtime)} <br />
          <span className="tag">Budget: </span> {convertMoney(props.movie.budget)} <br />
          <span className="tag">Revenue: </span> {convertMoney(props.movie.revenue)}
        </div>
      </div>
    </div>
    </div>
  );
};

export default MovieInfo;
