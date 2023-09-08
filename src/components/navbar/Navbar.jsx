import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import { links } from "../../data";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
          {/* <img src={Logo} alt="nav logo" /> */}
          Fitness<span>Hub</span>
        </Link>
        <ul className={`nav__links ${isOpen ? "show__nav" : "hide__nav"}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <RxCross2 /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
