import React from "react";
import RandomFact from "../components/randomFact"

const Random = () => {

  return (
    <div className="container center-align">
    <h1 style={{ margin: '30px', textAlign: 'center', fontSize: '3.8rem'}}>Random fact!</h1>
    <RandomFact />
    </div>
  );
};

export default Random;