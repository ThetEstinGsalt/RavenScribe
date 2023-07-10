import * as actionTypes from '../actions/actionTypes'

import { updateObject } from '../utility'
// import { combineReducers } from 'redux'






const initialState = {
   
    token: null,
    refresh:null,
    IsAuthenticated:null,
    name: null,
    error: null,
    loading: false,
    payload:null,
    id:null

}

const PasswordResetFailed=(state,action)=>{
    return updateObject(state,{
        error:action.error,
        loading:false
    })
}
const PasswordResetSuccess=(state,action)=>{
    return updateObject(state,{
   
        loading:false
    })
}

const PasswordResetConfirmFailed=(state,action)=>{
    return updateObject(state,{
        error:action.error,
        loading:false
    })
}
const PasswordResetConfirmSuccess=(state,action)=>{
    return updateObject(state,{
   
        loading:false
    })
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
        refresh:action.refresh,
        error: null,
        loading: false,
        IsAuthenticated:true,
        payload:action.payload,
        id:action.id
    })
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
        token: null,
        refresh:null,
        IsAuthenticated:false,
        id:null,
    })
}

const authLogout = (state) => {
    return updateObject(state, {
        token: null,
        refresh:null,
        IsAuthenticated:false,
        name: null,
        id:null,
    });
}

const authUpdate = (state, action) => {
    return updateObject(state, {
        name:action.name,
    });
}





const reducerauth = (state = initialState, action) => {
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


        case actionTypes.PASSWORD_RESET_SUCCESS:
            return (PasswordResetSuccess(state, action))
        case actionTypes.PASSWORD_RESET_FAIL:
            return (PasswordResetFailed(state, action))

        case actionTypes.PASSWORD_RESET_CONFIRM_SUCCESS:
            return (PasswordResetConfirmSuccess(state, action))
        case actionTypes.PASSWORD_RESET_CONFIRM_FAIL:
            return (PasswordResetConfirmFailed(state, action))



        default:
            return state;
    }
}



export default reducerauth