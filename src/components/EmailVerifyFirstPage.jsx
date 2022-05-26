// import Paragraph from "antd/lib/skeleton/Paragraph";
import React from "react";
// import "./App.css";
import Wave_Top from "../assets/logo/Wave_Top.svg";
import EmailVerification from "../assets/logo/EmailVerification.svg";
import RightArrow from "../assets/icon/RightArrow.svg";
import { useNavigate } from "react-router-dom";

function Email_Verification_First_Page() {
  const history = useNavigate();
  // const location = useLocation();
  return (
    <>
      <div
       className="bg-container"
      >
        <img alt="" src={Wave_Top} />
        <img alt="" src={EmailVerification} className="emailverificationimage" />
        <div className="card-container">
          <h1 style={{marginTop:"65px"}}>Verify your email</h1>
          <p>
            You've entered <span style={{color:"#703ccf"}}>pravankumar@gmail.com </span>  as the email address for your
            account. Please Verify this email address by Clicking the button below.
          </p>
          <button
            onClick={() => history("/verifiedemail")}
            className="sign-in-button" style={{ position: "absolute", right: "17px", top: "236px" }}
          >
            Verify your email
            <img alt="" src={RightArrow}  style={{ position: "absolute", right: "17px", top: "18px" }} />
          </button>
          <p className="skipfunction" style={{top:"267px"}}>Skip</p>
        </div>
      </div>
    </>
  );
}
export default Email_Verification_First_Page;
