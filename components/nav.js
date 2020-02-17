/* eslint-disable no-param-reassign */
import React from "react";
import Link from "next/link";

const links = [
  { href: "/our-story", label: "Our Story" },
  { href: "/events", label: "Events" },
  { href: "/", label: "branding" },
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
              {label === "branding" ? (
                <img src="/leaves.jpeg" className="logo" />
              ) : (
                label
              )}
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
          padding: 1rem 4rem;
          opacity: 0.75;
          position: sticky;
          top: 0;
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
          width: 75px;
        }
      `}
    </style>
  </nav>
);

export default Nav;
