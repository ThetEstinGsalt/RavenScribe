
import React, { Component } from 'react'


import * as actions from '../../store/actions/auth';

import { connect } from 'react-redux';
import Signin from '../../public/components/Signin';

import Login from '../../public/components/Loginc';


class Signupiwp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          query: props.router,
        
        }
      }
    componentDidMount(){

    }
  
    
    render() { 
        return (      
        <>
        <p>{this.state.query}</p>
        <Login/>
        {/* <p>{this.state.query.slug}</p>
        <p>{this.state.query.slug}</p>
          */}
    
        </>
    );
    }
}
 

import { useRouter } from 'next/router'

function Signup(props) {
    const router = useRouter()
    const {slug} =router.query
    console.log(slug)

    return (
        <>
        <p>{slug}</p>

        <Signupiwp {...props} router={slug} />

        </>

   
        
    )
    
}



const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,

        // isAuthenticated: state.token,
        isAuthenticated: state.token !== null

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SignUpCl: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))

    }
}



export default  (connect(mapStateToProps, mapDispatchToProps)(Signup))