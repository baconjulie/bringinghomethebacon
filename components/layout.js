import React, { Fragment } from "react";
import Head from "next/head";
// import BrandIcons from "../components/brand/icons";
import Nav from "../components/nav";
import Footer from "../components/footer";

const Layout = ({ children, title = "DA BACON" }) => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <link href="/static/css/main.css" rel="stylesheet" />
      <link href="/static/css/flexboxgrid.min.css" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div>
      <header>
        <Nav />
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
