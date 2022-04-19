import React from "react";
import useServices from "../../hooks/useServices";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useServices();
  return (
    <>
      <h2 className="text-center text-primary">My Serviecs</h2>
      <div className="service-container">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </>
  );
};

export default Services;
