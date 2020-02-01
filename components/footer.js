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
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
      `}
    </style>
  </footer>
);

export default Footer;
