import React, { useState } from "react";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./Nav";
import StaffCard from "../Reusables/StaffCard";
import { useEffect } from "react";
import * as firebase from "firebase";
import { CommonLoading } from "react-loadingg";

const MechanicalStaffProfile = () => {
  const [faculty, setFaculty] = useState([]);
  const [Hod, setHod] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getStaff = async () => {
    setIsLoading(true);
    const dbRef = firebase.database().ref("staff");
    await dbRef.on("value", (datasnapshot) => {
      if (datasnapshot.val()) {
        let staff = Object.values(datasnapshot.val());
        let keys = Object.keys(datasnapshot.val());

        keys.forEach((v, i) => {
          staff[i]["key"] = v;
        });

        //console.log(staff)
        let hod = {};
        let allStaff = [];
        staff.forEach((v, i) => {
          if (v.department === "Civil") {
            if (v.designation === "HOD") {
              hod = v;
            } else if (v.designation !== "Lab Assistant") {
              allStaff.push(v);
            }
          }
        });
        // console.log(allStaff)
        // console.log(hod)
        setFaculty(allStaff);
        setHod(hod);
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    getStaff();
  }, []);

  // useEffect(() => {
  //     console.log(Hod)
  // }, [Hod])
  // useEffect(() => {
  //     console.log(faculty)
  // }, [faculty])
  return (
    <Main className="container-lg">
      <div class="row">
        <DeptMenu dept="Mechanical" subMenu={NavLinks} />
        <div class="col-sm-8 col-lg-9">
          <div
            data-spy="scroll"
            class="scrollspy-example z-depth-1 mt-4"
            data-target="#navbar-example3"
            data-offset="0"
          >
            {isLoading && <CommonLoading />}
            {Hod.designation ? (
              <StaffCard
                name={Hod.fullName}
                resumeURL={Hod.resumeDownloadUrl}
                experience={Hod.experience}
                designation={Hod.designation}
                areaOfEpertise={Hod.expertise}
                emailId={Hod.email}
                imageURL={Hod.imageDownloadUrl}
                qualification={Hod.qualification}
              />
            ) : (
              ""
            )}
            {faculty.map((v, i) => (
              <StaffCard
                key={i}
                name={v.fullName}
                resumeURL={v.resumeDownloadUrl}
                experience={v.experience}
                designation={v.designation}
                areaOfEpertise={v.expertise}
                emailId={v.email}
                imageURL={v.imageDownloadUrl}
                qualification={v.qualification}
              />
            ))}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default MechanicalStaffProfile;
