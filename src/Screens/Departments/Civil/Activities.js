import React, { useState } from "react";
import Main from "../../../ReusableComponents/Main";
import ActivityCard from "../Reusables/ActivityCard";
import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./Navlinks";
import * as firebase from "firebase";
import { useEffect } from "react";

const CivilActivities = () => {
  const [dataWithoutFiles, setDataWithoutFiles] = useState([]);
  const [dataWithFiles, setDataWithFiles] = useState([]);

  const getAllActivities = () => {
    const dbRef = firebase.database().ref("activities");

    //vanila data
    dbRef.child("withoutfiles").on("value", (snapshot) => {
      let resultWithoutFiles = Object.values(snapshot.val());
      let keys = Object.keys(snapshot.val());
      keys.forEach((v, i) => {
        resultWithoutFiles[i]["key"] = v;
      });
      resultWithoutFiles = resultWithoutFiles.filter(
        (val) => val.dept === "CSE"
      );
      console.log(resultWithoutFiles);
      setDataWithoutFiles(resultWithoutFiles);
    });

    //complex data
    dbRef.child("withFiles").on("value", (snapshot) => {
      let resultWithFiles = Object.values(snapshot.val());
      let keys = Object.keys(snapshot.val());
      keys.forEach((v, i) => {
        resultWithFiles[i]["key"] = v;
      });
      resultWithFiles = resultWithFiles.filter((val) => val.dept === "CSE");
      console.log(resultWithFiles);
      setDataWithFiles(resultWithFiles);
    });
  };

  useEffect(() => {
    getAllActivities();
  }, []);

  return (
    <Main className="container-lg">
      <div className="row">
        <DeptMenu dept="Civil" subMenu={NavLinks} />
        <div className="col-sm-8 col-lg-9 text-light">
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <h4 className="col-12 text-center text-dark bg-success">
              <b>Activities</b>
            </h4>
            {dataWithFiles.map((val, idx) => (
              <ActivityCard
                key={idx}
                title={val.title}
                description={val.description}
                date={val.date}
                duration={val.duration}
                dept={val.dept}
                type={val.type}
                organizedFor={val.category}
                fileURL={val.fileURL}
                imageURLS={val.imagesURLs}
              />
            ))}
            {dataWithoutFiles.map((val, idx) => (
              <ActivityCard
                key={idx}
                title={val.title}
                description={val.description}
                date={val.date}
                duration={val.duration}
                dept={val.dept}
                type={val.type}
                organizedFor={val.category}
              />
            ))}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default CivilActivities;