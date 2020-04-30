import React, { Fragment } from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Frame from "../components/frame";
import Headline from "../components/type/headline";
import Subhead from "../components/type/subhead";
import Detail from "../components/type/detail";

const Home = () => (
  <Fragment>
    <Layout title="Bringing Home the Bacon">
      <Hero imgUrl="/blue-ridge.jpeg">
        <Headline>
          <span className="fade1">Save</span>&nbsp;
          <span className="fade2">the</span>&nbsp;
          <span className="fade3">Date</span>
        </Headline>
        <p className="description fadeDown" style={{ marginTop: "2rem" }}>
          May 29th, 2021 | Danvers, MA
        </p>
        <p className="tagline fadeUp">
          A Garden Celebration at Glen Magna Farms
        </p>
      </Hero>
      <section className="ceremony grid">
        <div className="row center-xs">
          <div className="col-sm-12 col-md-5 ceremony-info">
            <Subhead>Ceremony</Subhead>
            <Detail size="lg">4:00 PM</Detail>
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
              <div className="ceremony-img" />
            </Frame>
          </div>
        </div>
      </section>
      <section className="reception grid">
        <div className="row center-xs">
          <div className="col-sm-12 col-md-5 last-xs first-md img-wrapper">
            <Frame dir="left">
              <div className="reception-img" />
            </Frame>
          </div>
          <div className="col-sm-12 col-md-5 reception-info">
            <Subhead>Reception</Subhead>
            <Detail size="lg">4:30 PM - 10:00 PM</Detail>
            <Detail size="sm">
              Cocktail hour, dinner &amp; dancing will
              <br />
              continue at the Mansion + Garden grounds
            </Detail>
          </div>
        </div>
      </section>
    </Layout>

    <style jsx>{`
      .description {
        margin: 0;
      }
      .tagline {
        margin: 0.5rem 0 0 0;
        font-size: 20px;
        font-style: italic;
        font-family: Franklin;
      }
      .map-link {
        text-decoration: none;
        font-size: 24px;
        font-family: georgia;
        color: black;
        border-bottom: 2px solid black;
        padding-bottom: 6px;
        margin-top: 1rem;
      }
      .ceremony,
      .reception {
        padding: 3rem;
      }
      .ceremony-info,
      .reception-info {
        text-align: center;
        height: 300px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .ceremony-img,
      .reception-img {
        position: relative;
        background-size: cover;
        background-repeat: no-repeat;
        height: 400px;
        width: 400px;
      }
      .ceremony-img {
        background-image: url("/bpg.jpg");
      }
      .reception-img {
        background-image: url("/bpg2.jpg");
      }
      @media only screen and (min-width: 992px) {
        .ceremony-info,
        .reception-info {
          height: 500px;
        }
        .ceremony-img,
        .reception-img {
          height: 100%;
        }
      }
      @media only screen and (max-width: 991px) {
        .img-wrapper {
          width: 100%;
        }
      }
    `}</style>
  </Fragment>
);

export default Home;
