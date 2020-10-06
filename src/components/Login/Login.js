import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig'
import './Login.css';
import logo from '../../logos/Group 1329.png'
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);
const Login = () => {
    const [user, setUser] = useState({
       isSignedIn: false,
       name: '',
       email: '',
       photo: ''
    })
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const provider = new firebase.auth.GoogleAuthProvider();
    const handelSingInGoogle = () =>{
        firebase.auth().signInWithPopup(provider).then(function(result) {
        
            const {displayName, photoURL, email} = result.user;
            const signInUser ={
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL
            }
            setUser(signInUser);
            setLoggedInUser(signInUser);
            history.replace(from);
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            console.log(errorMessage);
            
            // ...
          });
    }
    

    return (
        <div className="container">
            <div className="row  bg-light py-4">
                <img className="logo mx-auto" src={logo} alt=""/>
            </div>
            <div className="row ">
                <div className="col-5 mx-auto login-form p-5  d-flex align-items-center justify-content-center">
                    <div className="form-inner">
                        <h4 className="pb-2">Login with</h4>
                        <button onClick={handelSingInGoogle}  button type="submit" className="btn btn-block btn-primary">Continue with Google</button>
                        <span>Don't have an account?</span> <a href="#">Create an account</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;