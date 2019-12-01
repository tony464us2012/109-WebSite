import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AuthState from './components/context/auth/authState'
import BeerState from './components/context/beer/beerState';
import Dashboard from './components/pages/back-page/Dashboard'
import MainDisplay from './components/pages/main-page/MainDisplay'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import PrivateRoute from './components/routes/PrivateRoute'
import setAuthToken from './components/utils/setAuthToken'
import './CSS/App.css';
import './CSS/displayDashBeer.css'

if (localStorage.auth_token) {
  setAuthToken(localStorage.auth_token)
}

function App() {

  return (
    <AuthState>
        <BeerState>
          <Router>
            <Switch>
              <Route path='/' exact component={MainDisplay} />
              <Route path='/login' exact component={Login} />
              <PrivateRoute path='/dashboard' exact component={Dashboard} />
              <Route path='/register' exact component={Register} />
            </Switch>
          </Router>
        </BeerState>
    </AuthState>
  )
}

export default App
