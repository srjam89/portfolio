import React from "react";
import "./MyWork.css";
import sloth from "../lib/sloth project.avif";
import quote from "../lib/s-migaj-Yui5vfKHuzs-unsplash.jpg";
import google2 from "../lib/google logo 2.png";
import todo from "../lib/todo app logo.jpeg";
import expense from "../lib/expense tracker logo.jpeg";
import calculator from "../lib/calculator-img.png";
import fullTodo from "../lib/todo.png";
import gazzeteer from "../lib/favicon.png";
import directory from "../lib/directory.png";

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
            <img
              src={directory}
              className="project-image"
              alt="project-logo-directory"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                Project 1 - Full Stack Company Directory
              </h5>
              <p className="card-text">
                This is a full stack project using Javascript, JQuery, PHP and
                SQL for the database. It is a CRUD mobile first application
                where you can interact with a company directory. This was my
                first project using PHP to interact with my database.
              </p>
              <div className="link-container">
                <a
                  className="top-link"
                  href="https://project2.sorrellmaranello.co.uk"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to view app
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card m-2">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={gazzeteer}
              className="project-image"
              alt="project-logo-map"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Project 2 - Full Stack Gazzeteer</h5>
              <p className="card-text">
                This project is a more modern take on a Gazzeteer, made for
                mobiles and desktops. It is achieved using Javascript, JQuery
                and PHP. The Leaflet library was my main source to implement
                layers over the map and then Bootstrap library for interaction
                with the app.
              </p>
              <div className="link-container">
                <a
                  className="top-link"
                  href="https://project1.sorrellmaranello.co.uk"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to view app
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card m-2">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={fullTodo}
              className="project-image"
              alt="project-logo-1"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Project 3 - Full Stack Todo App</h5>
              <p className="card-text">
                After completing a full stack course using the PERN stack, I was
                able to create a todo app utilising these new skills learnt. I
                was already familiar with React and Node but this project really
                helped me to grasp the new concepts learnt for Express and
                PostGreSQL.
              </p>
              <div className="link-container">
                <a href="https://github.com/srjam89/pern-todo">
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
            <img src={todo} className="project-image" alt="project-logo-3" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Project 4 - Todo App</h5>
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
            <img
              src={calculator}
              className="project-image"
              alt="project-logo-4"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Project 5 - Calculator</h5>
              <p className="card-text">
                This project was more challenging than I had first anticipated.
                It is purely HTML, CSS and vanilla Javascript. I found you could
                make this project as simple or complex as you choose. This was a
                project that really made me think about logical and conditional
                operations.
              </p>
              <div className="link-container">
                <a
                  className="top-link"
                  href="https://srjam89.github.io/JS-Calculator/"
                >
                  Link to view website
                </a>
                <a href="https://github.com/srjam89/JS-Calculator">
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
            <img src={google2} className="project-image" alt="project-logo-5" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Project 6 - Google Clone</h5>
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
            <img src={quote} className="project-image" alt="project-logo-6" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Project 7 - Quote Generator</h5>
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
            <img src={sloth} className="project-image" alt="project-logo-7" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Project 8 - Sloth Haven</h5>
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
