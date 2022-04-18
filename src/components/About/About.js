import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <h2>My Personal Information</h2>
      <div>
        <h3>
          {" "}
          <span className="bold-txt">Name:</span>Abdullah Al Mamun{" "}
        </h3>
        <h4>
          {" "}
          <span className="bold-txt">Profession:</span>Software Engineer
        </h4>
        <h4>
          {" "}
          <span className="bold-txt">Company:</span>TechKnowGram Limited
        </h4>
        <h4>
          {" "}
          <span className="bold-txt">Nationality:</span>BangLadeshi
        </h4>
      </div>
      <div>
        <h4>
          <span className="bold-txt">My Mission:</span> I want to be a skilled
          software Engineer. For this reasion I want to join any renowned
          Software company. I want to gather knowledge from there.
        </h4>
        <h4>
          <span className="bold-txt">My Vission:</span> My future goal is to
          acquire knowledge on latest technology and modern science from those
          developed countries. So, I will try to complete my MSC and higher
          studies from USA/ Canada/ Europe.
        </h4>
      </div>
    </div>
  );
};

export default About;
