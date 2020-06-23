import React from "react";
import Layout from "../components/layout";
import Headline from "../components/type/headline";
import Subhead from "../components/type/subhead";
import Detail from "../components/type/detail";
import Cheers from "../components/icons/cheers";
import Plane from "../components/icons/plane";
import Hotel from "../components/icons/hotel";

const Events = () => (
  <div>
    <Layout title="Getting There" route="/getting-there">
      <div className="center" style={{ marginBottom: "2rem" }}>
        <Headline>getting there</Headline>
      </div>
      <section>
        <div className="grid">
          <div className="row center-xs">
            <div className="col-sm-12 col-md-8">
              <div style={{ marginBottom: "4rem" }}>
                <Hotel width="100px" />
                <Subhead color="purple">Hotel</Subhead>
                <Detail size="md">Courtyard Marriott</Detail>
                <Detail size="xs">
                  275 Independence Way
                  <br />
                  Danvers, MA 01923
                  <br />
                  <br />
                  <a
                    href="https://www.marriott.com/hotels/travel/bosdv-courtyard-boston-danvers/"
                    className="link"
                  >
                    Hotel website
                  </a>
                  <br />
                  <br />
                  We're secured a group rate for a hotel block for both Friday
                  and Saturday evening.
                  <br />
                  Tell them you're with the <i>~Arsenault Wedding~</i> when
                  booking!
                </Detail>
              </div>
              <div style={{ marginBottom: "4rem" }}>
                <Plane width="110px" />
                <Subhead color="purple">Getting There</Subhead>
                <Detail size="md">Airport</Detail>
                <Detail size="xs">
                  Out of town guests can fly into{" "}
                  <a
                    href="http://www.massport.com/logan-airport/"
                    target="_blank"
                    className="link"
                  >
                    Boston Logan International Airport
                  </a>
                  . Danvers is about a 30 minute drive from the airport via ride
                  share or rental car.
                </Detail>
                <div style={{ paddingTop: "2rem" }}>
                  <Detail size="md">Taxis and Shuttle</Detail>
                  <Detail size="xs">
                    {" "}
                    Taxis, ubers and rental cars are easily accessible from
                    Logan Airport to get you to and from Danvers. We will also
                    be providing a shuttle to and from the wedding.
                  </Detail>
                </div>
              </div>
              <div>
                <Cheers width="125px" />
                <Subhead color="purple">Things to Do!</Subhead>
                <Detail size="xs">
                  Boston has a very special place in our hearts. If you find you
                  have some extra time to explore the area, we recommend you
                  check out a Red Sox game at Fenway, stroll the Boston Public
                  Gardens, get some Italian food in the North End, and unwind at
                  Trade Boston (our first date spot!)
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
        .link {
          background: linear-gradient(
            to bottom,
            var(--primary) 0%,
            var(--primary) 100%
          );
          background-position: 0 100%;
          background-repeat: repeat-x;
          background-size: 4px 4px;
          color: #000;
          text-decoration: none;
          transition: all 0.2s;
          margin-top: 0.5rem;
          font-size: 20px;
        }

        .link:hover {
          background-size: 4px 50px;
        }
      `}
    </style>
  </div>
);

export default Events;
