/* eslint-disable no-param-reassign */
import React from "react";

const Footer = () => (
  <footer>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/events">Event Information</a>
      </li>
      <li>
        <a href="/registry">Registry</a>
      </li>
      <li>
        <a href="https://github.com/baconjulie/bringinghomethebacon">
          Made with love on Github
        </a>
      </li>
    </ul>

    <style jsx>
      {`
        footer {
          background-color: rgba(0, 0, 0, 0.35);
          margin: 0;
          height: 100px;
        }
        ul {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          margin: 0;
        }
        li {
          display: flex;
          justify-content: space-between;
        }
        a {
          color: var(--white);
          text-decoration: none;
          font-size: 16px;
        }
      `}
    </style>
  </footer>
);

export default Footer;
