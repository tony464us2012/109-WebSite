import React, {Fragment} from 'react'
import spinner from '../../Images/spinner.gif'

const Spinner = () => 
        <Fragment>
                <div className="spinner-container">
                        <img src={spinner} alt="Loading..."  className="spinner" />
                </div>
        </Fragment>


export default Spinner