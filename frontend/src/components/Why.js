import React from "react";
import Country from "./Country";
import countryData from "../data/countryData";

function Why(){
    const countries = countryData.map((x) =>

        <Country flag = {x.flag} country={x.country} capital={x.capital} fact={x.funFact}/>
      )
    return(
        <div>
        <p>I created this project because there is so much to the world and so much to do, like just look at all of these places</p>
        {countries}
        </div>
    );
}

export default Why;