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
      <div className="bg-container">
        <img alt="" src={Wave_Top} style={{position: "absolute",top: "20px",left: "0px"}}/>
        <img
          alt=""
          src={EmailVerification}
          className="emailverificationimage" 
        />
        <div className="card-container">
          <h1 className="mailheading">Verify your email</h1>
          <p className="paragraph">
            You've entered <span className="spancolor">william@gmail.com</span> as the email<br></br>address for your
            account. Please verify this<br></br>email address by clicking button below
          </p>
          <button
            onClick={() => history("/verifiedemail")}
            className="button_mail"
          >
            Verify your email
            <img alt="" src={RightArrow} style={{position: "absolute",top: "217px",right: "27px"}} className="rightarrow" />
          </button>
          <p className="skipfunction">Skip</p>
        </div>
      </div>
    </>
  );
}
export default Email_Verification_First_Page;
