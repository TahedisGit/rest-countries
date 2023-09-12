import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country/Country";
import "./Countries.css";

const Countries = () => {
  const [counties, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const 

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  return (
    <>
      <h3>Countries: {counties.length}</h3>
      <div>
        <h4>Visited Countries: {visitedCountries.length} </h4>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country?.name?.common}</li>
          ))}
        </ul>
      </div>
      <div className="country-container">
        {counties.map((country) => (
          <Country
            handleVisitedCountry={handleVisitedCountry}
            key={country.cca3}
            country={country}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
