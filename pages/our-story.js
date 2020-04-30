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
            <div className="col-sm-12 col-md-5 ceremony-info">
              <Headline>Our Story</Headline>
              <Detail size="lg">lorem</Detail>
              <Detail size="sm">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Duis
                  autem vel eum iriure dolor in hendrerit in vulputate velit
                  esse molestie consequat, vel illum dolore.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
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
      @media only screen and (min-width: 992px) {
        .eucalyptus {
          display: block;
          position: absolute;
          left: -300px;
          top: 150px;
        }
      }
    `}</style>
  </Fragment>
);

export default OurStory;
