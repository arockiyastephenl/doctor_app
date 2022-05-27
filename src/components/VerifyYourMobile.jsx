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
            You've entered <span style={{color:"#703ccf"}}>+91-XXXXX XXX68 </span>  as the mobile number for your
            account. Please verify this phone number by clicking button below.
          </p>
         
          <button
              onClick={() => history("/verifiedmobile")}
            className="sign-in-button" style={{ position: "absolute", right: "22px", top: "226px" }}
          >
            Verify your mobile
            <img alt="" src={RightArrow}  style={{ position: "absolute", right: "17px", top: "18px" }} />
          </button>
          <p className="skipfunction">Skip</p>
        </div>
      </div>
    </>
  );
}
export default VerifyYourMobile;
