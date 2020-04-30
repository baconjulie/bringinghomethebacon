import React, { Fragment } from "react";
import Layout from "../components/layout";

const Home = () => (
  <Fragment>
    <Layout title="Bringing Home the Bacon">
      <section className="hero">
        <h1 className="title">
          <span className="fade1">Save</span>&nbsp;
          <span className="fade2">the</span>&nbsp;
          <span className="fade3">Date</span>
        </h1>
        <p className="description fadeDown" style={{ marginTop: "2rem" }}>
          May 29th, 2021 | Danvers, MA
        </p>
        <p className="tagline fadeUp">
          A Garden Celebration at Glen Magna Farms
        </p>
      </section>
      <section className="ceremony grid">
        <div className="row center-xs">
          <div className="col-sm-12 col-md-5 ceremony-info">
            <h3 className="subhead">Ceremony</h3>
            <div className="detail-lg">4:00 PM</div>
            <div className="detail-sm">
              Glen Magna Farms <br />
              29 Ingersoll St <br />
              Danvers, MA 01923
            </div>
            <a
              className="map-link"
              target="_blank"
              href="https://www.google.com/maps/place/Glen+Magna+Farms/@42.5734774,-70.9688008,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3118fe3ac3f11:0xd66e146dcd974822!8m2!3d42.5734774!4d-70.9666121"
            >
              Map
            </a>
          </div>
          <div className="col-sm-12 col-md-5 img-wrapper">
            <div className="ceremony-img">
              <div className="frame ceremony-frame" />
            </div>
          </div>
        </div>
      </section>
      <section className="reception grid">
        <div className="row center-xs">
          <div className="col-sm-12 col-md-5 last-xs first-md img-wrapper">
            <div className="reception-img">
              <div className="frame reception-frame" />
            </div>
          </div>
          <div className="col-sm-12 col-md-5 reception-info">
            <h3 className="subhead">Reception</h3>
            <div className="detail-lg">4:30 PM - 10:00 PM</div>
            <div className="detail-sm">
              Cocktail hour, dinner &amp; dancing will
              <br />
              continue at the Mansion + Garden grounds
            </div>
          </div>
        </div>
      </section>
    </Layout>

    <style jsx>{`
      .hero {
        width: 100%;
        height: 100vh;
        min-height: 800px;
        background-image: url("/blue-ridge.jpeg");
        background-size: cover;
        background-position: center;
        color: var(--white);
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: -100px;
      }
      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 80px;
        font-family: "WildYouth";
      }
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
      .frame {
        position: absolute;
        width: calc(100% - 3px);
        height: calc(100% - 3px);
        border: 3px solid black;
        transition: all 300ms ease-in-out;
      }
      .frame:hover {
        top: 0;
        left: 0;
        right: 0;
      }
      .ceremony-frame {
        top: 10px;
        left: 20px;
      }
      .reception-frame {
        top: -15px;
        left: 25px;
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
