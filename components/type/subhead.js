import React, { Fragment } from "react";

const Subhead = props => (
  <Fragment>
    <h2 className="subhead">{props.children}</h2>
    <style jsx>{`
      .subhead {
        margin: 0 0 1rem 0;
        line-height: 1.15;
        font-size: 60px;
        font-family: "WildYouth";
      }
    `}</style>
  </Fragment>
);

export default Subhead;
