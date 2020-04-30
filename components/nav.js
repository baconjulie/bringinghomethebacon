/* eslint-disable no-param-reassign */
import React from "react";
import Link from "next/link";
import Vine from "../components/icons/vine";

const links = [
  { href: "/our-story", label: "Our Story" },
  { href: "/events", label: "Event Details" },
  { href: "/wedding-party", label: "Wedding Party" },
  { href: "/registry", label: "Registry" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <div className="branding">
      <div className="names">Julie & Alex</div>
    </div>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link href={href}>
            <a>
              {label === "branding" ? <Vine width="60" fill="white" /> : label}
            </a>
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
          background-color: white;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .branding {
          text-align: center;
        }
        .names {
          font-family: "Zeyada", cursive;
          font-size: 60px;
        }
        ul {
          width: 60%;
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
        }
        a {
          color: var(--secondary);
          text-decoration: none;
          font-size: 16px;
          letter-spacing: 1px;
        }
        .logo {
          width: 50px;
        }
      `}
    </style>
  </nav>
);

export default Nav;
