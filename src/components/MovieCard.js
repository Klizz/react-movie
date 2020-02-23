import React from 'react';

const MovieCard = props => {
    return(
   <div>
        <div className="col s3">
      <div>
        <div className="card-image">
          <a href={props.linkID}><img className="poster" src={props.poster} alt={props.title} /></a>
          </div>
      </div>
    </div>
    </div>

    );
}

export default MovieCard;