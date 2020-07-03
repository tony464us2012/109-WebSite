import React, { useContext } from 'react';
import BeerContext from '../../context/beer/beerContext'

const WineItem = ( {name, price, id} ) => {

    const beerContext = useContext(BeerContext);
    const { removeBottle } = beerContext;

    const removebottle = (id) => {
        removeBottle(id)
    }

    return (
        <div>
           {name} ${price} <button id="bottle-btn" className="btn btn-danger" onClick={ () => removebottle(id) } >x</button>
        
        </div>
    )
}

export default WineItem