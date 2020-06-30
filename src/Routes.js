import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from './Screens/Home/Home';
import Login from './Admin/login'
import LocationMap from './Screens/Contact/Map';
import aboutLogo from './Screens/About/logo';
import aboutSGP from './Screens/About/sgp';
import aboutPhilosophy from './Screens/About/philosophy';
import aboutVision from './Screens/About/vision';
import aboutQuality from './Screens/About/quality';
import aboutAffCert from './Screens/About/affiliation';
import aboutDifferentiator from './Screens/About/differentiator';
import aboutAchievement from './Screens/About/achievement';



import managementTrust  from './Screens/Management/trust';
import managementBoard  from './Screens/Management/board';
import managementChairman  from './Screens/Management/chairman';





import * as firebase from 'firebase'
import Dashboard from './Admin/Dashboard';
import AdminRoute from './Admin/auth/AdminRoutes';
import Activities from './Screens/About/Activities';
import SocialResponsiblities from './Screens/About/SocialResponsiblities';
import ImageGallery from './Screens/About/components/ImageGallery';
import ImageGal from './Screens/About/components/ImageGallery';
import MoreUpdates from './ReusableComponents/MoreUpdates';

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

    {/* --------------------About------------------------------------------------*/}
                    <Route path="/about/logo" exact component={aboutLogo}/>
                    <Route path="/about/sgp" exact component={aboutSGP}/>
                    <Route path="/about/philosophy" exact component={aboutPhilosophy}/>
                    <Route path="/about/vision" exact component={aboutVision}/>
                    <Route path="/about/quality" exact component={aboutQuality}/>
                    <Route path="/about/Affiliation" exact component={aboutAffCert}/>
                    <Route path="/about/differentiator" exact component={aboutDifferentiator}/>
                    <Route path="/about/achievements" exact component={aboutAchievement}/>
                    <Route path="/about/activities" exact component={Activities}/>
                    <Route path="/about/socialresponsiblities" exact component={SocialResponsiblities}/>

    {/* --------------------Management------------------------------------------------*/}

                    <Route path="/management/trust" exact component={managementTrust}/>
                    <Route path="/management/board" exact component={managementBoard}/>
                    <Route path="/management/chairman" exact component={managementChairman}/>





                    <Route path="/images" exact component={ImageGal}/>
                    <Route path="/updates/viewmore" exact component={MoreUpdates}/>



                    <Route path="/contact/map" exact component={LocationMap} />                    
                    <AdminRoute path="/admin" exact component={Dashboard} />
                    <Route path="/admin/signin" exact component={Login} />
                </Switch>
            </BrowserRouter>                    
    )
}

export default Routes;