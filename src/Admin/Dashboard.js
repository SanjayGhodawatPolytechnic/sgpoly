import React from "react";
import { useEffect } from "react";

//loader import
import { CommonLoading } from "react-loadingg";

//uuid import
import uuid from "react-native-uuid";

//import firebase
import * as firebase from "firebase";
import { Redirect, Link } from "react-router-dom";
import { useState } from "react";
import Main from "../ReusableComponents/Main";
import UpdatesCard from "./UpdatesCard";

//loader import
import { CircleToBlockLoading, WindMillLoading } from "react-loadingg";

const Dashboard = () => {
  var imageuid = "";
  var fileuid = "";
  const [didRedirect, setDidRedirect] = useState(false);
  const [screens, setScreens] = useState({
    isNewNews: false,
    isListAll: false,
  });
  const [reload, setReload] = useState(false);
  const [value, setValue] = useState({
    title: "",
    description: "",
    image: "",
  });

  const [updates, setUpdates] = useState([]);
  const [isListEmpty, setIsListEmpty] = useState(false);
  const [isListLoading, setIsListLoading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [isAdderLoading, setIsAdderLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authenticated) => {
      if (authenticated) {
        setDidRedirect(false);
      } else {
        setDidRedirect(true);
      }
    });
    firebase
      .database()
      .ref()
      .on("child_changed", (snapshot) => {
        setReload(!reload);
      });
  }, []);

  const onSubmit = async () => {
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    const image = document.getElementById("image").files[0];
    const file = document.getElementById("file").files[0]
      ? document.getElementById("file").files[0]
      : "";
    setValue({
      ...value,
      image,
      title,
      description,
    });
    setIsAdderLoading(true);
    const dbReference = firebase.database().ref("updates");
    const storageRef = firebase.storage().ref();
    var url = "empty";
    var url2 = "empty";
    if (image !== "") {
      const downloadUrl = await uploadImageAsync(image, storageRef);
      url = downloadUrl;
    }
    if (file !== "") {
      const downloadFileUrl = await uploadFileAsync(file, storageRef);
      url2 = downloadFileUrl;
    }

    var contact = {
      title: title,
      description: description,
      imageDownloadUrl: url,
      fileDownloadUrl: url2,
      pdfname: fileuid,
      imgname: imageuid,
      postedOn: firebase.database.ServerValue.TIMESTAMP,
    };
    await dbReference.push(contact, (err) => {
      if (!err) {
        console.log("SUCCESS");
        setIsAdderLoading(false);
        setIsSuccess(true);
      }
    });
  };

  const uploadImageAsync = async (image, storageRef) => {
    var imguuid = uuid.v4();
    const ref = storageRef.child("images").child(imguuid);
    const snapshot = await ref.put(image);
    imageuid = imguuid;
    return await snapshot.ref.getDownloadURL();
  };

  const uploadFileAsync = async (file, storageRef) => {
    var fuuid = uuid.v4();
    const ref = storageRef.child("files").child(fuuid);
    const snapshot = await ref.put(file);
    fileuid = fuuid;
    return await snapshot.ref.getDownloadURL();
  };

  const PerformRedirect = () => {
    return <Redirect to="/admin/signin" />;
  };

  const SignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => setDidRedirect(true))
      .catch((err) => console.log(err));
  };

  const getAllUpdates = async () => {
    setScreens({ ...screens, isListAll: true, isNewNews: false });
    setIsListLoading(true);
    setIsImageLoading(true);

    const updatesRef = firebase.database().ref("updates");
    await updatesRef.on("value", (datasnapshot) => {
      if (datasnapshot.val()) {
        let result = Object.values(datasnapshot.val());
        let contactKey = Object.keys(datasnapshot.val());
        contactKey.forEach((value, key) => {
          result[key]["key"] = value;
        });
        updates.push(result);
        setUpdates(updates[0]);
        setIsListEmpty(false);
      } else {
        setIsListEmpty(true);
      }
      setIsImageLoading(false);
      setIsListLoading(false);
    });
  };

  const ItemsLoader = () => {
    return (
      <div className="container mt-10">
        <WindMillLoading />
      </div>
    );
  };

  const SuccessMessage = () => {
    return (
      <div className="alert alert-success text-center">
        <h4>Added Successfully</h4>
      </div>
    );
  };

  const AddNews = () => {
    return (
      <div className="jumbotron">
        {isSuccess && <SuccessMessage />}
        <h1 className="display-4">Add Updates</h1>
        <form>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                id="title"
              />
            </div>
            <div className="col">
              <textarea
                type="text"
                className="form-control"
                placeholder="Description"
                id="description"
              />
            </div>
          </div>
          <div className="col-12">
            <label>Select Image:</label>
            <input
              type="file"
              className="form-control"
              id="image"
              placeholder="Choose image"
            />
          </div>
          <div className="col-12">
            <label>Select File:</label>
            <input
              type="file"
              className="form-control"
              id="file"
              placeholder="Choose image"
            />
          </div>
          <div className="col-12">{isAdderLoading && <CommonLoading />}</div>
          <button
            className="btn btn-lg btn-success btn-block text-uppercase"
            onClick={onSubmit}
          >
            Add
          </button>
        </form>
      </div>
    );
  };

  const ListAllNews = () => {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4">All Updates</h1>
          <p className="lead">
            Here you get all list of updates you posted and can delete them.
          </p>
          <hr className="my-4"></hr>
          {updates.map((data, index) => (
            <UpdatesCard
              reload={reload}
              setReload={setReload}
              getAllUpdates={getAllUpdates}
              data={data}
              title={data.title}
              description={data.description}
              image={data.imageDownloadUrl}
              key={index}
              loading={isImageLoading}
              k={data.key}
            />
          ))}
        </div>
        {isListLoading && ItemsLoader()}
      </div>
    );
  };

  const LeftAdminPanel = () => {
    return (
      <div className="card w-100">
        <h4 className="card-header bg-dark text-white">Admin Panel</h4>
        <ul className="list-group w-100">
          <li
            className="btn btn-success rounded-pill"
            onClick={() =>
              setScreens({ ...screens, isListAll: false, isNewNews: true })
            }
          >
            New News
          </li>
          <li
            className="btn btn-success rounded-pill"
            onClick={() => getAllUpdates()}
          >
            List All News
          </li>
          <Link to="/admin/add/staff" className="btn btn-success rounded-pill">
            <li>Add Staff Member</li>
          </Link>
          <Link to="/admin/add/story" className="btn btn-success rounded-pill">
            <li>Add New Story</li>
          </Link>
          <Link
            to="/admin/manage/highlights"
            className="btn btn-success rounded-pill"
          >
            <li>Manage Story</li>
          </Link>
          <Link
            to="/admin/manage/achivements"
            className="btn btn-success rounded-pill"
          >
            <li>Manage Achivements</li>
          </Link>
          <Link to="/admin/suggest" className="btn btn-success rounded-pill">
            <li>Suggestions</li>
          </Link>
          <Link to="/admin/contact" className="btn btn-success rounded-pill">
            <li>Contact details</li>
          </Link>
          <li
            className="btn btn-success rounded-pill"
            onClick={(e) => SignOut()}
          >
            Sign out <i className="fa fa-sign-out" aria-hidden="true"></i>
          </li>
        </ul>
      </div>
    );
  };

  const Placeholder = () => (
    <div
      className="container"
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div className="text-center" style={{ fontSize: 80 }}>
        <i class="fas fa-house-user"></i>
      </div>
      <div className="text-center" style={{ fontSize: 30 }}>
        Admin Dashboard
      </div>
    </div>
  );

  const RightAdminPanel = () => {
    return (
      <div>
        {screens.isNewNews && AddNews()}
        {screens.isListAll && ListAllNews()}
        {!screens.isListAll && !screens.isNewNews && Placeholder()}
      </div>
    );
  };

  const AdminPanel = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <LeftAdminPanel />
          </div>
          <div className="col-8">
            <RightAdminPanel />
          </div>
        </div>
      </div>
    );
  };

  return (
    <Main>
      <div>
        {didRedirect && PerformRedirect()}
        <AdminPanel />
      </div>
    </Main>
  );
};

export default Dashboard;
