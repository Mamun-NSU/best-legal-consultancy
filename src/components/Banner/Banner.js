import React from "react";
import "./Banner.css";
import justice from "../../image/justice.jpg";

const Banner = () => {
  return (
    <div className="hero-container">
      <div className="text-container">
        <h1>Famous Lawyer in the town!!</h1>
        <h3>If you need any legal consultancy...</h3>
        <button>
          <a src="/">Click here...</a>
        </button>
      </div>
      <div className="image-container">
        <img src={justice} alt=""></img>
      </div>
    </div>
  );
};

export default Banner;
