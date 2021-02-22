import React, { Fragment } from "react";

const Subhead = props => {
  const { color } = props;
  return (
    <Fragment>
      <h2 className={`subhead ${color}`}>{props.children}</h2>
      <style jsx>{`
        .subhead {
          margin: 0 0 1rem 0;
          line-height: 1.15;
          font-size: 48px;
          font-family: "WildYouth";
        }
        .peach {
          color: var(--peach);
        }
      `}</style>
    </Fragment>
  );
};

export default Subhead;
