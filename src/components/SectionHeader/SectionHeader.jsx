import React from "react";

const SectionHeader = ({ title, image, children }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container-bg">
          <img src={image} alt="header" />
        </div>
        <div className="header__content">
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </div>
    </header>
  );
};

export default SectionHeader;
