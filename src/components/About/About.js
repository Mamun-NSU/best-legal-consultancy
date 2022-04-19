import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className=" text-container">
      <h2 className="text-center text-primary">My Personal Information</h2>
      <div className="text-start m-5">
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
      </div>
    </div>
  );
};

export default About;
