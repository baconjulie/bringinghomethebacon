/* eslint-disable no-param-reassign */
import React, { Fragment, useState } from "react";
import Link from "next/link";
import Menu from "../components/icons/menu";

const Nav = props => {
  const { route } = props;
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/the-wedding", label: "The Wedding" },
    { href: "/getting-there", label: "Getting There" },
    { href: "/our-story", label: "Our Story" },
    {
      href:
        "https://www.crateandbarrel.com/gift-registry/julie-bacon-and-alex-arsenault/r6148393",
      label: "Registry"
    }
  ].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`;
    return link;
  });

  return (
    <Fragment>
      <div onClick={toggleMenu}>
        <Menu isActive={isActive} />
      </div>
      <nav>
        <a href="/">
          <img src="/logonew.png" />
        </a>
        <ul>
          {links.map(({ key, href, label }) => (
            <li key={key} className={`${route === href ? "current" : ""}`}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={`mobile-nav ${isActive ? "active" : ""}`}>
        <ul>
          {links.map(({ key, href, label }) => (
            <li key={key} className={`${route === href ? "current" : ""}`}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>
        {`
          :global(body) {
            margin: 0;
            font-family: "Raleway", Avenir Next, Avenir, Helvetica, sans-serif;
            --primary: #a20f3a;
            --secondary: #b785a9;
            --tertiary: #673046;
            --white: #fff;
            --black: #000;
            --peach: #e78c88;
          }
          nav {
            background-color: var(--white);
            padding: 0.5rem;
            padding-top: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .names {
            display: inline;
            font-family: "WildYouth";
            font-size: 45px;
            letter-spacing: 2px;
          }
          nav ul {
            display: none;
          }
          ul {
            width: 100%;
            margin: 0;
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
          li:hover:after,
          li.current:after {
            width: 100%;
            background: var(--peach);
          }
          a {
            color: black;
            text-decoration: none;
            font-size: 16px;
            letter-spacing: 1px;
          }
          .mobile-nav {
            transform: translateX(-100vw);
            transition: transform 600ms ease-in-out;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: var(--white);
            z-index: 2;
            display: flex;
            align-items: center;
          }
          .mobile-nav.active {
            transform: translateX(0);
          }
          .mobile-nav ul {
            flex-direction: column;
            justify-content: center;
            padding: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          @media only screen and (min-width: 992px) {
            nav ul {
              width: 750px;
              padding: 0.5rem 0;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
          }
        `}
      </style>
    </Fragment>
  );
};

export default Nav;
