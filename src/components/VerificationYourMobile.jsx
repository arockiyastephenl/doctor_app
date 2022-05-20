import React from "react";
import EmailVerificationDoctorLogo from "../assets/logo/EmailVerificationDoctorLogo.svg";
import Wave_Top from "../assets/logo/Wave_Top.svg";
import RightArrow from "../assets/icon/RightArrow.svg";

function VerificationYourMobile() {
  return (
    <>
      <div className="bg-container">
        <img alt="" src={Wave_Top} />
        <img alt="" src={EmailVerificationDoctorLogo} className="emaildoctorlogo" />
        <div className="card-container">
          <h1>Verification your mobile</h1>
          <p>
            We sent you an SMS code <br></br> On number +91-XXXXX XXX68
          </p>
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
          <button className="button_mail">
            Continue
            <img alt="" src={RightArrow} className="rightarrow" />
          </button>
        </div>
      </div>
    </>
  );
}
export default VerificationYourMobile;
