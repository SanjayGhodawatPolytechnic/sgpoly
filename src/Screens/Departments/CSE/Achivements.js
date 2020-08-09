import React from 'react';
import Main from '../../../ReusableComponents/Main';
import DeptMenu from '../Reusables/DeptMenu';
import NavLinks from './NavLinks';
import { useState } from 'react';
import * as firebase from 'firebase'
import { useEffect } from 'react';

const Achivements = () => {

    const [data, setData] = useState([]);
    const [studentData, setStudentData] = useState([]);
    const [collegeData, setCollegeData] = useState([]);

    const getAllAchivements = () => {
        const dbRef = firebase.database().ref('achivements');
        dbRef.on("value", snapshot => {
            let result = Object.values(snapshot.val());
            let keys = Object.keys(snapshot.val());
            keys.forEach((v,i) => {
                result[i]["key"] = v;
            })

            let college = [];
            let student = [];

            result.forEach((d, i) => {
                if(d.category === "student") {
                    student.push(d);
                }else{
                    college.push(d);
                }
            })
            setStudentData(student);
            setCollegeData(college);
        })
    }

    useEffect(() => {
        getAllAchivements();
    },[])
    return (
        <Main className="container-lg">
            <div className="row">
                <DeptMenu dept="Computer Science" subMenu={NavLinks} />
                <div class="col-sm-8 col-lg-9 text-light">
                    <div data-spy="scroll" class="scrollspy-example z-depth-1 mt-4" data-target="#navbar-example3"
                    data-offset="0">
                        <div className="row">
                        <h4 className="col-12 text-center text-dark"><b>College Achivements</b></h4>
                            {collegeData.map((d,i) => (
                                <div className="col-lg-4 m-2" key={i}>
                                    <div class="card card-cascade wider">

                                    <div class="view view-cascade overlay">
                                    <img class="card-img-top" src={d.imageURL} alt="Card image cap" />
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                    </div>
                                
                                    <div class="card-body card-body-cascade text-center">
                                
                                    <h5 class="blue-text pb-2"><strong>{d.title}</strong></h5>
                                    <p class="card-text">{d.description} </p>
                                    <ul class="list-group list-group-flush m-1" style={{fontSize:13}}>
                                        <li class="list-group-item purple-gradient">Department: {d.dept}</li>
                                        <li class="list-group-item purple-gradient">Achived By: {d.category}</li>
                                        <li class="list-group-item purple-gradient">Achived on: {d.dateAchived}</li>
                                    </ul>
                                
                                    
                                    <a class="px-2 fa-lg tw-ic text-success mt-1" href={d.fileURL} target="blank"><i class="fas fa-file"></i></a>
                                    
                                
                                    </div>
                                
                                </div>
                            </div>
                            ))}
                        </div>
                        <div className="row">
                        <h4 className="col-12 text-center text-dark"><b>Student Achivements</b></h4>
                            {studentData.map((d,i) => (
                                <div className="col-lg-4 m-2" key={i}>
                                    <div class="card card-cascade wider">

                                    <div class="view view-cascade overlay">
                                    <img class="card-img-top" src={d.imageURL} alt="Card image cap" />
                                    <a href="#!">
                                        <div class="mask rgba-white-slight"></div>
                                    </a>
                                    </div>
                                
                                    <div class="card-body card-body-cascade text-center">
                                
                                    <h5 class="blue-text pb-2"><strong>{d.title}</strong></h5>
                                    <p class="card-text">{d.description} </p>
                                    <ul class="list-group list-group-flush m-1" style={{fontSize:13}}>
                                        <li class="list-group-item purple-gradient">Department: {d.dept}</li>
                                        <li class="list-group-item purple-gradient">Achived By: {d.category}</li>
                                        <li class="list-group-item purple-gradient">Achived on: {d.dateAchived}</li>
                                    </ul>
                                
                                    
                                    <a class="px-2 fa-lg tw-ic text-success mt-1" href={d.fileURL} target="blank"><i class="fas fa-file"></i></a>
                                    
                                
                                    </div>
                                
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
}

export default Achivements;
