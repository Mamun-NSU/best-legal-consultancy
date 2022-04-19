import React from "react";
import "./About.css";
import myImg from "../../image/myImg.jpg";


const About = () => {
  return (
    <div className=" text-container">
      <h2 className="text-center text-primary">My Personal Information</h2>
      <div className="text-center m-5">
        <img className="myImg mb-3" src={myImg} alt=""></img>

        <h3>
          <span className="bold-txt">Name:</span>Abdullah Al Mamun
        </h3>
        <p>
          <span className="bold-txt">Profession:</span>Software Engineer
        </p>
        <p>
          <span className="bold-txt">Company:</span>TechKnowGram Limited
        </p>
        <p>
          <span className="bold-txt">Nationality:</span>BangLadeshi
        </p>
      </div>
      <div className="text-start m-5">
        <p>
          <span className="bold-txt text-success">My Mission:</span> I want to
          be a skilled software Engineer. For this reasion I want to join any
          renowned Software company. I want to gather knowledge from there.
        </p>
        <p>
          <span className="bold-txt text-success">My Vission:</span> My future
          goal is to acquire knowledge on latest technology and modern science
          from those developed countries. So, I will try to complete my MSC and
          higher studies from USA/ Canada/ Europe.
        </p>


        <p>
          <span className="bold-txt text-success">My Goal:</span> I want to
          be a establish my own IT software company after 10 years. I want to help poor students to fullfill there dream from my company.
        </p>

        <p>
          <span className="bold-txt text-success">My Hardworks:</span> To fullfill my goals, i started to developed my skills. For that reason I admit programming Hero course to learn MERN stack. I already to complete BYLC's Art and Practice of Leadership (APL) program to develop my leadership skill. Besides this, i learn my many things from Edx and Udemy.

        </p>
      </div>
    </div>
  );
};

export default About;
