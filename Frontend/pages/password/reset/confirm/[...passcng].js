import React, { Component, useEffect } from 'react';
import styles from '../../../../styles/Auth.module.css'
import RavenScribe from '../../../../public/icons/logo.png'

import Cross from '../../../../public/icons/logo.png'


import Image from 'next/image'






import * as actions from '../../../../store/actions/auth';

import { connect } from 'react-redux';

class PasswordResetComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: props.router,
          
        }
    }


    render() {

        return (
            <>
           


            <div className={styles.FormHolder}> 

                <h1>{this.props.isAuthenticated?"yes":"not"}</h1>
                <form className={styles.LogInForm} style={{"height":40 +'em'}}>
        
         
                    <Image src={RavenScribe} height={100} width={100}  style={{"margin":5 +'em'}} alt=""  className={styles.RavenScribe}/>
                    


                    <p>{this.state.query}</p> 
                    <input className={styles.FormItem} type='password' placeholder='Enter Your Password' id="ResetPasswordInp1"></input>

                    <input className={styles.FormItem} type='password' placeholder='Retype Your Password' id="ResetPasswordInp2"></input>




   

                    



            
                    <button className={styles.LogInSubmit} id="LoginSubmitBtncn">Done</button>


             
                    

                </form>
            </div>
            
            </>
          
        );
    }
}


import { useRouter } from 'next/router'
import Head from 'next/head'

function PasswordReset(props) {
    const router = useRouter()
    const {passcng} =router.query
    useEffect(()=>{
     
            let btn=document.getElementById("LoginSubmitBtncn")
    
            // this.props.LoadUser()
            // this.props.checkAuth()



            
            if(passcng!==undefined){
                btn.addEventListener("click",(e)=>{
                    e.preventDefault()
                    let password1=document.getElementById("ResetPasswordInp1")
                    let password2=document.getElementById("loginPasswordInp")
                    props.reset_password_confirm(passcng[0],passcng[1],password1.value,password2.value)
    
                    // console.log(password1.value)
                    // this.props.LoginRDX(email.value,password.value)
                })
        
            }
          
    
    
            

    })


    return (
        <>

        <Head>
            <meta httpEquiv="Content-type" content="application/javascript"/>

        </Head>


        <PasswordResetComp {...props} router={passcng} />

        </>

   
        
    )
    
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
  
        reset_password_confirm:()=>dispatch(actions.reset_password_confirm())



    }
}


export default  (connect(mapStateToProps, mapDispatchToProps)(PasswordReset))

