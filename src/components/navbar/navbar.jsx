import React from "react";
import "./navbar.scss";
import { IoSearch } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import Logo from "../../assets/logo.png";
import Logo2 from "../../assets/logo2.png";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-box">
        <div className="nav-logo">
          <img src={Logo} alt="logo" className="logo" />
          <img src={Logo2} alt="logo" className="logo2" />
        </div>
        <div className="nav-center">
          <span className="nav-where">Anywhere</span>
          <span className="nav-week">Any week</span>
          <span className="nav-guest">
            <span className="add-guest">Add guests</span>
            <span className="guest-icon">
              <IoSearch />
            </span>
          </span>
        </div>
        <div className="nav-right">
          <span className="host">Become a Host</span>
          <div className="world-icon">
            <TfiWorld />
          </div>
          <div className="menu-account">
            <div className="menu">
              <FiMenu />
            </div>
            <div className="account">
              <FaUserCircle />
            </div>
          </div>
        </div>
      </div>
      <div className="nav-box2">
        <div className="nav-boxin">
          <div className="nav-search">
            <IoSearch />
            <div className="nav-center">
              <span className="top">Where to?</span>
              <div className="bottom">
                <span className="n-text">Anywhere</span>
                <span className="n-dot">.</span>
                <span className="n-text">Any week</span>
                <span className="n-dot">.</span>
                <span className="n-text">Add guests</span>
              </div>
            </div>
          </div>

          <div className="nav-filter">
            <TbAdjustmentsHorizontal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
