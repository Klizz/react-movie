import React from "react";

const Hero = props => {
  return (
    <section className="hero"
    style={{
      background: 
      `linear-gradient(
        to right top,
        rgba(0, 0, 0, 0.9),
        rgba(255, 255, 255, 0.3)
      ),
      url('${props.image}')`,
      backgroundSize: `cover`
    }}>
      <div className="hero-inner">
        <h3 className="main-line">{props.name}</h3>
        <h3 className="secondary-line">{props.overview}</h3>
      </div>
    </section>
  );
};

export default Hero;
