import React from "react";
import Head from "next/head";
import Layout from "../components/layout";

const OurStory = () => (
  <div>
    <Head>
      <title>Our Story</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
      <div className="hero">
        <h1 className="title">Our Story</h1>
      </div>
    </Layout>
  </div>
);

export default OurStory;
