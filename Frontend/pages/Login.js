
import React, { Component } from 'react'


import * as actions from '../store/actions/auth';

import Signin from '../public/components/Signin';

import Loginc from '../public/components/Loginc';


import { connect } from 'react-redux';

class Login extends Component {
    constructor(props){
        super(props)
    }
 
    
    render() { 
        return (      
        <>
       
        <Loginc/>
         
    
        </>
    );
    }
}
 


// function Login(props) {
//     return (
  
//         <Loginiwp {...props}/>
        
//     )
    
// }

// export async function getServerSideProps(context) {


//     return {
//       props: {}, 
//     }
//   }










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

   
    }
}


export default  (connect(mapStateToProps, mapDispatchToProps)(Login))
