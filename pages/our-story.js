import React, { Fragment } from "react";
import Layout from "../components/layout";
import Headline from "../components/type/headline";
import Subhead from "../components/type/subhead";
import Detail from "../components/type/detail";

const OurStory = () => (
  <Fragment>
    <Layout title="Our Story">
      <div className="hero">
        <img src="/eucalyptusbouquet.png" className="eucalyptus" />
        <section className="ceremony grid">
          <div className="row center-xs">
            <div className="col-sm-12 col-md-6 ceremony-info">
              <Headline>our story</Headline>
              <Detail size="sm">
                <p>
                  We met the summer of 2014 at our summer internships in Boston.
                  Our first date was just a couple of days before Alex was
                  headed back to New York to finish up senior year. Off the bat,
                  it was obvious that our love was strong, real and too perfect
                  to let go. We soon found each other on the Greyhound bus route
                  from Boston ➡️ NYC every other weekend to be together.
                </p>
                <p>
                  After graduation, Julie headed off to San Francisco and Alex
                  to Washington, DC both starting their big post-grad jobs. But
                  soon we found ourselves flying across the country every month
                  ✈️. So much joy and anticipation would accompany teary eyed
                  airport "see you laters", but we always made it work.
                </p>
                <p>
                  Julie moved to DC one year later, and it was the best decision
                  we've ever made. Every day we cherish the small things like
                  cooking, hiking, camping and just being together. We couldn't
                  be more excited to share our love with our closest friends and
                  family with an intimate celebration in our favorite
                  place--nature!
                </p>
              </Detail>
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
      @media only screen and (min-width: 992px) {
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
