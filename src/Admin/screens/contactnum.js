import React, { useState, useEffect } from "react";

import * as firebase from "firebase";
import Main from "../../ReusableComponents/Main";

const ContactNumber = () => {
  const [data, setData] = useState([]);
  const getcontact = async () => {
    setData([]);
    let dataRef = firebase.database().ref("contact");
    dataRef.on("value", (dataSnapshot) => {
      if (dataSnapshot.val()) {
        let result = Object.values(dataSnapshot.val());

        setData(result);
      }
    });
  };

  useEffect(() => {
    getcontact();
  }, []);
  useEffect(() => {}, [data]);

  const card = () => {
    return data.map((c, i) => (
      <div>
        <div class="card col-12">
          <div class="card-body">
            <h5 class="card-title">{c.phno}</h5>
            <p class="card-text">{c.name}</p>
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

export default ContactNumber;
