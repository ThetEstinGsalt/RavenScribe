import React, { Component } from 'react';
import styles from '../../styles/Auth.module.css'
import RavenScribe from '../icons/logo.png'

import Cross from '../icons/cross.png'
import Image from 'next/image'
class Login extends Component {
    render() {
        return (
            <div className={styles.FormHolder}> 

            
            
                <div className={styles.LogInForm}>
                    <div className={styles.crossWrapper}>
                    <Image src={Cross} height={20} width={20}   alt=""  className={styles.crossForm}/>

                    </div>
         
                    <Image src={RavenScribe} height={100} width={100}   alt=""  className={styles.RavenScribe}/>
                    
                    <input className={styles.FormItem} type='text' placeholder='Enter Your Name'></input>

              

                    <input className={styles.FormItem} type='password' placeholder='Enter Your Password'></input>




                    <div className={styles.googleLogoWrap}>

                    


                    </div>
            
                    <button className={styles.LogInSubmit}>Log In</button>


             
                    

                </div>
            </div>
          
        );
    }
}

export default Login;
