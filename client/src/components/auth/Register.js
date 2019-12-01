import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../context/auth/authContext'
import Logo from '../../Images/logo-01.png'



const Register = (props) => {

  const authContext = useContext(AuthContext);
  const { register, isAuthenticated } = authContext;

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = user

    useEffect(()=> {
        if (isAuthenticated) {
          props.history.push('./dashboard');
          // eslint-disable-next-line
       }}, [isAuthenticated]);
    
        const onChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
       e.preventDefault();
        register(user)
    };
    
    return (
    <div className="grid">
      <form  className="form login"  onSubmit={onSubmit}>
        <header className="login__header">
          <img src={Logo} alt='logo' style={{width: '40%', height: '100px'}}/>
        </header>
        <div className="login__body">
          <div className="form__field">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={name} onChange={onChange} />
          </div>
          <div className="form__field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={email} onChange={onChange} />
          </div>
          <div className="form__field">
            <label htmlFor="password">Password</label>
            <input type= "password" name="password" value={password} onChange={onChange} />
          </div>
          <div className="login__footer">
            <input type="submit" value="Register" />
          </div>
        </div>
      </form>
    </div>
         
)};

export default Register