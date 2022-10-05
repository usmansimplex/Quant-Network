import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Menu = () => {
  return (
    <>
      <Tabs>
        <div className="tabs shadow-lg mb-5">
          <TabList>
            <div className="container d-flex justify-content-between flex-wrap">
              <Tab>All</Tab>
              <Tab>News</Tab>
              <Tab>Events</Tab>
              <Tab>Perspectives</Tab>
              <Tab>Research</Tab>
              <Tab>Use cases</Tab>
            </div>
          </TabList>
        </div>

        <TabPanel>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className=" card_botm  mb-3">
                  <p>Topics to explore</p>
                  <span className="mb-2">CBDC</span>
                  <br />
                  <span className="mb-2">COMPANY UPDATES</span>
                  <br />
                  <span className="mb-2">CYBERSECURITY</span>
                  <br />
                  <span className="mb-2">CYBERSECURITY</span>
                  <br />
                  <span className="mb-2">IN THE PRESS</span>
                  <br />
                  <span className="mb-2">PRODUCT RELEASE</span>
                  <br />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div class="card_3 shadow-lg   mb-5">
                  <div class="card-body ">
                    <div className="row">
                      <div className="col-md-5">
                        <div class="card-body  py-4 px-3">
                          <span
                            style={{ color: "#f15922", paddingBottom: "9px" }}
                          >
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
                      <div className="col-md-7 col-12 card_img">
                        <img src="assets/Stablecoin-visual-3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div class="card_3 shadow-lg   mb-5">
                    <div class="card-body ">
                      <div className="row">
                        <div className="col-md-5">
                          <div class="card-body  py-4 px-3">
                            <span
                              style={{ color: "#f15922", paddingBottom: "9px" }}
                            >
                              Perspectives
                            </span>
                            <br />
                            <span style={{ color: "#43403e" }} className="mb-5">
                              1 August 2022
                            </span>
                            <div className="mt-4 mb-4">
                              <h4 class="card-title">
                                Interoperability: the key to creating.
                              </h4>
                            </div>
                            <div className=" card_botm d-flex flex-wrap ">
                              <span className="mb-2">Enterprises</span>
                              <span className="mb-2">
                                Financial institutions
                              </span>
                              <span className="mb-2">Gilbert Verdian</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7 col-12 card_img">
                          <img src="assets/The-right-ecosystem-for-digitaql-currencies.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div class="card_3 shadow-lg   mb-5">
                    <div class="card-body ">
                      <div className="row">
                        <div className="col-md-5">
                          <div class="card-body  py-4 px-3">
                            <span
                              style={{ color: "#f15922", paddingBottom: "9px" }}
                            >
                              Perspectives
                            </span>
                            <br />
                            <span style={{ color: "#43403e" }} className="mb-5">
                              9 August 2022
                            </span>
                            <div className="mt-4 mb-4">
                              <h4 class="card-title">
                              Are your assets fit for the digital age?
                              </h4>
                            </div>
                            <div className=" card_botm d-flex flex-wrap ">
                              <span className="mb-2">Digital assets</span>
                              <span className="mb-2">
                                Financial institutions
                              </span>
                              <span className="mb-2">Gilbert Verdian</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7 col-12 card_img">
                          <img src="assets/Quant_FOF.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
        <div className="container mt-5">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className=" card_botm  mb-3">
                  <p>Topics to explore</p>
                  <span className="mb-2">CBDC</span>
                  <br />
                  <span className="mb-2">COMPANY UPDATES</span>
                  <br />
                  <span className="mb-2">CYBERSECURITY</span>
                  <br />
                  <span className="mb-2">CYBERSECURITY</span>
                  <br />
                  <span className="mb-2">IN THE PRESS</span>
                  <br />
                  <span className="mb-2">PRODUCT RELEASE</span>
                  <br />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div class="card_3 shadow-lg   mb-5">
                  <div class="card-body ">
                    <div className="row">
                      <div className="col-md-5">
                        <div class="card-body  py-4 px-3">
                          <span
                            style={{ color: "#f15922", paddingBottom: "9px" }}
                          >
                            News
                          </span>
                          <br />
                          <span style={{ color: "#43403e" }} className="mb-5">
                            3 September 2022
                          </span>
                          <div className="mt-4 mb-4">
                            <h4 class="card-title">
                            Gilbert Verdian explains The Merge
                            </h4>
                          </div>
                          <div className=" card_botm d-flex flex-wrap ">
                            <span className="mb-2">BLOCKCHAIN</span>
                            <span className="mb-2">DEVELOPERS</span>
                            <span className="mb-2">ENTERPRISES</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7 col-12 card_img">
                        <img src="assets/independent.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div class="card_3 shadow-lg   mb-5">
                    <div class="card-body ">
                      <div className="row">
                        <div className="col-md-5">
                          <div class="card-body  py-4 px-3">
                            <span
                              style={{ color: "#f15922", paddingBottom: "9px" }}
                            >
                              News
                            </span>
                            <br />
                            <span style={{ color: "#43403e" }} className="mb-5">
                            14 September 2022
                            </span>
                            <div className="mt-4 mb-4">
                              <h4 class="card-title">
                              Overledger 2.2.14 is an engineering release  
                              </h4>
                            </div>
                            <div className=" card_botm d-flex flex-wrap ">
                              <span className="mb-2">DEVELOPERS</span>
                              <span className="mb-2">
                                PRODUCT RELEASE
                              </span>
                              <span className="mb-2">OVERLEDGERS</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7 col-12 card_img">
                          <img src="assets/2.2.14.Heros-2.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div class="card_3 shadow-lg   mb-5">
                    <div class="card-body ">
                      <div className="row">
                        <div className="col-md-5">
                          <div class="card-body  py-4 px-3">
                            <span
                              style={{ color: "#f15922", paddingBottom: "9px" }}
                            >
                              Perspectives
                            </span>
                            <br />
                            <span style={{ color: "#43403e" }} className="mb-5">
                              9 August 2022
                            </span>
                            <div className="mt-4 mb-4">
                              <h4 class="card-title">
                              Are your assets fit for the digital age?
                              </h4>
                            </div>
                            <div className=" card_botm d-flex flex-wrap ">
                              <span className="mb-2">Digital assets</span>
                              <span className="mb-2">
                                Financial institutions
                              </span>
                              <span className="mb-2">Gilbert Verdian</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7 col-12 card_img">
                          <img src="assets/IMG_9470.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </TabPanel>
    <TabPanel>
    <div className="container mt-5">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className=" card_botm  mb-3">
                  <p>Topics to explore</p>
                  <span className="mb-2">CBDC</span>
                  <br />
                  <span className="mb-2">COMPANY UPDATES</span>
                  <br />
                  <span className="mb-2">CYBERSECURITY</span>
                  <br />
                  <span className="mb-2">CYBERSECURITY</span>
                  <br />
                  <span className="mb-2">IN THE PRESS</span>
                  <br />
                  <span className="mb-2">PRODUCT RELEASE</span>
                  <br />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div class="card_3 shadow-lg   mb-5">
                  <div class="card-body ">
                    <div className="row">
                      <div className="col-md-5">
                        <div class="card-body  py-4 px-3">
                          <span
                            style={{ color: "#f15922", paddingBottom: "9px" }}
                          >
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
                      <div className="col-md-7 col-12 card_img">
                        <img src="assets/Stablecoin-visual-3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div class="card_3 shadow-lg   mb-5">
                    <div class="card-body ">
                      <div className="row">
                        <div className="col-md-5">
                          <div class="card-body  py-4 px-3">
                            <span
                              style={{ color: "#f15922", paddingBottom: "9px" }}
                            >
                              Perspectives
                            </span>
                            <br />
                            <span style={{ color: "#43403e" }} className="mb-5">
                              1 August 2022
                            </span>
                            <div className="mt-4 mb-4">
                              <h4 class="card-title">
                                Interoperability: the key to creating.
                              </h4>
                            </div>
                            <div className=" card_botm d-flex flex-wrap ">
                              <span className="mb-2">Enterprises</span>
                              <span className="mb-2">
                                Financial institutions
                              </span>
                              <span className="mb-2">Gilbert Verdian</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7 col-12 card_img">
                          <img src="assets/The-right-ecosystem-for-digitaql-currencies.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div class="card_3 shadow-lg   mb-5">
                    <div class="card-body ">
                      <div className="row">
                        <div className="col-md-5">
                          <div class="card-body  py-4 px-3">
                            <span
                              style={{ color: "#f15922", paddingBottom: "9px" }}
                            >
                              Perspectives
                            </span>
                            <br />
                            <span style={{ color: "#43403e" }} className="mb-5">
                              9 August 2022
                            </span>
                            <div className="mt-4 mb-4">
                              <h4 class="card-title">
                              Are your assets fit for the digital age?
                              </h4>
                            </div>
                            <div className=" card_botm d-flex flex-wrap ">
                              <span className="mb-2">Digital assets</span>
                              <span className="mb-2">
                                Financial institutions
                              </span>
                              <span className="mb-2">Gilbert Verdian</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7 col-12 card_img">
                          <img src="assets/Quant_FOF.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </TabPanel>
    <TabPanel>
    <div className="container mt-5">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className=" card_botm  mb-3">
                  <p>Topics to explore</p>
                  <span className="mb-2">CBDC</span>
                  <br />
                  <span className="mb-2">COMPANY UPDATES</span>
                  <br />
                  <span className="mb-2">CYBERSECURITY</span>
                  <br />
                  <span className="mb-2">CYBERSECURITY</span>
                  <br />
                  <span className="mb-2">IN THE PRESS</span>
                  <br />
                  <span className="mb-2">PRODUCT RELEASE</span>
                  <br />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div class="card_3 shadow-lg   mb-5">
                  <div class="card-body ">
                    <div className="row">
                      <div className="col-md-5">
                        <div class="card-body  py-4 px-3">
                          <span
                            style={{ color: "#f15922", paddingBottom: "9px" }}
                          >
                            News
                          </span>
                          <br />
                          <span style={{ color: "#43403e" }} className="mb-5">
                            3 September 2022
                          </span>
                          <div className="mt-4 mb-4">
                            <h4 class="card-title">
                            Gilbert Verdian explains The Merge
                            </h4>
                          </div>
                          <div className=" card_botm d-flex flex-wrap ">
                            <span className="mb-2">BLOCKCHAIN</span>
                            <span className="mb-2">DEVELOPERS</span>
                            <span className="mb-2">ENTERPRISES</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7 col-12 card_img">
                        <img src="assets/independent.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div class="card_3 shadow-lg   mb-5">
                    <div class="card-body ">
                      <div className="row">
                        <div className="col-md-5">
                          <div class="card-body  py-4 px-3">
                            <span
                              style={{ color: "#f15922", paddingBottom: "9px" }}
                            >
                              News
                            </span>
                            <br />
                            <span style={{ color: "#43403e" }} className="mb-5">
                            14 September 2022
                            </span>
                            <div className="mt-4 mb-4">
                              <h4 class="card-title">
                              Overledger 2.2.14 is an engineering release  
                              </h4>
                            </div>
                            <div className=" card_botm d-flex flex-wrap ">
                              <span className="mb-2">DEVELOPERS</span>
                              <span className="mb-2">
                                PRODUCT RELEASE
                              </span>
                              <span className="mb-2">OVERLEDGERS</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7 col-12 card_img">
                          <img src="assets/2.2.14.Heros-2.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div class="card_3 shadow-lg   mb-5">
                    <div class="card-body ">
                      <div className="row">
                        <div className="col-md-5">
                          <div class="card-body  py-4 px-3">
                            <span
                              style={{ color: "#f15922", paddingBottom: "9px" }}
                            >
                              Perspectives
                            </span>
                            <br />
                            <span style={{ color: "#43403e" }} className="mb-5">
                              9 August 2022
                            </span>
                            <div className="mt-4 mb-4">
                              <h4 class="card-title">
                              Are your assets fit for the digital age?
                              </h4>
                            </div>
                            <div className=" card_botm d-flex flex-wrap ">
                              <span className="mb-2">Digital assets</span>
                              <span className="mb-2">
                                Financial institutions
                              </span>
                              <span className="mb-2">Gilbert Verdian</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7 col-12 card_img">
                          <img src="assets/IMG_9470.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </TabPanel>
    <TabPanel>
    <div className="container mt-5">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className=" card_botm  mb-3">
                  <p>Topics to explore</p>
                  <span className="mb-2">CBDC</span>
                  <br />
                  <span className="mb-2">COMPANY UPDATES</span>
                  <br />
                  <span className="mb-2">CYBERSECURITY</span>
                  <br />
                  <span className="mb-2">CYBERSECURITY</span>
                  <br />
                  <span className="mb-2">IN THE PRESS</span>
                  <br />
                  <span className="mb-2">PRODUCT RELEASE</span>
                  <br />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div class="card_3 shadow-lg   mb-5">
                  <div class="card-body ">
                    <div className="row">
                      <div className="col-md-5">
                        <div class="card-body  py-4 px-3">
                          <span
                            style={{ color: "#f15922", paddingBottom: "9px" }}
                          >
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
                      <div className="col-md-7 col-12 card_img">
                        <img src="assets/Stablecoin-visual-3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div class="card_3 shadow-lg   mb-5">
                    <div class="card-body ">
                      <div className="row">
                        <div className="col-md-5">
                          <div class="card-body  py-4 px-3">
                            <span
                              style={{ color: "#f15922", paddingBottom: "9px" }}
                            >
                              Perspectives
                            </span>
                            <br />
                            <span style={{ color: "#43403e" }} className="mb-5">
                              1 August 2022
                            </span>
                            <div className="mt-4 mb-4">
                              <h4 class="card-title">
                                Interoperability: the key to creating.
                              </h4>
                            </div>
                            <div className=" card_botm d-flex flex-wrap ">
                              <span className="mb-2">Enterprises</span>
                              <span className="mb-2">
                                Financial institutions
                              </span>
                              <span className="mb-2">Gilbert Verdian</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7 col-12 card_img">
                          <img src="assets/The-right-ecosystem-for-digitaql-currencies.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div class="card_3 shadow-lg   mb-5">
                    <div class="card-body ">
                      <div className="row">
                        <div className="col-md-5">
                          <div class="card-body  py-4 px-3">
                            <span
                              style={{ color: "#f15922", paddingBottom: "9px" }}
                            >
                              Perspectives
                            </span>
                            <br />
                            <span style={{ color: "#43403e" }} className="mb-5">
                              9 August 2022
                            </span>
                            <div className="mt-4 mb-4">
                              <h4 class="card-title">
                              Are your assets fit for the digital age?
                              </h4>
                            </div>
                            <div className=" card_botm d-flex flex-wrap ">
                              <span className="mb-2">Digital assets</span>
                              <span className="mb-2">
                                Financial institutions
                              </span>
                              <span className="mb-2">Gilbert Verdian</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7 col-12 card_img">
                          <img src="assets/Quant_FOF.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </TabPanel>
    <TabPanel>
    <div className="container mt-5">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className=" card_botm  mb-3">
                  <p>Topics to explore</p>
                  <span className="mb-2">CBDC</span>
                  <br />
                  <span className="mb-2">COMPANY UPDATES</span>
                  <br />
                  <span className="mb-2">CYBERSECURITY</span>
                  <br />
                  <span className="mb-2">CYBERSECURITY</span>
                  <br />
                  <span className="mb-2">IN THE PRESS</span>
                  <br />
                  <span className="mb-2">PRODUCT RELEASE</span>
                  <br />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div class="card_3 shadow-lg   mb-5">
                  <div class="card-body ">
                    <div className="row">
                      <div className="col-md-5">
                        <div class="card-body  py-4 px-3">
                          <span
                            style={{ color: "#f15922", paddingBottom: "9px" }}
                          >
                            News
                          </span>
                          <br />
                          <span style={{ color: "#43403e" }} className="mb-5">
                            3 September 2022
                          </span>
                          <div className="mt-4 mb-4">
                            <h4 class="card-title">
                            Gilbert Verdian explains The Merge
                            </h4>
                          </div>
                          <div className=" card_botm d-flex flex-wrap ">
                            <span className="mb-2">BLOCKCHAIN</span>
                            <span className="mb-2">DEVELOPERS</span>
                            <span className="mb-2">ENTERPRISES</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7 col-12 card_img">
                        <img src="assets/independent.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div class="card_3 shadow-lg   mb-5">
                    <div class="card-body ">
                      <div className="row">
                        <div className="col-md-5">
                          <div class="card-body  py-4 px-3">
                            <span
                              style={{ color: "#f15922", paddingBottom: "9px" }}
                            >
                              News
                            </span>
                            <br />
                            <span style={{ color: "#43403e" }} className="mb-5">
                            14 September 2022
                            </span>
                            <div className="mt-4 mb-4">
                              <h4 class="card-title">
                              Overledger 2.2.14 is an engineering release  
                              </h4>
                            </div>
                            <div className=" card_botm d-flex flex-wrap ">
                              <span className="mb-2">DEVELOPERS</span>
                              <span className="mb-2">
                                PRODUCT RELEASE
                              </span>
                              <span className="mb-2">OVERLEDGERS</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7 col-12 card_img">
                          <img src="assets/2.2.14.Heros-2.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div class="card_3 shadow-lg   mb-5">
                    <div class="card-body ">
                      <div className="row">
                        <div className="col-md-5">
                          <div class="card-body  py-4 px-3">
                            <span
                              style={{ color: "#f15922", paddingBottom: "9px" }}
                            >
                              Perspectives
                            </span>
                            <br />
                            <span style={{ color: "#43403e" }} className="mb-5">
                              9 August 2022
                            </span>
                            <div className="mt-4 mb-4">
                              <h4 class="card-title">
                              Are your assets fit for the digital age?
                              </h4>
                            </div>
                            <div className=" card_botm d-flex flex-wrap ">
                              <span className="mb-2">Digital assets</span>
                              <span className="mb-2">
                                Financial institutions
                              </span>
                              <span className="mb-2">Gilbert Verdian</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7 col-12 card_img">
                          <img src="assets/IMG_9470.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </TabPanel>
      </Tabs>
    </>
  );
};

export default Menu;
