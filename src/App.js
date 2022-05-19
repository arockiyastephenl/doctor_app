import React from "react";
import "./App.css";
// import Login_Page from "./components/Login_Page";
import Login_Page1 from "./components/Login_Page1";
import Email_Verify_First_Page from "./components/Email_Verify_First_Page";
import Verification_Your_Mail from "./components/Verification_Your_Mail";
import Verify_Your_Mobile from "./components/Verify_Your_Mobile";
import Verification_Your_Mobile from "./components/Verification_Your_Mobile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TabForm from "./components/TabForm";
import Header from "./components/Header";
// import AddressTab from './components/AddressTab';
function App() {
  return (
    <>
      <Router forceRefresh={true}>
        <Routes>
          <Route path="/home" element={<Login_Page1 />} />
          <Route path="/emailverify" element={<Email_Verify_First_Page />} />
          <Route path="/verifiedemail" element={<Verification_Your_Mail />} />
          <Route path="/mobileverify" element={<Verify_Your_Mobile />} />
          <Route
            path="/verifiedmobile"
            element={<Verification_Your_Mobile />}
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
