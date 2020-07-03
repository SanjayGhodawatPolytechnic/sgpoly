import React, { useState } from 'react';
import Main from '../../ReusableComponents/Main';
import './CSS/AddStaffMember.css'
import * as firebse from 'firebase'
import uuid from 'react-native-uuid';
import ReactLoading from 'react-loading';

const AddStaffMember = () => {

    const [fullName,setFullName] = useState("")
    const [designation,setDesignation] = useState("")
    const [email,setEmail] = useState("")
    const [qualification,setQualification] = useState("")
    const [expertise,setExpertise] = useState("")    
    const [experience,setExperience] = useState("")    
    const [isLoading,setIsLoading] = useState(false)
    const [isSuccess,setIsSuccess] = useState(false)


    const onSubmit = async (e) => {        
            e.preventDefault();
            setIsLoading(true)
            var el = document.getElementById("inputGroupSelect01")
            var des = el.options[el.selectedIndex].text;                                                        
            var dp = document.getElementById("inputGroupSelect02")
            var dept = dp.options[dp.selectedIndex].text;                                                        
            console.log(dept)
            let image = document.getElementById("profileImage").files[0]
            let resume = document.getElementById("profileResume").files[0]            
            console.log("NAME:",fullName, " EMAIL:", email, "DESIGNATION:", des, "QUALIFICATION:", qualification, "EXPERTISE:", expertise, "EXPERIENCE:", experience)            
            
            const dbReference = firebse.database().ref("staff")
            const storageRef = firebse.storage().ref()
            var imageURL = "empty" 
            var FileURL = "empty"
            if(image !== ""){
                const downloadUrl = await uploadImageAsync(image, storageRef)                                    
                imageURL = downloadUrl
            }
            if(resume !== ""){
                const downloadFileUrl = await uploadFileAsync(resume,storageRef)
                FileURL = downloadFileUrl
            }

            var data = {
                fullName: fullName,
                designation:des,
                expertise:expertise,
                experience:experience,
                email:email,
                qualification:qualification,
                department:dept,
                imageDownloadUrl:imageURL,
                resumeDownloadUrl:FileURL,
                postedOn:firebse.database.ServerValue.TIMESTAMP
            }

            await dbReference.push(data,err => {
                if(!err){
                    console.log("STAFF ADDED")
                    setIsLoading(false)
                    setIsSuccess(true)
                }
            })

    }

    const uploadImageAsync = async (image, storageRef) => {
        const ref = storageRef.child('staff-picture').child(uuid.v4())
        const snapshot = await ref.put(image)
        return await snapshot.ref.getDownloadURL()
      };

    const uploadFileAsync = async (file, storageRef) => {
        const ref = storageRef.child('files').child(uuid.v4())
        const snapshot = await ref.put(file)
        return await snapshot.ref.getDownloadURL()
      };

      const SuccessMessage = () => {
        return (
            <div className="alert alert-success text-center">    
                <h4>Added Successfully</h4>
            </div>
        )
    }

    return (
        <Main className="container-lg bg-dark roundedd border border-light"> 
            <div class="signup-form">
                <form action="/examples/actions/confirmation.php" method="post">
                    <h2>Add Staff</h2>
                    <p class="hint-text">Add a staff member and following details are compulsory</p>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-lg-12">
                                {isSuccess && (<SuccessMessage />)}                                
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-lg-12"><input type="text" class="form-control" name="full_name" placeholder="Full Name with title" required="required" onChange={e => {
                                setFullName(e.target.value)
                                //console.log(fullName)
                            }} /></div>                            
                        </div>        	
                    </div>                    
                    <div class="form-group">
                        <div class="row">
                            <div class="col-lg-12">                            
                            <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Designation</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect01" >
                                <option value="0">Choose...</option>
                                <option value="1">HOD</option>
                                <option value="2">Lecturer</option>
                                <option value="3">Lab Assistant</option>
                            </select>
                            </div>
                            </div>                            
                        </div>        	
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-lg-12">                            
                            <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Department</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect02" >
                                <option value="0">Choose...</option>
                                <option value="1">Computer Science</option>
                                <option value="2">Mechanical</option>
                                <option value="3">E &amp; TC</option>
                                <option value="4">Civil</option>
                                <option value="5">Electrical</option>
                            </select>
                            </div>
                            </div>                            
                        </div>        	
                    </div>
                    <div class="form-group">
                        <div className="row">
                            <div className="col-lg-12"><input 
                            type="email" 
                            class="form-control" 
                            name="email" 
                            placeholder="Email" 
                            required="required" 
                            onChange={e => setEmail(e.target.value)}
                            /></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div className="row">
                            <div className="col-lg-12"><input 
                            type="text" 
                            class="form-control" 
                            name="qualification" 
                            placeholder="Qualification" 
                            required="required" 
                            onChange={e => setQualification(e.target.value)}
                            /></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div className="row">
                            <div className="col-lg-12"><input 
                            type="text" class="form-control" 
                            name="areaofexpertise" 
                            placeholder="Area of Expertise" 
                            required="required"
                            onChange={e => setExpertise(e.target.value)}
                             /></div>
                        </div>
                    </div>                            
                    <div class="form-group">
                        <div className="row">
                            <div className="col-lg-12"><input type="text" 
                            class="form-control" 
                            name="experience" 
                            placeholder="Experience" 
                            required="required" 
                            onChange={e => setExperience(e.target.value)}
                            /></div>
                        </div>
                    </div>                            
                    <div class="form-group">
                        <div className="row">
                            <div className="col-lg-12">
                                <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Resume</label>
                                </div>
                                <input 
                                className="form-control" 
                                type="file" 
                                id="profileResume" 
                                
                                />
                                </div>
                            </div>
                        </div>
                    </div>                            
                    <div class="form-group">
                        <div className="row">
                            <div className="col-lg-12">
                                <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Image</label>
                                </div>
                                <input 
                                className="form-control" 
                                type="file" 
                                id="profileImage"                                 
                                />
                                </div>
                            </div>
                        </div>
                    </div>                            
                    <div class="form-group">
                        <div className="row">
                            <div className="col-lg-12"><button type="submit" class="btn btn-success btn-lg btn-block"                            
                            onClick = {e => onSubmit(e)}
                            >{isLoading ? (<ReactLoading type={"bars"} color="#FFF" />) : "Add Staff"}</button></div>
                        </div>
                    </div>
                </form>                
            </div>
        </Main>
    );
}

export default AddStaffMember;
