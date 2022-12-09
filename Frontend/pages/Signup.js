
import React, { Component } from 'react'


import * as actions from '../store/actions/auth';

import { connect } from 'react-redux';





class Signupiwp extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = (event) => {
            event.preventDefault()
            const name = document.getElementById("name").value
            const email = document.getElementById("email").value
            const password1 = document.getElementById("password").value
            const password2 = document.getElementById("password2").value
    
            if (password1 !== password2) {
                alert("Passwords don't match!")
            }
            else {
 
                try {

                    let signedup = this.props.SignUpCl(name, email, password1, password2)







                }
                catch (err) {
                    console.log(err)

                }



            }

    }}
    
    
    render() { 
        return (      
        <>
            <h2>Signup</h2>
    
            <input id="name" type="text"></input>
            <input id="email"type="email"></input>
            <input id="password"type="password"></input>
            <input id="password2"type="password"></input>
            <button onClick={this.handleSubmit}>Submit</button>
    
        </>
    );
    }
}
 


function Signup(props) {
    return (
  
        <Signupiwp {...props}/>
        
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

// export default Signup