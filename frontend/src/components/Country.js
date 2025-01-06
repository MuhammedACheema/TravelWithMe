import React from "react";

function Country({flag,country,capital,fact}){
    return(
        <div>
            <img src = {flag} alt = {country}/>
            <h1>{country}</h1>
            <h2>{capital}</h2>
            <p>{fact} </p>
        </div>
    );

}
 
export default Country;