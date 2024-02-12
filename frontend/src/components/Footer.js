import React from "react";
import "../stylesheets/Footer.css";
const Footer = () => {
  return (
    <div className="footer ">
      <div className="tops d-flex justify-content-between">
        <div className="footer-link-wrapper d-flex">
          <div className="footer-links">
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
          </div>
          <div className="footer-links">
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
          </div>
          <div className="footer-links">
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
            <h6>Lorem ipsum</h6>
          </div>
        </div>
        <button className="d-flex">
          <i
            className="ri-global-line mx-2 "
            style={{ fontSize: "1.2vmax" }}
          ></i>
          English
        </button>
      </div>
      <div className="btm d-flex justify-content-between mt-5">
        <h3>
          <span style={{ color: "rgb(162, 0, 255)" }}>U</span>demy
        </h3>
        <h6 style={{ fontSize: "0.8vmax", fontWeight: "300" }}>
          © 2022 Udemy, Inc.
        </h6>
      </div>
    </div>
  );
};

export default Footer;
