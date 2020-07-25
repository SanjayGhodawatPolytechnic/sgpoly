import React, { useState } from "react";
import Main from "../../ReusableComponents/Main";
import * as firebase from "firebase";
import { Link } from "react-router-dom";
import "./CSS/Contact.css";

const AddContact = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    var name = document.querySelector("#contactName").value;

    var phno = document.querySelector("#contactNumber").value;

    const dbReference = firebase.database().ref("contact");

    var data = {
      name: name,
      phno: phno,
    };

    await dbReference.push(data, (err) => {
      if (!err) {
        console.log("LOL");
      }
    });
  };

  return (
    <div>
      <Main isSlideShow={true}>
        <div className="contact rounded border border-light">
          <div className="row">
            <div className="col-md-3">
              <div className="contact-info">
                <img
                  src="https://image.ibb.co/kUASdV/contact-image.png"
                  alt="image"
                />
                <h2>Contact Us</h2>
                <h4>We will reach you as soon as possible</h4>
              </div>
            </div>
            <div className="col-md-9">
              <div className="contact-form">
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="fname">
                    Name:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="contactName"
                      placeholder="Name"
                      name="fname"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="comment">
                    Phone No.
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="number"
                      className="form-control"
                      id="contactNumber"
                      placeholder="Phone Number"
                      name="fname"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button
                      type="submit"
                      className="btn btn-default"
                      onClick={(e) => {
                        onSubmit(e);
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Main>
    </div>
  );
};

export default AddContact;
