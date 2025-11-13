import '../css/Footer.css';

import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="container__footer" aria-label="Site footer">
      <section className="footer-hero">
        <div className="hero__footer">
          <ul className="social-links" aria-label="Social media">
            <li className="social-tag">
              <a href="#!" aria-label="Instagram"><FaInstagram /></a>
            </li>
            <li className="social-tag">
              <a href="#!" aria-label="Facebook"><FaFacebook /></a>
            </li>
            <li className="social-tag">
              <a href="#!" aria-label="X (formerly Twitter)"><FaTwitter /></a>
            </li>
            <li className="social-tag">
              <a href="#!" aria-label="LinkedIn"><FaLinkedin /></a>
            </li>
          </ul>
        </div>

        <div className="footer-content">
          <nav className="main-content" aria-label="Footer navigation">

            <ul className="company-links">
              <li className="nav-links-title"><h3 className="nav-link-title">Company</h3></li>
              <li className="nav-link"><a href="#!">About Us</a></li>
              <li className="nav-link"><a href="#!">Careers</a></li>
              <li className="nav-link"><a href="#!">FAQ</a></li>
              <li className="nav-link"><a href="#!">Blog</a></li>
            </ul>

            <ul className="services-links">
              <li className="nav-links-title"><h3 className="nav-link-title">Services</h3></li>
              <li className="nav-link"><a href="#!">Book a Consultation</a></li>
              <li className="nav-link"><a href="#!">Careers</a></li>
              <li className="nav-link"><a href="#!">FAQ</a></li>
              <li className="nav-link"><a href="#!">Blog</a></li>
            </ul>

             <ul className="resources-links">
                <li className="nav-links-title"><h3 className="nav-link-title">Resources</h3></li>
                <li className="nav-link"><a href="#!">Book a Virtual Tour</a></li>
                <li className="nav-link"><a href="#!">How To Get A Pre-Approved Mortgage Plan</a></li>
                <li className="nav-link"><a href="#!">OpalHomes Currency Converter</a></li>
                <li className="nav-link"><a href="#!">Accessibility</a></li>
                <li className="nav-link"><a href="#!">Registration</a></li>
                <li className="nav-link"><a href="#!">Customer Support</a></li>
            </ul>
          </nav>
          
            <figure className="work-schedule-container">
              <figcaption>
                Monday - Friday
                <br />
                7:00 AM - 7:00 PM
              </figcaption>
              <figcaption>
                Saturday - Sunday
                <br />
                5:00 AM - 5:00 PM
              </figcaption>
              <figcaption>
                Contact Us
                <br />
                190 Lynette Rd, Uvalde, TX 21398
                <br />
                <a href="tel:(321)-457-2387">
                    (321)-457-2387
                </a>
                <br />
                <a href="mailto:build-a-prop@company.com">
                    opalhomes@company.com
                </a>
              </figcaption>
            </figure>
        </div>
      </section>
    </footer>
  );
}

export default Footer;