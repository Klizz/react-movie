import React from "react";
import { Link } from "react-scroll";

const LoadMore = (props) => {
  return (
    <div className="col text-center">
      <Link
        to="top-list"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button
          type="button"
          className="btn btn-info btn-lg"
          onClick={props.onClick}
        >
          Next page
        </button>
      </Link>
    </div>
  );
};

export default LoadMore;
