import React, { useState } from "react";
import Main from "../../ReusableComponents/Main";
import "./CSS/Form.css";
import * as firebse from "firebase";
import uuid from "react-native-uuid";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";

const AddStaffMember = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [expertise, setExpertise] = useState("");
  const [experience, setExperience] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    var el = document.getElementById("inputGroupSelect01");
    var des = el.options[el.selectedIndex].text;
    var dp = document.getElementById("inputGroupSelect02");
    var dept = dp.options[dp.selectedIndex].text;
    console.log(dept);
    let image = document.getElementById("profileImage").files[0];
    let resume = document.getElementById("profileResume").files[0];
    console.log(
      "NAME:",
      fullName,
      " EMAIL:",
      email,
      "DESIGNATION:",
      des,
      "QUALIFICATION:",
      qualification,
      "EXPERTISE:",
      expertise,
      "EXPERIENCE:",
      experience
    );

    const dbReference = firebse.database().ref("staff");
    const storageRef = firebse.storage().ref();
    var imageURL = "empty";
    var FileURL = "empty";
    if (image !== "") {
      const downloadUrl = await uploadImageAsync(image, storageRef);
      imageURL = downloadUrl;
    }
    if (resume !== "") {
      const downloadFileUrl = await uploadFileAsync(resume, storageRef);
      FileURL = downloadFileUrl;
    }

    var data = {
      fullName: fullName,
      designation: des,
      expertise: expertise,
      experience: experience,
      email: email,
      qualification: qualification,
      department: dept,
      imageDownloadUrl: imageURL,
      resumeDownloadUrl: FileURL,
      postedOn: firebse.database.ServerValue.TIMESTAMP,
    };

    await dbReference.push(data, (err) => {
      if (!err) {
        console.log("STAFF ADDED");
        setIsLoading(false);
        setIsSuccess(true);
      }
    });
  };

  const uploadImageAsync = async (image, storageRef) => {
    const ref = storageRef.child("staff-picture").child(uuid.v4());
    const snapshot = await ref.put(image);
    return await snapshot.ref.getDownloadURL();
  };

  const uploadFileAsync = async (file, storageRef) => {
    const ref = storageRef.child("files").child(uuid.v4());
    const snapshot = await ref.put(file);
    return await snapshot.ref.getDownloadURL();
  };

  const SuccessMessage = () => {
    return (
      <div className="alert alert-success text-center">
        <h4>Added Successfully</h4>
      </div>
    );
  };

  return (
    <Main className="container-lg bg-dark roundedd border border-light">
      <div className="signup-form">
        <form action="/examples/actions/confirmation.php" method="post">
          <Link to="/admin">
            <button className="btn btn-outline-info">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-house-door-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z" />
                <path
                  fill-rule="evenodd"
                  d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
              </svg>
            </button>
          </Link>
          <h2>Add Staff</h2>
          <p className="hint-text">
            Add a staff member and following details are compulsory
          </p>
          <div className="form-group">
            <div className="row">
              <div className="col-lg-12">{isSuccess && <SuccessMessage />}</div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-lg-12">
                <input
                  type="text"
                  className="form-control"
                  name="full_name"
                  placeholder="Full Name with title"
                  required="required"
                  onChange={(e) => {
                    setFullName(e.target.value);
                    console.log(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-lg-12">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label className="input-group-text" for="inputGroupSelect01">
                      Designation
                    </label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect01">
                    <option value="0">Choose...</option>
                    <option value="1">HOD</option>
                    <option value="2">Lecturer</option>
                    <option value="3">Lab Assistant</option>
                    <option value="4">Office Superintendent</option>
                    <option value="5">Graphics Designer</option>
                    <option value="6">Clerk</option>
                    <option value="7">Jr. Clerk</option>
                    <option value="8">Senior Accountant</option>
                    <option value="9">Account Assistant</option>
                    <option value="10">Account Clerk</option>
                    <option value="11">Doctor</option>
                    <option value="12">Librarian</option>
                    <option value="13">Library Assistant</option>
                    <option value="14">Jr. Clerk</option>
                    <option value="14"></option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-lg-12">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label className="input-group-text" for="inputGroupSelect01">
                      Department
                    </label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect02">
                    <option value="0">Choose...</option>
                    <option value="1">Computer Science</option>
                    <option value="2">Mechanical</option>
                    <option value="3">E &amp; TC</option>
                    <option value="4">Civil</option>
                    <option value="5">Electrical</option>
                    <option value="6">Basic Science &amp; Humanities</option>
                    <option value="7">Library</option>
                    <option value="8">Administrative</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-lg-12">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  required="required"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-lg-12">
                <input
                  type="text"
                  className="form-control"
                  name="qualification"
                  placeholder="Qualification"
                  required="required"
                  onChange={(e) => setQualification(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-lg-12">
                <input
                  type="text"
                  className="form-control"
                  name="areaofexpertise"
                  placeholder="Area of Expertise"
                  required="required"
                  onChange={(e) => setExpertise(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-lg-12">
                <input
                  type="text"
                  className="form-control"
                  name="experience"
                  placeholder="Experience"
                  required="required"
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-lg-12">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label className="input-group-text" for="inputGroupSelect01">
                      Resume
                    </label>
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
          <div className="form-group">
            <div className="row">
              <div className="col-lg-12">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label className="input-group-text" for="inputGroupSelect01">
                      Image
                    </label>
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
          <div className="form-group">
            <div className="row">
              <div className="col-lg-12">
                <button
                  type="submit"
                  className="btn btn-success btn-lg btn-block"
                  onClick={(e) => onSubmit(e)}
                >
                  {isLoading ? (
                    <ReactLoading type={"bars"} color="#FFF" />
                  ) : (
                    "Add Staff"
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Main>
  );
};

export default AddStaffMember;
