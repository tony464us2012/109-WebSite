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
           {name} ${price}<a href="#!" style={{color:'red'}} onClick={ () => removebottle(id) } ><i className="material-icons">delete</i></a>
        </div>
    )
}

export default WineItem