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

    const tap_btn = {
        backgroundColor: 'orange',
        fontWeight: '600'
    }
    
    return (
     <Fragment>
        <div className="btn-container">
            <button className="btn dashboard-btn text-light" style={tap_btn}>On Tap</button>
            <button className="btn dashboard-btn" style={{fontWeight: '600'}} onClick={()=> { props.history.push('./bottles')}}>Bottles/Cans</button>
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
        <button className="btn dashboard-btn"  onClick={()=> { props.history.push('./login')}}>Dashboard</button>
    </Fragment>
    )}

    export default MainDisplay
