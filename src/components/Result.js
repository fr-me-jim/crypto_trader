import React from 'react';

const Result = ({result}) => {

    if(Object.keys(result).length === 0) return null;

    return (  
        <div className="result">
            <h2>Result</h2>
            <p className="price">Current price: <span>{result.PRICE}</span></p>

            <p>Highest price today: <span>{result.HIGHDAY}</span></p>
            <p>Lowest price today: <span>{result.LOWDAY}</span></p>
            <p>Last 24h variation: <span>{result.CHANGEPCT24HOUR}</span></p>
            <p>Last Update: <span>{result.LASTUPDATE}</span></p>
        </div>
    );
}
 
export default Result;
