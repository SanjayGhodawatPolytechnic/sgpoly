import React, { useState, useEffect } from "react";

import * as firebase from "firebase";
import Main from "../../ReusableComponents/Main";

const Studpics = () => {
  const [data, setData] = useState([]);
  let dataref = firebase.database().ref("student_pics");

  const getstudpics = () => {
    setData([]);
    dataref.on("value", (dataSnapshot) => {
      if (dataSnapshot.val()) {
        let result = Object.values(dataSnapshot.val());
        let keys = Object.keys(dataSnapshot.val());
        keys.forEach((d,i) => {
          result[i]['key'] = d;
        })
        //console.log(result);
        setData(result);
      }
    });
  };

  const picDelete = async (e, c, i) => {
    e.preventDefault();
    const dbRef = firebase.database().ref("student_pics");
    const storageRefToMedia = firebase.storage().ref("studentpics");

    await storageRefToMedia.child(c.mediaName).delete().then(async () => {
      await dbRef.child(c.key).remove().then(() => {
        getstudpics();
      })
    })

    
  };


  useEffect(() => {
    getstudpics();
  }, []);

  useEffect(() => {}, [data]);

  const card = () => {
    return data.map((c, i) => (
      <div key={i}>
        <div class="card mb-3" style={{ maxwidth: "540px" }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={c.imageDownloadUrl} class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{c.fullName}</h5>
                <p class="card-text">{c.department}</p>
                <p class="card-text">{c.year}</p>
                <p class="card-text">
                  {/*<small class="text-muted">Last updated 3 mins ago</small>*/}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={(e) => picDelete(e, c, i)}
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <Main isSlideShow={true}>
        <div>
          {card()} <br /> <br />
        </div>
      </Main>
    </div>
  );
};

export default Studpics;
