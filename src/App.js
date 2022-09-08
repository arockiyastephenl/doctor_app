import React from "react";
import "./App.css";
// import Login_Page from "./components/Login_Page";  
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import LoginPage1 from "./components/LoginPage1";
import EmailVerifyFirstPage from "./components/EmailVerifyFirstPage";
import VerificationYourMail from "./components/VerificationYourMail";
import VerifyYourMobile from "./components/VerifyYourMobile";
import VerificationYourMobile from "./components/VerificationYourMobile";


import DoctorProfile from "./components/DoctorProfile";
import DoctorProfileDetails from "./components/DoctorProfileDetails";
import SuccessPage from "./components/SuccessPage";
import ClinicProfile from "./components/ClinicProfile";
import ListOfClinics from "./components/ListOfClinics";
import ClinicSuccess from "./components/ClinicSuccess";
import ClinicProfileDetails from "./components/ClinicProfileDetails";
// import DoctorConsult from "./components/DoctorConsult";
import PatientProfile from "./components/PatientProfile";


import MyPatients from "./components/MyPatientsFolder/MyPatients";
import PatientDetailCard from "./components/MyPatientsFolder/PatientDetailCard";
import StartVisitPage from "./components/MyPatientsFolder/StartVisitPage";
import Symptoms from "./components/MyPatientsFolder/Symptoms";
import Prescription from "./components/MyPatientsFolder/Prescription";
import TabletPage from "./components/MyPatientsFolder/TabletPage";
import AddAdvicesPage from "./components/MyPatientsFolder/AddAdvicesPage";
import AddVitalsPage from "./components/MyPatientsFolder/AddVitalsPage";
import AddVitalsNewPulse from "./components/MyPatientsFolder/AddVitalsNewPulse";


import PatientAppointment from "./components/My Appointments/PatientAppointment";
import PatientDetails from "./components/NamePatientDetails/PatientDetails";
import AddVitalsNewSp02 from "./components/MyPatientsFolder/AddVitalsNewSp02";

// import Header from "./components/Header";

// import { useNavigate } from "react-router-dom";
// import AddressTab from './components/AddressTab';
function App() {
  // const history = useNavigate();

  return (
    <>

{/* ==>loginpage1*/}
<Router forceRefresh={true}>
        <Routes>

        <Route path="/" element={<LoginPage1 />} />
          <Route path="/emailverify" element={<EmailVerifyFirstPage />} />
          <Route path="/verifiedemail" element={<VerificationYourMail />} />
          <Route path="/mobileverify" element={<VerifyYourMobile />} />
          <Route path="/verifiedmobile"element={<VerificationYourMobile />}/>
          
        
{/* ==>ProfilePage (as) DoctorProfile*/}    

          <Route path="/doctor-profile"element={<DoctorProfile />}/>

{/* UserProfileStore */}   
          <Route path="/doctor-profile-details"element={<DoctorProfileDetails />}/>
          <Route path="/successPage"element={<SuccessPage />}/>

          
          <Route path="/listOfClinics"element={<ListOfClinics/>}/>
          <Route path="/clinic-profiles"element={<ClinicProfile/>}/>
          <Route path="/clinic-profile-details"element={<ClinicProfileDetails/>}/>
          <Route path="/clinic-success"element={<ClinicSuccess/>}/>
       
          
         
{/* ==>ProfilePage (as) DoctorProfile*/}        

          <Route path="/myPatients" element={<MyPatients/>} />
          <Route path="/patientDetailCard" element={<PatientDetailCard/>} />
          <Route path="/startVisitPage" element={<StartVisitPage/>} />
          <Route path="/symptoms" element={<Symptoms/>} />
          <Route path="/prescription" element={<Prescription/>} />
          <Route path="/tabletPage" element={<TabletPage/>} />
          <Route path="/addAdvicesPage" element={<AddAdvicesPage/>} />
          <Route path="/addVitalsPage" element={<AddVitalsPage/>} />
          <Route path="/addVitalsNewPulse" element={<AddVitalsNewPulse/>} />
          <Route path="/addVitalsNewSpo2" element={<AddVitalsNewSp02/>} />
       


{/* ==>patient-details and my-patients*/}    
 
          
        <Route path="/myPatients" element={<MyPatients/>} />
          <Route path="/patientDetailCard" element={<PatientDetailCard/>} />
          <Route path="/startVisitPage" element={<StartVisitPage/>} />
          <Route path="/symptoms" element={<Symptoms/>} />
          <Route path="/prescription" element={<Prescription/>} />
          <Route path="/tabletPage" element={<TabletPage/>} />
          <Route path="/addAdvicesPage" element={<AddAdvicesPage/>} />
          <Route path="/addVitalsPage" element={<AddVitalsPage/>} />
          <Route path="/addVitalsNewPulse" element={<AddVitalsNewPulse/>} />
          
   
{/* ==>consult-and-personal-profile */}       
          
          {/* <Route path="/doctor-consult" element={<DoctorConsult/>} />
           */}
         <Route path="/patient-profile" element={<PatientProfile />} />   



     
{/* ==>MyAppointment*/} 
         <Route path="/patient-appointment" element={<PatientAppointment/>} />       
          <Route path="/patient-details" element={<PatientDetails/>} /> 
                
               
                
               
  



    
</Routes>
         
      </Router>
      
     
    </>
  );
}

export default App;
