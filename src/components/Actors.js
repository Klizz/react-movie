import React from 'react';

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";

const Actors = (props) => {
    return(
                <div className="col s4 actor">
                    <div className="col s5">
                        <img src={props.actor.profile_path ? `${IMAGE_BASE_URL}w154/${props.actor.profile_path}` : '/images/unknown.png'} width="100%" alt="Not found" />
                    </div>
                    <div className="col s7">
                        <span className="tag">{props.actor.name}</span>
                        <p>{props.actor.character}</p>
                    </div>
                </div>
    );
}

export default Actors;