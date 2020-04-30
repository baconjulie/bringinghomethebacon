import React from "react";
import Layout from "../components/layout";

const Events = () => (
  <div>
    <Layout title="Events">
      <div className="hero">
        <h1 className="title">Events</h1>
        <div className="grid">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <img src="/gm1.jpg" className="img" />
            </div>
            <div className="col-sm-12 col-md-6">
              <img src="/gm2.jpg" className="img" />
            </div>
          </div>
        </div>
        <ul>
          <li>Time, location: Ceremony</li>
          <li>Time, location: Reception</li>
          <li>Time, location: Sunday Brunch</li>
        </ul>
        <h1>Getting there:</h1>
        <ul>
          <li>Airport</li>
          <li>Hotel address, website/number, hotel room block info</li>
          <li>
            Shuttle information (where it picks up/drops off, how frequently
            runs)
          </li>
        </ul>
        <br />
        Out of town guests can fly into{" "}
        <b>Boston Logan International Airport</b>. Danverse is about a 30 minute
        drive from the airport.
        <h1>Things to do</h1>
        <ul>
          <li>
            Boston: Red Sox game at Fenway, Boston Public Gardens, Seaport
            District, North End, Trade Boston (our first date spot)
          </li>
          <li>Around Danverse</li>
        </ul>
      </div>
    </Layout>
    <style jsx>
      {`
        .img {
          max-width: 100%;
        }
      `}
    </style>
  </div>
);

export default Events;
