import React from "react";
import ImgHero from "../Assets/pinwheels-6535599_1280.jpg";
import LogoImg from "../Assets/Logo_Green2-removebg-Edited.png";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${ImgHero})` }}>
      <div className="content">
        <div className="content-text">
          <h1>
            Kindness to Nature. <br />
            Kindness to communities.
          </h1>
          <p>Our local food bank promise</p>
        </div>

        <div className="content-buttons">
          <h2 id="welcome-text">Welcome to</h2>
          <img src={LogoImg} alt="Logo" id="Logo-image" />
          <button>
            <Link to="/">
              <a href="">LOGIN</a>
            </Link>
          </button>
          <button>
            <Link to="/Register">
              <a href="">SIGN UP</a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
