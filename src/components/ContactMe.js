import React from "react";
import "./ContactMe.css";
import banner from "../lib/contact banner.jpeg";
import email1 from "../lib/email icon1.jpeg";
import linkedin from "../lib/linkedin image.png";

const ContactMe = () => {
  return (
    <div className="contact-div">
      <div className="container contact">
        <div className="title-container">
          <p className="text-container">Get In Touch</p>
        </div>
        <div className="main-image">
          <img src={banner} alt="banner" />
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <img className="card-img-top" src={email1} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">By Email</h5>
                <p className="card-text">
                  You can contact me via email at maranellodevwork@outlook.com
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <img className="card-img-top" src={linkedin} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">LinkedIn</h5>
                <p className="card-text">
                  You can also contact me and view my profile via LinkedIn at
                  www.linkedin.com/in/sorrell-maranello-764b63252
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
