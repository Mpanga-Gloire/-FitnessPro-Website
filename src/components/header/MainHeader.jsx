import React from "react";
import { Link } from "react-router-dom";

import Image from "./../../images/main_header.png";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>Your Fitness Transformation Awaits</h4>
          <h1>Embark on a Journey to a Healthier You</h1>
          <p>
            Discover a path to a healthier lifestyle and unleash your potential.
            Join us today!
          </p>
          <Link to="/plans" className="btn lg">
            Start Training Now
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="header" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
