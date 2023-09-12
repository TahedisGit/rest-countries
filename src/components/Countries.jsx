import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country/Country";
import "./Countries.css";

const Countries = () => {
  const [counties, setCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <>
      <h3>Countries: {counties.length}</h3>
      <div className="country-container">
        {counties.map((country) => (
          <Country key={country.cca3} country={country}></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
