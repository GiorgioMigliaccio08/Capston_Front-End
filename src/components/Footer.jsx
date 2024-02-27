import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "../assets/style/Footer.css";

const Footer = () => {
  return (
    <footer className="footerdiv">
      <div className="footer-icons">
        <a href="https://www.instagram.com/">
          <FaInstagramSquare className="iconfooter" />
        </a>
        <a href="https://www.facebook.com/">
          <FaSquareFacebook className="iconfooter" />
        </a>
        <a href="https://twitter.com/">
          <FaSquareXTwitter className="iconfooter" />
        </a>
      </div>

      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()} Giorgio Migliaccio. Tutti i diritti
          riservati.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
