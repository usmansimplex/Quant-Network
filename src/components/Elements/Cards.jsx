import React from "react";
import {BsArrowRight} from 'react-icons/bs'
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <>
      <div className="fouth_section">
        <div className="container ">
          <div className="four_sec_text" style={{}}>
            <h2 className="text-center">Explore the future</h2>
            <p className="text-center">
              Much of the financial world’s digital future <br /> will be built
              on blockchain. Find out why.
            </p>
          </div>
          <div className="bg_2">
            <div class="card_1 shadow-lg px-3 mb-2">
              <div class="card-body  py-4">
                <span style={{ color: "#f15922", paddingBottom: "9px" }}>
                  Events
                </span>
                <br />
                <span style={{ color: "#43403e" }} className="mb-5">
                  3 October 2022
                </span>
                <div className="mt-4 mb-4">
                  <h4 class="card-title">
                    MGilbert Verdian explains The Merge
                  </h4>
                </div>
                <div className=" card_botm d-flex flex-wrap ">
                  <span className="mb-2">Financial institutions</span>
                  <span className="mb-2">Partners</span>
                  <span className="mb-2">SIBOS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="col-md-3 col-12 mt-4">
              <div class="card shadow-lg px-3 mb-2">
                <div class="card-body  py-4">
                  <span style={{ color: "#f15922", paddingBottom: "9px" }}>
                    News
                  </span>
                  <br />
                  <span style={{ color: "#43403e" }} className="mb-5">
                    15 October 2022
                  </span>
                  <div className="mt-4 mb-4">
                    <h4 class="card-title">
                      MGilbert Verdian explains The Merge
                    </h4>
                  </div>
                  <div className=" card_botm d-flex flex-wrap ">
                    <span className="mb-2">CBDC</span>
                    <span className="mb-2">CITYAM</span>
                    <span className="mb-2">ENTERPRISES</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-12 mt-4">
              <div class="card shadow-lg px-3 mb-2">
                <div class="card-body  py-4">
                  <span style={{ color: "#f15922", paddingBottom: "9px" }}>
                    Events
                  </span>
                  <br />
                  <span style={{ color: "#43403e" }} className="mb-5">
                    20 September 2022
                  </span>
                  <div className="mt-4">
                    <h4 class="card-title">
                      The multi-chain future: sidechains, layer 2s and The Merge
                    </h4>
                  </div>
                  <div className=" card_botm d-flex flex-wrap">
                    <span className="mb-2">BLOCKCHAIN</span>
                    <span className="mb-2">DEVELOPERS</span>
                    <span className="mb-2">ENTERPRISES</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-12 mt-4">
              <div class="card shadow-lg px-3 mb-2">
                <div class="card-body  py-4">
                  <span style={{ color: "#f15922", paddingBottom: "9px" }}>
                    News
                  </span>
                  <br />
                  <span style={{ color: "#43403e" }} className="mb-5">
                    30 October 2022
                  </span>
                  <div className="mt-4">
                    <h4 class="card-title">
                      Overledger 2.2.14 is an engineering release
                    </h4>
                  </div>
                  <div className=" card_botm d-flex flex-wrap">
                    <span className="mb-2">ARCHITECTURE</span>
                    <span className="mb-2">ASSOCIATIONS</span>
                    <span className="mb-2">DEVELOPERS</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-12 mt-4">
              <div class="card shadow-lg px-3 mb-2">
                <div class="card-body  py-4">
                  <span style={{ color: "#f15922", paddingBottom: "9px" }}>
                    News
                  </span>
                  <br />
                  <span style={{ color: "#43403e" }} className="mb-5">
                    3 October 2022
                  </span>
                  <div className="mt-4 ">
                    <h4 class="card-title">
                      Martin Hargreaves on the benefits of CBDCs for consumers
                    </h4>
                  </div>
                  <div className=" card_botm d-flex flex-wrap">
                    <span className="mb-2">DEVELOPERS</span>
                    <span className="mb-2">OVERLEDGER</span>
                    <span className="mb-2">PRODUCT RELEASE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="read_more d-flex justify-content-end"><Link to="/more">More <span><BsArrowRight/></span></Link></div>
        </div>
      </div>
    </>
  );
};

export default Cards;
