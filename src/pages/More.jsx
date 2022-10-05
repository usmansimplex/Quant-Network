import React from "react";
import Menu from "../components/Elements/Menu";

const More = () => {
  return (
    <>
      <div className="more_hero mb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-12 d-flex flex-column align-items-center">
              <div className="more_hero_left ">
                <h2>Explore the future</h2>
                <p>
                  Much of the financial world’s digital future will be built on
                  blockchain. Here’s why.
                </p>

                <div class="card_1 shadow-lg px-3 mb-5">
                  <div class="card-body  py-4">
                    <p>Subscribe and be the first to know</p>
                    <div className="mt-4 mb-4">
                      <input type="search" placeholder="Enter your email" />
                    </div>
                    <div className=" card_botm d-flex flex-wrap ">
                      <small>
                        By submitting your email address, you agree to receive
                        occasional marketing messages from Quant, from which you
                        can unsubscribe at any time. For more information please
                        see our privacy policy.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-12">
              <div className="more_hero_right d-flex justify-content-end align-items-center">
                <div class="card_2 shadow-lg px-3 mb-2 ">
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
            </div>
          </div>
        </div>
      </div>
      <Menu/>
    </>
  );
};

export default More;
