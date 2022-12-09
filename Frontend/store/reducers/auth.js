import * as actionTypes from '../actions/actionTypes'

import { updateObject } from '../utility'
// import { combineReducers } from 'redux'





const initialState = {
 
    token: null,
    name: null,
    error: null,
    loading: false,
    jwt:null,
}

const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
    });
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        name: action.name,
        error: null,
        loading: false,
    })
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
    })
}

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null,
        name: null,
    });
}

const authUpdate = (state, action) => {
    return updateObject(state, {
        name:action.name,
    });
}

const authJWT = (state, action) => {
    return updateObject(state, {
        jwt:action.jwt,
    });
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return (authStart(state, action))

        case actionTypes.AUTH_SUCCESS:
            return (authSuccess(state, action))

        case actionTypes.AUTH_FAIL:
            return (authFail(state, action))

        case actionTypes.AUTH_LOGOUT:
            return (authLogout(state, action))

        case actionTypes.AUTH_UPDATE:
            return (authUpdate(state, action))

        case actionTypes.AUTH_JWT:
            return (authJWT(state, action))

        default:
            return state;
    }
}



export default reducer