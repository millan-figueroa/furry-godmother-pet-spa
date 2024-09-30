import React from 'react';
import featuredImage1 from '../assets/css/images/dog07.jpg'; // Adjust the path as necessary
import featuredImage2 from '../assets/css/images/dog02.jpg';
import featuredImage3 from '../assets/css/images/dog20.jpg';

const BannerAndFeatures = () => {
  return (
    <>
      {/* Banner */}
      <div id="banner-wrapper">
        <div id="banner" className="box container">
          <div className="row">
            <div className="col-7 col-12-medium">
              <h2>Welcome, pet fam.</h2>
              <p>We treat your pets like the royalty they are.</p>
            </div>
            <div className="col-5 col-12-medium">
              <ul>
                <li>
                  <a href="#" className="button large icon solid fa-arrow-circle-right">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="button alt large icon solid fa-question-circle">
                    Book Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="features-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-4 col-12-medium">
              {/* Box */}
              <section className="box feature">
                <a href="#" className="image featured">
                  <img src={featuredImage1} alt="" />
                </a>
                <div className="inner">
                  <header>
                    <h2>Put something here</h2>
                    <p>Maybe here as well I think</p>
                  </header>
                  <p>
                    Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus. Praesent sed semper amet
                    bibendum tristique fringilla.
                  </p>
                </div>
              </section>
            </div>

            <div className="col-4 col-12-medium">
              {/* Box */}
              <section className="box feature">
                <a href="#" className="image featured">
                  <img src={featuredImage2} alt="" />
                </a>
                <div className="inner">
                  <header>
                    <h2>An interesting title</h2>
                    <p>This is also an interesting subtitle</p>
                  </header>
                  <p>
                    Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus. Praesent sed semper amet
                    bibendum tristique fringilla.
                  </p>
                </div>
              </section>
            </div>

            <div className="col-4 col-12-medium">
              {/* Box */}
              <section className="box feature">
                <a href="#" className="image featured">
                  <img src={featuredImage3} alt="" />
                </a>
                <div className="inner">
                  <header>
                    <h2>Oh, and finally ...</h2>
                    <p>Heres another intriguing subtitle</p>
                  </header>
                  <p>
                    Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus. Praesent sed semper amet
                    bibendum tristique fringilla.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerAndFeatures;