import React, {useContext, Fragment} from 'react'
import '../../CSS/title.css'
import AuthContext from '../context/auth/authContext'

const Title = () => {

    const authContext = useContext(AuthContext);
    const { logout } = authContext

     return (
            <Fragment>
                <button type="button" value="Logout" className="btn btn-warning logout" onClick={ logout }>Logout</button>   
                <h1 className="dashboard-title">Beers on Tap</h1>
            </Fragment>
            )
}

export default Title
