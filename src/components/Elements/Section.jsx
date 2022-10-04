import React from "react";

const Section = () => {
  return (
    <>
    
      <div className="third_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12" data-aos="fade-up" data-aos-duration="3000">
              <div className="gif_1">
                <img src="assets/gif_1.svg" alt="" />
              </div>
            </div>
            <div className="col-md-6 col-12" data-aos="fade-up" data-aos-duration="3000">
              <div className="section_heading mb-5">
                <h2>Unlocking the power of blockchain for everyone</h2>
                <p>
                  We deliver interoperable ecosystems and real-world solutions
                  that lower costs, enable new business, and mitigate risk.
                </p>
                <a href="">Let's talk</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
