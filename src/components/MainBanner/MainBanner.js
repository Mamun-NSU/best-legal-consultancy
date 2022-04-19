import React from "react";
import "./MainBanner.css";
import bannerImg from "../../image/bannerPhoto.jpg";
import { Carousel } from "react-bootstrap";

const MainBanner = () => {
    return (
        <div className="my-3">
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={bannerImg} alt="First slide" />
                    <Carousel.Caption>
                        <h2 className="text-primary">Best Law Consultancy in Bangladesh</h2>
                        <h4 className="text-success">
                            I provide all of the confirmError of Family law, Criminal law, Landlords and Tenants law,
                            Labor and Employment law, Defense law and Income taxes Law.
                        </h4>
                        <h5 className="text-dark">If you need any kinds of Consultancy...</h5>

                        <button className="btn btn-success">
                            <a src="/">Reach Me</a>
                        </button>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default MainBanner;
