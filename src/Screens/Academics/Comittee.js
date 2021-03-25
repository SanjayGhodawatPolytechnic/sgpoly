import React from "react";
import Main from "../../ReusableComponents/Main";

import * as firebase from "firebase";
import { useState } from "react";
import { useEffect } from "react";
import CommitteeMenu from "./Menus/CommitteeMenu";
import NavLinks from "./Menus/CommitteeNavLinks";

const Comittee = () => {
  const [data, setData] = useState(null);

  const getComittee = () => {
    const dbref = firebase.database().ref("committees");
    dbref.on("value", (datasnapshot) => {
      if (datasnapshot.val()) {
        let result = Object.values(datasnapshot.val());
        // console.log(result[0].committeeMembers);
        var finalData;
        result.forEach((d,i) => {
          if(d.committeeName === "Anti Ragging Committee"){
            finalData = d;
          }
        })

        setData(finalData);
      }
    });
  };
  useEffect(() => {
    getComittee();
  }, []);

  return (
    <Main isSlideShow={true}>
      <div class="row">
            
            <CommitteeMenu title="Committees" subMenu={NavLinks} />
            <div class="col-sm-8 col-lg-9 text-light">
                <div data-spy="scroll" class="scrollspy-example z-depth-1 mt-4" data-target="#navbar-example3"
                data-offset="0">
      <br />
      <br />

      <div>
        <div class="card m-2">
          {/* <div class="card-header">Anti Ragging Committee</div> */}
          <div class="card-body">
            <h5 class="card-title">{data && data.committeeName}</h5>
            <p class="card-text">
              The {data && data.committeeName} is constituted for the academic year{" "}
              {data && data.year}. The members of the committee are as follows -
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
                {data && data.committeeMembers.map((d, i) => (
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
      </div>
      </div>
      </div>
    </Main>
  );
};

export default Comittee;
