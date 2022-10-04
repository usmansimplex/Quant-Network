import React from "react";

const Banner = () => {
  return (
    <>
      <div className="banner_section">
        <div className="container ban_flex">
          <div className="banner_text">
            <h2>An empowered, interconnected world</h2>
            <p>
              We serve banks, asset managers and other financial institutions;
              enterprises; and the technology partners and fintech developers
              who support them.
            </p>
            <div className="banner_btn mt-5">
              <a href="">Let's talk</a>
            </div>
          </div>
        </div>
      </div>

      <div className="section_2">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3">
              <h3>Financial institutions</h3>
              <br />
              <p>
                Banks, investment firms, and other financial institutions, are
                harnessing blockchain to exchange information and assets more
                securely and cost-effectively.
              </p>
            </div>
            <div className="col-md-3">
              <h3>Enterprises</h3>
              <br />
              <p>
                Blockchain enables companies operating in multiple markets to
                exchange information and assets more securely and
                cost-effectively for uses as varied as cross-border payments,
                supply chain challenges, or raising capital.
              </p>
            </div>
            <div className="col-md-3">
              <h3>Partners</h3>
              <br />
              <p>
                Whether you’re a platform provider, an independent software
                vendor, or a technology consultant, chances are your clients are
                drawn to the benefits blockchain promises but daunted at the
                complexity and specialist knowledge required to realise them.
                We’re here to help.
              </p>
            </div>
            <div className="col-md-3">
              <h3>Developers</h3>
              <br />
              <p>
                Are you one of the few developers in the world who understands
                all the complexities of blockchain? Don’t worry. With Quant, you
                don’t need to be a distributed ledger technology expert to build
                game-changing blockchain-agnostic applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
