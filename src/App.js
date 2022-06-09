import React from "react";
import "./App.css";
// import Login_Page from "./components/Login_Page";  

// import LoginPage1 from "./components/LoginPage1";
// import EmailVerifyFirstPage from "./components/EmailVerifyFirstPage";
// import VerificationYourMail from "./components/VerificationYourMail";
// import VerifyYourMobile from "./components/VerifyYourMobile";
// import VerificationYourMobile from "./components/VerificationYourMobile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import TabForm from "./components/TabForm";
// import UserProfileStore from "./components/UserProfileStore";
// import SuccessPage from "./components/SuccessPage";
// import AddClinic from "./components/AddClinic";
// import ListOfClinics from "./components/ListOfClinics";
// import AddClinicSuccess from "./components/AddClinicSuccesss";
// import AddClinicDetails from "./components/AddClinicDetails";
// import Consultation from "./components/Consultation";
// import PersonProfile from "./components/PersonProfile";
import MyPatients from "./components/MyPatientsFolder/MyPatients";
import PatientDetailCard from "./components/MyPatientsFolder/PatientDetailCard";
import StartVisitPage from "./components/MyPatientsFolder/StartVisitPage";
import Symptoms from "./components/MyPatientsFolder/Symptoms";
import Prescription from "./components/MyPatientsFolder/Prescription";
// import Header from "./components/Header";

// import { useNavigate } from "react-router-dom";
// import AddressTab from './components/AddressTab';
function App() {
  // const history = useNavigate();

  return (
    <>
{/* ==>patient-details and my-patients*/}    
<Router forceRefresh={true}>
        <Routes>
          
          <Route path="/" element={<MyPatients/>} />
          <Route path="/patientDetailCard" element={<PatientDetailCard/>} />
          <Route path="/startVisitPage" element={<StartVisitPage/>} />
          <Route path="/symptoms" element={<Symptoms/>} />
          <Route path="/prescription" element={<Prescription/>} />
          
          
        </Routes>
      </Router> 

{/* ==>consult-and-personal-profile */}
     

          {/* <Router forceRefresh={true}>
              <Routes>
                
                <Route path="/" element={<Consultation/>} />
                <Route path="/personProfile" element={<PersonProfile />} />
                
              </Routes>
            </Router>  */}
  
{/* ==>loginpage-and-list-of-clinic */}


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
