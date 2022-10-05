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
          <div className="collapse navbar-collapse nav_flex" id="navbarText">
            <ul className="navbar-nav   mb-2 mb-lg-0">
              <li className="nav-item position-relative">
                <a className="nav-link" href="#">
                  Who
                </a>
                
                <div className="navd position-absolute shadow">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 col-6">
                        <h3>Who we serve</h3>
                        <p>
                          We empower banks, asset managers and other financial
                          institutions; enterprises, typically with
                          international operations; and the technology partners
                          and fintech developers who support them.
                        </p>
                      </div>
                      <div className="col-md-6 col-6 nav_hov">
                        <ul>
                          <li>Financial institution</li>
                          <li>Enterprises</li>
                          <li>Partners</li>
                          <li>Developers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  What
                </a>
                <div className="navd position-absolute shadow">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 col-6 ">
                        <h3>Who we serve</h3>
                        <p>
                          We empower banks, asset managers and other financial
                          institutions; enterprises, typically with
                          international operations; and the technology partners
                          and fintech developers who support them.
                        </p>
                      </div>
                      <div className="col-md-6 col-6 nav_hov">
                        <ul>
                          <li>Financial institution</li>
                          <li>Enterprises</li>
                          <li>Partners</li>
                          <li>Developers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="navd position-absolute shadow">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 col-12">
                        <h3>Who we serve</h3>
                        <p>
                          We empower banks, asset managers and other financial
                          institutions; enterprises, typically with
                          international operations; and the technology partners
                          and fintech developers who support them.
                        </p>
                      </div>
                      <div className="col-md-6 col-12 nav_hov">
                        <ul>
                          <li>Financial institution</li>
                          <li>Enterprises</li>
                          <li>Partners</li>
                          <li>Developers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
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
