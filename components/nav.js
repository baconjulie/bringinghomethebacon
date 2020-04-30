/* eslint-disable no-param-reassign */
import React from "react";
import Link from "next/link";
import Vine from "../components/icons/vine";

const links = [
  { href: "/", label: "branding" },
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
          --primary: #88b378;
          --secondary: green;
          --white: #fff;
          --black: #000;
        }
        nav {
          background-color: rgba(0, 0, 0, 0.2);
          padding: 0rem 4rem;
          height: 100px;
          opacity: 0.75;
          position: sticky;
          top: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        ul {
          margin: 0;
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
          color: var(--white);
          text-decoration: none;
          font-size: 16px;
        }
        .logo {
          width: 50px;
        }
      `}
    </style>
  </nav>
);

export default Nav;
