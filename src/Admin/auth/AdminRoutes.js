import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useEffect } from "react";


const AdminRoute = ({ component: Component, ...rest }) => {

    const authenticate = () => {
        
        return localStorage.getItem('user')
    }
    useEffect(() => {
      authenticate();
    }, [])

  return (
    <Route
      {...rest}
      render={props =>    
        authenticate() ? (          
          <Component {...props} />
        ) : (
          <Redirect
          to="/admin/signin"
        />
      )
      }
    />
  );
};

export default AdminRoute;
