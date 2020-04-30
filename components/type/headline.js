import React, { Fragment } from "react";

const Headline = props => (
  <Fragment>
    <h1 className="headline">{props.children}</h1>
    <style jsx>{`
      .headline {
        margin: 0;
        line-height: 1.15;
        font-size: 30px;
        font-family: "WildYouth";
      }
      @media only screen and (min-width: 992px) {
        .headline {
          font-size: 80px;
        }
      }
    `}</style>
  </Fragment>
);

export default Headline;
