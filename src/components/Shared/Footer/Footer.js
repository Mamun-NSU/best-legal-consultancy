import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-center mt-5">
      <p>
        All rights reserved by{" "}
        <a href="https://www.linkedin.com/in/mamun2528/" target="_blank">
          Al Mamun
        </a>
      </p>
      <p>
        <small>copyright @ {year} </small>
      </p>
    </footer>
  );
};

export default Footer;
