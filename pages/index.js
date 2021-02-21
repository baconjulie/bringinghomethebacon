import React, { Fragment } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Frame from "../components/frame";
import Subhead from "../components/type/subhead";
import Detail from "../components/type/detail";
import Hero from "../components/hero";

const Home = () => (
  <Fragment>
    <Head>
      <link rel="preload" href="/hero-bridge.jpg" as="image"></link>
    </Head>
    <Layout title="Bringing Home the Bacon" route="/">
      <div className="row center-xs">
        <div
          className="col-xs-12 col-md-4 col-sm-offset-1"
          style={{ marginTop: "4rem" }}
        >
          <Subhead>Change of Plans!</Subhead>
          <Detail size="md" color="purple">
            We're Going Micro
          </Detail>
          <Detail size="xs">
            <br />
            Due to the ongoing pandemic and for everyone's safety, we have made
            the difficult decision to downsize our wedding. In even the most
            trying of times, our love is stronger than ever, and something to be
            celebrated!
            <br />
            <br />
            We will no longer be hosting a large celebration and have opted for
            an intimate ceremony and backyard gathering to comply with state
            restrictions. While we wish we could have all our loved ones in
            attendance, we can't wait to celebrate with everyone in style at a
            later date.
            <br />
            <br />
          </Detail>
          <Subhead color="purple">with love,</Subhead>
          <Detail size="md">Julie & Alex</Detail>
        </div>
        <div className="col-xs-12 col-md-6">
          {" "}
          <img
            src="/engagement.jpg"
            className="engagement"
            width="500px"
            style={{ marginBottom: "1rem" }}
          />
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
              11:00 AM
            </Detail>
            <Detail size="sm">
              Oleana <br />
              134 Hampshire St
              <br />
              Cambridge, MA 02139
              <br />
              <br />
              Lunch + Celebration to follow
            </Detail>
            <a
              className="map-link"
              target="_blank"
              href="https://www.google.com/maps/place/Oleana/@42.3705494,-71.0971859,15z/data=!4m5!3m4!1s0x0:0xae84228b09fd944f!8m2!3d42.3705494!4d-71.0971859"
            >
              Map
            </a>
          </div>
          <div className="col-sm-12 col-md-5 img-wrapper">
            <Frame dir="right">
              <img src="/oleana.png" className="img" />
            </Frame>
          </div>
        </div>
      </section>
      <section className="reception grid">
        <div className="row center-xs">
          <div className="col-sm-12 col-md-5 last-xs first-md img-wrapper">
            <Frame dir="left">
              <img src="/backyard.png" className="img" />
            </Frame>
          </div>
          <div className="col-sm-12 col-md-5 reception-info">
            <img
              src="/eucalyptusbouquet.png"
              className="eucalyptus"
              width="150"
              alt="Eucalyptus bunch"
            />
            <Subhead>After Party</Subhead>
            <Detail size="lg" color="purple">
              4:00 PM
            </Detail>
            <Detail size="sm">
              36 Longfellow Road
              <br />
              Norwood, MA Drinks
              <br />
              <br />
              Drinks, dinner and celebrations will continue at the backyard
              after-party
            </Detail>
          </div>
        </div>
      </section>
    </Layout>

    <style jsx>{`
      .hero-text {
        position: absolute;
        top: 25%;
        left: 15%;
      }
      .description {
        margin: 0;
        font-size: 20px;
      }
      .tagline {
        margin: 0.5rem 0 0 0;
        font-size: 24px;
        font-style: italic;
        font-family: Franklin;
      }
      .map-link {
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
        font-family: "AbrilFatFace";
        margin-top: 0.5rem;
        font-size: 28px;
      }

      .map-link:hover {
        background-size: 4px 50px;
      }

      .ceremony,
      .reception {
        padding: 3rem;
      }
      .img {
        position: relative;
        width: 300px;
      }

      @media only screen and (min-width: 1200px) {
        .img-wrapper {
          width: 100%;
        }
        .img {
          position: relative;
          width: 500px;
        }
        .ceremony-img,
        .reception-img {
          width: 300px;
        }
        .description {
          font-size: 34px;
        }
      }
    `}</style>
  </Fragment>
);

export default Home;
