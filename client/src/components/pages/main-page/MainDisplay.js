import React, { useContext, Fragment, useEffect } from 'react'
import BeerContext from '../../context/beer/beerContext'
import MainDisplayBeers from './MainDisplayBeers'
import '../../../CSS/MainDisplay.css'
import Spinner from '../../layout/Spinner'

const MainDisplay = props => {
    
        const beerContext = useContext(BeerContext);
        const { displayBeers, getMainBeers, getMainBottles } = beerContext;
    
    useEffect(() => {
        getMainBeers();
        getMainBottles()
        //eslint-disable-next-line
    }, [])
    
    return (
     <Fragment>
        <div className="btn-container">
            <button className="btn dashboard-btn btn-danger text-light">On Tap</button>
            <button className="btn dashboard-btn"onClick={()=> { props.history.push('./bottles')}}>Bottles</button>
        </div>
        <div className='main-cont'>
                {!displayBeers.length? <Spinner />: displayBeers.sort((a, b) => a.beerName > b.beerName ? 1 : -1).map((x) =>  <MainDisplayBeers 
                name={x.beerName} 
                logo={x.beerLogo} 
                abv={x.beerABV}
                ibu={x.beerIBU}
                beerstyle={x.beerStyle}
                brewery={x.brewery}
                ratingCount={x.ratingCount}
                ratingScore={x.ratingScore}
                description={x.description}
                key={x._id} 
                logo2={x.beerLogo2}
                />)}
        </div>
        <button className="btn dashboard dashboard-btn" onClick={()=> { props.history.push('./login')}}>Dashboard <i className="fas fa-cog"></i></button>
    </Fragment>
    )}

    export default MainDisplay
