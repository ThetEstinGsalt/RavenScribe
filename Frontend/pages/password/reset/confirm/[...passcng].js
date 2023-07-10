import React, { Component } from 'react';
import styles from '../../../../styles/Auth.module.css'
import RavenScribe from '../../../../public/icons/logo.png'

import Cross from '../../../../public/icons/logo.png'
import Image from 'next/image'

// import * as actions from '../../../store/actions/auth';

import { reset_password_confirm } from '../../../../store/actions/auth';

import { connect } from 'react-redux';

// class PasswordChangeB extends Component {
//     constructor(props){
//         super(props);
//     }
//     componentDidMount(){
//         let btn=document.getElementById("PassConfSubmitBtn")

   
//         let slug=this.props.router
//         console.log(slug)
      
//         btn.addEventListener("click",()=>{

            

//         })




        
//     }

//     render() {

//         return (
//             <>


          
//             </>
          
//         );
//     }
// }






import { useRouter } from 'next/router'

const PassWordChange=({reset_password_confirm})=> {
    const router = useRouter()
    const {passcng} =router.query
    console.log(passcng)

    const onClick = e => {
        e.preventDefault();

        const uid = passcng[0]
        const token = passcng[1]

        reset_password_confirm(uid, token, document.getElementById("ChangePass_newPass").value,  document.getElementById("ChangePass_newPassRetype").value);
     
    };

    return (
        <>
        <div className={styles.FormHolder}> 

                
            <form className={styles.LogInForm}>
                <div className={styles.crossWrapper}>
                <Image src={Cross} height={20} width={20}   alt=""  className={styles.crossForm}/>

                </div>

                <Image src={RavenScribe} height={100} width={100}   alt=""  className={styles.RavenScribe}/>
                



                <input className={styles.FormItem} type='password' placeholder='Old Password' id="ChangePass_oldPassConformation"></input>

                <input className={styles.FormItem} type='password' placeholder='New Password' id="ChangePass_newPass"></input>

                <input className={styles.FormItem} type='password' placeholder='Retype New Password' id="ChangePass_newPassRetype"></input>






                <button className={styles.LogInSubmit} id="PassConfSubmitBtn" onClick={e=>onClick(e)}>Reset</button>



                

            </form>
        </div>


        </>

   
        
    )
    
}




export default  (connect(null,  { reset_password_confirm })(PassWordChange))
