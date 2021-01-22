import React, { useState, useEffect } from "react";

import * as firebase from "firebase";
import Main from "../../ReusableComponents/Main";

const Studpics = () => {
  const [data, setData] = useState([]);
  let dataref = firebase.database().ref("student_pics");

  const getstudpics = () => {
    dataref.on("value", (dataSnapshot) => {
      if (dataSnapshot.val()) {
        let result = Object.values(dataSnapshot.val());
        let keys = Object.keys(dataSnapshot.val());
        keys.forEach((d,i) => {
          result[i]['key'] = d;
        })
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


  useEffect(getstudpics(), []);

  const card = () => {
    return data.map((c, i) => (
      <div key={i}>
        <div className="card mb-3" style={{ maxwidth: "540px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={c.imageDownloadUrl} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{c.fullName}</h5>
                <p className="card-text">{c.department}</p>
                <p className="card-text">{c.year}</p>
                <p className="card-text">
                  {/*<small className="text-muted">Last updated 3 mins ago</small>*/}
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
