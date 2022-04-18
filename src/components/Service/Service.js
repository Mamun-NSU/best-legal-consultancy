import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { service_name, image, price, description } = props.service;
  return (
    <div className="service">
      <img src={image} alt="user image"></img>

      <p>
        <span className="font-bold">Service:</span> {service_name}
      </p>
      <p>
        {" "}
        <span className="font-bold">Price:</span> {price}
      </p>
      <p>
        {" "}
        <span className="font-bold">Description:</span>{" "}
        {description.slice(0, 250)}
      </p>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
