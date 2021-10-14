import React from "react";

const MovieInfo = (props) => {
  const calcTime = (time) => {
    const hours = Math.floor(time / 60);
    const mins = time % 60;
    return `${hours}h ${mins}m`;
  };

  const convertMoney = (money) => {
    let formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    });
    return formatter.format(money);
  };

  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
  return (
    <div
      className="movie-bg"
      style={{
        backgroundImage: `url('${IMAGE_BASE_URL}w500${props.background}')`,
      }}
    >
      <div className=" movie-info">
        <div className="row movie-container">
          <div className="col s4">
            <img
              className="poster"
              src={`${IMAGE_BASE_URL}w500${props.poster}`}
              alt="?"
            />
          </div>
          <div className="col s8">
            <h1>{props.title}</h1>
            <span className="tag">Plot:</span>
            <p>{props.overview}</p>
            <span className="tag">IMBD rating:</span> <br />
            <meter
              min="0"
              max="100"
              optimum="100"
              low="40"
              high="70"
              value={props.rating * 10}
            />{" "}
            <br /> <br />
            <span className="tag">Directed by:</span>
            <ul>
              {props.directors.map((director, i) => {
                return <li key={i}>{director.name}</li>;
              })}
            </ul>
            <br />
            <span className="tag">Running time: </span>{" "}
            {calcTime(props.runtime)} <br />
            <span className="tag">Budget: </span> {convertMoney(props.budget)}{" "}
            <br />
            <span className="tag">Revenue: </span> {convertMoney(props.revenue)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
