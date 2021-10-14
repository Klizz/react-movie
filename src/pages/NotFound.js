import React from "react";
import RandomFact from "../components/randomFact"

const NotFound = () => {

  return (
    <div className="container center-align">
    <h1 style={{ margin: '30px', textAlign: 'center', fontSize: '3.8rem'}}>This page does not exist</h1>
    <RandomFact />
    </div>
  );
};

export default NotFound;