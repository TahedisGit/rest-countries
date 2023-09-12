import React, { useState } from "react";
import "./Country.css";

export default function Country({ country }) {
  console.log(country);
  const { name, flags, polulation, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className="country">
      <h3>Name: {name?.common}</h3>
      <img src={flags?.png} alt="" />
      <p>Population: {polulation}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={handleVisited}>Visited</button>
      {visited && "  I have visited this country"}
    </div>
  );
}
