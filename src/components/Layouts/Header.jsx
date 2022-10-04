import React from "react";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="assets/logo-2.png" style={{ width: "30%" }} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse nav_flex"
            id="navbarText"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Who
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  What
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  How
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Why
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign in
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <BsSearch />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
