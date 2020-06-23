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
    { href: "/", label: "Wedding" },
    { href: "/getting-there", label: "Getting There" },
    { href: "/our-story", label: "Our Story" }
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
        <a href="/" className="names">
          <span className="julie">J</span>
          <span className="ampersand">&</span>A
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
            --primary: #9e6381;
            --secondary: #b785a9;
            --tertiary: #673046;
            --white: #fff;
            --black: #000;
          }
          nav {
            background-color: var(--white);
            padding: 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .names {
            display: inline;
            font-family: "WildYouth";
            font-size: 35px;
            letter-spacing: 2px;
          }
          .julie {
            font-size: 30px;
            font-weight: bold;
          }
          .ampersand {
            color: var(--primary);
            font-family: "AbrilFatFace";
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
            background: var(--primary);
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
              width: 650px;
              padding-top: 0.25rem;
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
