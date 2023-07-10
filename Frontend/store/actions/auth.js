import axios from 'axios'
import * as actionTypes from './actionTypes'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}


export const authSuccess = (payload,ID) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: payload.access,

        payload:ID,
        refresh:payload.refresh,
        id:ID.id
    }
}



export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}



export const reset_password = (email) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email });

    try {
        await axios.post(`http://localhost:8000/auth/users/reset_password/`, body, config);

        dispatch({
            type: actionTypes.PASSWORD_RESET_SUCCESS
        });
    } catch (err) {
        dispatch({
            type: actionTypes.PASSWORD_RESET_FAIL
        });
    }
};


export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ uid, token, new_password, re_new_password });

    try {
        await axios.post(`http://localhost:8000/auth/users/reset_password_confirm/`, body, config);

        dispatch({
            type: actionTypes.PASSWORD_RESET_CONFIRM_SUCCESS
        });
    } catch (err) {
        dispatch({
            type: actionTypes.PASSWORD_RESET_CONFIRM_FAIL
        });
    }
};







export const authLogin = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post("http://127.0.0.1:8000/auth/jwt/create/", {
            email: email,
            password: password,

        }).then(res => {

            const payload = res.data;

            localStorage.setItem("payload", JSON.stringify(payload))


            dispatch(authLoadUser())
            // dispatch(authSuccess(token, username));


        })
            .catch(error => {

                dispatch(authFail(error))
            })
    }
}





export const logout = () => {
    localStorage.removeItem("token")


    return {
        type: actionTypes.AUTH_LOGOUT
    }
}





export const authSignup = (username, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart());
        axios.post("http://127.0.0.1:8000/rest-auth/registration/", {
            username: username,
            email: email,
            password1: password1,
            password2: password2,

        }).then(res => {
            const token = res.data.access;

            localStorage.setItem("token", token)
            



            dispatch(authSuccess(token, username));
          
                

            }).catch(error => {
                dispatch(authFail(error))
                console.log(error.response)

            })
        
 



          
    }
}




export const authUpdate = (name,email,country,career,bio,DP,CP,Survey,Community,annexes,history,ratings,Contact,verified,payment) => {
    return dispatch => {
        dispatch(authStart());
        axios.post("http://127.0.0.1:8000/api/Update/account/", {
            name:name,
            email:email,
            country:country,
            career:career,
            bio:bio,
            DP:DP,
            CP:CP,
            Survey:Survey,
            Community:Community,
            annexes:annexes,
            history:history,
            ratings:ratings,
            Contact:Contact,
            verified:verified,
            payment:payment,
            

        }).then(res => {

            const token = res.data.access;
       

            // dispatch(authSuccess(token, name));


        })
            .catch(error => {
                dispatch(authFail(error))
                console.log(error.response)

            })
    }
}




export const authLoadUser = () => {
    return dispatch => {

        try{
            const payload = JSON.parse(localStorage.getItem("payload")) 
      
            if(payload!==null){
                if(payload.access){
                    const config={
                        headers:{
                            'Content-Type':'application/json',
                            'Authorization':`JWT ${payload.access}`,
                            "Accept":"application/json"
                        }
                    }
                
               
                        axios.get("http://127.0.0.1:8000/auth/users/me/",config).then(res => {
                
        
                          
                            localStorage.setItem("usrPayload",JSON.stringify(res.data))
                            dispatch(authSuccess(payload,res.data));
                
                
                        })
                            .catch(error => {
                
                                dispatch(authFail(error))
                                // dispatch(AuthenticationCheck)
                            })
                    
                }
                if (payload.access == undefined) {
                    dispatch(logout())
                }
    
    
            }
            else{
                dispatch(authFail("not defined"))
            }
      

        }
        catch(e){
            dispatch(authFail("not defined")),
            localStorage.clear()


        }
 


    }
}

export const AuthenticationCheck = () => {
    const payload = JSON.parse(localStorage.getItem("payload")) 
    const usrPayload =JSON.parse(localStorage.getItem("usrPayload"))
    return dispatch =>{
      
        
        if(payload!==null){
            const config={
                headers:{
                    'Content-Type':'application/json',
                 
                    "Accept":"application/json"
                }
            }
            
            const Body = JSON.stringify({ token:payload.access})

            try{
                axios.post("http://127.0.0.1:8000/auth/jwt/verify/",Body,config).then(res => {

                    if(res.data.code!=="token_not_valid"){
                        dispatch(authSuccess(payload,usrPayload))

                    }else{
                        dispatch(authFail("unable to authenticate"))
                    }

                }).catch( err=>{
                    axios.post("http://localhost:8000/auth/jwt/refresh/",{
                        refresh:payload.refresh
                    },config).then(res=>{
                        if(res.data.code!=="token_not_valid"){

                            // localStorage.setItem("token",JSON.stringify(res.data.access))

                            let payloadUp={"access":res.data.access,"refresh":payload.refresh}
                            localStorage.setItem("payload",JSON.stringify(payloadUp))

                            axios.post("http://127.0.0.1:8000/auth/jwt/verify/",{"token":res.data.access},config).then(res=>{
                                dispatch(authSuccess(payloadUp,usrPayload))

                            }).catch(err=>{
                                dispatch(authFail("unable to authenticate")),

                                dispatch(logout())
                                // localStorage.clear()

                            })
                               

                            

                        }
                    
                    
                    }).catch(err=>{
                        dispatch(logout()),
                        localStorage.clear(),
                        dispatch(authFail("unable to authenticate"))


                    }
                  
                    )

                }
                  
                )
              
      

            }catch(e){
                dispatch(authFail("unable to authenticate"))
           }


        }
        else{

            dispatch(logout())
        }
    }

}



