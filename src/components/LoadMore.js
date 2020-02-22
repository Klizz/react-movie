import React from 'react';

const LoadMore = (props) => {
    return(
        <div className="center-align">
            <button 
            className="waves-effect waves-light btn-large load"
            onClick={props.onClick}
            >
            Load more movies
            </button>
        </div>
    );
}

export default LoadMore;