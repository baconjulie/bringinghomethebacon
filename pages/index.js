import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

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

    <Nav />

    <section className="hero">
      <h1 className="title">Save the Date</h1>
      <p className="description">May 29th, 2021. | Danverse, MA</p>
      <p>Please join us for an enchanted evening at Glen Magna Farms.</p>
    </section>
    <section className="ceremony grid">
      <div className="row">
        <div className="col-sm-12 col-lg-6 ceremony-info">
          <h3 className="subhead">Ceremony</h3>
          <div className="detail-lg">4:00 PM</div>
          <div className="detail-sm">
            Glen Magna Farms <br />
            29 Ingersoll St <br />
            Danvers, MA 01923
          </div>
        </div>
        <div className="col-sm-12 col-lg-6">
          <div className="ceremony-img" />
        </div>
      </div>
    </section>
    <section className="reception grid">
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <div className="reception-img" />
        </div>
        <div className="col-sm-12 col-lg-6 reception-info">
          <h3 className="subhead">Reception</h3>
          <div className="detail-lg">4:30 PM - 10:00 PM</div>
          <div className="detail-sm">
            Cocktail hour, dinner & dancing
            <br />
            will continue at the Mansion + Garden grounds
          </div>
        </div>
      </div>
    </section>

    <style jsx>{`
      .hero {
        width: 100%;
        height: 100vh;
        min-height: 800px;
        background-image: url("/hiking.jpg");
        background-size: cover;
        background-position: center;
        color: var(--white);
        text-align: center;
        margin-top: -60px;
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
        padding: 2rem;
      }
      .ceremony-info,
      .reception-info {
        text-align: center;
        height: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .ceremony-img,
      .reception-img {
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
      }
      .ceremony-img {
        background-image: url("/bpg.jpg");
      }
      .reception-img {
        background-image: url("/bpg2.jpg");
      }
    `}</style>
  </div>
);

export default Home;
