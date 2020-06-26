import React, { useState, useEffect } from 'react';
import { BoxLoading } from 'react-loadingg';
import * as firebase from 'firebase'

const UpdatesCard = ({
    title="",
    description = "",
    image = "",
    loading = true,
    k="",   
    getAllUpdates
}) => {
    
    const [reload,setReload] = useState(false)

    useEffect(() => {
        
    }, [reload])
    

    const deleteUpdate = async (event,key) => {
        event.preventDefault()        
        const dataRef = firebase.database().ref().child(key)
        await dataRef.remove()
        setReload(!reload)
    }

    return (
        <div className="card mb-3 " style={{borderRadius: 10}} >
                    <div className="row ">
                        <div className="col-lg-3">
                            <br/>
                            <img src={image} className="card-img" alt="..." />
                            {loading && (<BoxLoading />)}
                        </div>
                        <div className="col-lg-6">
                            <div className="card-body">
                                <h3 className="card-title">{title}</h3>
                                <p className="card-text">{description}</p>                                
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <button className="btn btn-success" onClick = {e => deleteUpdate(e,k)}>
                        <svg class="bi bi-trash-fill m-5" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                        </svg>
                        </button>
                        </div>
                    </div>
        </div>
    );
}

export default UpdatesCard;
