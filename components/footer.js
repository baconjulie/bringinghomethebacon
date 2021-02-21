/* eslint-disable no-param-reassign */
import React from "react";

const Footer = () => (
  <footer>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/the-wedding">The Wedding</a>
      </li>
      <li>
        <a href="/getting-there">Getting There</a>
      </li>
      <li>
        <a
          href="https://www.crateandbarrel.com/gift-registry/julie-bacon-and-alex-arsenault/r6148393"
          target="_blank"
        >
          Registry
        </a>
      </li>
    </ul>
    <div style={{ textAlign: "center", paddingBottom: "2rem" }}>
      <a href="https://github.com/baconjulie/bringinghomethebacon">
        Made With 🧡 On Github
      </a>
    </div>

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
          padding: 2rem;
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
          li {
            padding: 0.5rem;
          }
        }
      `}
    </style>
  </footer>
);

export default Footer;
