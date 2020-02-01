import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

const Events = () => (
  <div>
    <Head>
      <title>Events</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">Events</h1>
      <ul>
        <li>Time, location: Ceremony</li>
        <li>Time, location: Reception</li>
        <li>Time, location: Sunday Brunch</li>
      </ul>

      <h1>Travel Info</h1>
      <ul>
        <li>Airport</li>
        <li>Hotel address, website/number, hotel room block info</li>
        <li>
          Shuttle information (where it picks up/drops off, how frequently runs)
        </li>
      </ul>

      <h1>Things to do</h1>
      <ul>
        <li>
          Boston: Red Sox game at Fenway, Boston Public Gardens, Seaport
          District, North End, Trade Boston (our first date spot)
        </li>
        <li>Around Danverse</li>
      </ul>
    </div>

    <Footer />
  </div>
);

export default Events;
