import { useState } from 'react';
import './Country.css';
const Country = ({ country, handleVisitedCountry }) => {
    console.log(country);
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited)
    }


    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{ color: visited ? 'purple' : 'red' }}>name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>population: {population}</p>
            <p>area: {area}</p>
            <p><small>code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>mark visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
            {visited ? 'I have gone this country' : 'I will go to this country'}
        </div>
    );
};

export default Country;