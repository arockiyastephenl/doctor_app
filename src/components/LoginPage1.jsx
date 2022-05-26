import React from "react";
// import "./App.css";
import { Input } from "antd";
import BackDrop from "../assets/logo/BackDrop.svg";
import HomePageLogo from "../assets/logo/HomePageLogo.svg";
import RightArrow from "../assets/icon/RightArrow.svg";
import GoogleIconPurple from "../assets/icon/GoogleIconPurple.svg";
import RightArrowPurple from "../assets/icon/RightArrowPurple.svg";
import { useNavigate } from "react-router-dom";
import {LockOutlined ,UserOutlined } from "@ant-design/icons";

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
          Dear <span className="namehomepage">Dr. V. Pravan Kumar</span>,<br></br>
          <span className="namehomepage">Rajesh</span> requests you to join
          Wellyfe Doctor App<br></br>
          Simply dummy text Tag line.
        </p>
        <Input
          type="Email"
          placeholder="Email Id"
          suffix={<UserOutlined />}                                                                                                 
          className="input-box_home"
        />
        <br></br>
        <br></br>
        <Input
          type="password"
          placeholder="Password" 
          suffix={<LockOutlined/>}
          className="input-box_home_pwd"
        />
        <br></br>
        <br></br>
        <button className="sign-in-button">
          Sign In <img src={RightArrow} alt=""  style={{ position: "absolute", right: "17px", top: "18px" }} />
        </button>
        <hr className="h_line"></hr>
        <div className="or-container">
          <p style={{ paddingLeft: "11px",marginTop:"11px",fontWeight:'700' ,color:"#703ccf"}}>OR</p>
          <button
            onClick={() => history("/emailverify")}
            className="buttongooglesignin"
          >
            <img alt=""
              src={GoogleIconPurple}
              style={{ position: "absolute", left: "20px", top: "11px" }}
            />
            Login with Google
            <img alt=""
              src={RightArrowPurple}
              style={{ position: "absolute", right: "17px", top: "18px" }}
            />
          </button>
        </div>
      </div>
    </>
  );
}
export default LoginPage1;
