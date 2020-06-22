import React, { Fragment } from "react";

const Menu = props => {
  const { isActive } = props;
  return (
    <Fragment>
      <div className={`menu ${isActive ? "active" : ""}`}>
        <div className="menu-box">
          <div className="menu-inner"></div>
        </div>
      </div>
      <style jsx>
        {`
          .menu {
            position: absolute;
            display: inline-block;
            padding: 15px;
            cursor: pointer;
            transition-property: opacity, filter;
            transition-duration: 0.15s;
            transition-timing-function: linear;
            border: 0;
            z-index: 3;
          }
          .menu-box {
            position: relative;
            display: inline-block;
            width: 40px;
            height: 24px;
          }
          .menu-inner,
          .menu-inner::before,
          .menu-inner::after {
            position: absolute;
            width: 40px;
            height: 4px;
            transition: transform 0.15s ease;
            border-radius: 4px;
            background-color: var(--black);
          }
          .menu-inner::before,
          .menu-inner::after {
            display: block;
            content: "";
          }
          .menu-inner::before {
            top: 10px;
            transition-property: transform, opacity;
            transition-duration: 0.15s;
            transition-timing-function: linear;
          }
          .menu-inner::after {
            top: 20px;
          }
          .active .menu-inner {
            transform: translate3d(0, 10px, 0) rotate(45deg);
          }
          .active .menu-inner::before {
            opacity: 0;
            transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
          }
          .active .menu-inner::after {
            transform: translate3d(0, -20px, 0) rotate(-90deg);
          }
          @media only screen and (min-width: 992px) {
            .menu {
              display: none;
            }
          }
        `}
      </style>
    </Fragment>
  );
};

export default Menu;
