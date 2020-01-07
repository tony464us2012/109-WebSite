import React, { useContext } from 'react';
import BeerContext from '../../context/beer/beerContext';
import DisplayDashBeer from './DisplayDashBeer';
import setAuthToken from '../../utils/setAuthToken'

const DisplayDash = () => {

  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

    const beerContext = useContext(BeerContext);
    const { displayBeers } = beerContext

    return (
        <div className="displayDash">
            {displayBeers.sort((a, b) => a.beerName > b.beerName ? 1 : -1).map((x, index) => <DisplayDashBeer 
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
            logo2={x.beerLogo2}
            />)}
        </div>
    )
}

export default DisplayDash