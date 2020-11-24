/* eslint-disable no-param-reassign */
import React from "react";

const Footer = () => (
  <footer>
    <ul>
      <li>
        <a href="/">Wedding</a>
      </li>
      <li>
        <a href="/getting-there">Getting There</a>
      </li>
      <li>
        <a href="/our-story">Our Story</a>
      </li>
      <li>
        <a href="/covid-update">Covid Update</a>
      </li>
      <li>
        <a href="https://github.com/baconjulie/bringinghomethebacon">
          Made With 💜 On Github
        </a>
      </li>
    </ul>

    <style jsx>
      {`
        footer {
          background-color: rgba(0, 0, 0, 0.85);
          margin: 0;
        }
        ul {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          margin: 0;
          padding: 1rem;
        }
        li {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem;
        }
        a {
          color: var(--white);
          text-decoration: none;
          font-size: 16px;
        }
        @media only screen and (min-width: 992px) {
          ul {
            flex-direction: row;
            padding: 2rem 4rem;
          }
          li {
            padding: 0.5rem;
          }
        }
      `}
    </style>
  </footer>
);

export default Footer;
