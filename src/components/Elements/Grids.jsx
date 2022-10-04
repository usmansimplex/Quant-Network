import React from "react";

const Grids = () => {
  return (
    <>
      {/* 1st grid */}
      <div className="third_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12" data-aos="fade-up" data-aos-duration="2000">
              <div className="gif_1">
                <img src="assets/gif_2.svg" style={{width: '80%'}} alt="" />
              </div>
            </div>
            <div className="col-md-6 col-12 mt-5 mt-5" data-aos="fade-up" data-aos-duration="2000">
              <div className="section_heading">
                <h2>Interoperability solved</h2>
                <p>
                  Reduce costs and access wider markets by deploying any app on
                  any blockchain. That’s the power of our single, standard,
                  multi-chain API.
                </p>
                <a href="">Fine out more</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second grid */}

      <div className="third_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 mt-5" data-aos="fade-up" data-aos-duration="2000">
              <div className="section_heading" >
                <h2>Developers unleashed</h2>
                <p>
                  Develop on Overledger without specialist blockchain knowledge.
                </p>
                <a href="">Fine out more</a>
              </div>
            </div>
            <div className="col-md-6 col-12 mt-4" data-aos="fade-up" data-aos-duration="2000">
              <div className="gif_1">
                <img src="assets/gif_4.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd grid */}
      <div className="third_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12" data-aos="fade-up" data-aos-duration="2000">
              <div className="gif_1">
                <img src="assets/gif_3.svg" alt="" />
              </div>
            </div>
            <div className="col-md-6 col-12 mt-5 mt-5" data-aos="fade-up" data-aos-duration="2000">
              <div className="section_heading">
                <h2>Built for enterprises</h2>
                <p>
                  Led by an experienced team from large corporate, financial and
                  regulatory institutions, we enable existing financial
                  infrastructure to operate with new decentralised networks.
                </p>
                <a href="">Fine out more</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4th grid */}

      <div className="third_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 mt-5" data-aos="fade-up" data-aos-duration="2000">
              <div className="section_heading">
                <h2>Designed for <br/> the  future</h2>
                <p>
                  With our blockchain-agnostic approach, your existing
                  infrastructure investments are protected. And the door is open
                  to future cross-platform applications.
                </p>
                <a href="">Fine out more</a>
              </div>
            </div>
            <div className="col-md-6 col-12" data-aos="fade-up" data-aos-duration="2000">
              <div className="gif_1">
                <img src="assets/gif_5.svg" style={{width: '80%'}} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grids;
