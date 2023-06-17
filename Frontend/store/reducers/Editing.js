import * as actionTypes from '../actions/actionTypes'

import { updateObject } from '../utility'
// import { combineReducers } from 'redux'





const initialState = {
 
    FetchList: null,
    OptionSelected: null,
    TextOption: null,
    error:null,
    Selected:null,
    // Font:null,
    Font:"blogContent",
    Insert:"Down",
    Delete:0,
    loading:false,


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

const SelectedDiv=(state,action)=>{
    return updateObject(state,{
        Selected:action.Selected
    })
}


const SelectFont=(state,action)=>{
    return updateObject(state,{
        Font:action.Font,
      
    })
}

const SelectInsert=(state,action)=>{
    return updateObject(state,{
        Insert:action.Insert
    })
}
const SelectDelete=(state,action)=>{
    return updateObject(state,{
        Delete:action.Delete
    })
}




const reducerEdit = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_SUCCESS:
            return (FetchedSuccess(state, action))

        case actionTypes.FETCH_FAIL:
            return (FetchedFail(state, action))
        case actionTypes.SELECTSUCCESS:
            return (SelectedDiv(state, action))
        case actionTypes.FONT_SELECT:
            return (SelectFont(state, action ))
        case actionTypes.INSERT_SELECT:
            return (SelectInsert(state, action ))
        case actionTypes.DELETE_SELECT:
            return (SelectDelete(state, action ))

    

        default:
            return state;
    }
}



export default reducerEdit