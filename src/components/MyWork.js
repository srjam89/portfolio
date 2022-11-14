import React from "react";
import "./MyWork.css";
import sloth from "../lib/sloth project.avif";
import quote from "../lib/s-migaj-Yui5vfKHuzs-unsplash.jpg";
import google2 from "../lib/google logo 2.png";
import todo from "../lib/todo app logo.jpeg";
import expense from "../lib/expense tracker logo.jpeg";

const MyWork = () => {
  return (
    <div className="container">
      <div className="project-title">
        <p className="decorated">
          <span>Projects</span>
        </p>
      </div>

      <div className="card m-2">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={expense} className="project-image" alt="project-logo-1" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Project 1 - Expense Tracker</h5>
              <p className="card-text">
                After completing a Udemy React and Redux course, this was my
                first solo project using both frameworks. The CSS is not my own,
                as I wanted to purely focus on the React and Redux code. This
                project definitely had its challenges using Redux for the first
                time, but once i fully understood its functionality purposes i
                feel i really began to grasp the concepts and how to apply them.
              </p>
              <div className="link-container">
                {/* <a
                  className="top-link"
                  href="https://srjam89.github.io/sloths/"
                >
                  Link to view website
                </a> */}
                <a href="https://github.com/srjam89/expense-tracker-redux">
                  Click to view code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card m-2">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={todo} className="project-image" alt="project-logo-2" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Project 2 - Todo App</h5>
              <p className="card-text">
                This project was my first time using React framework. This seems
                to be a popular first project to do using React and I can see
                why. This project gets you using and manipulating 'state'. I
                very much enjoyed creating this app.
              </p>
              <div className="link-container">
                <a className="top-link" href="/Todo-app" target="_blank">
                  Link to view website
                </a>
                <a href="https://github.com/srjam89/todo-app">
                  Click to view code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card m-2">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={google2} className="project-image" alt="project-logo-3" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Project 3 - Google Clone</h5>
              <p className="card-text">
                On this project I decided to try cloning a webpage, I chose
                Google for this. This project uses HTML, CSS and Javascript. I
                am particualry proud of this project, it was my biggest
                challenge at that point in my coding journey. It includes the
                Google homepage and also a clone of the login page for emails.
              </p>
              <div className="link-container">
                <a
                  className="top-link"
                  href="https://srjam89.github.io/Google-Project/"
                >
                  Click to view website
                </a>
                <a href="https://github.com/srjam89/Google-Project">
                  Click to view code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card m-2">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={quote} className="project-image" alt="project-logo-4" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Project 4 - Quote Generator</h5>
              <p className="card-text">
                With this project I introduced Javascript to my HTML and CSS.
                For this project I hard coded a handful of motivational quotes
                and then created a randomize function to select a quote, and
                then display it on the screen.
              </p>
              <div className="link-container">
                <a
                  className="top-link"
                  href="https://srjam89.github.io/Quote-Generator/"
                >
                  Click to view website
                </a>
                <a href="https://github.com/srjam89/Quote-Generator">
                  Click to view code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card m-2">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={sloth} className="project-image" alt="project-logo-5" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Project 5 - Sloth Haven</h5>
              <p className="card-text">
                This project was my first attempt at a single page application
                not following a tutorial. This project uses only HTML and CSS.
              </p>
              <div className="link-container">
                <a
                  className="top-link"
                  href="https://srjam89.github.io/sloths/"
                >
                  Click to view website
                </a>
                <a href="https://github.com/srjam89/sloths">
                  Click to view code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
