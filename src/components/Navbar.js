import React from "react";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img
              src="/images/film.png"
              alt=""
              width="30"
              height="30"
              class="d-inline-block align-text-top"
            />
            <span style={{ fontSize: "1.3em", marginLeft: "10px" }}>
              WhatToWatch
            </span>
          </a>
          <a className="nav-link" href="/random">
            <img src="/images/die.png"
            alt=""
            width="30"
            height="30"
            />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
