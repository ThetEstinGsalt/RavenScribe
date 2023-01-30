import * as actionTypes from '../actions/actionTypes'

import { updateObject } from '../utility'
// import { combineReducers } from 'redux'





const initialState = {
 
    FetchList: null,
    OptionSelected: null,
    TextOption: null,
    error:null,

}


const  FetchedFail= (state, action) => {
    return updateObject(state, {
        error: action.error,

    });
}

const FetchedSuccess = (state, action) => {
    

    return updateObject(state, {
        FetchList: action.list,
        error: null,
 
    })
}


const reducerEdit = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_SUCCESS:
            return (FetchedSuccess(state, action))

        case actionTypes.FETCH_FAIL:
            return (FetchedFail(state, action))

    

        default:
            return state;
    }
}



export default reducerEdit