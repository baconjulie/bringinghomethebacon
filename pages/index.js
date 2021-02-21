import React, { Fragment } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Subhead from "../components/type/subhead";
import Detail from "../components/type/detail";

const Home = () => (
  <Fragment>
    <Head>
      <link rel="preload" href="/hero-bridge.jpg" as="image"></link>
    </Head>
    <Layout title="Bringing Home the Bacon" route="/">
      <div
        className="row center-xs"
        style={{ paddingTop: "3rem", paddingBottom: "4rem" }}
      >
        <div className="col-xs-12 col-md-4 col-sm-offset-1">
          <Subhead color="peach">Change of Plans!</Subhead>
          <Detail size="md" color="purple">
            We're Going Micro
          </Detail>
          <Detail size="xs">
            <br />
            We hope you and yours are healthy and safe during this time, and we
            appreciate all the love and support we’ve received from each of you.
            Although the COVID-19 pandemic has created much uncertainty, we
            still can't wait to get married on May 29th, 2021, even if it looks
            a little different than we originally planned.
            <br />
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
          <Subhead color="peach">with love,</Subhead>
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
