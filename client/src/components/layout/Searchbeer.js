import React, { useState, useContext } from 'react';
import BeerContext from '../context/beer/beerContext'

const Search = () => {

    const beerContext = useContext(BeerContext);
    const { searchBeer } = beerContext;

    const[text, setText] = useState('');
    const onChange = (e) => {
    setText(e.target.value)
     };

     const onSubmit = e => {
         e.preventDefault();
         searchBeer(text);
         setText('')
     };

     const searchButton = {marginTop:'1rem'}

    return (
        <div className="search">
            <form className="searchform cf" onSubmit={onSubmit}>
                <input type="text" name="text" placeholder="What beer are you looking for?" value={text} 
                    onChange={onChange}/>
                <input type="submit" value="Search" style={searchButton} className="btn btn-dark" />   
            </form>
        </div>)
}

export default Search

