import React from 'react';

const Navbar = () => {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/movie/id">movie</a>
            </li>
            <li>
              <a href="/">home</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;