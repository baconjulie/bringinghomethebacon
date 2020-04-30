import React, { Fragment } from "react";

const Frame = ({ children, dir }) => (
  <Fragment>
    <div className="frame-wrapper">
      {children}
      <div className={`frame frame-${dir}`} />
    </div>
    <style jsx>{`
      .frame-wrapper {
        position: relative;
        display: inline-block;
        height: 100%;
      }
      .frame {
        position: absolute;
        width: calc(100% - 3px);
        height: calc(100% - 3px);
        border: 3px solid black;
        transition: all 300ms ease-in-out;
      }
      .frame:hover {
        top: 0;
        left: 0;
        right: 0;
      }
      .frame-right {
        top: 10px;
        left: 20px;
      }
      .frame-left {
        top: -15px;
        left: 25px;
      }
    `}</style>
  </Fragment>
);

export default Frame;
