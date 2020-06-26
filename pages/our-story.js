import React, { Fragment } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Headline from "../components/type/headline";
import Subhead from "../components/type/subhead";
import Detail from "../components/type/detail";

const OurStory = () => (
  <Fragment>
    <Head>
      <link rel="preload" href="/eucalyptusbouquet.png" as="image"></link>
    </Head>
    <Layout title="Our Story" route="/our-story">
      <div className="hero">
        <img src="/eucalyptusbouquet.png" className="eucalyptus" />
        <section className="grid about-section">
          <div className="row center-xs">
            <div className="col-sm-12 col-md-6">
              <Headline>our story</Headline>
              <Detail size="sm">
                <p>
                  Our story begins in the summer of 2014 in Boston, MA. We met
                  at our summer internships in the city, heading to our first
                  date just a couple of days before Alex would return to New
                  York for senior year.
                </p>
                <p>
                  Off the bat, it was obvious that our love was strong, real and
                  too perfect to let go. We soon found ourselves on the
                  Greyhound bus route from Boston ➡️ NYC every other weekend to
                  be together.
                </p>
                <p>
                  After graduation, Julie headed off to San Fan and Alex to DC
                  to start our big post-grad jobs. It wasn't long before we were
                  jet-setting across the country every month ✈️ So much joy and
                  anticipation would accompany teary-eyed airport "see you
                  laters", but we always made it work. Our love was no match for
                  a few thousand miles.
                </p>
                <p>
                  Julie moved to DC one year later, and it was the best decision
                  we've ever made! Every day we cherish the small things like
                  cooking, hiking, camping and just being together. We couldn't
                  be more excited to share our love story with our closest
                  friends and family in one of favorite places—nature!
                  <br />
                  <br />
                  We hope to see you there 💜
                </p>
              </Detail>
              <img
                src="/engagement.jpg"
                className="engagement"
                width="300px"
                style={{ marginBottom: "1rem" }}
              />
              <Subhead color="purple">—julie & alex</Subhead>
            </div>
          </div>
        </section>
      </div>
    </Layout>
    <style jsx>{`
      .eucalyptus {
        display: none;
      }
      p {
        margin-bottom: 2rem;
        line-height: 1.5;
        font-size: 18px;
      }
      .about-section {
        margin: 0 auto;
        padding: 0 3rem;
      }
      @media only screen and (min-width: 992px) {
        .about-section {
          padding: 0;
        }
        .eucalyptus {
          display: block;
          position: absolute;
          left: -300px;
          top: 150px;
        }
        p {
          margin-bottom: 2rem;
          line-height: 1.5;
          font-size: 20px;
        }
      }
    `}</style>
  </Fragment>
);

export default OurStory;
