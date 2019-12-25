import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../context/auth/authContext'



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
        <h3 style={{ color: 'black', fontSize: '2.5rem'}}>Register</h3>
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
            <input id="input" type="submit" value="Register" />
          </div>
        </div>
      </form>
    </div>
         
)};

export default Register