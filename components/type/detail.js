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
      .detail-md {
        font-size: 30px;
        font-family: "AbrilFatFace";
        margin: 0;
        letter-spacing: 0.5px;
      }
      .detail-lg {
        font-size: 28px;
        font-family: "AbrilFatFace";
        letter-spacing: 2px;
        font-weight: bold;
        line-height: 1.75;
        margin-top: 1rem;
      }
      @media only screen and (min-width: 1024px) {
        .detail-lg {
          font-size: 35px;
        }
      }
    `}</style>
  </Fragment>
);

export default Detail;
