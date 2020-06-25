import React from 'react';
import { useEffect } from 'react';

//import firebase
import * as firebase from 'firebase'
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import Main from '../ReusableComponents/Main';

const Dashboard = () => {
    const [didRedirect,setDidRedirect] = useState(false)
    const [screens,setScreens] = useState({
        isNewNews:false,
        isListAll:false
    })    

    useEffect(() => {        
        firebase.auth().onAuthStateChanged(authenticated => {
            if(authenticated){                
                setDidRedirect(false)
            }else{
                setDidRedirect(true)                
            }
        })
    }, [])

    const PerformRedirect = () => {
        return( <Redirect to="/admin/signin" /> )
    }

    const SignOut = () => {
        firebase.auth().signOut()
        .then(() => setDidRedirect(true))
        .catch(err => console.log(err))
    }

    const AddNews = () => {
        return(
            <div class="jumbotron">
            <h1 class="display-4">Add News</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
        )
    }

    const ListAllNews = () => {
        return (
            <div class="jumbotron">
            <h1 class="display-4">List All</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
        )
    }

    const LeftAdminPanel = () => {
        return ( 
            <div className="card">
                <h4 className="card-header bg-dark text-white">
                    Admin Panel
                </h4>
                <ul className="list-group">
                    <li className="btn btn-success rounded-pill m-2" onClick={() => setScreens({...screens,isListAll:false,isNewNews:true})}>
                        New News
                    </li>                    
                    <li className="btn btn-success rounded-pill m-2" onClick={() => setScreens({...screens,isListAll:true,isNewNews:false})}>
                        List All News
                    </li>
                    <li className="btn btn-success rounded-pill m-2" onClick={e => SignOut()}>
                    Sign out <i class="fa fa-sign-out" aria-hidden="true"></i>
                    </li>
                </ul>
            </div>
         )
    }

    const RightAdminPanel = () => {
        return(
            <div>
                {screens.isNewNews && AddNews()}
                {screens.isListAll && ListAllNews()}
            </div>
        )
    }

    const AdminPanel = () => {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-4"><LeftAdminPanel /></div>
                    <div className="col-8"><RightAdminPanel /></div>
                </div>
            </div>
        )
    }

    return (
        <Main>
        <div>
            { didRedirect && PerformRedirect()}
            <AdminPanel />
        </div>
        </Main>
    );
}

export default Dashboard;
