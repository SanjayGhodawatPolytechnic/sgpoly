import React from "react";
import Main from "../../ReusableComponents/Main";
import "./Admission.css";

const Admission = () => {
  return (
    <Main>
      <div className="bgccc">
        <form action className="form ">
          <p className="field required">
            <label className="label required" htmlFor="name">
              Full name
            </label>
            <input
              className="text-input"
              id="name"
              name="name"
              required
              type="text"
              defaultValue=""
            />
          </p>
          <p className="field required half">
            <label className="label" htmlFor="email">
              E-mail
            </label>
            <input
              className="text-input"
              id="email"
              name="email"
              required
              type="email"
            />
          </p>
          <p className="field required half">
            <label className="label" htmlFor="phone">
              Phone
            </label>
            <input
              className="text-input"
              id="phone"
              name="phone"
              type="phone"
              required
            />
          </p>
          <p className="field">
            <label className="label required" htmlFor="about">
              Address
            </label>
            <textarea
              className="textarea"
              cols={50}
              id="about"
              name="about"
              rows={4}
              defaultValue={""}
              required
            />
          </p>

          <div className="field">
            <label className="label">Intrested Branch</label>
            <ul className="checkboxes">
              <li className="checkbox">
                <input
                  className="checkbox-input"
                  id="choice-0"
                  name="choice"
                  type="checkbox"
                  defaultValue={0}
                />
                <label className="checkbox-label" htmlFor="choice-0">
                  Civil
                </label>
              </li>
              <li className="checkbox">
                <input
                  className="checkbox-input"
                  id="choice-1"
                  name="choice"
                  type="checkbox"
                  defaultValue={1}
                />
                <label className="checkbox-label" htmlFor="choice-1">
                  Mechanical
                </label>
              </li>
              <li className="checkbox">
                <input
                  className="checkbox-input"
                  id="choice-2"
                  name="choice"
                  type="checkbox"
                  defaultValue={2}
                />
                <label className="checkbox-label" htmlFor="choice-2">
                  Computer Science
                </label>
              </li>
              <li className="checkbox">
                <input
                  className="checkbox-input"
                  id="choice-3"
                  name="choice"
                  type="checkbox"
                  defaultValue={3}
                />
                <label className="checkbox-label" htmlFor="choice-3">
                  Electronics and Tele.
                </label>
              </li>
              <li className="checkbox">
                <input
                  className="checkbox-input"
                  id="choice-4"
                  name="choice"
                  type="checkbox"
                  defaultValue={4}
                />
                <label className="checkbox-label" htmlFor="choice-4">
                  Electrical
                </label>
              </li>
            </ul>
          </div>
          <div className="field">
            <label className="label">Caste</label>
            <ul className="options">
              <li className="option">
                <input
                  className="option-input"
                  id="option-0"
                  name="option"
                  type="radio"
                  defaultValue={0}
                />
                <label className="option-label" htmlFor="option-0">
                  SC
                </label>
              </li>
              <li className="option">
                <input
                  className="option-input"
                  id="option-1"
                  name="option"
                  type="radio"
                  defaultValue={1}
                />
                <label className="option-label" htmlFor="option-1">
                  ST
                </label>
              </li>
              <li className="option">
                <input
                  className="option-input"
                  id="option-2"
                  name="option"
                  type="radio"
                  defaultValue={2}
                />
                <label className="option-label" htmlFor="option-2">
                  OBC
                </label>
              </li>
              <li className="option">
                <input
                  className="option-input"
                  id="option-3"
                  name="option"
                  type="radio"
                  defaultValue={3}
                />
                <label className="option-label" htmlFor="option-3">
                  SBC
                </label>
              </li>
              <li className="option">
                <input
                  className="option-input"
                  id="option-4"
                  name="option"
                  type="radio"
                  defaultValue={4}
                />
                <label className="option-label" htmlFor="option-4">
                  Open
                </label>
              </li>
              <li className="option">
                <input
                  className="option-input"
                  id="option-5"
                  name="option"
                  type="radio"
                  defaultValue={5}
                />
                <label className="option-label" htmlFor="option-5">
                  Other
                </label>
              </li>
            </ul>
          </div>
          <p className="field  half">
            <label className="label" htmlFor="10thmarks">
              10th Marks
            </label>
            <input
              className="text-input"
              id="marks10"
              name="marks10"
              type="number"
            />
          </p>
          <p className="field half">
            <label className="label" htmlFor="12thmarks">
              12th Marks
            </label>
            <input
              className="text-input"
              id="marks12"
              name="marks12"
              type="number"
            />
          </p>

          <p className="field half">
            <input className="button" type="submit" defaultValue="Send" />
          </p>
        </form>
      </div>
    </Main>
  );
};

export default Admission;
