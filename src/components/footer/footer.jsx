import React, { useState } from "react";
import "./footer.scss";
import { TfiWorld } from "react-icons/tfi";
import { RiArrowUpSLine } from "react-icons/ri";
import { BsMap } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { HiOutlineHeart } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

const Footer = () => {
  const [map, setMap] = useState(true);

  const body = document.body;
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    const scrollable = document.documentElement.scrollHeight;

    if (currentScroll <= 0) {
      body.classList.remove("scroll-up");
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-up");
      body.classList.add("scroll-down");
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-down");
      body.classList.add("scroll-up");
    }

    if (window.scrollY >= scrollable - 900) {
      setMap(false);
    } else {
      setMap(true);
    }

    lastScroll = currentScroll;
  });

  return (
    <div className="footer">
      <div className="footer-nav">
        <div className="f-item">
          <IoSearch />
          <span>Explore</span>
        </div>
        <div className="f-item">
          <HiOutlineHeart />
          <span>Wishlist</span>
        </div>
        <div className="f-item">
          <FaUserCircle />
          <span>Log in</span>
        </div>
        <div className={map ? "map-btn2" : "map-btn2 active"}>
          <span>Map</span>
          <BsMap />
        </div>
      </div>
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
      <div className="map-btn">
        <span>Show map</span>
        <BsMap />
      </div>
    </div>
  );
};

export default Footer;
