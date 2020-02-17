import React from "react";
import Head from "next/head";
import Layout from "../components/layout";

const Registry = () => (
  <div>
    <Head>
      <title>Registry</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
      <div className="hero">
        <h1 className="title">Registry</h1>
      </div>
    </Layout>
  </div>
);

export default Registry;
