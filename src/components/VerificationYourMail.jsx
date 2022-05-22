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
        <img alt="" src={Wave_Top} style={{position: "absolute",top: "20px",left: "0px"}}/>
        <img
          alt=""
          src={EmailVerificationDoctorLogo}
          className="emaildoctorlogo"
        />
        <div className="cardcontainerverification ">
          <h1 className="headingverification">Verification your email</h1>
          <p className="paragraphmailverification">We sent you an code<br></br> On your email <span className="spancolor">william@gmail.com</span></p>
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
            className="button_mail"
          >
            Continue
            <img alt="" src={RightArrow} style={{position: "absolute",top: "224px",right: "27px"}} className="rightarrow" />
          </button>
        </div>
      </div>
    </>    
  );
}
export default VerificationYourMail;
