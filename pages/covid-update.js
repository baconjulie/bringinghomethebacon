import React, { Fragment } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Headline from "../components/type/headline";
import Subhead from "../components/type/subhead";
import Detail from "../components/type/detail";

const CovidUpdate = () => (
  <Fragment>
    <Head>
      <link rel="preload" href="/branch2.png" as="image"></link>
    </Head>
    <Layout title="COVID Update" route="/covid-update">
      <div className="center" style={{ marginBottom: "2rem" }}>
        <img src="/branch2.png" className="branch" />
        <Headline>Covid Update</Headline>
      </div>
      <section>
        <div className="grid">
          <div className="row">
            <div className="col-sm-12 col-lg-4"></div>
            <div className="col-sm-12 col-lg-4">
              <div style={{ marginBottom: "5rem" }}>
                <Detail size="xs">
                  Dear family and friends,
                  <br />
                  <br />
                  We hope you and yours are healthy and safe during this time,
                  and we appreciate all the love and support we’ve received from
                  each of you. Although the COVID-19 pandemic has created much
                  uncertainty, we still can't wait to get married on May 29th,
                  2021, even if it looks a little different than we originally
                  planned.
                  <br />
                  <br />
                  Due to the ongoing pandemic and for everyone's safety, we have
                  made an extremely difficult decision to downsize our wedding.
                  In even the most trying of times, our love is stronger than
                  ever, and something to be celebrated! We will no longer be
                  hosting a large celebration and have opted for an intimate
                  ceremony and backyard gathering to comply with state
                  restrictions.
                  <br />
                  <br />
                  While we wish we could have all our loved ones in attendance,
                  we can't wait to celebrate with everyone in style at a later
                  date. Lots of Love, Julie & Alex
                  <br />
                  <br />
                  <Subhead color="purple">with love,</Subhead>
                  <Detail size="md">Julie & Alex</Detail>
                </Detail>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
    <style jsx>
      {`
        .img {
          max-width: 100%;
        }
        .center {
          text-align: center;
        }
        section {
          margin: 4rem;
        }
        .branch {
          width: 200px;
        }
        .link {
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
          margin-top: 0.5rem;
          font-size: 20px;
        }

        .link:hover {
          background-size: 4px 50px;
        }
        @media only screen and (min-width: 992px) {
          .branch {
            width: 300px;
          }
        }
      `}
    </style>
  </Fragment>
);

export default CovidUpdate;
