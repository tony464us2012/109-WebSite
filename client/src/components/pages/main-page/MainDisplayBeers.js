import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import '../../../CSS/MainDisplay.css';


const MainDisplayBeers = ({ name, logo, abv, ibu, beerstyle, brewery, ratingCount, ratingScore, description, logo2 }) => {
    
    const [readMore, setReadMore] = useState(true)

     const btn_action = (x) => {
         if (x)
         { return setReadMore(false)}
         else { return setReadMore(true)}
        }

   
    return (
    <Fragment>
        <div className="main-section">
            { logo ?  <div className="logo-container">
                <img src= {logo} alt='beer-logo' />
            </div> : 
            <div className="logo-container">
            <img src= {logo2} alt='beer-logo' />
        </div>
            }
            <div className="main-details">
                <h1>{name}</h1>
                <h3>{brewery}</h3>
                <p>{beerstyle}</p>
            </div>
            <div className="main-bottom">
                <p>{abv}<br/> ABV</p>
                <p>{ibu} <br/> IBU</p>
                <p>{ratingCount} <br/>Rating Count</p>
                <p>{ratingScore.toPrecision(2)}/4 <br/>Rating Score</p>
            </div>
            <div className="main-description" >
                <p className={readMore? "main-description-small": "main-description"}>{description}</p>
            </div>
            {description? <button className="btn btn-readmore" onClick={() => {btn_action(readMore)}}>{readMore? 'Read More':'Read Less'}</button>:''}
        </div>
    </Fragment>
    
        )
}

    MainDisplayBeers.propTypes = {
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    abv: PropTypes.number.isRequired,
    ibu: PropTypes.number.isRequired,
    beerstyle: PropTypes.string.isRequired,
    brewery: PropTypes.string.isRequired,
    ratingCount: PropTypes.number.isRequired,
    ratingScore: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    }

    export default MainDisplayBeers
