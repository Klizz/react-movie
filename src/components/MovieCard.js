import React from "react";

const MovieCard = (props) => {
  return (
    <React.Fragment>
      <div className="card">
        <img src={props.poster} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.details}</p>
          <a href={props.linkID} className="btn btn-outline-info">
            See details
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieCard;