import React from "react";
import "./footer.scss";
import { TfiWorld } from "react-icons/tfi";
import { RiArrowUpSLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-box">
        <div className="footer-left">
          <span className="f-text">@ 2022 Airbnb, Inc.</span>
          <span className="f-dot">.</span>
          <span className="f-text">Privacy</span>
          <span className="f-dot">.</span>
          <span className="f-text">Terms</span>
          <span className="f-dot">.</span>
          <span className="f-text">Sitemap</span>
          <span className="f-dot">.</span>
          <span className="f-text">Destinations</span>
        </div>
        <div className="footer-right">
          <div className="f-en">
            <span className="world-icon">
              <TfiWorld />
            </span>
            <span className="en-text">English (US)</span>
          </div>
          <div className="f-currency">
            <span className="currency-symbol">$</span>
            <div className="currency-label">USD</div>
          </div>
          <div className="f-res">
            <span className="resource">Support & resources</span>
            <div className="arrow">
              <RiArrowUpSLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
