import React from "react";
import Head from "next/head";
import Layout from "../components/layout";

const Home = () => (
  <div>
    <Head>
      <title>Bringing Home the Bacon</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="/static/css/main.css" rel="stylesheet" />
      <link href="/static/css/flexboxgrid.min.css" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway&display=swap"
        rel="stylesheet"
      ></link>
    </Head>

    <Layout>
      <section className="hero">
        <h1 className="title">Save the Date</h1>
        <p className="description">May 29th, 2021. | Danverse, MA</p>
        <p>Please join us for an enchanted evening at Glen Magna Farms.</p>
      </section>
      <section className="ceremony grid">
        <div className="row">
          <div className="col-sm-12 col-md-6 ceremony-info">
            <h3 className="subhead">Ceremony</h3>
            <div className="detail-lg">4:00 PM</div>
            <div className="detail-sm">
              Glen Magna Farms <br />
              29 Ingersoll St <br />
              Danvers, MA 01923
            </div>
          </div>
          <div className="col-sm-12 col-md-6 img-wrapper">
            <div className="ceremony-img" />
          </div>
        </div>
      </section>
      <section className="reception grid">
        <div className="row">
          <div className="col-sm-12 col-md-6 img-wrapper">
            <div className="reception-img" />
          </div>
          <div className="col-sm-12 col-md-6 reception-info">
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
      }
      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 80px;
        font-family: "WildYouth";
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
        background-size: cover;
        background-repeat: no-repeat;
        height: 400px;
        width: 100%;
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
  </div>
);

export default Home;
