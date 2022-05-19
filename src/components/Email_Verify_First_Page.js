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
        style={{
          backgroundColor: "#2ECC71",
          width: "1000px",
          height: "2175px",
        }}
      >
        <img alt="" src={Wave_Top} />
        <img alt="" src={EmailVerification} className="emailverificationimage" />
        <div className="card-container">
          <h1>verify your email</h1>
          <p>
            You've entered william@gmail.com as the email address for your
            account. Please verify this email address by clicking button below
          </p>
          <button
            onClick={() => history("/verifiedemail")}
            className="button_mail"
          >
            Verify your email
            <img alt="" src={RightArrow} className="rightarrow" />
          </button>
          <p className="skipfunction">Skip</p>
        </div>
      </div>
    </>
  );
}
export default Email_Verification_First_Page;
