import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import BeerContext from '../../context/beer/beerContext'

const SearchedBeerItem = ({ name, company, abv, ibu, style, img, id }) => {
  
    const beerContext = useContext(BeerContext);
    const { addTap } = beerContext;

    const[tap, setTap] = useState('');

    const onChange = (e) => {
            setTap(e.target.value)
    }  
    
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
                    <div className="tap_number">
                        <input style={{ width: '50px' }} type="number" min="1" value={tap} max="22" placeholder="Tap #" onChange={onChange} required/>
                    </div>         
                    <button type="button" style={{ width:'auto' }} className="btn btn-success" onClick={() => { addTap(id, tap); setTap('') }}>Add To Tap</button>
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
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
    }

export default SearchedBeerItem