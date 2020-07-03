import React, { useContext, useState } from 'react';
import BeerContext from '../../context/beer/beerContext';
import SearchedBeerItem from './SearchedBeerItem';
import BottleBeer from './BottleBeer';
import Search from '../../layout/Searchbeer';
import AddBottle from '../../layout/AddBottle';
import DisplayDash from './DisplayDash';
import setAuthToken from '../../utils/setAuthToken';
import AuthContext from '../../context/auth/authContext';
import '../../../CSS/dashboard.css'
import BottleItem from './BottleItem';

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const Dashboard = () => {

  const authContext = useContext(AuthContext);
  const { logout } = authContext
  const beerContext = useContext(BeerContext);
  const { searchedBeers } = beerContext;



 

return (
    <div className="dashboard1">
      <button type="button" className="btn btn-warning logout" onClick={ logout }>Logout</button>   
      <h1 className="dashboard-title">Beers on Tap</h1>
      <DisplayDash />
      <h1 className="dashboard-title">Beers on Bottles</h1>
      <BottleBeer />
      <AddBottle />
      <div className="dashboard-container">
      <h2 className="searchTitle" style={{fontSize:'2.5rem'}}>Search The Beers</h2>
        <Search />
            <div className='searchedBeerItems'>
              { searchedBeers.map((x, index) => <SearchedBeerItem 
              name={x.beer.beer_name} 
              key={index}
              id={x.beer.bid} 
              img={x.beer.beer_label} 
              style={x.beer.beer_style} 
              abv={x.beer.beer_abv} 
              company={x.brewery.brewery_name} 
              ibu={x.beer.beer_ibu}
              description={x.beer.beer_description}
              />) }
            </div>
        </div>
      </div>
    )
  }

  export default Dashboard

