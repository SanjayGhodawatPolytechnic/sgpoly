import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from './Screens/Home/Home';
import Login from './Admin/login'
import LocationMap from './Screens/Contact/Map';
import * as firebase from 'firebase'
import Dashboard from './Admin/Dashboard';
import AdminRoute from './Admin/auth/AdminRoutes';

var firebaseConfig = {
    apiKey: "AIzaSyDMh0eaOlYDXjLMsHI4GcgfQgvW3wi1dFk",
    authDomain: "sgpoly-ae692.firebaseapp.com",
    databaseURL: "https://sgpoly-ae692.firebaseio.com",
    projectId: "sgpoly-ae692",
    storageBucket: "sgpoly-ae692.appspot.com",
    messagingSenderId: "175399205250",
    appId: "1:175399205250:web:e912ca123d98f0f884f79b",
    measurementId: "G-8WEFFHEV1K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const Routes = () => {
    return (                  
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact/map" exact component={LocationMap} />                    
                    <AdminRoute path="/admin" exact component={Dashboard} />
                    <Route path="/admin/signin" exact component={Login} />
                </Switch>
            </BrowserRouter>                    
    )
}

export default Routes;