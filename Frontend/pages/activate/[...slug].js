
import React, { Component, useEffect } from 'react'


import * as actions from '../../store/actions/auth';

import { connect } from 'react-redux';





import styles from '../../styles/Auth.module.css'
import RavenScribe from '../../public/icons/logo.png'

import Cross from '../../public/icons/cross.png'
import Image from 'next/image'




class EmailReq extends Component {
    constructor(props){
        super(props);
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
                    
                    <input className={styles.FormItem} type='email' placeholder='Enter Your Email' id="ReqEmailInp"></input>

              

                

                    

                    <button className={styles.LogInSubmit} id="PassCngReqBtn">Request Change</button>


             
                    

                </form>
            </div>
            </>
          
        );
    }
}


import { useRouter } from 'next/router'
import Head from 'next/head'

function ReqPassChangeEmail(props) {
    const router = useRouter()
    const {slug} =router.query


    useEffect(()=>{
     
            let btn=document.getElementById("PassCngReqBtn")
    
            // this.props.LoadUser()
            // this.props.checkAuth()
    
          
            btn.addEventListener("click",(e)=>{
                e.preventDefault()
                let email=document.getElementById("ReqEmailInp")
      
                props.reset_password(email.value)
                // this.props.LoginRDX(email.value,password.value)
            })
        
    
            // console.log(this.props.isAuthenticated)
          
    
    
            

    })



    return (
        <>
        <p>{slug}</p>
        <Head>
            <meta httpEquiv="Content-type" content="application/javascript"/>

        </Head>


        <EmailReq {...props} router={slug} />

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
        
        reset_password:()=>dispatch(actions.reset_password())
        //         CheckUser: () => dispatch(actions.authCheckState()),


    }
}


export default  (connect(mapStateToProps, mapDispatchToProps)(ReqPassChangeEmail))