import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
                localStorage.setItem('token', action.payload)
                return {
                    ...state, 
                    token: action.payload,
                    isAuthenticated: true                
                };
        case REGISTER_FAIL: 
        case LOGIN_FAIL:
        case LOGOUT:
                localStorage.removeItem('token');
                return {
                    ...state,
                    token: null,
                    isAuthenticated: null,
                };

        default: 
        return state
    }}