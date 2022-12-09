import axios from 'axios'
import * as actionTypes from './actionTypes'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}


export const authSuccess = (token, name) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        name: name
    }
}



export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}



export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post("http://127.0.0.1:8000/rest-auth/login/", {
            username: username,
            password: password,

        }).then(res => {

            const token = res.data.key;

            localStorage.setItem("token", token)
  
            dispatch(authSuccess(token, username));


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





export const authJWT=(JWT)=>{

    let nums=[]
    let secLoc=[11,3,17,22,31,51,57,69,70,86]
    let list_conv=JWT.split("")


    for(let i=0;i<=secLoc.length-1;i++){
        nums.push(list_conv[secLoc[i]])
    }
    
    nums.reverse()

    let id;
    id =nums.join("")
    
    let FJWT=id.replace(/0/g, '')


    // let nums=[]
    // let secLoc=[11,3,17,22,31,51,57,69,70,86]
    // let list_conv=JWT.split("")
    
    // for(let i=0;i<=secLoc.length;i++){
    //     nums.push(list_conv[i])
    // }
    // nums.reverse()
    // let id;
    // id =nums.join("")

    // id.replace("0","")


    return {
        type:actionTypes.AUTH_JWT,
        jwt:parseInt(FJWT) 

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
            axios.post("http://127.0.0.1:8000/api/create/account/",{
                name:username,
                email:email,
                country:null,
                career:null,
                bio:null,
                DP:null,
                CP:null,
                Survey:null,
                Community:null,
                annexes:null,
                history:null,
                ratings:null,
                Contact:null,
                verified:null,
                payment:null,
                JWT_per:null,
                user:null,
                
        


                

            }).then(res=>{
                axios({
                    method: "get",
                    url: `http://127.0.0.1:8000/api/User/${email}`,
                  }).then(function (response) {
                    localStorage.setItem("JWT",response.data.JWT_per) 
                  }).catch(
                    err=>{
                        console.log(err)
                    }
                  )
                    
                // })
                
            


                    



             console.log(res)

            })
            // const token = res.data.key;

        
            const token = res.data.key;

            localStorage.setItem("token", token)
            



            dispatch(authSuccess(token, username));


        })
            .catch(error => {
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

            const token = res.data.key;
       

            // dispatch(authSuccess(token, name));


        })
            .catch(error => {
                dispatch(authFail(error))
                console.log(error.response)

            })
    }
}




export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem("token")
        const id=localStorage.getItem("JWT")
        if (token == undefined) {
            dispatch(logout())
        }
        if(id.length!==100){
            dispatch(logout())

        }

    }
}