import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import logo1 from "../../assets/logo-black.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="ve-footer">

      <div className="container">
        <div className="row">

          {/* Brand */}
          <div className="col-12 col-sm-6 col-lg-4 mb-50">
            <div className="ve-footer-brand">
              <NavLink className="navbar-brand" to="/">
                <img src={logo1} alt="logo" style={{ width: '200px' }} />
              </NavLink>

              <p>
                We expertise in building enterprise scale sophisticated technology solutions for diverse business processes.
              </p>

              {/* ⚠️ Social links should stay <a> (external) */}
              {/* <div className="ve-social">
                <a href="/"><i className="fa fa-facebook"></i></a>
                <a href="/"><i className="fa fa-twitter"></i></a>
                <a href="/"><i className="fa fa-linkedin"></i></a>
                <a href="/"><i className="fa fa-instagram"></i></a>
              </div> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-sm-6 col-lg-2 mb-50">
            <h5 className="ve-footer-title">Quick Links</h5>
            <ul className="ve-footer-links">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/careers">Careers</NavLink></li>
              <li><NavLink to="/contact">Contact us</NavLink></li>
            </ul>
          </div>

          {/* Others */}
          <div className="col-12 col-sm-6 col-lg-2 mb-50">
            <h5 className="ve-footer-title">Others</h5>
            <ul className="ve-footer-links">
              <li><NavLink to="/case-studies">Case Studies</NavLink></li>
              <li><NavLink to="/terms">Terms & Conditions</NavLink></li>
              <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-sm-6 col-lg-4 mb-50">
            <h5 className="ve-footer-title">Get In Touch</h5>

            <ul className="ve-footer-contact">

              <li>
                <FaPhoneAlt className="icon" />
                <span>
                  <a href="tel:+914042016637">+91-4042016637</a>
                </span>
              </li>

              <li>
                <FaEnvelope className="icon" />
                <span>
                  <a href="mailto:support@entrolabs.com">support@entrolabs.com</a>
                </span>
              </li>

              <li>
                <FaMapMarkerAlt className="icon" />
                <span>
                  First Floor, Plot No: 479, Road No: 10, Kakatiya Hills,
                  Guttala Begumpet, Kavuri Hills, Madhapur
                </span>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="ve-footer-bottom">
        <div className="container">
          <div className="ve-footer-bottom-inner">
            <p>
              © {new Date().getFullYear()} Entro Labs. All Rights Reserved
            </p>

            <ul>
              <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms">Terms of Use</NavLink></li>
              <li><NavLink to="/cookies">Cookie Policy</NavLink></li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;