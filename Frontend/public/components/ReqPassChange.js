import React, { Component } from 'react';
import styles from '../../styles/Auth.module.css'
import RavenScribe from '../icons/logo.png'

import Cross from '../icons/cross.png'
import Image from 'next/image'

import * as actions from '../../store/actions/auth';

import { connect } from 'react-redux';

class PasswordChange extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let btn=document.getElementById("LoginSubmitBtn")

       

      
        btn.addEventListener("click",()=>{
            
            // this.props.ResetPass(document.getElementById("PassowrdRecoverEmail").value)


        })




        
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
         
                    {/* <Image src={RavenScribe} height={100} width={100}   alt=""  className={styles.RavenScribe}/> */}
                    
                    <h2>Change Your password</h2>
              
                    <input className={styles.FormItem} type='email' placeholder='Enter Your Email' id="PassowrdRecoverEmail"></input>





            
            
                    <button className={styles.LogInSubmit} id="LoginSubmitBtn">Request Mail</button>


             
                    

                </form>
            </div>
            </>
          
        );
    }
}




const mapDispatchToProps = (dispatch) => {
    return {
    
     
        ResetPass:(email)=>dispatch(actions.reset_password(email)),



    }
}


export default  (connect(null, mapDispatchToProps)(PasswordChange))
