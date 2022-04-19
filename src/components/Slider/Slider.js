import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";
import image1 from "../../image/Lawyer01.jpg";
import image2 from "../../image/Lawyer02.jpg";
import image3 from "../../image/Lawyer03.jpg";

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3 className="text-primary">Family Law Consultancy</h3>
            <p>
              Family Law Consultants are expert solicitors dealing with divorce,
              separation and child issues.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="text-primary">Business law consultancy</h3>
            <p>
              Business law consultants help corporations to identify possible
              legal issues and implement solutions in areas such as government
              regulation, consumer protection.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="text-primary">Cybersecurity Law Consultancy</h3>
            <p>
              Cyber security is the application of technologies, processes and
              controls to protect systems, networks, programs, devices and data
              from cyber attacks.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
