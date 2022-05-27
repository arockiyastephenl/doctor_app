import React from "react";
import EmailVerificationDoctorLogo from "../assets/logo/EmailVerificationDoctorLogo.svg";
import Wave_Top from "../assets/logo/Wave_Top.svg";
import RightArrow from "../assets/icon/RightArrow.svg";
import { useNavigate } from "react-router-dom";

function VerificationYourMail() {
  const history = useNavigate();
//   const location = useLocation();
  return (
    <>
      <div className="bg-container">
        <img alt="" src={Wave_Top} />
        <img alt="" src={EmailVerificationDoctorLogo} className="emaildoctorlogo" />
        <div className="card-container">
          <h1>Verify your email</h1>
          <p>We sent you an code to your email <span style={{color:"#703ccf"}}>pravankumar@gmail.com</span>.</p>
          <div className="passcode_box_alignment">
            <form>
              <input type="password" className="passcode_box" />
            </form>
            <form>
              <input type="password" className="passcode_box" />
            </form>
            <form>
              <input type="password" className="passcode_box" />
            </form>
            <form>
              <input type="password" className="passcode_box" />
            </form>
            <form>
              <input type="password" className="passcode_box" />
            </form>
            <form>
              <input type="password" className="passcode_box" />
            </form>
          </div>
       
          <button
            onClick={() => history("/mobileverify")}
            className="sign-in-button" style={{ position: "absolute", right: "22px", top: "226px" }}
          >
            Continue
            <img alt="" src={RightArrow}  style={{ position: "absolute", right: "17px", top: "18px" }} />
          </button>
        </div>
      </div>
    </>
  );
}
export default VerificationYourMail;
