import React from 'react';

const Navbar = () => {
    return (
      <div>
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            ReactMovie
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    );
}

export default Navbar;