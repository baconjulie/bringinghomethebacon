import React, { Fragment } from "react";

const Detail = ({ children, size, color = "black" }) => (
  <Fragment>
    <p className={`detail detail-${size} ${color}`}>{children}</p>
    <style jsx>{`
      .detail {
        margin: 0;
      }
      .detail-xs {
        font-size: 20px;
        line-height: 1.4;
      }
      .detail-sm {
        font-size: 24px;
        line-height: 1.5;
      }
      .detail-lg {
        font-size: 35px;
        font-family: "AbrilFatFace";
        letter-spacing: 2px;
        font-weight: bold;
        line-height: 1.75;
        margin-top: 1rem;
      }
    `}</style>
  </Fragment>
);

export default Detail;
