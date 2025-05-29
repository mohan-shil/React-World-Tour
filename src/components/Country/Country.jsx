import React, { useState } from "react";
import "./country.css";
import CountryDetail from "../CountryDetail/CountryDetail";


const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    
    const {name, flags, area, population, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }


    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'Green': 'White'}} > Name: {name.common}  </h3>
            <img src={flags.png} alt="" />
            <p> Population: {population} </p>
            <p> Land Area: {area}  </p>
            <p> <small> Code : {cca3} </small ></p>
            <button onClick={() => handleVisitedCountry(country)} > Mark Visited </button>
            <br />
            <br />
            <button onClick={() => handleVisitedFlags(flags)} > Add Flag </button>
            <br />
            <br />
            <button onClick={handleVisited}> Visited </button>
            {visited &&  '  I have visited this country.' }
        <hr />
        <CountryDetail>
            country= {country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
        </CountryDetail> 

        </div>
    );
};

export default Country;