import React, { Fragment } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Frame from "../components/frame";
import Headline from "../components/type/headline";
import Subhead from "../components/type/subhead";
import Detail from "../components/type/detail";
import Vine from "../components/icons/vine";

const Home = () => (
  <Fragment>
    <Head>
      <link rel="preload" href="/hero-1800.jpg" as="image"></link>
    </Head>
    <Layout title="Bringing Home the Bacon" route="/">
      <Hero imgUrl="/hero-1800.jpg" style={{ position: "relative" }}>
        <div className="hero-text">
          <Headline>
            <span className="fade1">Save</span>&nbsp;
            <span className="fade2">the</span>&nbsp;
            <span className="fade3">
              Date
              <Vine width="80" fill="white" className="vine-icon" />
            </span>
          </Headline>
          <p className="description fadeDown" style={{ marginTop: "1rem" }}>
            05.29.2021 | Danvers, MA
          </p>
        </div>
      </Hero>
      <section className="ceremony grid">
        <div className="row center-xs">
          <div className="col-xs-12 col-md-5 ceremony-info">
            <Subhead>Ceremony</Subhead>
            <Detail size="lg" color="purple">
              4:00 PM
            </Detail>
            <Detail size="sm">
              Glen Magna Farms <br />
              29 Ingersoll St <br />
              Danvers, MA 01923
            </Detail>
            <a
              className="map-link"
              target="_blank"
              href="https://www.google.com/maps/place/Glen+Magna+Farms/@42.5734774,-70.9688008,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3118fe3ac3f11:0xd66e146dcd974822!8m2!3d42.5734774!4d-70.9666121"
            >
              Map
            </a>
          </div>
          <div className="col-sm-12 col-md-5 img-wrapper">
            <Frame dir="right">
              <img src="/ceremony.jpg" className="img" />
            </Frame>
          </div>
        </div>
      </section>
      <section className="reception grid">
        <div className="row center-xs">
          <div className="col-sm-12 col-md-5 last-xs first-md img-wrapper">
            <Frame dir="left">
              <img src="/tent.jpg" className="img" />
            </Frame>
          </div>
          <div className="col-sm-12 col-md-5 reception-info">
            <Subhead>Reception</Subhead>
            <Detail size="lg" color="purple">
              4:30 PM - 10:00 PM
            </Detail>
            <Detail size="sm">
              Dinner and celebrations will continue at the mansion + garden
              grounds
            </Detail>
          </div>
        </div>
      </section>
    </Layout>

    <style jsx>{`
      .hero-text {
        position: absolute;
        top: 35%;
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
