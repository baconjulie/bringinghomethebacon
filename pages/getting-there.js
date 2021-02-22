import React, { Fragment } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Headline from "../components/type/headline";
import Subhead from "../components/type/subhead";
import Detail from "../components/type/detail";
import Cheers from "../components/icons/cheers";
import Plane from "../components/icons/plane";
import Hotel from "../components/icons/hotel";

const Events = () => (
  <Fragment>
    <Head>
      <link rel="preload" href="/branch2.png" as="image"></link>
    </Head>
    <Layout title="Getting There" route="/getting-there">
      <div className="center" style={{ margin: "3rem 0" }}>
        <Headline>Getting there</Headline>
        <img src="/branch2.png" className="branch" />
      </div>
      <section>
        <div className="grid">
          <div className="row center-xs" style={{ margin: "3rem 0" }}>
            <div className="col-sm-12 col-md-3">
              <div>
                <Hotel width="90px" />
                <Subhead color="purple">Hotel</Subhead>
                <Detail size="md">907 Main</Detail>
                <Detail size="xs">
                  907 Main St
                  <br />
                  Cambridge, MA 02139
                </Detail>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 align-center">
              <Detail size="xs">
                We've secured a group rate for a hotel block for both Friday and
                Saturday evening for any guests interested. Tell them you're
                with the <i>~Arsenault Wedding~</i> when booking.{" "}
                <a href="https://www.907main.com/" className="link">
                  Hotel website
                </a>
                <br />
                <br />
                907 Main is taking extra precautions when it comes to health and
                safety.
              </Detail>
              <br />
            </div>
          </div>
        </div>
        <div className="center">
          <img src="/branch2.png" className="small-branch" />
        </div>
        <div className="row center-xs" style={{ margin: "3rem 0" }}>
          <div className="col-sm-12 col-md-3">
            <div>
              <Plane width="100px" />
              <Subhead color="purple">Travel</Subhead>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 align-center">
            <div>
              <Detail size="xs">
                Out of town guests can fly into
                <br />
                <a
                  href="http://www.massport.com/logan-airport/"
                  target="_blank"
                  className="link"
                >
                  Boston Logan Airport
                </a>
                .
              </Detail>
              <Detail size="xs">
                <br />
                Guests will drive themselves to and from our wedding to maintain
                social distancing. Rental cars and ubers are readily available
                from Logan Airport for out of town guests.
              </Detail>
            </div>
          </div>
        </div>
        <div className="center">
          <img src="/branch2.png" className="small-branch-right" />
        </div>
        <div className="row center-xs" style={{ margin: "3rem 0" }}>
          <div className="col-sm-12 col-md-3">
            <Cheers width="110px" />
            <Subhead color="purple">Safety First!</Subhead>
          </div>
          <div className="col-sm-12 col-md-3 align-center">
            <Detail size="xs">
              In an effort to keep our intimate wedding as safe as possible, we
              will be providing all guests masks, hand sanitizer, and keeping
              events outdoors. We kindly ask that each guest quarantine for 14
              days or get a negative covid-19 test within 3 days before the
              wedding. There are a variety of{" "}
              <a
                href="https://www.solvhealth.com/ma/c/cambridge-ma-srv-covid-testing"
                target="_blank"
                className="link"
              >
                testing sites
              </a>{" "}
              in the area. <br />
              <br />
              Please don't hesitate to reach out to us if you need help finding
              a testing site.
            </Detail>
          </div>
        </div>
      </section>
    </Layout>
    <style jsx>
      {`
        .img {
          max-width: 100%;
        }
        .align-center {
          display: flex;
          align-items: center;
        }
        .center {
          text-align: center;
        }
        section {
          margin: 4rem;
        }
        .branch {
          width: 200px;
          margin-top: 1rem;
        }
        .small-branch {
          width: 150px;
          transform: rotate(-25deg);
        }
        .small-branch-right {
          width: 150px;
          transform: rotate(25deg);
        }
        .link {
          background: linear-gradient(
            to bottom,
            var(--peach) 0%,
            var(--peach) 100%
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
        @media only screen and (min-width: 992px) {
          .branch {
            width: 200px;
          }
        }
      `}
    </style>
  </Fragment>
);

export default Events;
