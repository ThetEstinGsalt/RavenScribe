import React, { Component } from 'react';
import styles from '../../styles/Auth.module.css'
import RavenScribe from '../icons/logo.png'

import Cross from '../icons/cross.png'
import Image from 'next/image'

import * as actions from '../../store/actions/auth';

import { connect } from 'react-redux';

class Loginc extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let btn=document.getElementById("LoginSubmitBtn")

        // this.props.LoadUser()
        // this.props.checkAuth()

      
        btn.addEventListener("click",()=>{
            let email=document.getElementById("loginEmailInp")
            let password=document.getElementById("loginPasswordInp")
            // this.props.LoginRDX(email.value,password.value)
        })

        console.log(this.props.isAuthenticated)


        
    }

    render() {

        return (
            <>


            <div className={styles.FormHolder}> 

                <h1>{this.props.isAuthenticated?"yes":"not"}</h1>
                <form className={styles.LogInForm}>
                    <div className={styles.crossWrapper}>
                    <Image src={Cross} height={20} width={20}   alt=""  className={styles.crossForm}/>

                    </div>
         
                    <Image src={RavenScribe} height={100} width={100}   alt=""  className={styles.RavenScribe}/>
                    
                    <input className={styles.FormItem} type='email' placeholder='Enter Your Email' id="loginEmailInp"></input>

              

                    <input className={styles.FormItem} type='password' placeholder='Enter Your Password' id="loginPasswordInp"></input>




                    <div className={styles.googleLogoWrap}>

                    


                    </div>
            
                    <button className={styles.LogInSubmit} id="LoginSubmitBtn">Log In</button>


             
                    

                </form>
            </div>
            </>
          
        );
    }
}


const mapStateToProps = (state) => {
    return {
        loading: state.Auth.loading,
        error: state.Auth.error,

        // isAuthenticated: state.token,
        isAuthenticated: state.Auth.IsAuthenticated

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        LoginRDX: (email, password) => dispatch(actions.authLogin(email,password)),
        LoadUser:()=> dispatch(actions.authLoadUser()),
        checkAuth:()=> dispatch(actions.AuthenticationCheck())


    }
}


export default  (connect(mapStateToProps, mapDispatchToProps)(Loginc))
