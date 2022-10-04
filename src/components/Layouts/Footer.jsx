import React from "react";
import {AiFillTwitterCircle} from 'react-icons/ai'
import {IoLogoLinkedin} from 'react-icons/io'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row footer_txt">
            <div className="col-md-2 col-6">
              <ul>
                <p>WHO WE SERVE</p>
                <li>Financial institutions</li>
                <li>Enterprises</li>
                <li>Partners</li>
                <li>Developers</li>
              </ul>
            </div>
            <div className="col-md-3 col-6">
              <ul>
                <p>WHAT WE DO</p>
                <li>Digital currencies</li>
                <li>Payments</li>
                <li>Supply chain and trade finance</li>
                <li>Capital markets</li>
                <li>Compliance</li>
                <li>Insurance</li>
              </ul>
            </div>
            <div className="col-md-2 col-6">
              <ul>
                <p>HOW WE DO IT</p>
                <li>Products</li>
                <li>Networks</li>
                <li>Ecosystem</li>
                <li>- Partners</li>
                <li>- Associations</li>
              </ul>
            </div>
            <div className="col-md-3 col-6">
              <ul>
                <p>WHY IT MATTERS</p>
                <li>All</li>
                <li>News</li>
                <li>Events</li>
                <li>Perspectives</li>
                <li>Research</li>
                <li>Use cases</li>
              </ul>
            </div>
            <div className="col-md-2 col-6">
              <ul>
                <p>ABOUT US</p>
                <li>Mission and values</li>
                <li>Leadership</li>
                <li>Careers</li>
                <li>Media centre</li>
                <li>Contact</li>
              </ul>
            </div>
            <hr />
            <div className="mt-3 d-flex justify-content-between">
              <div className="logo">
                <img src="assets/logo-2.png" style={{ width: "30%" }} alt="" />
              </div>
              <div style={{ width: "40%" }} className="footer_icons d-flex ">
                <p className="px-2">Privacy Policy</p>
                <p className="px-3">Terms of use</p>
                {/* <a  href="#"><AiFillTwitterCircle color="black"/></a>
                <a href="#"><IoLogoLinkedin color="black"/></a> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
