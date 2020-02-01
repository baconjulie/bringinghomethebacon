/* eslint-disable no-param-reassign */
import React from "react";
import Link from "next/link";

const links = [
  { href: "/our-story", label: "Our Story" },
  { href: "/events", label: "Events" },
  { href: "/wedding-party", label: "Wedding Party" },
  { href: "/registry", label: "Registry" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>
      {`
        :global(body) {
          margin: 0;
          font-family: "Raleway", Avenir Next, Avenir, Helvetica, sans-serif;
          --primary: #88b378;
          --secondary: green;
          --white: #fff;
          --black: #000;
        }
        nav {
          text-align: center;
          background-color: var(--primary);
          padding: 1rem 4rem;
          opacity: 0.75;
        }
        ul {
          margin: 0;
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 0;
        }
        li {
          display: flex;
          padding: 0;
        }
        a {
          color: var(--white);
          text-decoration: none;
          font-size: 16px;
        }
      `}
    </style>
  </nav>
);

export default Nav;
