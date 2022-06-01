import React from "react";
import "./App.css";
// import Login_Page from "./components/Login_Page";
import LoginPage1 from "./components/LoginPage1";
import EmailVerifyFirstPage from "./components/EmailVerifyFirstPage";
import VerificationYourMail from "./components/VerificationYourMail";
import VerifyYourMobile from "./components/VerifyYourMobile";
import VerificationYourMobile from "./components/VerificationYourMobile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TabForm from "./components/TabForm";
import UserProfileStore from "./components/UserProfileStore";
import SuccessPage from "./components/SuccessPage";
import AddClinic from "./components/AddClinic";
import ListOfClinics from "./components/ListOfClinics";
import AddClinicSuccess from "./components/AddClinicSuccesss";
import AddClinicDetails from "./components/AddClinicDetails";
import Consultation from "./components/Consultation";
// import Header from "./components/Header";
// import { useNavigate } from "react-router-dom";
// import AddressTab from './components/AddressTab';
function App() {
  // const history = useNavigate();

  return (
    <>
    <Consultation />
      {/* <Router forceRefresh={true}>
        <Routes>
          
          <Route path="/" element={<LoginPage1 />} />
          <Route path="/emailverify" element={<EmailVerifyFirstPage />} />
          <Route path="/verifiedemail" element={<VerificationYourMail />} />
          <Route path="/mobileverify" element={<VerifyYourMobile />} />
          <Route
            path="/verifiedmobile"
            element={<VerificationYourMobile />}
          />
           <Route
            path="/tabForm"
            element={<TabForm />}
          />
           <Route
            path="/userProfilestore"
            element={<UserProfileStore />}
          />
          <Route
            path="/successPage"
            element={<SuccessPage />}
          />
           <Route
            path="/listOfClinics"
            element={<ListOfClinics/>}
          />
          <Route
            path="/addClinic"
            element={<AddClinic/>}
          />
          <Route
            path="/addClinicDetails"
            element={<AddClinicDetails/>}
          />
          <Route
            path="/addClinicSuccess"
            element={<AddClinicSuccess/>}
          />
        </Routes>
      </Router> */}
      
     
    </>
  );
}

export default App;
