import React, { Fragment } from "react";

const Headline = props => (
  <Fragment>
    <h1 className="headline">{props.children}</h1>
    <style jsx>{`
      .headline {
        margin: 0;
        line-height: 1.15;
        font-size: 80px;
        font-family: "WildYouth";
      }
    `}</style>
  </Fragment>
);

export default Headline;
