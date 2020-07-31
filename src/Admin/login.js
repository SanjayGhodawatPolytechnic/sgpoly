import React, { useEffect } from 'react';
import './CSS/Login.css'
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import * as firebase from 'firebase';


const Login = () => {

    const [data,setData] = useState({
        email:'',
        password:''
    })
    const [redirect,setRedirect] = useState(false)
    const [error,setError] = useState(false)

    useEffect(() => {
        
    }, []);

    const onSubmit = event => {        
        event.preventDefault();
        firebase.auth()
        .signInWithEmailAndPassword(data.email,data.password)
        .then(() => {                            
            setRedirect(true)
        })
        .catch(err => setError(true))
    }

    const PerformRedirect = () => {
        return ( <Redirect to="/admin" /> )
    }

    const ErrorMEssage = () => {
        return (
            <div className="alert alert-danger text-center">    
                <h4>Incorrect Details</h4>
            </div>
        )
    }

    const LoginForm = () => {
        return (
            <div class="container w-100">            
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
              {error && ErrorMEssage()}
            <h5 class="card-title text-center">Sign In</h5>
            <form class="form-signin">
              <div class="form-label-group">
                <input 
                type="email" 
                id="inputEmail" 
                class="form-control" 
                placeholder="Email address" 
                required 
                autoFocus
                onChange = {e => setData({...data,email:e.target.value})}
                />
                <label for="inputEmail">Email address</label>
              </div>

              <div class="form-label-group">
                <input 
                type="password" 
                id="inputPassword" 
                class="form-control" 
                placeholder="Password" 
                required 
                onChange={e => setData({...data,password:e.target.value})}
                />
                <label for="inputPassword">Password</label>
              </div>              
              <button class="btn btn-lg btn-primary btn-block text-uppercase" onClick={onSubmit}>Sign in</button>
              <hr class="my-4" />              
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

        )
    }

    return (
        <div>
            { redirect && PerformRedirect()}
            {LoginForm()}
        </div>
    );
}

export default Login;
