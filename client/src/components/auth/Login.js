import React, { useState, useEffect, useContext } from 'react';
import '../../CSS/login.css';
import Logo from '../../Images/logo-01.png';
import AuthContext from '../context/auth/authContext';


  const Login = (props) => {
  
    const authContext = useContext(AuthContext);
    const { login, isAuthenticated } = authContext;

    const [user, setUser] = useState({
      email: '',
      password: '',
    });
 
    const {email, password} = user;

    useEffect(()=> {
     if (isAuthenticated) {
       props.history.push('/dashboard');
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
       
    
  <div className="grid">
    
    <form  className="form login"  onSubmit={onSubmit}>
    <header className="login__header">
     <img src={Logo} alt='logo' style={{width: '25%'}}/>
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

    <div className="login__footer">
      <input type="submit" value="Login" />
    </div>
    </div>

  </form>
  {alert? <h3 className="alert">{alert}</h3>:''}
</div>

    )
}

export default Login
