import React from 'react';
import { useEffect } from 'react';

//uuid import
import uuid from 'react-native-uuid';

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
    const [value,setValue] = useState({
        title:"",
        description:"",
        image:""        
    });


    

    useEffect(() => {        
        firebase.auth().onAuthStateChanged(authenticated => {
            if(authenticated){                
                setDidRedirect(false)
            }else{
                setDidRedirect(true)                
            }
        })        
    }, [])

    const handleChange = name => event => {        
        event.preventDefault()
        setValue({...value,[name]:event.target.value})
    }

    const chooseFile = event => {        
        event.preventDefault()
        setValue({...value, image: event.target.value})
        console.log(value.image)
    }

    const onSubmit = async () => {
        var title = document.getElementById('title').value;
        var description = document.getElementById('description').value
        const image = document.getElementById('file').files[0];
        setValue({
            ...value,
            image,
            title,
            description
        })        

        const dbReference = firebase.database().ref()
        const storageRef = firebase.storage().ref()
        var url = "empty"
        if(image !== ""){
            const downloadUrl = await uploadImageAsync(image, storageRef)                        
            url = downloadUrl
        }

        var contact = {
            title:title,
            description: description,
            imageDownloadUrl:url
          }
          await dbReference.push(contact, err => {
            if(!err){
              console.log("SUCCESS")              
            }
          })
        
    }


    const uploadImageAsync = async (image, storageRef) => {
        const ref = storageRef.child('images').child(uuid.v4())
        const snapshot = await ref.put(image)
        return await snapshot.ref.getDownloadURL()

      };

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
                <form>
                    <div class="row">
                        <div class="col">
                        <input type="text" className="form-control"  placeholder="Title" id="title" />
                        </div>
                        <div class="col">
                        <textarea type="text" className="form-control" placeholder="Description" id="description" />
                        </div>                        
                    </div>
                    <div className="col-12">                    
                    <input type="file" class="form-control" id="file" />
                    </div>
                    <button class="btn btn-lg btn-primary btn-block text-uppercase" onClick={onSubmit}>Sign in</button>
                    </form>
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
