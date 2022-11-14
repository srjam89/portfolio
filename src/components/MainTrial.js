import React from "react";
import image from "../lib/coding image.jpeg";
import { Link } from "react-router-dom";
import facebook from "../lib/facebook icon.png";
import instagram from "../lib/instagram icon.webp";
import linkedin from "../lib/linkedin icon.png";
import "./MainTrial.css";

const MainTrial = () => {
  return (
    <div className="main-container">
      <div className="card m-2">
        <div className="row g-0">
          <div className="col-md-5">
            <div className="card-body text-center">
              <div className="card-style">
                <p className="hi">Hi, my name is Sorrell Maranello</p>
              </div>
              <p className="location-info">
                I'm a <span>Front End Developer</span> based in Chelmsford.
              </p>
              <p className="language-info">
                My main programming tools I use are HTML5, CSS3,<br></br>{" "}
                Javascript and React.
              </p>
              <p className="more-info">
                To find out more about me and my skills click below
              </p>
              <Link to="/aboutme" className="about-link">
                About Me
              </Link>
            </div>
          </div>

          <div className="col-md-7">
            <img src={image} className="project-image" alt="coding graphics" />
          </div>
        </div>
      </div>
      <div className="social-container">
        <img src={facebook} className="image-fb" alt="facebook icon" />
        <img src={instagram} className="image-insta" alt="instagram icon" />
        <img src={linkedin} className="image-linkedin" alt="linkedin icon" />
      </div>
    </div>
  );
};

export default MainTrial;
