import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/auth/authContext';
import BeerContext from '../context/beer/beerContext'


  const Login = (props) => {
  
    const authContext = useContext(AuthContext);
    const { login, isAuthenticated } = authContext;
    const beerContext = useContext(BeerContext);
    const { getMainBeers } = beerContext;

    const [user, setUser] = useState({
      email: '',
      password: '',
    });
 
    const {email, password} = user;

    useEffect(()=> {
     if (isAuthenticated) {
       props.history.push('/dashboard');
       getMainBeers();
    }
// eslint-disable-next-line
 }, [isAuthenticated]);

  const onChange = (e) => {
   setUser({...user, [e.target.name]: e.target.value})
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    login(user)
    props.history.push('/dashboard')
}

    return (
    <form style={formStyle} className='form' onSubmit={onSubmit}>
      <h2>Login</h2>
      <div className="row">
          <div class="input-field col s8">
            <input id="email" type="email" name="email" class="validate" placeholder="Email" value={email} onChange={onChange} />
        </div>
      </div>
      <div className="row">
          <div class="input-field col s8">
            <input id="password" type="password" name="password" class="validate" placeholder="Password" value={password} onChange={onChange} />
        </div>
      </div>
      <input id="input" className="btn waves-effect waves-light" type="submit" value="Login" />
  </form>
)};

const formStyle = {
    width: '75%',
    height: '75%',
    margin: '2rem auto'
}

export default Login
