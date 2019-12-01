import React, { useContext } from 'react';
import BeerContext from '../../context/beer/beerContext';
import DisplayDashBeer from './DisplayDashBeer';
import setAuthToken from '../../utils/setAuthToken'

const DisplayDash = () => {

  if (localStorage.auth_token) {
    setAuthToken(localStorage.auth_token)
  }

    const beerContext = useContext(BeerContext);
    const { displayBeers } = beerContext

    return (
        <div className="displayDash">
            {displayBeers.sort((a, b) => a.tap - b.tap).map((x, index) => <DisplayDashBeer 
            name={x.beerName} 
            logo={x.beerLogo} 
            abv={x.beerABV}
            ibu={x.beerIBU}
            beerstyle={x.beerStyle}
            brewery={x.brewery}
            ratingCount={x.ratingCount}
            ratingScore={x.ratingScore}
            key={index} 
            id={x._id}
            tap={x.tap}/>)}
        </div>
    )
}

export default DisplayDash