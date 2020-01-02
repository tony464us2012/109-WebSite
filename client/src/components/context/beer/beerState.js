import React, { useReducer } from 'react';
import BeerContext from './beerContext';
import beerReducer from './beerReducer';
import axios from 'axios';
import {
   SET_MAIN_BEERS,
   SET_SEARCHED_BEERS,
   ADD_TAP,
   REMOVE_BEER
} from '../types'

const BeerState = props => {

    const initialState = {
        displayBeers: [],
        searchedBeers: [],
        searchedBeerInfo: []
};

    const [state, dispatch] = useReducer(beerReducer, initialState);

   
    //Fetch Main Beers
        const getMainBeers = async () => {
            try{
                const res = await axios.get('/api/main');
                dispatch({ type: SET_MAIN_BEERS, payload: res.data});
            }
            catch(err) {
            console.log(err)
    }};

    //Search Beers
        const searchBeer = async text => {

            try {
                const response = await fetch(`https://api.untappd.com/v4/search/beer?q=${text}&client_id=41EF786235D5A6E859C26C7DABA2048BB19344D0&client_secret=2C5E752380284C4A141AD1066C8E688BF0A299F9`);
                const data = await response.json();
                dispatch({ type: SET_SEARCHED_BEERS, payload: data.response.beers.items })
                } catch(err) {
                    console.log(err)
                }
            }
      
    //Search Beer Info
      const searchBeerInfo = async (bid) => {
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }};
            
            try {
                const response = await fetch(`https://api.untappd.com/v4/beer/info/${bid}?client_id=41EF786235D5A6E859C26C7DABA2048BB19344D0&client_secret=2C5E752380284C4A141AD1066C8E688BF0A299F9`);
                const data = await response.json();
                const beerObject = data.response.beer;
                //eslint-disable-next-line
                const res = await axios.post('/api/dashboard', beerObject, config);
                dispatch({ type: SET_MAIN_BEERS, payload: res.data})
            } catch (err) {
                console.log(err)
            }}         

     //Add Tap
        const addTap = (bid) => { 
                 dispatch({ type: ADD_TAP, payload: bid});
                searchBeerInfo(bid)
         };

     //Remove Beer
     const removeBeer = async (id) => {
         try{
             dispatch({ type: REMOVE_BEER, payload: id});
            await axios.delete('/api/dashboard', {data: {userid: id}});
            } catch (err){
            console.log(err)
              }
            }

return (
    <BeerContext.Provider
     value={{
        displayBeers: state.displayBeers,
        searchedBeers: state.searchedBeers,
        getMainBeers,
        searchBeer,
        addTap,
        removeBeer
    }}>
        {props.children}
    </BeerContext.Provider>
)}


export default BeerState