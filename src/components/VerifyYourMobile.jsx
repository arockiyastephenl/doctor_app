import React from "react";
import Wave_Top from "../assets/logo/Wave_Top.svg";
import Otp from "../assets/logo/Otp.svg";
import RightArrow from "../assets/icon/RightArrow.svg";
import { useNavigate } from "react-router-dom";

function VerifyYourMobile() {
  const history = useNavigate();
//   const location = useLocation();
  return (
    <>
      <div className="bg-container">
        <img alt="" src={Wave_Top} />
        <img alt="" src={Otp} className="emailverifyimage" />
        <div className="card-container">
          <h1 style={{marginTop:"67px"}}>Verify your mobile</h1>
          <p>
            You've entered +91-XXXXX XXX68 as the mobile number for your
            account. Please verify this email address by clicking button below.
          </p>
          <button
            onClick={() => history("/verifiedmobile")}
            className="button_mail"
          >
            Verify your mobile
            <img alt="" src={RightArrow} className="rightarrow" />
          </button>
          <p className="skipfunction">Skip</p>
        </div>
      </div>
    </>
  );
}
export default VerifyYourMobile;
