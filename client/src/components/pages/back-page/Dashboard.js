import React, { useContext } from 'react';
import BeerContext from '../../context/beer/beerContext';
import SearchedBeerItem from './SearchedBeerItem';
import Search from '../../layout/Searchbeer';
import Header from '../../layout/Header';
import DisplayDash from './DisplayDash';
import setAuthToken from '../../utils/setAuthToken';
import Title from '../../layout/Title';
import SVG from '../../layout/waves';
import '../../../CSS/dashboard.css'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const Dashboard = () => {

  const beerContext = useContext(BeerContext);
  const { searchedBeers } = beerContext;

return (
    <div className="dashboard1">
      <Title />
      <div className="header">
        <div className="inner-header">
          <div className="beerTap"></div>
          <DisplayDash />
        </div>
        <div>
          <SVG />
        </div>
      </div>
      <div className="dashboard-container">
        <Header /> 
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

