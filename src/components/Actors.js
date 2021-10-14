import React from "react";

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";

const Actors = (props) => {
  return (
    <React.Fragment>
      <div className="col-sm-2">
        <div class="card">
          <img
            src={
              props.actor.profile_path
                ? `${IMAGE_BASE_URL}w154/${props.actor.profile_path}`
                : "/images/unknown.png"
            }
            class="card-img-top"
            alt="Not found"
          />
          <div class="card-body">
            <p class="card-text">
              <b>{props.actor.name}</b> as "{props.actor.character}"
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Actors;
