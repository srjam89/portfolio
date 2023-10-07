import React, { useRef } from "react";
import "./ContactMe.css";
import emailjs from "@emailjs/browser";
import banner from "../lib/contact banner.jpeg";
import linkedin from "../lib/linkedin image.png";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
              <div className="card-body">
                <form ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="user_name" />
                  <label>Email</label>
                  <input type="email" name="user_email" />
                  <label>Message</label>
                  <textarea name="message" />
                  <input type="submit" value="Send" />
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-6 linked">
            <div className="card">
              <img className="card-img-top" src={linkedin} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">LinkedIn</h5>
                <p className="card-text">
                  You can also contact me and view my profile via
                  <a href="www.linkedin.com/in/sorrell-maranello-764b63252">
                    &nbsp; LinkedIn
                  </a>
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
