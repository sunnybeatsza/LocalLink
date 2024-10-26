import React from "react";
import ImgHero from "../Assets/pinwheels-6535599_1280.jpg";
import LogoImg from "../Assets/Logo_Green2-removebg-preview.png";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${ImgHero})` }}>
      <div className="content">
        <div className="content-text">
          <h1>Kindess to Nature. Kindness to communities</h1>
          <p>Our local food bank promise</p>
        </div>

        <div className="content-buttons">
          <h2 id="welcome-text">Welcome to</h2>
          <img src={LogoImg} alt="" id="Logo-image" />
          <button>
            <a href="">LOGIN</a>
          </button>
          <button>
            <a href="">SIGN UP</a>
          </button>
        </div>
      </div>
    </div>
  );
};
