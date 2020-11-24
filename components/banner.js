/* eslint-disable no-param-reassign */
import React, { Fragment, useState } from "react";

const Banner = () => {
  return (
    <Fragment>
      <div className="banner">
        We're monitoring the ongoing pandemic. Please read our&nbsp;
        <a href="/covid-update" className="banner-link">
          COVID-19 updates
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
