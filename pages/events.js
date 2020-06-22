import React from "react";
import Layout from "../components/layout";
import Headline from "../components/type/headline";
import Subhead from "../components/type/subhead";
import Detail from "../components/type/detail";

const Events = () => (
  <div>
    <Layout title="Events">
      <div className="center" style={{ marginBottom: "2rem" }}>
        <Headline>getting there</Headline>
      </div>
      <section>
        <div className="grid">
          <div className="row center-xs">
            <div className="col-sm-12 col-md-8">
              <div style={{ marginBottom: "4rem" }}>
                <Subhead color="purple">Hotel</Subhead>
                <Detail size="md">Courtyard Marriott</Detail>
                <Detail size="xs">
                  275 Independence Way
                  <br />
                  Danvers, MA 01923
                  <br />
                  <br />
                  We're secured a group rate for the hotel block for both Friday
                  and Saturday evening. Tell them you're with the "Arsenault
                  Wedding" when booking!
                </Detail>
              </div>
              <div style={{ marginBottom: "4rem" }}>
                <Subhead color="purple">Getting There</Subhead>
                <Detail size="md">Airport</Detail>
                <Detail size="xs">
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
                <Detail size="md">Taxis and Shuttle</Detail>
                <Detail size="xs">
                  {" "}
                  The Marriott Courtyard is about a 30 minute drive from Logan
                  Airport. Taxis, ubers and rental cars are easily accessible.
                  We will be providing a shuttle to and from the wedding.
                </Detail>
              </div>
              <div style={{ marginBottom: "4rem" }}>
                <Subhead color="purple">Things to Do!</Subhead>
                <Detail size="xs">
                  Boston has a very special place in our hearts. If you find you
                  have some extra time to explore the area, check out a Red Sox
                  game at Fenway, the Boston Public Gardens, Seaport District,
                  North End, and Trade Boston (our first date spot).
                </Detail>
              </div>
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
        .center {
          text-align: center;
        }
        section {
          margin: 4rem;
        }
      `}
    </style>
  </div>
);

export default Events;
