import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Events = () => (
  <div>
    <Head>
      <title>Events</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">Events</h1>
    </div>
  </div>
);

export default Events;
