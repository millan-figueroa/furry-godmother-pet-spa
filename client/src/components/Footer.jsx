import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div id="footer-wrapper">
        <footer id="footer" className="container">
          <div className="row">
            <div className="col-3 col-6-medium col-12-small">
              {/* Links Section */}
              <section className="widget links">
                <h3>QUICK LINKS</h3>
                <ul className="style2">
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Booking</a></li>
                  <li><a href="#">Staff</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Employment</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </section>
            </div>
            <div className="col-3 col-6-medium col-12-small">
  
              {/* Schedule and Contacts */}
              <section className="widget links">
                <h3>SCHEDULE</h3>
                <ul className="style2">
                  <li><a href="#">Monday CLOSED</a></li>
                  <li><a href="#">Tue - Fri 9am - 6pm</a></li>
                  <li><a href="#">Sat & Sun 9am - 4pm</a></li>
                  <li><a href="#">Call us for holiday hours!</a></li>
                </ul>
              </section>
            </div>
            <div className="col-3 col-6-medium col-12-small">
  
              {/* Yet Another Links Section */}
              <section className="widget links">
                <h3>LOCATIONS</h3>
                <ul className="style2">
                  <li><a href="#">East LA/ Montebello</a></li>
                  <li><a href="#">Beverlywood</a></li>
                  <li><a href="#">DTLA</a></li>
                  <li><a href="#">Culver City</a></li>
                  <li><a href="#">Riverside</a></li>
                </ul>
              </section>
            </div>
            <div className="col-3 col-6-medium col-12-small">
  
              {/* Contact Section */}
              <section className="widget contact last">
                <h3>CONTACT US</h3>
                <p>info@furrygodmother.com<br />
                (323)459-1291</p>
                <ul>
                  <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                  <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                  <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                  <li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
                  <li><a href="#" className="icon brands fa-pinterest"><span className="label">Pinterest</span></a></li>
                </ul>
                
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div id="copyright">
                <ul className="menu">
                  <li>&copy; Furry Godmother Pet Spa. All rights reserved</li>
                  <li>Design: <a href="http://diruptdev.netlify.app">DisruptDev</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
};
export default Footer;