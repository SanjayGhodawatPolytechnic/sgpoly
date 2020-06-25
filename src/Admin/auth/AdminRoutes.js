import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as firebase from 'firebase'


const AdminRoute = ({ component: Component, ...rest }) => {

    const authenticate = () => {
        firebase.auth().onAuthStateChanged(authenticated => {
            if(authenticated){
                console.log("AUTHENTICATED")                
                true ? console.log('true') : console.log('false')
                return true
            }
            return false
        })
    }
  return (
    <Route
      {...rest}
      render={props =>    
        authenticate() ? (
            <Redirect
            to={{
              pathname: "/admin/signin",
              state: { from: props.location }
            }}
          />
        ) : (          
          <Component {...props} />
        )
      }
    />
  );
};

export default AdminRoute;
