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
import Header from "./components/Header";
// import AddressTab from './components/AddressTab';
function App() {
  return (
    <>
      <Router forceRefresh={true}>
        <Routes>
          <Route path="/home" element={<LoginPage1 />} />
          <Route path="/emailverify" element={<EmailVerifyFirstPage />} />
          <Route path="/verifiedemail" element={<VerificationYourMail />} />
          <Route path="/mobileverify" element={<VerifyYourMobile />} />
          <Route
            path="/verifiedmobile"
            element={<VerificationYourMobile />}
          />
        </Routes>
      </Router>

      <div className="App">
      <Header />
      <TabForm /> 
        {/* <Login_Page/> */}
        {/* <Email_Verify_First_Page/>
      <Verification_Your_Mail/>
      <Verify_Your_Mobile/>
      <Verification_Your_Mobile/> */}
      </div>
    </>
  );
}

export default App;
