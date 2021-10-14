import React, { useState, useEffect } from "react";
import facts from "../pages/movieFacts";

const RandomFact = () => {
  const [fact, setFact] = useState();

  useEffect(() => {
    const random = Math.floor(Math.random() * 100);
    setFact(facts[random - 1]);
  }, []);

  return (
    <React.Fragment>
      {fact ? (
        <div className="col-8" style={{ margin: '30px auto' }}>
          <div className="card">
            <img src={fact.image} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Did you know?</h5>
              <p className="card-text">{fact.text}</p>
              <span className=""><a href="https://www.nme.com/blogs/the-movies-blog/100-random-movie-facts-you-really-need-to-know-763942">Source</a></span>
            </div>
          </div>
          <h6>Refresh the page to see another random fact</h6>
        </div>
      ) : (
        "loading"
      )}
    </React.Fragment>
  );
};

export default RandomFact;