import React, { useState } from "react";
import "./country.css";


const Country = ({country}) => {
    
    const {name, flags, area, population, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(true);
    }
     
    return (
        <div className="country">
            <h3> Name: {name.common}  </h3>
            <img src={flags.png} alt="" />
            <p> Population: {population} </p>
            <p> Land Area: {area}  </p>
            <p> <small> Code : {cca3} </small ></p>
            <button onClick={handleVisited}> Visited </button>
            {visited &&  '  I have visited this country.' }


        </div>
    );
};

export default Country;