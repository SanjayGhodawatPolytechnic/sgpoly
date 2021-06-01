import React, { useState } from "react";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./NavLinks";
import StaffCard from "../Reusables/StaffCard";
import { useEffect } from "react";
import * as firebase from "firebase";
import { CommonLoading } from "react-loadingg";

const LibraryTeam = () => {
  const [faculty, setFaculty] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getStaff = async () => {
    setIsLoading(true);
    const dbRef = firebase.database().ref("staff");
    dbRef.on("value", (datasnapshot) => {
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
          if (v.department === "Library") {
            allStaff.push(v);
          }
        });
        // console.log(allStaff)
        // console.log(hod)
        setFaculty(allStaff);
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    getStaff();
  }, []);

  return (
    <Main className="container-lg w-100 m-2 p-0">
      <div className="row deptcont">
        <DeptMenu dept="Library" subMenu={NavLinks} />
        <div className="col text-dark w-100">
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-0"
            data-target="#navbar-example3"
            data-offset="0"
          >
            {isLoading && <CommonLoading />}
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

export default LibraryTeam;
