import React, { useState } from "react";
import "./Country.css";

export default function Country({ country, handleVisitedCountry }) {
  const { name, flags, polulation, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <h3 style={{ color: visited ? "red" : "black" }}>Name: {name?.common}</h3>
      <img src={flags?.png} alt="" />
      <p>Population: {polulation}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={handleVisited}>Visited</button>
      <br />
      <button onClick={() => handleVisitedCountry(country)}>
        Mark as Visited
      </button>
      {visited && "  I have visited this country"}
    </div>
  );
}
