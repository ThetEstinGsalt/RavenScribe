import axios from 'axios'
import * as actionTypes from './actionTypes'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";



export const FetchedSuccess= (list) => {


    return {
        type: actionTypes.FETCH_SUCCESS,
        list: list,

    }
}

export const FetchedFail = (error) => {
    return {
        type: actionTypes.FETCH_FAIL,
        error: error
    }
}


export const SelectSuccess= (div) => {


    return {
        type: actionTypes.SELECTSUCCESS,
        Selected: div,

    }
}

export const FontSuccess = (Font) => {


    return {
        type: actionTypes.FONT_SELECT,
        Font: Font,

    }
}




export const INSERTSUCCESS = (Insert) => {


    return {
        type: actionTypes.INSERT_SELECT,
        Insert: Insert,

    }
}

export const DELETESUCCESS = (DELETE) => {


    return {
        type: actionTypes.DELETE_SELECT,
        Delete: DELETE,

    }
}





export const fetchImage = (Key, page) => {
    return dispatch => {


        const apikey="563492ad6f91700001000001c74a05694869455883a4ab2f3d99e8e2";

        axios.get(`https://api.pexels.com/v1/search?query=${Key}&page=${page}`, {
        headers: {
            Authorization: apikey,
            Accept:"application/json",
        }
        })
        .then((res) => {
            const list = res.data;

            dispatch(FetchedSuccess(list));
   
        })
        .catch((error) => {
            dispatch(FetchedFail(error));


        })


   


       
    }
}


export const fetchGif = (Key) => {
    return dispatch => {


        const apikey="NYm3HYAql9KCswD2GgXeb6XRIjw0Qi7U";
        axios.get(`http://api.giphy.com/v1/gifs/search`, {
            params: {
                api_key: apikey,
                q:`${Key}`,
            }
            })
            .then((res) => {

                
                dispatch(FetchedSuccess(res.data));
       
            })
            .catch((error) => {

                dispatch(FetchedFail(error));

          
         
    
    
            })
    

      

   


       
    }
}


