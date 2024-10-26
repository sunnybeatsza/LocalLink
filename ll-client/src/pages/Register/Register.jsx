import React from "react";
import "./Register.css";
import ImgHero from "../../Assets/pinwheels-6535599_1280.jpg";
import LogoImg from "../../Assets/Logo_Green2-removebg-New.png";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";

export const Register = () => {
  return (
    <div
      className="register-hero"
      style={{ backgroundImage: `url(${ImgHero})` }}
    >
      <div className="outside-container">
        {" "}
        <div className="left-container">
          <div className="header">
            <img src={LogoImg} alt="" />
            <p>
              Where surplus meets need, powering a sustainable and connected
              community while reducing environmental impact
            </p>
          </div>
        </div>
        <div className="right-container">
          <div className="header">
            <div className="text">Register</div>
            <div className="underline"></div>
            <div className="inputs">
              <div className="input">
                <PersonIcon />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input">
                <AttachEmailIcon />
                <input type="email" placeholder="Email" />
              </div>
              <div className="input">
                <LockIcon />
                <input type="password" placeholder="Password" />
              </div>
              <div className="input">
                <LockIcon />
                <input type="password" placeholder="Confirm Password" />
              </div>
            </div>
          </div>
          <div className="forgot-password">
            Forgort Password? <span>Click Here</span>
          </div>
          <div className="submit-container">
            <div className="submit">Sign Up</div>
            <div className="submit">Sign Up with Google</div>
          </div>
        </div>
      </div>
    </div>
  );
};
