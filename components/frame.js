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
        margin-top: 1rem;
      }
      .frame {
        position: absolute;
        width: calc(100% - 5px);
        height: calc(100% - 12px);
        border: 5px solid black;
        transition: all 300ms ease-in-out;
      }
      .frame:hover {
        top: 0;
        left: 0;
        right: 0;
      }
      .frame-right {
        top: 8px;
        left: 8px;
      }
      .frame-left {
        top: -15px;
        left: 10px;
      }
    `}</style>
  </Fragment>
);

export default Frame;
