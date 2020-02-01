import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';

const Registry = () => (
  <div>
    <Head>
      <title>Registry</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">Registry</h1>
    </div>
  </div>
);

export default Registry;
