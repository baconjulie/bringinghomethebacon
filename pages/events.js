import React from "react";
import Layout from "../components/layout";
import Headline from "../components/type/headline";
import Subhead from "../components/type/subhead";
import Detail from "../components/type/detail";
import Frame from "../components/frame";

const Events = () => (
  <div>
    <Layout title="Events">
      <section>
        <Headline>Events</Headline>
        <div className="grid">
          <div className="row center-xs">
            <div className="col-sm-12 col-md-4">
              <Frame dir="right">
                <img
                  src="/gm1.jpg"
                  className="img"
                  style={{ width: "600px" }}
                />
              </Frame>
            </div>
            <div className="col-sm-12 col-md-1" />
            <div className="col-sm-12 col-md-4">
              <Frame dir="left">
                <img
                  src="/gm2.jpg"
                  className="img"
                  style={{ width: "600px" }}
                />
              </Frame>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="row center-xs">
            <div className="col-sm-12">
              <Subhead>The Big Day</Subhead>
            </div>
            <div className="col-sm-12 col-md-4">
              <Detail size="lg">Ceremony</Detail>
              <Detail size="sm">
                3:30 PM
                <br />
                Glen Magna Farms <br />
                29 Ingersoll St <br />
                Danvers, MA 01923
              </Detail>
            </div>
            <div className="col-sm-1" />
            <div className="col-sm-12 col-md-4">
              <Detail size="lg">Reception</Detail>
              <Detail size="sm">
                4:30 PM - 10:00 PM
                <br />
                Cocktail hour, dinner &amp; dancing will
                <br />
                continue at the Mansion + Garden grounds
              </Detail>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="grid">
          <div className="row center-xs">
            <div className="col-sm-12 col-md-6">
              <div style={{ marginBottom: "3rem" }}>
                <Subhead>Hotel</Subhead>
                <Detail size="lg">Courtyard Marriott</Detail>
                <Detail size="sm">
                  275 Independence Way
                  <br />
                  Danvers, MA 01923
                  <br />
                  <br />
                  We're secured a group rate for the hotel block for both Friday
                  and Saturday evening. Tell them you're with the "Arsenault
                  Wedding" when booking!
                  <br />
                  <br />
                  Shuttle information (where it picks up/drops off, how
                  frequently runs)
                </Detail>
              </div>
              <div style={{ marginBottom: "3rem" }}>
                <Subhead>Getting There</Subhead>
                <Detail size="lg">Airport</Detail>
                <Detail size="sm">
                  Out of town guests can fly into{" "}
                  <a
                    href="http://www.massport.com/logan-airport/"
                    target="_blank"
                  >
                    Boston Logan International Airport
                  </a>
                  . Danverse is about a 30 minute drive from the airport via
                  ride share or rental car.
                </Detail>
              </div>
              <Subhead>Things to Do!</Subhead>
              <Detail size="sm">
                If you find you have some extra time to explore the area, we
                thought we'd share our favorite Boston activities! Red Sox game
                at Fenway, Boston Public Gardens, Seaport District, North End,
                Trade Boston (our first date spot)
              </Detail>
            </div>
          </div>
        </div>
      </section>
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
