import React, { Fragment } from "react";

const Detail = ({ children, size }) => (
  <Fragment>
    <p className={`detail detail-${size}`}>{children}</p>
    <style jsx>{`
      .detail {
        margin: 0;
      }
      .detail-sm {
        font-size: 24px;
      }
      .detail-lg {
        font-size: 40px;
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
