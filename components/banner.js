/* eslint-disable no-param-reassign */
import React, { Fragment, useState } from "react";

const Banner = () => {
  return (
    <Fragment>
      <div className="banner">
        We're adjusting due to COVID-19! Please see our{" "}
        <a href="/" className="banner-link">
          micro wedding updates
        </a>
        .
      </div>
      <style jsx>
        {`
          .banner {
            background-color: var(--primary);
            color: var(--white);
            padding: 1rem;
            text-align: center;
            font-size: 1rem;
            letter-spacing: 1px;
          }
          .banner-link {
            display: inline;
            color: var(--white);
          }
        `}
      </style>
    </Fragment>
  );
};

export default Banner;
