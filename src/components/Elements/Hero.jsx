import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero_section">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-12">
              <div className="hero_h1" data-aos="fade-right" data-aos-duration="1000">
                <h2>
                  docker The future of finance to<span>Today.</span>
                </h2>
              </div>
              <div>
                <div className="get_started_btn">
                  <a href="#">Get started</a>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-12">
              <div className="hero_video">
                <video width="750" loop="true" autoplay="autoplay" muted >
                  <source src="assets/hero.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
