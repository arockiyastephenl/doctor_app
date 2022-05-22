import React from "react";
// import "./App.css";
// import { Button } from "antd";
import BackDrop from "../assets/logo/BackDrop.svg";
import HomePageLogo from "../assets/logo/HomePageLogo.svg";
import IconNextArrow from "../assets/icon/IconNextArrow.svg";
import GoogleIconPurple from "../assets/icon/GoogleIconPurple.svg";
import RightArrowBlack from "../assets/icon/RightArrowBlack.svg";
import { useNavigate } from "react-router-dom";

function LoginPage1() {
  const history = useNavigate();
  // const location = useLocation();
  return (
    <>
      
      <div className="bg-container">
        <h1 className="login_page_header">Wellyfe</h1>
        <img alt="" src={BackDrop} className="Drop" />
        <img alt="" src={HomePageLogo} className="homepagelogo" />
        <p className="parahomepage">
          Dear <span className="namehomepage">Michael</span>,<br></br>
          <span className="namehomepage">William</span> requests you to join
          Wellyfe Doctor App<br></br>
          Simply dummy text Tag line
        </p>
        <input
          type="Email"
          placeholder="Email Id                                                                      @"
          className="input-box_home"
        />
        <br></br>
        <br></br>
        <input
          type="password"
          placeholder="Password                                                                    &#xF002;"
          className="input-box_home_pwd"
        />
    
        <br></br>
        <br></br>
        <button className="sign-in-button">
          Sign In <img src={IconNextArrow} alt="" style={{ position: "absolute", right: "17px", top: "18px" }}/>
        </button>
        <hr className="h_line" style={{width:"327px",position:"absolute",top:"88px"}}></hr>
        <div className="or-container">
          <p className = "or-font">OR</p>
          <button
            onClick={() => history("/emailverify")}
            className="buttongooglesignin"
          >
            <img
              alt=""
              src={GoogleIconPurple}
              style={{ position: "absolute", left: "20px", top: "11px" }}
            />
            Login with Google
            <img
              alt=""
              src={RightArrowBlack}
              style={{ position: "absolute", right: "17px", top: "18px" }}
            />
          </button>
        </div>
      </div>
      
    </>
  );
}
export default LoginPage1;