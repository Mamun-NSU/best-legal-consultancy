import React from "react";
import "./NotFound.css";
import errorImg from "../../../image/error.jpg";

const NotFound = () => {
  return (
    <div>
      <h2 className="text-danger text-center">Page Not Found!!!</h2>
      <h4 className="text-center text-danger">Error 404</h4>
      <img className="w-100" src={errorImg} alt="" />
    </div>
  );
};

export default NotFound;
