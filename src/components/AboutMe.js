import React from "react";
import "./AboutMe.css";
import html from "../lib/html-css-js-icon-set-web-development-logo-javascript-programming-symbol-171669655.jpeg";
import react from "../lib/react icon.png";
import redux from "../lib/redux icon.png";
import profile1 from "../lib/IMG_7414.jpg";

const AboutMe = () => {
  return (
    <div className="con">
      <div className="aboutme-container">
        <div className="aboutme-text">
          <p>Hi, my name is Sorrell. I am a self taught Front End Developer.</p>
          <p className="languages-text">
            My main programming languages learnt are HTML, CSS and Javascript. I
            have also learnt Javascript libraries such as React and Redux.
          </p>
          <p>
            I learnt these languages using online resources such as Udemy and
            Codecademy, and as such have achieved certificates in these fields.
          </p>
          <p className="background-text">
            I currently work full-time as a registered nurse, this has been my
            profession for over 12 years. I have learnt an insumountable amount
            of knowledge and skills. A core skill learnt is communication,
            without this skill I would not have been able to do my job
            effectively. This includes communication with patients, relatives,
            members of my team, and other multi-disciplinaries.
          </p>
          <p className="current-text">
            Starting a new profession and learning these new skills has been
            such an exciting and enjoyable experience. I have loved the
            challenges I have been faced with, it has made me change my way of
            thinking and approach of a problem. Being able to create something
            from nothing is a very satisfying experience, especially when I have
            been struggling to solve a problem, and am then able to achieve a
            solution.
          </p>
          <p className="extra-skills-text">
            As well as the above mentioned languages I have worked with
            libraries such as Bootstrap and Material UI.
          </p>
        </div>
        <div className="avatar-container">
          <img src={profile1} alt="avatar" className="avatar" />
        </div>
      </div>
      <div className="icons">
        <img src={html} className="html" alt="html icon" />
        <img src={react} className="react" alt="react icon" />
        <img src={redux} className="redux" alt="redux icon" />
      </div>
    </div>
  );
};

export default AboutMe;
