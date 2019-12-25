import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken'
import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from '../types'


const AuthState = props => {

    const initialState = {
            token: null,
            isAuthenticated: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    //Register User
    const register = async (user) =>{

        const config = {
            headers: {
              'Content-Type': 'application/json'
            }};
    
            try{
                const res = await axios.post('/api/register', user, config);
                const token = res.data;
              dispatch({type: REGISTER_SUCCESS, payload: token})
         
            } catch (err){
                dispatch({
                    type: REGISTER_FAIL,
                    payload: err.response.data.msg
                })
             };

             if(localStorage.token) {
                 setAuthToken(localStorage.token)
             }
    };

    //Login User
    const login = async user => {
        const config = {
            headers: {
              'Content-Type': 'application/json',
            }};
    
            try{
              const res = await axios.post('/api/login', user, config);
              const token = res.data;
                dispatch({ type: LOGIN_SUCCESS, payload: token})
            } catch (err){
                dispatch({
                    type: LOGIN_FAIL,
                    payload: err
                });
        }
         if(localStorage.token) {
            setAuthToken(localStorage.token)
        }
    };

    //Logout
const logout = () => dispatch({ type: LOGOUT });
    
    
    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                register,
                login,
                logout
            }}>
                {props.children}
        </AuthContext.Provider>
    )


};

export default AuthState