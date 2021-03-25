import React from "react";
import Main from "../../ReusableComponents/Main";

import * as firebase from "firebase";
import { useState } from "react";
import { useEffect } from "react";
import { result } from "lodash";

const Comittee = () => {
  const [data, setData] = useState([]);

  const getComittee = () => {
    const dbref = firebase.database().ref("committees");
    dbref.on("value", (datasnapshot) => {
      if (datasnapshot.val()) {
        let result = Object.values(datasnapshot.val());
        console.log(result[0].committeeMembers);
        setData(result[0].committeeMembers);
      }
    });
  };
  useEffect(() => {
    getComittee();
  }, []);

  return (
    <Main isSlideShow={true}>
      <br />
      <br />

      <div>
        <div class="card m-2">
          {/* <div class="card-header">Anti Ragging Committee</div> */}
          <div class="card-body">
            <h5 class="card-title">Anti Ragging Committee</h5>
            <p class="card-text">
              The Anti Ragging Committee is constituted for the academic year
              2018-19. The members of the committee are as follows -
            </p>

            <table class="table table-bordered m-2">
              <thead>
                <tr>
                  <th scope="col">Sr no.</th>
                  <th scope="col">Name of the Person</th>
                  <th scope="col">Post</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, i) => (
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{d.name}</td>
                    <td>{d.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Comittee;
