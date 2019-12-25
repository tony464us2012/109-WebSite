import React, { useState, useEffect, useContext } from 'react';
import '../../CSS/login.css';
import Logo from '../../Images/logo-01.png';
import AuthContext from '../context/auth/authContext';
import BeerContext from '../context/beer/beerContext';


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
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    login(user)
}


    return (
       
    
  <div className="grid" style={{ backgroundColor: 'red'}}>
    
    <form  className="form login"  onSubmit={onSubmit}>
    <header className="login__header">
      <h3 style={{ color: 'black', fontSize: '2.5rem'}}>Login</h3>
    </header>

    <div className="login__body">

    <div className="form__field">
                    <label htmlFor="email">Email</label>
                    <input className="fieldinput" type="email" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form__field">
                    <label htmlFor="password">Password</label>
                    <input className="fieldinput" type= "password" name="password" value={password} onChange={onChange} />
                </div>

    {/* <div className="login__footer"> */}
      <input id="input" type="submit" value="Login" />
    {/* </div> */}
    </div>

  </form>
</div>

    )
}

export default Login
