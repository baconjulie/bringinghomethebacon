import React, { Fragment } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Headline from "../components/type/headline";
import Subhead from "../components/type/subhead";
import Detail from "../components/type/detail";
import Frame from "../components/frame";

const TheWedding = () => (
  <Fragment>
    <Head>
      <link rel="preload" href="/branch2.png" as="image"></link>
    </Head>
    <Layout title="The Wedding" route="/the-wedding">
      <div
        className="center"
        style={{
          margin: "3rem 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div className="label">Please join us for our an</div>
        <Headline>Intimate Wedding</Headline>
        <img src="/branch2.png" className="branch" />
        <div className="desc">
        We could not be more grateful to spend an intimate evening celebrating
        our love with friends and family.
        <br />
        <br />
          In classic pandemic fashion, we changed our venue (for the last time,
          we swear!). Both the ceremony and reception will be held outdoors at{" "}
          <b>The Endicott Estate</b> in Dedham, as it is a more spacious and
          convenient location.
        </div>
      </div>
      <section className="ceremony grid">
        <div className="row center-xs">
          <div className="col-xs-12 col-md-5 ceremony-info">
            <img
              src="/eucalyptusbouquet.png"
              className="eucalyptus"
              width="150"
              alt="Eucalyptus bunch"
            />
            <Subhead>Ceremony</Subhead>
            <Detail size="lg" color="purple">
              4:30 PM
            </Detail>
            <Detail size="sm">
              Endicott Estate <br />
              656 East St
              <br />
              Dedham, MA 02026
            </Detail>
            <a
              className="map-link"
              target="_blank"
              href="https://www.google.com/maps/place/Endicott+Estate/@42.2394849,-71.1636504,15z/data=!4m5!3m4!1s0x0:0x13b84f411eda0ada!8m2!3d42.2394849!4d-71.1636504"
            >
              Map
            </a>
          </div>
          <div className="col-sm-12 col-md-5 img-wrapper">
            <Frame dir="right">
              <img src="/ee-ceremony.png" className="img" />
            </Frame>
          </div>
        </div>
      </section>
      <section className="reception grid">
        <div className="row center-xs">
          <div className="col-sm-12 col-md-5 last-xs first-md img-wrapper">
            <Frame dir="left">
              <img src="/ee-reception.png" className="img" />
            </Frame>
          </div>
          <div className="col-sm-12 col-md-5 reception-info">
            <img
              src="/eucalyptusbouquet.png"
              className="eucalyptus"
              width="150"
              alt="Eucalyptus bunch"
            />
            <Subhead>Celebration</Subhead>
            <Detail size="lg" color="purple">
              5:00 PM
            </Detail>
            <Detail size="sm">
              Cocktail hour, dinner and celebrations will
              <br />
              continue safely on the Endicott Estate veranda.
            </Detail>
            <a
              className="map-link"
              target="_blank"
              href="https://www.endicottestate.com/about"
            >
              About the Estate
            </a>
          </div>
        </div>
      </section>
      <div
        className="center"
        style={{
          margin: "10rem 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div className="label">JOIN US THE FOLLOWING DAY FOR A</div>
        <Headline>Backyard Barbecue</Headline>
        <img src="/branch2.png" className="branch" />
        <div className="desc">
        For guests who will be around on Sunday, we'll be hosting a casual backyard BBQ. Come grab a burger and a beer with us!
        <br />
        <br />
          1:00 P.M.
          36 Longfelow Road<br/>
          Norwood, MA 02062
      </div>
      </div>
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
        .branch {
          width: 150px;
          margin-bottom: 1rem;
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
        .label {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 16px;
          font-weight: bold;
        }
        .map-link {
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
          font-family: "AbrilFatFace";
          margin-top: 0.5rem;
          font-size: 28px;
        }
        .map-link:hover {
          background-size: 4px 50px;
        }
        .link:hover {
          background-size: 4px 50px;
        }
        .desc {
          font-size: 18px;
          line-height: 1.2;
          padding: 16px;
        }
        @media only screen and (min-width: 992px) {
          .branch {
            width: 200px;
          }
          .desc {
            max-width: 600px;
            font-size: 20px;
          }
        }
      `}
    </style>
  </Fragment>
);

export default TheWedding;
