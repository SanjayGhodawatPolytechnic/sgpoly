import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from './Screens/Home/Home';
import LocationMap from './Screens/Contact/Map';

const Routes = () => {
    return (                  
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact/map" exact component={LocationMap} />
                </Switch>
            </BrowserRouter>            

        
    )
}

export default Routes;