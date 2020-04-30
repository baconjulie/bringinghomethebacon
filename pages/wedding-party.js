import React from "react";
import Layout from "../components/layout";

const WeddingParty = () => (
  <Layout title="Wedding Party">
    <div className="hero">
      <h1 className="title">Wedding Party</h1>

      <h3>Bridesmaids</h3>
      <ul>
        <li>MOA</li>
        <li>BM#2</li>
        <li>BM#3</li>
        <li>BM#4</li>
        <li>BM#5</li>
        <li>BM#6</li>
      </ul>

      <h3>Groomsmen</h3>
      <ul>
        <li>BM</li>
        <li>GM#2</li>
        <li>GM#3</li>
        <li>GM#4</li>
        <li>GM#5</li>
        <li>GM#6</li>
      </ul>
    </div>
  </Layout>
);

export default WeddingParty;
