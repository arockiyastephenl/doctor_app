import React from "react";
import Wave_Top from "../assets/logo/Wave_Top.svg";
import EmailVerification from "../assets/logo/EmailVerification.svg";
import RightArrow from "../assets/icon/RightArrow.svg";
import { useNavigate } from "react-router-dom";

function VerifyYourMobile() {
  const history = useNavigate();
  //   const location = useLocation();
  return (
    <>
      <div className="bg-container">
        <img alt="" src={Wave_Top}  style={{position: "absolute",top: "0px",left: "0px"}}/>
        <img
          alt=""
          src={EmailVerification}
          className="emailverificationimage"
        />
        <div className="card-container">
          <h1 className="headingverifymobile">Verify your mobile</h1>
          <p className="paragraph">
            You've entered <span className="spancolor">+91-XXXXX XXX68</span> as the mobile number<br></br> for your
            account. Please verify this<br></br> email address by clicking button below
          </p>
          <button
            onClick={() => history("/verifiedmobile")}
            className="button_mail"
          >
            Verify your mobile
            <img alt="" src={RightArrow} style={{position: "absolute",top: "218px",right: "27px"}} className="rightarrow" />
          </button>
          <p className="skipfunction">Skip</p>
        </div>
      </div>
    </>
  );
}
export default VerifyYourMobile;
