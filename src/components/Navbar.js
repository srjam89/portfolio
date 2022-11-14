import React from "react";
import "./Navbar.css";
import logo from "../lib/coding logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const toggleBurger = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("nav");
    nav.classList.toggle("open");
    burger.classList.toggle("open");
  };

  const toggleLinks = () => {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelectorAll(".nav_links");
    const nav = document.querySelector("nav");
    navLinks.forEach((link) => {
      nav.classList.remove("open");
      burger.classList.remove("open");
    });
  };

  return (
    <div className="menu">
      <header>
        <div className="burger" onClick={toggleBurger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1 className="navbar-name">Sorrell Maranello</h1>
        <Link to="/">
          <img className="home-logo" src={logo} alt="home-logo" />
        </Link>
      </header>

      <nav>
        <ul className="nav_links" onClick={toggleLinks}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/aboutme">
            <li>About Me</li>
          </Link>
          <Link to="/mywork">
            <li>My Work</li>
          </Link>
          <Link to="/contactme">
            <li>Contact Me</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
