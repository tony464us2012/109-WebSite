import React, { Fragment, useContext } from 'react';
import BottleItem from './BottleItem';
import WineItem from './WineItem';
import BeerContext from '../../context/beer/beerContext'

const BottleBeer = () => {
    
    const beerContext = useContext(BeerContext);
    const { bottleBeer } = beerContext

    return (
        <Fragment>
            
        <div className="bottle-container">
            <div className="bottle-item">
                <h3>IPA</h3>
                { bottleBeer.filter(x => x.type === 'IPA').sort((a, b) => a.name > b.name ? 1 : -1).map((beer, index) => <BottleItem name={beer.name} price={beer.price} key={index} id={beer._id} /> )}
            </div>
            <div className="bottle-item">
                <h3>Lager</h3>
                { bottleBeer.filter(x => x.type === 'Lager').sort((a, b) => a.name > b.name ? 1 : -1).map((beer, index) => <BottleItem name={beer.name} price={beer.price} key={index} id={beer._id} /> )}
            </div>
            <div className="bottle-item">
                <h3>Sour</h3>
                { bottleBeer.filter(x => x.type === 'Sour').sort((a, b) => a.name > b.name ? 1 : -1).map((beer, index) => <BottleItem name={beer.name} price={beer.price} key={index} id={beer._id} /> )}
            </div>
            <div className="bottle-item">
                <h3>Porter and Stout</h3>
                { bottleBeer.filter(x => x.type === 'Porter and Stout').sort((a, b) => a.name > b.name ? 1 : -1).map((beer, index) => <BottleItem name={beer.name} price={beer.price} key={index} id={beer._id} /> )}
            </div>
            <div className="bottle-item">
                <h3>Ale</h3>
              { bottleBeer.filter(x => x.type === 'Ale').sort((a, b) => a.name > b.name ? 1 : -1).map((beer, index) => <BottleItem name={beer.name} price={beer.price} key={index} id={beer._id} /> )}
            </div>
            <div className="bottle-item">
                <h3>Special</h3>
                { bottleBeer.filter(x => x.type === 'Special').sort((a, b) => a.name > b.name ? 1 : -1).map((beer, index) => <BottleItem name={beer.name} price={beer.price} key={index} id={beer._id} /> )}
            </div>
            </div>
            <div className="wine-container">
                <h3>Wines</h3>
                <div className="wine-item-container">
                    <div className="wine-item">
                    { bottleBeer.filter(x => x.type === 'Wine').sort((a, b) => a.name > b.name ? 1 : -1).filter((x, index) => index <= 10).map((beer, index) => <WineItem name={beer.name} price={beer.price} key={index} id={beer._id} /> )}
                    </div>
                    <div className="wine-item">
                    { bottleBeer.filter(x => x.type === 'Wine').sort((a, b) => a.name > b.name ? 1 : -1).filter((x, index) => index > 10).map((beer, index) => <WineItem name={beer.name} price={beer.price} key={index} id={beer._id} /> )}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default BottleBeer
