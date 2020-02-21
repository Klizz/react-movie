import React from 'react';

const MovieCard = props => {
    return(
    /* <div className="row">
        <div className="col s3 m7">
      <div className="card">
        <div className="card-image">
          <img src={props.poster} alt="0" />
            <span className="card-title">{props.name}</span>
          </div>
      </div>
    </div>
    </div> */

    <div className="box">
        <h2>{props.name}</h2> <br />
        <b>Overview: </b><p>{props.overview}</p>
    </div>

    );
}

export default MovieCard;