import React, { useState, useEffect } from "react";

import * as firebase from "firebase";
import Main from "../../ReusableComponents/Main";

const SuggestAdmin = () => {
  const [data, setData] = useState([]);
  const getsuggesstions = async () => {
    setData([]);
    let dataRef = firebase.database().ref("suggestion");
    dataRef.on("value", (dataSnapshot) => {
      if (dataSnapshot.val()) {
        let result = Object.values(dataSnapshot.val());

        setData(result);
      }
    });
  };

  useEffect(() => {
    getsuggesstions();
  }, []);
  useEffect(() => {}, [data]);

  const card = () => {
    return data.map((c, i) => (
      <div>
        <div class="card col-12">
          <div class="card-body">
            <h5 class="card-title">{c.subject}</h5>
            <p class="card-text">{c.message}</p>
          </div>
        </div>
        <br />
        <br />
      </div>
    ));
  };

  return (
    <div>
      <Main isSlideShow={true}>
        <div>
          {card()} <br />
          <br />
        </div>
      </Main>
    </div>
  );
};

export default SuggestAdmin;
