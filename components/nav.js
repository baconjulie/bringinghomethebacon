/* eslint-disable no-param-reassign */
import React from "react";
import Link from "next/link";
import Vine from "../components/icons/vine";

const links = [
  { href: "/our-story", label: "Our Story" },
  { href: "/events", label: "Event Details" },
  { href: "/registry", label: "Registry" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <a href="/" className="names">
      Julie <span className="ampersand">&</span> Alex
      <Vine width="40" fill="white" />
    </a>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>
      {`
        :global(body) {
          margin: 0;
          font-family: "Raleway", Avenir Next, Avenir, Helvetica, sans-serif;
          --primary: #9e6381;
          --secondary: #b785a9;
          --tertiary: #673046;
          --white: #fff;
          --black: #000;
        }
        nav {
          background-color: #fff;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .names {
          display: inline;
          font-family: "AbrilFatFace";
          font-size: 45px;
          letter-spacing: 2px;
        }
        .ampersand {
          color: var(--primary);
        }
        ul {
          width: 650px;
          margin: 0;
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        nav > ul {
          padding: 0;
        }
        li {
          display: flex;
          padding: 0;
          text-transform: uppercase;
          display: inline-block;
        }
        li:after {
          content: "";
          display: block;
          height: 5px;
          width: 0;
          background: transparent;
          transition: width 500ms ease, background-color 500ms ease;
        }
        li:hover:after {
          width: 100%;
          background: var(--primary);
        }
        a {
          color: black;
          text-decoration: none;
          font-size: 16px;
          letter-spacing: 1px;
        }
      `}
    </style>
  </nav>
);

export default Nav;
