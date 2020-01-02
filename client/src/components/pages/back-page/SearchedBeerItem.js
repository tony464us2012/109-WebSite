import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import BeerContext from '../../context/beer/beerContext'

const SearchedBeerItem = ({ name, company, abv, ibu, style, img, id }) => {
  
    const beerContext = useContext(BeerContext);
    const { addTap } = beerContext;

    
    return(
        <div>
            <div className="beer-section" style={{ marginTop: '5%' }}>
                <div className="logo-cont logo-cont2" >
                    <img src= { img } alt="logo" />
                </div>
                <div className="details">
                    <h1>{ name }</h1>
                    <h3>{ company }</h3>
                    <p>{ style }</p>
                </div>
                <div className="bottom" style={{ marginTop: '1%' }}>
                    <p>{ abv }<br/> ABV</p>
                    <p>{ ibu } <br/> IBU</p>
                </div>
                <div className="beerInput">         
                    <button type="button" style={{ width:'auto' }} className="btn btn-success" onClick={() =>  addTap(id)}>Add To Tap</button>
                </div>
            </div>
        </div>
    )
}

SearchedBeerItem.propTypes = {
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    abv: PropTypes.number.isRequired,
    ibu: PropTypes.number.isRequired,
    style: PropTypes.string.isRequired,
    image: PropTypes.string,
    id: PropTypes.number.isRequired
    }

export default SearchedBeerItem