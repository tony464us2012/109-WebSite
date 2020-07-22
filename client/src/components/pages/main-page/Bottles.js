import React, {Fragment, useContext} from 'react';
import BeerContext from '../../context/beer/beerContext';
import MainBottleItem from './MainBottleItem';
import MainWineItem from '../main-page/MainWineItem'
import '../../../CSS/bottles.css'
 
const Bottles = (props) => {

    const beerContext = useContext(BeerContext);
    const { bottleBeer } = beerContext;

    const tap_btn = {
        backgroundColor: 'orange',
        fontWeight: '600'
    }

    return (
    <Fragment>
        <h1 className="main-title"> Our Beers</h1>
        <div className="btn-container">
            <button className="btn dashboard-btn" style={{fontWeight: '600'}} onClick={()=> { props.history.push('./')}} >On Tap</button>
            <button className="btn dashboard-btn text-light" style={tap_btn}>Bottles</button>
        </div>
        <div className="bottle-container">
            <div className="bottle-item">
                <h3>IPA</h3>
                { bottleBeer.filter(x => x.type === 'IPA').sort((a, b) => a.name > b.name ? 1 : -1).map((beer, index) => <MainBottleItem name={beer.name} price={beer.price} key={index}  /> )}
            </div>
            <div className="bottle-item">
                <h3>Lager</h3>
                { bottleBeer.filter(x => x.type === 'Lager').sort((a, b) => a.name > b.name ? 1 : -1).map((beer, index) => <MainBottleItem name={beer.name} price={beer.price} key={index}  /> )}
            </div>
            <div className="bottle-item">
                <h3>Sour</h3>
                { bottleBeer.filter(x => x.type === 'Sour').sort((a, b) => a.name > b.name ? 1 : -1).map((beer, index) => <MainBottleItem name={beer.name} price={beer.price} key={index} /> )}
            </div>
            <div className="bottle-item">
                <h3>Porter and Stout</h3>
                { bottleBeer.filter(x => x.type === 'Porter and Stout').sort((a, b) => a.name > b.name ? 1 : -1).map((beer, index) => <MainBottleItem name={beer.name} price={beer.price} key={index} /> )}
            </div>
            <div className="bottle-item">
                <h3>Ale</h3>
              { bottleBeer.filter(x => x.type === 'Ale').sort((a, b) => a.name > b.name ? 1 : -1).map((beer, index) => <MainBottleItem name={beer.name} price={beer.price} key={index} /> )}
            </div>
            <div className="bottle-item">
                <h3>Ciders</h3>
                { bottleBeer.filter(x => x.type === 'Cider').sort((a, b) => a.name > b.name ? 1 : -1).map((beer, index) => <MainBottleItem name={beer.name} price={beer.price} key={index} id={beer._id} /> )}
            </div>
            <div className="bottle-item">
                <h3>Special</h3>
                { bottleBeer.filter(x => x.type === 'Special').sort((a, b) => a.name > b.name ? 1 : -1).map((beer, index) => <MainBottleItem name={beer.name} price={beer.price} key={index} /> )}
            </div>
            </div>
            <div className="wine-container">
                <h3>Wines</h3>
                <div className="wine-item-container">
                <div className="wine-item">
                    { bottleBeer.filter(x => x.type === 'Wine').sort((a, b) => a.name > b.name ? 1 : -1).filter((x, index) => index <= 10).map((beer, index) => <MainWineItem name={beer.name} price={beer.price} key={index} id={beer._id} /> )}
                    </div>
                    <div className="wine-item">
                    { bottleBeer.filter(x => x.type === 'Wine').sort((a, b) => a.name > b.name ? 1 : -1).filter((x, index) => index > 10).map((beer, index) => <MainWineItem name={beer.name} price={beer.price} key={index} id={beer._id} /> )}
                    </div>
                </div>
            </div>
    </Fragment>
    )
};

export default Bottles
