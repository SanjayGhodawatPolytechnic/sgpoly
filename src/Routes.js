import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import LocationMap from "./Screens/Contact/Map";
import aboutLogo from "./Screens/About/logo";
import aboutSGP from "./Screens/About/sgp";
import aboutPhilosophy from "./Screens/About/philosophy";
import aboutVision from "./Screens/About/vision";
import aboutQuality from "./Screens/About/quality";
import aboutAffCert from "./Screens/About/affiliation";
import aboutDifferentiator from "./Screens/About/differentiator";
import aboutAchievement from "./Screens/About/achievement";
import managementTrust from "./Screens/Management/trust";
import managementPrincipal from "./Screens/Management/principal";
import managementBoard from "./Screens/Management/board";
import managementChairman from "./Screens/Management/chairman";
import managementDirectors from "./Screens/Management/directors";
import managementGovern from "./Screens/Management/govern";
import infrastructureAbout from "./Screens/Infrastructure/about";
import classroom from "./Screens/Infrastructure/classroom";
import Overview from "./Screens/Infrastructure/Overview";
import workshop from "./Screens/Infrastructure/workshop";
import auditorium from "./Screens/Infrastructure/auditorium";
import foodcourt from "./Screens/Infrastructure/foodcourt";
import conference from "./Screens/Infrastructure/conference";
import amphi from "./Screens/Infrastructure/amphi";
import hostel from "./Screens/Facilities/hostel";
import laboratories from "./Screens/Facilities/laboratories";
import gymnasium from "./Screens/Facilities/gymnasium";
import pool from "./Screens/Facilities/pool";
import ground from "./Screens/Facilities/ground";
import tennis from "./Screens/Facilities/tennis";
import more from "./Screens/Facilities/more";
import * as firebase from "firebase";
import Activities from "./Screens/Departments/CSE/Activities";
import SocialResponsiblities from "./Screens/About/SocialResponsiblities";
import ImageGal from "./Screens/About/components/ImageGallery";
import MoreUpdates from "./ReusableComponents/MoreUpdates";
import secretary from "./Screens/Management/secretary";
import trustee from "./Screens/Management/trustee";
import StudentHome from "./Screens/Student/home";
import ComputerScience from "./Screens/Departments/CSE/ComputerScience";
import HODDesk from "./Screens/Departments/CSE/HODDesk";
import VisionMission from "./Screens/Departments/CSE/VisionMission";
import Outcomes from "./Screens/Departments/CSE/Outcomes";
import StaffProfile from "./Screens/Departments/CSE/StaffProfile";
import TechnicalStaff from "./Screens/Departments/CSE/TechnicalStaff";
import Suggest from "./Screens/Extra/Suggest";
import Laboratories from "./Screens/Departments/CSE/Laboratories";
import Uploadimage from "./Screens/Student/uploadimage";
import Achivements from "./Screens/Departments/CSE/Achivements";
import ElectronicsNTC from "./Screens/Departments/ETC/ElectronicsNTC"
import ETCHODDesk from "./Screens/Departments/ETC/ETCHODDesk";
import ETCVisionMission from "./Screens/Departments/ETC/ETCVisionMission";
import ETCOutcomes from "./Screens/Departments/ETC/ETCOutcomes";
import { useState } from "react";
import "./Routes.css"
import img from "./ReusableComponents/CSS/sguni.jpg"
import AboutActivities from "./Screens/About/Activities";
import ETCStaffProfile from "./Screens/Departments/ETC/ETCStaffProfile";
import ETCTechStaff from "./Screens/Departments/ETC/ETCTechStaff";
import Mechanical from "./Screens/Departments/MECH/Mechanical";
import MechHODDesk from "./Screens/Departments/MECH/MechHODDesk";
import AcademicCalender from "./Screens/Departments/CSE/AcademicCalender";
import NotFound from "./ReusableComponents/NotFound";
import AddContact from "./Screens/Contact/Contact";
import AcademicCalendars from "./Screens/Academics/Academic Calendar/AcademicCalendars";
var firebaseConfig = {
  apiKey: "AIzaSyDVeLkjATQjtXIflpTDeiXm_aF1Zhi2JeY",
  authDomain: "sgpoly-86d3b.firebaseapp.com",
  databaseURL: "https://sgpoly-86d3b.firebaseio.com",
  projectId: "sgpoly-86d3b",
  storageBucket: "sgpoly-86d3b.appspot.com",
  messagingSenderId: "458948463598",
  appId: "1:458948463598:web:f208ec769aef51d6a01cff",
  measurementId: "G-87WB112H7S",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const Routes = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)

  const closeModal = () => {
    setIsModalOpen(false);
  }
  
  return (
    <BrowserRouter>
          <div className={isModalOpen ? "modal" : "modal closed-modal"} id="modal" onClick={e => {
            setIsModalOpen(false)
          }}>
            <div class="modal-content" onClick={e => {
              e.stopPropagation();
            }}>
              
            <div className="close-btn" onClick={closeModal}><i aria-hidden="true" className="fas fa-times-circle fa-2x"></i></div>
              <img src={img} alt="modal" className="modal-img img-fluid" />
            </div>
          </div>
      <Switch>
        <Route path="/" exact component={Home} />


        {/* =================================Student routes=============================== */}
        <Route path="/students" exact component={StudentHome} />
        <Route path="/students/uploadimage" exact component={Uploadimage} />
        <Route path="/suggest" exact component={Suggest} />

        {/* --------------------About------------------------------------------------*/}
        <Route path="/about/logo" exact component={aboutLogo} />
        <Route path="/about/sgp" exact component={aboutSGP} />
        <Route path="/about/philosophy" exact component={aboutPhilosophy} />
        <Route path="/about/vision" exact component={aboutVision} />
        <Route path="/about/quality" exact component={aboutQuality} />
        <Route path="/about/Affiliation" exact component={aboutAffCert} />
        <Route
          path="/about/differentiator"
          exact
          component={aboutDifferentiator}
        />
        <Route path="/about/achievements" exact component={aboutAchievement} />
        <Route path="/about/activities" exact component={AboutActivities} />
        <Route
          path="/about/socialresponsiblities"
          exact
          component={SocialResponsiblities}
        />

        {/* --------------------Management------------------------------------------------*/}

        <Route path="/management/trust" exact component={managementTrust} />
        <Route path="/management/board" exact component={managementBoard} />
        <Route
          path="/management/chairman"
          exact
          component={managementChairman}
        />
        <Route path="/management/secretary" exact component={secretary} />
        <Route path="/management/trustee" exact component={trustee} />
        <Route
          path="/management/principal"
          exact
          component={managementPrincipal}
        />
        <Route
          path="/management/directors"
          exact
          component={managementDirectors}
        />
        <Route path="/management/govern" exact component={managementGovern} />

        {/* --------------------Academics------------------------------------------------*/}
        <Route path="/academics/calendars" exact component={AcademicCalendars} />
        



        {/* --------------------Departments------------------------------------------------*/}
        {/* --------------------CSE------------------------------------------------*/}


        <Route path="/department/cse" exact component={ComputerScience} />
        <Route path="/department/cse/hoddesk" exact component={HODDesk} />
        <Route
          path="/department/cse/vision-mission"
          exact
          component={VisionMission}
        />
        <Route path="/department/cse/outcomes" exact component={Outcomes} />
        <Route
          path="/department/cse/teaching-staff"
          exact
          component={StaffProfile}
        />
        <Route
          path="/department/cse/technical-staff"
          exact
          component={TechnicalStaff}
        />
        <Route path="/department/cse/labs" exact component={Laboratories} />
        <Route path="/department/cse/achivements" exact component={Achivements} />
        <Route path="/department/cse/activities" exact component={Activities} />
        <Route path="/department/cse/academic-calender" exact component={AcademicCalender} />

        
        {/* --------------------E & TC------------------------------------------------*/}
        <Route path="/department/entc" exact component={ElectronicsNTC} />
        <Route path="/department/entc/hoddesk" exact component={ETCHODDesk} />
        <Route path="/department/entc/vision-mission" exact component={ETCVisionMission} />
        <Route path="/department/entc/outcomes" exact component={ETCOutcomes} />
        <Route path="/department/entc/teaching-staff" exact component={ETCStaffProfile} />
        <Route path="/department/entc/teacnical-staff" exact component={ETCTechStaff} />

        {/* --------------------MECH------------------------------------------------*/}
        <Route path="/department/mech" exact component={Mechanical} />
        <Route path="/department/mech/hoddesk" exact component={MechHODDesk} />
        
        {/* --------------------CIVIL------------------------------------------------*/}
        {/* --------------------ELECTRICAL------------------------------------------------*/}

        {/* --------------------Infrastructre------------------------------------------------*/}

        <Route
          path="/infrastructure/about"
          exact
          component={infrastructureAbout}
        />
        <Route path="/infrastructure/overview" exact component={Overview} />
        <Route path="/infrastructure/classroom" exact component={classroom} />
        <Route path="/infrastructure/workshop" exact component={workshop} />
        <Route path="/infrastructure/auditorium" exact component={auditorium} />
        <Route path="/infrastructure/foodcourt" exact component={foodcourt} />
        <Route path="/infrastructure/conference" exact component={conference} />
        <Route path="/infrastructure/amphi" exact component={amphi} />

        {/* --------------------FACILITIES------------------------------------------------*/}

        <Route path="/facilities/hostel" exact component={hostel} />

        <Route path="/facilities/hostel" exact component={hostel} />
        <Route path="/facilities/gymnasium" exact component={gymnasium} />
        <Route path="/facilities/pool" exact component={pool} />
        <Route path="/facilities/ground" exact component={ground} />
        <Route path="/facilities/tennis" exact component={tennis} />
        <Route path="/facilities/more" exact component={more} />
        <Route path="/facilities/laboratories" exact component={laboratories} />

        {/* --------------------cbbbdbtbc------------------------------------------------*/}

        <Route path="/images" exact component={ImageGal} />
        <Route path="/updates/viewmore" exact component={MoreUpdates} />

        <Route path="/contact/map" exact component={LocationMap} />

        <Route path="/contact" exact component={AddContact} />



        <Route component={NotFound} />

        {/*============================ Admin Routes goes here =====================*/}
        {/* <AdminRoute path="/admin" exact component={Dashboard} />
        <AdminRoute path="/admin/add/staff" exact component={AddStaffMember} />
        <AdminRoute path="/admin/add/story" exact component={AddStory} />
        <AdminRoute
          path="/admin/manage/highlights"
          exact
          component={ManageHighlights}
        />
        <AdminRoute
          path="/admin/manage/achivements"
          component={ManageAchivements}
        />
        <AdminRoute
          path="/admin/manage/activities"
          component={ManageActivities}
        />
        <Route path="/admin/signin" exact component={Login} />
        <AdminRoute path="/admin/suggest" exact component={SuggestAdmin} />
        <AdminRoute path="/admin/contact" exact component={ContactNumber} />
        <AdminRoute path="/admin/studpics" exact component={Studpics} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
