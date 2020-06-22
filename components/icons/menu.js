import React, { useState } from "react";

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`hamburger hamburger--slider js-hamburger ${
        isActive ? "active" : ""
      }`}
      onClick={toggleMenu}
    >
      <div className="hamburger-box">
        <div className="hamburger-inner"></div>
      </div>
      <style jsx>
        {`
          .hamburger {
            display: inline-block;
            padding: 15px;
            cursor: pointer;
            transition-property: opacity, filter;
            transition-duration: 0.15s;
            transition-timing-function: linear;
            border: 0;
          }
          .hamburger-box {
            position: relative;
            display: inline-block;
            width: 40px;
            height: 24px;
          }
          .hamburger-inner,
          .hamburger-inner::before,
          .hamburger-inner::after {
            position: absolute;
            width: 40px;
            height: 4px;
            transition: transform 0.15s ease;
            border-radius: 4px;
            background-color: var(--black);
          }
          .hamburger-inner::before,
          .hamburger-inner::after {
            display: block;
            content: "";
          }
          .hamburger-inner::before {
            top: 10px;
            transition-property: transform, opacity;
            transition-duration: 0.15s;
            transition-timing-function: linear;
          }
          .hamburger-inner::after {
            top: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default Menu;
