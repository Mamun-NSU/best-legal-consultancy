import React from "react";
import "./Banner.css";
import justice from "../../image/justice.jpg";

const Banner = () => {
  return (
    <div className="hero-container">
      <div className="text-container">
        <h2 className="text-success">Famous Lawyer in the town!!</h2>
        <h4 className="">If you need any legal consultancy...</h4>
        <button className="btn btn-success">
          <a src="/">Reach Me</a>
        </button>
      </div>
      <div className="image-container">
        <img src={justice} alt=""></img>
      </div>
    </div>
  );
};

export default Banner;
