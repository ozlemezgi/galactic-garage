import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import "./Navbar.css";
import logo from "../../images/logo.jpeg";
import {HiOutlineMenu} from "react-icons/hi";


function Navbar() {
  const [toggleMenu ,setToggleMenu] =useState(false);
  const handleNavbar = () => setToggleMenu (!toggleMenu);
  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar-content flex">
        <div className="brand-and-toggler flex flex-sb">
          <Link to="/" className="navbar-brand flex">
            <img src={logo} alt="logo" />
            <span className="text-uppercase fw-7 fs-20">Galactic Garage</span>
          </Link>
          <button
            className="navbar-toggler-btn"
            type="button"
            onClick={handleNavbar}
          >
            <HiOutlineMenu
              size={35}
              style={{
                color: `${toggleMenu ? "#fff" : "#010101"}`,
              }}
            />
          </button>
        </div>
        <div
          className={
            toggleMenu
              ? "navbar-collapse show-navbar-collapse"
              : "navbar-collapse"
          }
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="starship"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar