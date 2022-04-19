import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div className="w-75 mx-auto">
      <h1 className="text-center">Best Legal Consultancy</h1>
      <Banner></Banner>
      <Services></Services>
      <Slider></Slider>
    </div>
  );
};

export default Home;
