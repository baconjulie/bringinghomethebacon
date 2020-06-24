import React, { Fragment } from "react";
import Head from "next/head";
import GTMScript from "./analytics/gtm";
import Nav from "../components/nav";
import Footer from "../components/footer";

const Layout = ({ children, title = "J&A Wedding", route = "/" }) => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <link href="/static/css/main.css" rel="stylesheet" />
      <link href="/static/css/flexboxgrid.min.css" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Zeyada&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="icon" href="/favicon.ico" />
      <GTMScript />
    </Head>

    <div>
      <header>
        <Nav route={route} />
      </header>

      <main>
        <body>{children}</body>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  </Fragment>
);

export default Layout;
