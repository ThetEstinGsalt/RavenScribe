
import React, { Component } from 'react'


import * as actions from '../store/actions/auth';

import { connect } from 'react-redux';
import Signin from '../public/components/Signin';

import Login from '../public/components/Loginc';


class Signupiwp extends Component {
  
    
    render() { 
        return (      
        <>
        {/* <Signin/> */}
        <Login/>
         
    
        </>
    );
    }
}
 


function Signup(props) {
    return (
  
        <Signupiwp {...props}/>
        
    )
    
}

// export async function getServerSideProps(context) {
//     console.log(context)

//     return {
//       props: {}, 
//     }
//   }


const mapStateToProps = (state) => {
    return {
        // loading: state.loading,
        // error: state.error,

        // // isAuthenticated: state.token,
        // isAuthenticated: state.token !== null

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SignUpCl: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))

    }
}


export default  (connect(mapStateToProps, mapDispatchToProps)(Signup))

// export default Signup